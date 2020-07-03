import {ImmutableObject} from 'seamless-immutable';

export interface DataReducerType<T> {
  byId: {
    [k: string]: ImmutableObject<T>;
  } | null;
}
