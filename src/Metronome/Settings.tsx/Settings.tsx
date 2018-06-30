import * as React from "react";
import injectSheet from "react-jss";
import { ISettingsProps } from "./types";

const Settings = ({
  classes,
  onClickDown,
  onClickUp,
  onClickDownDown,
  onClickUpUp,
}: ISettingsProps) => (
  <div>
    <div>
      <button type="button" onClick={onClickDown}>
        -
      </button>
      <button type="button" onClick={onClickUp}>
        +
      </button>
    </div>
    <div>
      <button type="button" onClick={onClickDownDown}>
        --
      </button>
      <button type="button" onClick={onClickUpUp}>
        ++
      </button>
    </div>
  </div>
);

const styles = {};

// export default SmartSettings;
export default injectSheet(styles)(Settings);
