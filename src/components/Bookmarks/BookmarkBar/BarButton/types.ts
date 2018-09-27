export interface IStyle {
  classes: {
    whole: string;
    text: string;
    hovering: string;
  };
}

export interface IBarButtonProps {
  text: string;
  onClick(): void;
}

export interface IProps extends IStyle, IBarButtonProps {}
