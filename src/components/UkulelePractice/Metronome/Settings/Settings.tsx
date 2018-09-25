import * as React from "react";
import { ISettingsProps } from "./types";

const Settings = ({ onClickDown, onClickUp, onClickDownDown, onClickUpUp }: ISettingsProps) => (
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

export default Settings;
