import { IClickablePropsInjected } from "@hocs/withClickable";

export interface IStyle {
  classes: {
    whole: string;
    text: string;
    hovering: string;
  };
}

export interface IBarButtonProps extends IClickablePropsInjected {
  text: string;
  onClick(): void;
}

export interface IProps extends IStyle, IBarButtonProps {}
