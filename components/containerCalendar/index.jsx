import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { filterWeather } from "../../store/slices/weatherSlice";

const ContainerCalendar = () => {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  return (
    <div>
      <Calendar
        onChange={(e) => {
          onChange(e);
          dispatch(filterWeather(e.toString()));
        }}
        value={value}
      />
    </div>
  );
};

export default ContainerCalendar;
