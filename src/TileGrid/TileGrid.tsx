import * as React from "react";
import injectSheet from "react-jss";

import Practice from "../Practice";
import { ITileGridProps } from "./types";

const theTiles = [0, 1];
// prettier-ignore
const theGrid = [
  [0, 1],
];

const buildGrid = ({ classes, width, height, grid, tiles }: ITileGridProps) => {
  return (
    <div className={classes.baseGrid}>
      {buildGridChildren(theGrid, theTiles)}
    </div>
  );
};

const buildGridChildren = (grid, tiles) => {
  const divOfTiles = [];
  for (let i = 0; i < tiles.length; i++) {
    divOfTiles.push(
      <div style={buildGridChildCss(grid, i)}>
        {i === 0 ? <Practice /> : <button>the button</button>}
      </div>,
    );
  }
  return divOfTiles;
};

const buildGridChildCss = (grid, index) => {
  let gridColumnEnd = 0;
  let gridColumnStart = -1;
  let gridRowEnd = 0;
  let gridRowStart = -1;
  for (let col = 0; col < grid[0].length; col++) {
    for (let row = 0; row < grid.length; row++) {
      if (grid[row][col] === index) {
        gridColumnStart = gridColumnStart === -1 ? col : gridColumnStart;
        gridColumnEnd = gridColumnEnd < col ? col : gridColumnEnd;
        gridRowStart = gridRowStart === -1 ? row : gridRowStart;
        gridRowEnd = gridRowEnd < row ? row : gridRowEnd;
      }
    }
  }

  return {
    gridColumnEnd: gridColumnEnd + 2,
    gridColumnStart: gridColumnStart + 1,
    gridRowEnd: gridRowEnd + 2,
    gridRowStart: gridRowStart + 1,
    outline: "1px solid black",
  };
};

const buildGridTemplateColumns = ({ width, grid }: ITileGridProps) => {
  const numColumns = grid[0].length;
  const colSize = width / numColumns;
  let ret = "";
  for (let i = 0; i < numColumns; i++) {
    ret += `${colSize}px `;
  }
  return ret;
};

const buildGridTemplateRows = ({ height, grid }: ITileGridProps) => {
  const numRows = grid.length;
  const rowSize = height / numRows;
  let ret = "";
  for (let i = 0; i < numRows; i++) {
    ret += `${rowSize}px `;
  }
  return ret;
};

const TileGrid = (props: ITileGridProps) => <div>{buildGrid(props)}</div>;

const styles = {
  baseGrid: {
    display: "grid",
    gridTemplateColumns: ({ width }: ITileGridProps) =>
      buildGridTemplateColumns({ width, grid: theGrid } as ITileGridProps),
    gridTemplateRows: ({ height }: ITileGridProps) =>
      buildGridTemplateRows({ height, grid: theGrid } as ITileGridProps),
  },
};

export default injectSheet(styles)(TileGrid);
