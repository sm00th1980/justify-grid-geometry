import { newHeight } from '..';

describe('newHeight', () => {
  it('newHeight', () => {
    const oldHeight = 100;
    const oldWidth = 200;
    const newWidth = 122;

    expect(newHeight(oldHeight, oldWidth, newWidth)).toEqual(61);
  });
});
