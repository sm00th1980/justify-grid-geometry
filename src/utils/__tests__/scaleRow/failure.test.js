import { scaleRow } from '../..';
import { TILE_MIN_WIDTH } from '../../../config';

describe('scaleRow', () => {
  it('scaleRow', () => {
    const row = [
      {
        height: TILE_MIN_WIDTH,
        width: TILE_MIN_WIDTH,
      },
      {
        height: TILE_MIN_WIDTH,
        width: TILE_MIN_WIDTH,
      },
    ];

    const width = TILE_MIN_WIDTH * 2;

    expect(scaleRow(width, row)).toEqual({
      success: false,
    });
  });
});
