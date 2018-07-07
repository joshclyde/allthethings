import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import {
  ADD_BPM,
  DECREMENT_BPM,
  INCREMENT_BPM,
  INITIALIZE_METRONOME,
  TICK,
} from "./reducers";
import Settings from "./Settings";
import TempoButton from "./TempoButton";
import { IMetronomeProps } from "./types";

let prevBeat;

class Metronome extends React.Component<IMetronomeProps, { timer: any }> {
  constructor(props: IMetronomeProps) {
    super(props);

    const { initialize, tick, bpm, beat } = this.props;
    initialize();
    setTimeout(() => {
      tick();
    }, (60 / bpm) * 1000);
    prevBeat = beat;
  }

  public componentDidUpdate() {
    const { tick, onBeat, bpm, beat, timeNumerator } = this.props;
    if (beat !== prevBeat) {
      if (beat + 1 === timeNumerator) {
        setTimeout(() => {
          tick();
          onBeat();
        }, (60 / bpm) * 1000);
      } else {
        setTimeout(() => {
          tick();
        }, (60 / bpm) * 1000);
      }
      prevBeat = beat;
    }
  }

  public componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  public render() {
    const {
      classes,
      beat,
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
    // const radius = Math.max(opacity * 25, 0);
    return (
      <div className={classes.wholeDiv}>
        {beat + 1} - {bpm}
        <TempoButton alpha={opacity} />
        <Settings
          onClickDown={onClickDown}
          onClickUp={onClickUp}
          onClickUpUp={onClickUpUp}
          onClickDownDown={onClickDownDown}
        />
      </div>
    );
  }
}
const styles = {
  wholeDiv: {
    // width: 300,
    alignContent: "flext-start",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "col",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
};

const mapStateToProps = (state: any) => {
  return {
    beat: state.metronome.beat,
    bpm: state.metronome.bpm,
    currentTick: state.metronome.currentTick,
    nextTick: state.metronome.nextTick,
    previousTick: state.metronome.previousTick,
    timeNumerator: state.metronome.timeNumerator,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    initialize: () => {
      dispatch({ type: INITIALIZE_METRONOME, time: Date.now(), bpm: 120 });
    },
    onClickDown: () => {
      dispatch({ type: DECREMENT_BPM });
    },
    onClickDownDown: () => {
      dispatch({ type: ADD_BPM, bpmNumber: -10 });
    },
    onClickUp: () => {
      dispatch({ type: INCREMENT_BPM });
    },
    onClickUpUp: () => {
      dispatch({ type: ADD_BPM, bpmNumber: 10 });
    },
    tick: () => {
      dispatch({ type: TICK, time: Date.now() });
    },
  };
};

// const SmartMetronome = compose(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps,
//   ),
//   injectSheet(styles),
//   Metronome,
// ) as any;

const temp = injectSheet(styles)(Metronome);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(temp);

// export default SmartMetronome;
