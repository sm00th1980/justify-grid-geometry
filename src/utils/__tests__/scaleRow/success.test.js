import { scaleRow } from '../..';
import { ROW_MAX_HEIGHT, TILE_MIN_WIDTH } from '../../../config';

const CONTAINER_MIN_WIDTH = 500;

describe('scaleRow', () => {
  it('scaleRow', () => {
    const row = [
      {
        height: 100,
        width: 100,
      },
      {
        height: 100,
        width: 100,
      },
    ];

    const width = 300;

    expect(scaleRow(width, row)).toEqual({
      success: true,
      row: [
        {
          height: 149,
          width: 149,
        },
        {
          height: 149,
          width: 149,
        },
      ],
    });
  });

  it('scaleRow', () => {
    const row = [
      {
        height: TILE_MIN_WIDTH * 4,
        width: TILE_MIN_WIDTH * 2,
      },
      {
        height: TILE_MIN_WIDTH * 4,
        width: TILE_MIN_WIDTH * 6,
      },
    ];

    const width = TILE_MIN_WIDTH * 6;

    expect(scaleRow(width, row)).toEqual({
      success: true,
      row: [
        {
          height: 224,
          width: 112,
        },
        {
          height: 224,
          width: 336,
        },
      ],
    });
  });

  it('scaleRow', () => {
    const row = [
      {
        height: 100,
        width: 100,
      },
      {
        height: 100,
        width: 100,
      },
    ];

    const width = CONTAINER_MIN_WIDTH * 2;

    expect(scaleRow(width, row)).toEqual({
      success: true,
      row: [
        {
          height: ROW_MAX_HEIGHT,
          width: ROW_MAX_HEIGHT,
        },
        {
          height: ROW_MAX_HEIGHT,
          width: ROW_MAX_HEIGHT,
        },
      ],
    });
  });

  it('scaleRow', () => {
    const row = [
      {
        height: 100,
        width: 50,
      },
      {
        height: 100,
        width: 150,
      },
    ];

    const width = CONTAINER_MIN_WIDTH * 2;

    expect(scaleRow(width, row)).toEqual({
      success: true,
      row: [
        {
          height: ROW_MAX_HEIGHT,
          width: ROW_MAX_HEIGHT / 2.0,
        },
        {
          height: ROW_MAX_HEIGHT,
          width: ROW_MAX_HEIGHT * 1.5,
        },
      ],
    });
  });

  it('scaleRow', () => {
    const row = [
      {
        height: 200,
        width: 100,
      },
      {
        height: 100,
        width: 200,
      },
    ];

    const width = CONTAINER_MIN_WIDTH * 2;

    expect(scaleRow(width, row)).toEqual({
      success: true,
      row: [
        {
          height: ROW_MAX_HEIGHT,
          width: ROW_MAX_HEIGHT / 2.0,
        },
        {
          height: ROW_MAX_HEIGHT,
          width: ROW_MAX_HEIGHT * 2,
        },
      ],
    });
  });
});
