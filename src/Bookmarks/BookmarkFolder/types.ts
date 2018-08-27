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

export interface IBookmarkFolderProps {
  name: string;
  onClick(): void;
}

export interface IProps extends IStateToProps, IDispatchToProps, IStyle, IBookmarkFolderProps {}
