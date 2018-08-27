export interface IStyle {
  classes: {
    wholeDiv: string;
  };
}

export interface IBookmarkLinkProps {
  imgSrc: string;
  hrefPath: string;
  name: string;
  onClick(): void;
}

export interface IProps extends IStyle, IBookmarkLinkProps {}
