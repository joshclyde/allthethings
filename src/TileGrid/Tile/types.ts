export enum TileOption {
  Practice,
  Spotify,
}

export interface ITileProps {
  option: TileOption;
  grid: TileOption[][];
}
