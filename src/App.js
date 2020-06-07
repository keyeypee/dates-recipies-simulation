import React, { Fragment, useState } from "react";

import Chips from "./components/Chips";
import DisplaySection from "./unit-components/DisplaySection";
import getMergedList from "./utils/getMergedList";

const App = () => {
  const list = getMergedList();
  const activeObj = list.find((item) => item.active);
  const [active, setActive] = useState({
    day_string: activeObj.day_string,
    item: activeObj.item,
  });
  return (
    <Fragment>
      <Chips list={list} onSelect={setActive} />
      <DisplaySection data={active} />
    </Fragment>
  );
};

export default App;
