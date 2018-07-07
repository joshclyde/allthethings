export interface IPracticeProps {
  classes: any;
  gridStyle: any;
  chordCurrent: string;
  chordNext: string;
  tick(): void;
  onBeat(): void;
}
