import gridGeometry from '..';
import { buildScaledRow } from '../utils';

const CONTAINER_MIN_WIDTH = 500;

describe('gridGeometry', () => {
  it('Matrix inject into box!', () => {
    const tiles = [{ height: 300, width: CONTAINER_MIN_WIDTH }];

    const containerWidth = CONTAINER_MIN_WIDTH;
    const result = gridGeometry(containerWidth, tiles);

    expect(result).toEqual([buildScaledRow(containerWidth, tiles).row]);
  });

  it('Matrix inject into box!', () => {
    const tiles = [
      { height: 300, width: CONTAINER_MIN_WIDTH },
      { height: 300, width: CONTAINER_MIN_WIDTH },
    ];

    const containerWidth = CONTAINER_MIN_WIDTH;
    const result = gridGeometry(containerWidth, tiles);

    expect(result).toEqual([buildScaledRow(containerWidth, tiles).row]);
  });
});
