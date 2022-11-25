import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorWeather } from "../../store/selectors";
import Modal from "../modal";

const Weather = () => {
  const { chosenWeather } = useSelector(selectorWeather);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!chosenWeather.length) {
      setOpen((prev) => !prev);
    }
  }, [chosenWeather]);

  const temperatureConverter = (valNum) => (valNum - 273).toFixed(2);

  return (
    <div className="flex justify-between items-stretch flex-wrap">
      {chosenWeather.length > 0 &&
        chosenWeather?.map((item) => (
          <div key={item.dt} className="flex justify-center items-center flex-col max-w-max w-full bg-gray-300 p-5 mr-7 mb-5">
            <p>Time: {new Date(item.dt_txt).toTimeString().slice(0, 5)}</p>
            <div className="relative">
              <Image
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="weather"
                width={100}
                height={100}
                priority
              />
            </div>
            <div>
              <p>{temperatureConverter(item.main.temp)} C</p>
              <p>Humidity - {item.main.humidity}%</p>
              <p>Wind Speed - {item.wind.speed}MPH</p>
              <p>Weather - {item.weather[0].main}</p>
            </div>
          </div>
        ))}
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
};

export default Weather;
