import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { compose } from "redux";
import { IMetronomeProps } from "./types";
import { SET_CURRENT_TICK, INITIALIZE_METRONOME, DECREMENT_BPM, INCREMENT_BPM, ADD_BPM } from "./reducers";
import TempoButton from "./TempoButton.tsx";
import Settings from "./Settings.tsx";

class Metronome extends React.Component<IMetronomeProps, {timer: any}> {

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
    const {
      classes,
      bpm,
      previousTick,
      currentTick,
      onClickDown,
      onClickUp,
      onClickUpUp,
      onClickDownDown,
    } = this.props;
    const showLength = 400;
    // const opacity = Math.sqrt(Math.max((showLength - (currentTick - previousTick)) / showLength, 0));
    const opacity = (showLength - (currentTick - previousTick)) / showLength;
    const radius = Math.max(opacity * 25, 0);
    return <div className={classes.wholeDiv}>
      {bpm}
      <TempoButton alpha={opacity} />
      <Settings onClickDown={onClickDown} onClickUp={onClickUp} onClickUpUp={onClickUpUp} onClickDownDown={onClickDownDown}/>
    </div>
  }
}
const styles = {
  wholeDiv: {
    // width: 300,
    display: "flex",
    flexDirection: "col",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "flext-start",
  }
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
    },
    onClickDown: () => {
      dispatch({ type: DECREMENT_BPM })
    },
    onClickUp: () => {
      dispatch({ type: INCREMENT_BPM })
    },
    onClickUpUp: () => {
      dispatch({ type: ADD_BPM, bpmNumber: 10 })
    },
    onClickDownDown: () => {
      dispatch({ type: ADD_BPM, bpmNumber: -10 })
    },
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
