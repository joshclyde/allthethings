import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { compose } from "redux";
import { IMetronomeProps } from "./types";
import { SET_CURRENT_TICK, INITIALIZE_METRONOME } from "./reducers";
import TempoButton from "./TempoButton.tsx";

class Metronome extends React.Component<IMetronomeProps, {timer: NodeJS.Timer}> {

  constructor(props: IMetronomeProps) {
    super(props);

    const { initialize, tick } = this.props;
    initialize();
    this.state = {
      timer: setInterval(tick, 30),
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
    const showLength = 400;
    // const opacity = Math.sqrt(Math.max((showLength - (currentTick - previousTick)) / showLength, 0));
    const opacity = (showLength - (currentTick - previousTick)) / showLength;
    const radius = Math.max(opacity * 25, 0);
    return <div>
      <TempoButton alpha={opacity} />
    </div>
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
