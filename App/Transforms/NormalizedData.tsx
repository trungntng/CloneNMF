import {path, objOf, mapObjIndexed} from 'ramda';

export default function (data) {
  const entities = path(['entities'], data);

  return {
    ...data,
    entities: mapObjIndexed((num, key, obj) => {
      return {
        ...objOf('byId')(obj[key]),
      };
    }, entities),
  };
}
