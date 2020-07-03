import {combineReducers, Reducer} from 'redux';
import {persistReducer} from 'redux-persist';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';
import ReduxPersist from '../Config/ReduxPersist';
import {UserState, userReducer} from './User/UserReducer';
import Immutable from 'seamless-immutable';
import {path, isNil} from 'ramda';
import {mergeArray} from '../Utils';

export interface DataState {
  user: UserState;
}

export interface ApplicationState {
  datas: DataState;
  fetchings: any;
  failures: any;
}

/* Parse request fetching reducer */
const fetchings = (state = {}, action) => {
  const {type} = action;
  const regex = /(.*)[\/](REQUEST|SUCCESS|FAILURE)/;
  const matches = regex.exec(type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving GET_TODOS_REQUEST
    //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
    [requestName]: requestState === 'REQUEST',
  };
};

/* Parse failure api reducer */
export const failures = (state = {}, action) => {
  const {type, payload} = action;
  const matches = /(.*)[\/](REQUEST|FAILURE)/.exec(type);

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store errorMessage
    // e.g. stores errorMessage when receiving GET_TODOS_FAILURE
    //      else clear errorMessage when receiving GET_TODOS_REQUEST
    [requestName]: requestState === 'FAILURE' ? payload : [],
  };
};

const handleMergeDataState = (state, action) => {
  const data = path<any>(['payload', 'entities'], action);
  let newData = data;

  return Immutable(state).merge(
    {
      ...newData,
    },
    {
      deep: true,
      merger: mergeArray,
    },
  );
};

export const dataReducers: Reducer<DataState> = (state, action) => {
  const data = path<any>(['payload', 'entities'], action);
  let newState = Immutable(state);

  if (!isNil(data)) {
    newState = handleMergeDataState(state, action);
  }

  return combineReducers<DataState>({
    user: userReducer,
  })(newState, action);
};

/* ------------- Assemble The Reducers ------------- */
export const reducers: Reducer<ApplicationState> = (state, action) => {
  return combineReducers<ApplicationState>({
    datas: dataReducers,
    fetchings: fetchings,
    failures: failures,
  })(state, action);
};

// export const reducers = combineReducers({
//   counter: (state = {}, action) => state,
// });

export default () => {
  let finalReducers = reducers;
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  let {store, persistor, sagasManager, sagaMiddleware} = configureStore(
    finalReducers,
    rootSaga,
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../Sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas);
      });
    });
  }

  return {store, persistor};
};
