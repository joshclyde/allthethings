import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import Practice from "../../UkulelePractice";
import { ITileProps, TileOption } from "./types";

// TODO: try and make this function not as long
const buildGridStyle = (grid: TileOption[][], option: TileOption) => {
  let gridColumnEnd = 0;
  let gridColumnStart = -1;
  let gridRowEnd = 0;
  let gridRowStart = -1;

  for (let col = 0; col < grid[0].length; col++) {
    for (let row = 0; row < grid.length; row++) {
      if (grid[row][col] === option) {
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

const TileOptionsSwitch = (option: TileOption, gridStyle: object) => {
  switch (option) {
    case TileOption.Practice:
      return <Practice gridStyle={gridStyle} />;
    default:
      return <input style={gridStyle} />;
  }
};

const Tile = ({ grid, option }: ITileProps) => TileOptionsSwitch(option, buildGridStyle(grid, option));

const styles = {};

export default injectSheet(styles)(Tile);
