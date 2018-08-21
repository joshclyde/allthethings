export interface IStateToProps {
  bookmarkData: IBookmarkSingle[];
  bookmarkId: number;
}

export interface IDispatchToProps {
  onChangeBookmarkId(bookmarkId: number): void;
}

export interface IStyle {
  classes: {
    wholeDiv: string;
  };
}

export interface IBookmarksProps {
  nothing: string;
}

export interface IBookmarkSingle {
  id?: number;
  name: string;
  data: string | IBookmarkSingle[];
}

export interface IProps extends IStateToProps, IStyle, IBookmarksProps {}
