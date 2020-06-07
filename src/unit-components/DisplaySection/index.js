import React from "react";

import "./index.css";

const DisplaySection = ({ data }) => (
  <div id="display">
    <div>{data.day_string}</div>
    <div id="item">{data.item}</div>
  </div>
);

export default DisplaySection;
