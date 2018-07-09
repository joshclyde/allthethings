export interface IStyle {
  classes: {
    svg: string;
    back: string;
    both: string;
    front: string;
  };
}

export interface ITempoButtonProps {
  alpha: number;
}

export interface IProps extends IStyle, ITempoButtonProps {}
