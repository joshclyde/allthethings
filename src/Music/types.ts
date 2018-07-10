export interface IStateToProps {
  stateVar: string;
}

export interface IDispatchToProps {
  dispatchFunction(): void;
}

export interface IStyle {
  classes: {
    wholeDiv: string;
  };
}

export interface IMusicProps {
  gridStyle: object;
}

export interface IProps extends IStateToProps, IDispatchToProps, IStyle, IMusicProps {}
