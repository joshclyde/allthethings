import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import { addBpm, decrementBpm, incrementBpm, initMetronome, selectors, tick as tickAction } from "./reducers";
import Settings from "./Settings";
import TempoButton from "./TempoButton";
import { IDispatchToProps, IMetronomeProps, IProps, IStateToProps } from "./types";

let prevBeat;

class Metronome extends React.Component<IProps, { timer: any }> {
  constructor(props: IProps) {
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
    const { classes, beat, bpm, onClickDown, onClickUp, onClickUpUp, onClickDownDown } = this.props;
    // const showLength = 400;
    // const opacity = Math.sqrt(Math.max((showLength - (currentTick - previousTick)) / showLength, 0));
    // const opacity = (showLength - (currentTick - previousTick)) / showLength;
    // const radius = Math.max(opacity * 25, 0);
    // TODO: opacity
    return (
      <div className={classes.wholeDiv}>
        {beat + 1} - {bpm}
        <TempoButton alpha="0" />
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
    alignContent: "flext-start",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "col",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
};

const mapStateToProps = (state: any): IStateToProps => {
  return {
    beat: selectors.getBeat(state),
    bpm: selectors.getBpm(state),
    timeNumerator: selectors.getTimeNumerator(state),
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchToProps => {
  return {
    initialize: () => dispatch(initMetronome(120)),
    onClickDown: () => dispatch(decrementBpm()),
    onClickDownDown: () => dispatch(addBpm(-10)),
    onClickUp: () => dispatch(incrementBpm()),
    onClickUpUp: () => dispatch(addBpm(10)),
    tick: () => dispatch(tickAction()),
  };
};

export default connect<IStateToProps, IDispatchToProps, IMetronomeProps>(
  mapStateToProps,
  mapDispatchToProps,
)(injectSheet(styles)(Metronome));
