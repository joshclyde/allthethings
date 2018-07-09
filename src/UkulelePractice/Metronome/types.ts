export interface IStateToProps {
  beat: number;
  bpm: number;
  timeNumerator: number;
}

export interface IDispatchToProps {
  initialize(): void;
  tick(): void;
  onClickDown(): void;
  onClickUp(): void;
  onClickDownDown(): void;
  onClickUpUp(): void;
}

export interface IStyle {
  classes: {
    wholeDiv: string;
  };
}

export interface IMetronomeProps {
  onBeat(): void;
}

export interface IProps extends IStateToProps, IDispatchToProps, IMetronomeProps, IStyle {}
