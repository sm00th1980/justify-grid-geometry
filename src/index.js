import { is, isEmpty } from 'ramda';

import { getGeometry } from './utils';

const gridGeometry = (containerWidth, tiles) => {
  if (!is(Array, tiles)) {
    throw new Error('The list param must be an array!');
  }

  if (isEmpty(tiles)) {
    return [];
  }

  return getGeometry(containerWidth, tiles);
};

export default gridGeometry;
