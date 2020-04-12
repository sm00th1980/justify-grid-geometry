import { all, lte, gte, init, last, isEmpty, append, splitAt, sum, prop, map } from 'ramda';
import {
  CONTAINER_LEFT_PADDING,
  CONTAINER_RIGHT_PADDING,
  TILE_MARGIN,
  ROW_MAX_HEIGHT,
  TILE_MIN_WIDTH,
  ROW_MIN_HEIGHT,
} from '../config';

export const newWidth = (oldHeight, oldWidth, newHeight_) => (oldWidth * newHeight_) / oldHeight;

export const newHeight = (oldHeight, oldWidth, newWidth_) => (oldHeight * newWidth_) / oldWidth;

const getTilesWidth = (tiles) => {
  const widths = map(prop('width'), tiles);
  return sum(widths);
};

const getMarginsBetweenTiles = (tilesCount) => (tilesCount - 1) * TILE_MARGIN;

const getPossibleTiles = (containerWidth, tiles) => {
  const tilesWidth = getTilesWidth(tiles);

  return tiles.map((tile) => {
    const widthRatio = tile.width / parseFloat(tilesWidth);
    const width = widthRatio * containerWidth;

    return {
      ...tile,
      width,
      height: newHeight(tile.height, tile.width, width),
    };
  });
};

const normalizeByHeightTiles = (tiles) =>
  tiles.map((tile) => ({
    ...tile,
    width: newWidth(tile.height, tile.width, ROW_MAX_HEIGHT),
    height: ROW_MAX_HEIGHT,
  }));

export const isTileValid = ({ width, height }) => {
  const isValidWidth = gte(width, TILE_MIN_WIDTH);
  const isValidHeight = gte(height, ROW_MIN_HEIGHT) && lte(height, ROW_MAX_HEIGHT);

  return isValidWidth && isValidHeight;
};

export const scaleRow = (containerWidth, tiles) => {
  const normalizedByHeightTiles = normalizeByHeightTiles(tiles);
  const widthWithoutVoid =
    containerWidth -
    CONTAINER_LEFT_PADDING -
    CONTAINER_RIGHT_PADDING -
    getMarginsBetweenTiles(tiles.length);
  const tilesWidth = getTilesWidth(normalizedByHeightTiles);

  if (tilesWidth < widthWithoutVoid) {
    return {
      success: true,
      row: normalizedByHeightTiles,
    };
  }

  const possibleTiles = getPossibleTiles(widthWithoutVoid, normalizedByHeightTiles);

  const isAllTilesValid = all(isTileValid);

  if (isAllTilesValid(possibleTiles)) {
    return {
      success: true,
      row: possibleTiles,
    };
  }

  return { success: false };
};

export const buildScaledRow = (containerWidth, tiles, restTiles = []) => {
  if (isEmpty(tiles)) {
    throw Error('Failed to build row for:', restTiles);
  }

  const { success, row } = scaleRow(containerWidth, tiles);

  if (success) {
    return { row, restTiles };
  }

  return buildScaledRow(containerWidth, init(tiles), append(last(tiles), restTiles));
};

const SLICE_INDEX = 9;

export const getGeometry = (containerWidth, tiles, rows = []) => {
  const [initialTiles, restTilesBeforeScale] = splitAt(SLICE_INDEX, tiles);
  const { row, restTiles: restTilesAfterScale } = buildScaledRow(containerWidth, initialTiles);

  const newRows = append(row, rows);
  const rest = [...restTilesAfterScale, ...restTilesBeforeScale];

  if (isEmpty(rest)) {
    return newRows;
  }

  return getGeometry(containerWidth, rest, newRows);
};
