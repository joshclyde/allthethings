export enum TileOption {
  Practice,
  Spotify,
}

export interface ITileProps {
  option: TileOption;
  grid: number[][];
  width: number;
  height: number;
}
