export enum TileOption {
  Practice,
  Music,
}

export interface ITileProps {
  option: TileOption;
  grid: TileOption[][];
}
