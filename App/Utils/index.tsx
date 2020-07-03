import {union} from 'ramda';

const mergeArray = (current, other, config) => {
  if (!(current instanceof Array) || !(other instanceof Array)) return;
  return union(current, other);
};

export {mergeArray};
