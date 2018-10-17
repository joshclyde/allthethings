import { omit } from "lodash";
import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";
import { Subtract } from "utility-types";

export interface IClickablePropsInjected {
  isHovering: boolean;
}

export interface IClickableProps {
  url?: string;
  onClick?(): void;
}

interface IClickableState {
  isHovering: boolean;
}

// TODO rethink what should and shouldnt be in this hoc
// TODO the wrapping div interrupts the WrappedComponent's styles

// https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
// above is a cool beans article teaching about hoc's with typescript

// const getDisplayName = (WrappedComponent: React.ComponentType<P>) =>
// WrappedComponent.displayName || WrappedComponent.name || "Component";

const withClickable = <P extends IClickablePropsInjected>(WrappedComponent: React.ComponentType<P>) => {
  class ClickableComponent extends React.Component<
    IClickableProps & Subtract<P, IClickablePropsInjected>,
    IClickableState
  > {
    state: IClickableState = {
      isHovering: false,
    };
    handleOnMouseOver = () => this.setState({ isHovering: true });
    handleOnMouseOut = () => this.setState({ isHovering: false });

    render() {
      const { isHovering } = this.state;
      const { onClick, url } = this.props;
      const restOfProps = omit(this.props, ["onClick", "url"]);

      Object.assign({}, this.props);
      return url ? (
        <a
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
          href={url}
          style={{ cursor: "pointer" }}
        >
          <WrappedComponent {...restOfProps} isHovering={isHovering} />
        </a>
      ) : (
        <div
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
          onClick={onClick}
          style={{ cursor: "pointer" }}
        >
          <WrappedComponent {...restOfProps} isHovering={isHovering} />
        </div>
      );
    }
  }
  // TODO: be able to return a more descriptive type when using hoc
  // it shows that it is a `ClickableComponent` when we'd prefer something like `WithClickableWrappedComponentName`

  // this isn't working
  // const nameable = (props: Subtract<P, IClickablePropsInjected>) => <ClickableComponent {...props} />;
  // (nameable as React.SFC).displayName = `withClickable(${getDisplayName(WrappedComponent)})`;
  // return nameable;
  return ClickableComponent;
};

export default withClickable;
