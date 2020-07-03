import {Schema} from 'normalizr';
import {
  ActionFunctionAny,
  createAction,
  Action,
  ActionMeta,
} from 'redux-actions';
import {mapObjIndexed, isNil} from 'ramda';
import {camelCase, mapKeys} from 'lodash';

export interface ApiAction {
  [actionType: string]: ApiType;
}

export interface ApiActionMap {
  [actionType: string]: [ActionFunctionAny<any[]>, ActionFunctionAny<ApiMeta>];
}

export type ApiType = {
  request: ActionFunctionAny<ActionMeta<any[], ApiMeta>>;
  success: ActionFunctionAny<Action<any>>;
  failure: ActionFunctionAny<Action<any>>;
};

type ApiMeta = {
  callApi: Function;
  schema?: Schema;
};

export function createApiActions(actionMap: ApiActionMap): ApiAction {
  const actions = mapObjIndexed<ApiActionMap, any>((num, key, obj) => {
    const [payload, meta] = obj[key];

    return {
      request: createAction(
        `${key}/REQUEST`,
        isNil(payload) ? () => [] : payload,
        meta,
      ),
      success: createAction(`${key}/SUCCESS`, (payload: any) => payload),
      failure: createAction(`${key}/FAILURE`, (payload: any) => payload),
    };
  }, actionMap);

  const actionsWithCamelKey = mapKeys(actions, (value, key) => camelCase(key));
  return actionsWithCamelKey;
}
