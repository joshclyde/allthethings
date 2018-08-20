// export interface IStateToProps {
//   stateVar: string;
// }

// export interface IDispatchToProps {
//   dispatchFunction(): void;
// }

export interface IStyle {
  classes: {
    wholeDiv: string;
  };
}

export interface IBookmarksProps {
  data: IBookmarkSingle[];
}

export interface IBookmarkSingle {
  name: string;
  data: string | IBookmarkSingle[];
}

export interface IProps extends IStyle, IBookmarksProps {}
