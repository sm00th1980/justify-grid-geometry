import { newWidth } from '..';

describe('newWidth', () => {
  it('newWidth', () => {
    const oldHeight = 100;
    const oldWidth = 200;
    const newHeight = 61;

    expect(newWidth(oldHeight, oldWidth, newHeight)).toEqual(122);
  });
});
