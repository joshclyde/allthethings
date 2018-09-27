import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";
import { Subtract } from "utility-types";

export interface IClickablePropsInjected {
  isHovering: boolean;
}

interface IClickableState {
  isHovering: boolean;
}

// https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
// above is a cool beans article teaching about hoc's with typescript

// const getDisplayName = (WrappedComponent: React.ComponentType<P>) =>
// WrappedComponent.displayName || WrappedComponent.name || "Component";

const withClickable = <P extends IClickablePropsInjected>(WrappedComponent: React.ComponentType<P>) => {
  class ClickableComponent extends React.Component<Subtract<P, IClickablePropsInjected>, IClickableState> {
    state: IClickableState = {
      isHovering: false,
    };
    handleOnMouseOver = () => this.setState({ isHovering: true });
    handleOnMouseOut = () => this.setState({ isHovering: false });

    render() {
      const { isHovering } = this.state;
      return (
        <div onMouseOver={this.handleOnMouseOver} onMouseOut={this.handleOnMouseOut}>
          <WrappedComponent {...this.props} isHovering={isHovering} />
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
