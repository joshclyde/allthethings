import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { compose } from "redux";
import { IMetronomeProps } from "./types";
import { SET_CURRENT_TICK, INITIALIZE_METRONOME } from "./reducers";

class Metronome extends React.Component<IMetronomeProps, {timer: NodeJS.Timer}> {

  constructor(props: IMetronomeProps) {
    super(props);

    const { initialize, tick } = this.props;
    initialize();
    this.state = {
      timer: setInterval(tick, 100),
    };
  }

  // componentDidMount() {
  //   const { initialize, tick } = this.props;
  // }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  
  render() {
    const { classes, bpm, previousTick, currentTick } = this.props;
    if (currentTick - previousTick < 200) {
      return (
        <div>
          {bpm}
          {currentTick}
        </div>
      );
    } else {
      return (
        <div>
          {bpm}
        </div>
      );
    }
  }
}
const styles = {
};

const mapStateToProps = (state: any, props: any) => {
  return {
    bpm: state.metronome.bpm,
    previousTick: state.metronome.previousTick,
    currentTick: state.metronome.currentTick,
    nextTick: state.metronome.nextTick,
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    initialize: () => {
      dispatch({type: INITIALIZE_METRONOME, time: Date.now(), bpm: 120 })
    },
    tick: () => {
      console.log("tick");
      dispatch({ type: SET_CURRENT_TICK, time: Date.now() })
    }
  };
};

const SmartMetronome = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  injectSheet(styles),
  Metronome,
) as any;

const temp = injectSheet(styles)(Metronome);
export default connect(mapStateToProps, mapDispatchToProps)(temp);

// export default SmartMetronome;
