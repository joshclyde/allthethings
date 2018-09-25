import * as React from "react";

import { IChordProps } from "./types";
import { getChordString } from "./utils";

const Chord = ({ chord }: IChordProps) => (
  <div>
    <pre>{getChordString(chord)}</pre>
  </div>
);

export default Chord;
