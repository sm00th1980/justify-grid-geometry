# Justified Grid Geometry calculating

## Example

![Video](https://media.giphy.com/media/hXDq4mON2ta36gKoUY/giphy.gif)

Use:

```js
import getJustifyGridGeometry from 'justify-grid-geometry';

const CONTAINER_WIDTH = 500; //px

const tiles = [
  {
    width: 100,
    height: 100,
  },
  {
    width: 200,
    height: 200,
  },
  {
    width: 300,
    height: 300,
  },
];

const output = getJustifyGridGeometry(CONTAINER_WIDTH, tiles);
```
