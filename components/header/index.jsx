import Link from "next/link";
import { useRouter } from "next/router";
import { selectorWeather } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { filterWeather } from "../../store/slices/weatherSlice";

const Header = () => {
  const { countrys } = useSelector(selectorWeather);
  const { asPath } = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col border-lime-600 border-b-2">
      <h1 className="text-3xl font-bold my-5 mx-5">Weather App</h1>
      <div className="flex space-x-4 items-center w-fit mx-5">
        {countrys.map((item) => (
          <Link
            onClick={() => {
              dispatch(filterWeather(new Date().toString()));
            }}
            key={item.id}
            href={{
              pathname: item.link,
              query: { lat: item.geocode.lat, lon: item.geocode.lon },
            }}
            className={
              asPath.includes(item.link)
                ? "text-green-600 px-3 cursor-pointer border-lime-600 border-x-2 border-t-2"
                : "cursor-pointer px-3 border-x-2 border-t-2"
            }
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
