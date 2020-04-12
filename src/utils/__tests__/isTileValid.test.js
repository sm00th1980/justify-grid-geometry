import { isTileValid } from '..';

import { ROW_MAX_HEIGHT, ROW_MIN_HEIGHT, TILE_MIN_WIDTH } from '../../config';

describe('isTileValid', () => {
  it('isTileValid', () => {
    const tile = {
      width: TILE_MIN_WIDTH,
      height: ROW_MAX_HEIGHT,
    };

    expect(isTileValid(tile)).toBe(true);
  });

  it('isTileValid', () => {
    const tile = {
      width: TILE_MIN_WIDTH,
      height: ROW_MIN_HEIGHT,
    };

    expect(isTileValid(tile)).toBe(true);
  });

  it('isTileValid', () => {
    const tile = {
      width: TILE_MIN_WIDTH - 1,
      height: ROW_MIN_HEIGHT,
    };

    expect(isTileValid(tile)).toBe(false);
  });

  it('isTileValid', () => {
    const tile = {
      width: TILE_MIN_WIDTH,
      height: ROW_MIN_HEIGHT - 1,
    };

    expect(isTileValid(tile)).toBe(false);
  });

  it('isTileValid', () => {
    const tile = {
      width: TILE_MIN_WIDTH,
      height: ROW_MAX_HEIGHT + 1,
    };

    expect(isTileValid(tile)).toBe(false);
  });
});
