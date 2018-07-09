import * as React from "react";
// import * as Mousetrap from "mousetrap";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";
import Tile, { TileOption } from "../Tile";

import { IProps } from "./types";

// Mousetrap.bind("4", () => console.log("4"), "keyup");

const theTiles = [TileOption.Practice, TileOption.Spotify];
// TODO: instead of 0s and 1s should be using enums, buts its not as visually pleasing
// prettier-ignore
const theGrid = [
  [0, 1],
  [0, 1],
];

const TileGrid = ({ classes, height, width }: IProps) => (
  <div className={classes.baseGrid}>
    {theTiles.map((option: TileOption) => (
      <Tile key={option} grid={theGrid} option={option} height={height} width={width} />
    ))}
  </div>
);

const styles = {
  baseGrid: {
    display: "grid",
    gridTemplateColumns: ({ width }: IProps) => `repeat(${theGrid[0].length}, ${width / theGrid[0].length}px)`,
    gridTemplateRows: ({ height }: IProps) => `repeat(${theGrid.length}, ${height / theGrid.length}px)`,
    justifyContent: "center",
  },
};

export default injectSheet(styles)(TileGrid);
