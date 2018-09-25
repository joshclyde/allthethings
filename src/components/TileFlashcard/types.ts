// export interface IStateToProps {
//   chordCurrent: string;
//   chordNext: string;
// }

// export interface IDispatchToProps {
//   onBeat(): void;
// }

export interface IStyle {
  classes: {
    fullScreen: string;
    partialScreen: string;
    wholeDiv: string;
  };
}

export interface ITileFlashcard {
  gridStyle: object;
}

export interface IProps extends IStyle, ITileFlashcard {}
