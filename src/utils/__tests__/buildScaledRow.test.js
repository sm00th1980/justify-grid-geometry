import { last, splitAt, head } from 'ramda';

import { buildScaledRow, scaleRow } from '..';

const CONTAINER_MIN_WIDTH = 500;

describe('buildScaledRow', () => {
  it('throw error when tiles is empty', () => {
    const tiles = [];
    const containerWidth = CONTAINER_MIN_WIDTH;

    expect(() => {
      buildScaledRow(containerWidth, tiles);
    }).toThrow();
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const result = buildScaledRow(containerWidth, tiles);
    expect(result).toEqual({
      row: scaleRow(CONTAINER_MIN_WIDTH, tiles).row,
      restTiles: [],
    });
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const result = buildScaledRow(containerWidth, tiles);
    expect(result).toEqual({
      row: scaleRow(CONTAINER_MIN_WIDTH, tiles).row,
      restTiles: [],
    });
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const result = buildScaledRow(containerWidth, tiles);
    expect(result).toEqual({
      row: scaleRow(CONTAINER_MIN_WIDTH, tiles).row,
      restTiles: [],
    });
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const result = buildScaledRow(containerWidth, tiles);
    expect(result).toEqual({
      row: scaleRow(CONTAINER_MIN_WIDTH, tiles).row,
      restTiles: [],
    });
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const splitIndex = tiles.length - 1;

    const initTiles = head(splitAt(splitIndex, tiles));
    const restTiles = last(splitAt(splitIndex, tiles));

    const result = buildScaledRow(containerWidth, tiles);
    expect(result).toEqual({
      row: scaleRow(CONTAINER_MIN_WIDTH, initTiles).row,
      restTiles,
    });
  });

  it('return scaled row', () => {
    const tiles = [
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
      {
        width: CONTAINER_MIN_WIDTH / 5,
        height: CONTAINER_MIN_WIDTH / 5,
      },
    ];
    const containerWidth = CONTAINER_MIN_WIDTH;

    const splitIndex = tiles.length - 2;

    const initTiles = head(splitAt(splitIndex, tiles));
    const restTiles = last(splitAt(splitIndex, tiles));

    const result = buildScaledRow(containerWidth, tiles);
    expect(result).toEqual({
      row: scaleRow(CONTAINER_MIN_WIDTH, initTiles).row,
      restTiles,
    });
  });
});
