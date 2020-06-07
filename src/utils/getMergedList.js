import list from "../configurations/data.json";
import getDaysYears from "./getDaysYears";

const getMergedList = () => {
  const daysList = getDaysYears();
  return daysList.map((item) => ({
    ...item,
    ...list.find((_) => _.day === item.day_string),
  }));
};

export default getMergedList;
