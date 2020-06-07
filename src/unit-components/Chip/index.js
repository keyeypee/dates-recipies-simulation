import React from "react";

import "./index.css";

const Chip = ({
  day_string,
  day_number,
  month_string,
  active,
  today,
  item,
  setActive,
}) => {
  const className = ["chip"];
  if (active) {
    className.push("active");
  }

  return (
    <div
      className={className.join(" ")}
      onClick={() => setActive({ day_string, item })}
    >
      {today && <div className="label">Today is</div>}
      <div className="day">{day_string}</div>
      <div className="month">
        {day_number} {month_string}
      </div>
    </div>
  );
};

export default Chip;
