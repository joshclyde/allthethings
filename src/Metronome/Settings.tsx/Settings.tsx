import * as React from "react";
import injectSheet from "react-jss";
import { ISettingsProps } from "./types";

const Settings = ({
  classes,
  onClickDown,
  onClickUp,
}: ISettingsProps) => (
  <div>
    <button type="button" onClick={onClickUp}>+</button>
    <button type="button" onClick={onClickDown}>-</button>
  </div>
);

const styles = {
};

// export default SmartSettings;
export default injectSheet(styles)(Settings);
