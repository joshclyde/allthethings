import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { compose } from "redux";
import Chord from "../Chord";
import { IPracticeProps } from "./types";
import { DO_TICK } from "./reducers";

class Practice extends React.Component<IPracticeProps, {timer: NodeJS.Timer}> {

  constructor(props: IPracticeProps) {
    super(props);
    const { tick } = this.props;
    this.state = {
      timer: setInterval(tick, 1000),
    };
  }

  componentDidMount() {
  }
  
  render() {
    const { classes, chordCurrent, chordNext } = this.props;
    return (
      <div className={classes.theDiv} >
        <Chord chord={chordCurrent} />
        <Chord chord={chordNext} />
      </div>
    );
  }
}
const styles = {
  theDiv: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "flext-start",
  },
};

const mapStateToProps = (state: any, props: any) => {
  return {
    chordCurrent: state.practice.chordCurrent,
    chordNext: state.practice.chordNext,
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    tick: () => {
      console.log("hiiiii");
      dispatch({ type: DO_TICK, time: Date.now() })
    } 
  };
};

const SmartPractice = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  injectSheet(styles),
  Practice,
) as any;

const temp = injectSheet(styles)(Practice);
export default connect(mapStateToProps, mapDispatchToProps)(temp);

// export default SmartPractice;
