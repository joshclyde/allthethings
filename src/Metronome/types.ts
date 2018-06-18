export interface IMetronomeProps {
  classes: any;
  bpm: number;
  previousTick: number;
  currentTick: number;
  nextTick: number;
  initialize(): void;
  tick(): void;
  onClickDown(): void,
  onClickUp(): void,
}
