import {createApiActions, ApiType} from '../ApiAction';
import {api} from '../../Services/Api';
import {createActions, ActionFunctionAny, Action} from 'redux-actions';
import schemas from '../../Models';

export const SIGN_IN_ACT = 'SIGN_IN';

export interface UserActions {
  signIn: ApiType;
}

const userActions = createActions({});

const userApiActions = createApiActions({
  [SIGN_IN_ACT]: [
    () => [],
    () => ({
      callApi: api.signIn,
      schema: schemas.USER,
    }),
  ],
});

const actions: UserActions = {
  signIn: userApiActions.signIn,
};

export default actions;
