import { last, splitAt, head } from 'ramda';

import { getGeometry, scaleRow } from '..';

const CONTAINER_MIN_WIDTH = 500;

describe('getGeometry', () => {
  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const result = getGeometry(containerWidth, tiles);
    expect(result).toEqual([scaleRow(containerWidth, tiles).row]);
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const result = getGeometry(containerWidth, tiles);
    expect(result).toEqual([scaleRow(containerWidth, tiles).row]);
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const result = getGeometry(containerWidth, tiles);
    expect(result).toEqual([scaleRow(containerWidth, tiles).row]);
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const result = getGeometry(containerWidth, tiles);
    expect(result).toEqual([scaleRow(containerWidth, tiles).row]);
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const splitIndex = tiles.length - 1;

    const initTiles = head(splitAt(splitIndex, tiles));
    const restTiles = last(splitAt(splitIndex, tiles));

    const result = getGeometry(containerWidth, tiles);
    expect(result).toEqual([
      scaleRow(containerWidth, initTiles).row,
      scaleRow(containerWidth, restTiles).row,
    ]);
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
      {
        width: CONTAINER_MIN_WIDTH / 3,
        height: CONTAINER_MIN_WIDTH / 3,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const splitIndex = tiles.length - 2;

    const initTiles = head(splitAt(splitIndex, tiles));
    const restTiles = last(splitAt(splitIndex, tiles));

    const result = getGeometry(containerWidth, tiles);
    expect(result).toEqual([
      scaleRow(containerWidth, initTiles).row,
      scaleRow(containerWidth, restTiles).row,
    ]);
  });
});
