import React, { useState } from "react";

import Chip from "../../unit-components/Chip";
import "./index.css";

const Chips = ({ list: propList, onSelect }) => {
  const [list, setList] = useState(propList);

  const setActive = (active) => {
    setList([
      ...list.map((_) => ({
        ..._,
        active: active.day_string === _.day_string,
      })),
    ]);

    onSelect(active);
  };

  return (
    <div id="container">
      {list.map((item) => (
        <Chip key={item.day} {...item} setActive={setActive} />
      ))}
    </div>
  );
};

export default Chips;
