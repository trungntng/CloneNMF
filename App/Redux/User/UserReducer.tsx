import Immutable, {ImmutableObject} from 'seamless-immutable';
import {Reducer} from 'redux';
import {handleActions, combineActions} from 'redux-actions';
import UserAction from './UserAction';
import {DataReducerType} from '../Types';
import {User, USER_ENTITY} from '../../Models/User';
import {isNil} from 'lodash';
import {path} from 'ramda';

export interface UserState extends DataReducerType<User> {
  // define interface for state
  loginId: string | null;
}

export const INITIAL_STATE = Immutable<UserState>({
  byId: null,
  loginId: null,
});

// xử lý data lưu xuống store
export const userReducer: Reducer<UserState> = handleActions<UserState>(
  {
    [UserAction.signIn.success().type]: (state, action) => {
      console.tron.log(state);
      console.tron.log(action);
      var loginId = path<string>(['payload', 'result'], action);
      const user = path<User>(
        ['payload', 'entities', USER_ENTITY, 'byId', loginId],
        action,
      );
      console.tron.log(user);

      if (isNil(user) || isNil(loginId)) {
        return state;
      }

      return Immutable(state).set('loginId', loginId);
    },
  },
  INITIAL_STATE,
);
