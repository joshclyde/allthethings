export enum TileOption {
  Practice,
  Flashcard,
  Music,
}

export interface ITileProps {
  option: TileOption;
  grid: TileOption[][];
}
