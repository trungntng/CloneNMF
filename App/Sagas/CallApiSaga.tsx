import {call, put} from 'redux-saga/effects';
import {path, isEmpty, isNil} from 'ramda';
import {normalize, Schema} from 'normalizr';
import {ApiType} from '../Redux/ApiAction';
import NormalizedData from '../Transforms/NormalizedData';
import {ApiResponse} from 'apisauce';

export const ApiError = {
  NETWORK_ERROR: -500,
  SERVER_ERROR: -501,
  TIMEOUT_ERROR: -502,
};

export function* callApi(apiAction: ApiType, action) {
  const params = path<any[]>(['payload'], action);
  const api = path<any>(['meta', 'callApi'], action);
  const schema = path<Schema>(['meta', 'schema'], action);

  if (isNil(api) || isEmpty(api)) {
    yield put(apiAction.failure({message: 'Error Message'}));
    return;
  }

  try {
    const response = yield call(api, ...params);
    const data = path(['data'], response);
    if (response.ok) {
      if (isNil(schema)) {
        yield put(apiAction.success(data));
      } else {
        // do data conversion here
        const normalizeData = NormalizedData(normalize(data, schema));
        yield put(apiAction.success(normalizeData));
      }
    } else {
      const finalError = yield* handleApiError(response);
      yield put(apiAction.failure(finalError));
    }
  } catch (e) {
    yield put(apiAction.failure({message: e}));
  }
}

export function* handleApiError(
  response: ApiResponse<any>,
  errorOfSpecialCase?: (url: string, error: string) => any,
) {
  return {
    error: ApiError.NETWORK_ERROR,
    message: 'Error Message',
  };
}
