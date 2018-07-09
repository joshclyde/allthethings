export interface IStyles {
  classes: {
    baseGrid: string;
  };
}

export interface ITileGridProps {
  width: number;
  height: number;
}

export interface IProps extends IStyles, ITileGridProps {}
