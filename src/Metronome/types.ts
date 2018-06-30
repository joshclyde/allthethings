export interface IMetronomeProps {
  classes: any;
  beat: number;
  bpm: number;
  previousTick: number;
  currentTick: number;
  nextTick: number;
  timeNumerator: number;
  initialize(): void;
  tick(): void;
  onClickDown(): void;
  onClickUp(): void;
  onClickDownDown(): void;
  onClickUpUp(): void;
  onBeat(): void;
}
