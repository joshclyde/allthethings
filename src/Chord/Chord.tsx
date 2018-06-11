import * as React from "react";
import { IChordProps } from "./IChord";

const Chord = ({
  chord,
  string1,
  string2,
  string3,
  string4,
}: IChordProps) => (
  <div>
    <p>
      {chord}
      <br/>
      <br/>
        {string1} {string2} {string3} {string4}
      </p>
  </div>
);

export default Chord;
