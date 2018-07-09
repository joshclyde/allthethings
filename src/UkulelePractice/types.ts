export interface IStateToProps {
  chordCurrent: string;
  chordNext: string;
}

export interface IDispatchToProps {
  onBeat(): void;
}

export interface IUkulelePracticeProps {
  gridStyle: any;
}

export interface IProps extends IStateToProps, IDispatchToProps, IUkulelePracticeProps {
  classes: any;
}
