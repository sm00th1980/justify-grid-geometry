import gridGeometry from '..';

const CONTAINER_MIN_WIDTH = 500;

describe('gridGeometry', () => {
  const containerWidth = CONTAINER_MIN_WIDTH;

  it('Empty list', () => {
    expect(gridGeometry(containerWidth, [])).toEqual([]);
  });

  it('Wrong type list', () => {
    expect(() => gridGeometry(containerWidth, {})).toThrowError('The list param must be an array!');

    expect(() => gridGeometry(containerWidth, undefined)).toThrowError(
      'The list param must be an array!'
    );

    expect(() => gridGeometry(containerWidth, 1)).toThrowError('The list param must be an array!');
  });
});
