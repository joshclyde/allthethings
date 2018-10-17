export interface IStateToProps {
  chordCurrent: string;
  chordNext: string;
}

export interface IDispatchToProps {
  onBeat(): void;
}

export interface IStyle {
  classes: {
    chordDiv: string;
    fullScreen: string;
    partialScreen: string;
    wholeDiv: string;
  };
}

export interface IUkulelePracticeProps {
  gridStyle: object;
}

export interface IProps extends IStateToProps, IDispatchToProps, IStyle, IUkulelePracticeProps {}
