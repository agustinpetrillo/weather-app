import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "./Weather";
import Spinner from "./Spinner";
import Image from "next/image";
import rain from "../public/assets/rain.jpg";
import clouds from "../public/assets/cloudy.jpg";

const FirstSection = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      // console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  const images = [
    {
      name: "Rain",
      background: rain,
    },
    {
      name: "Clouds",
      background: clouds,
    },
  ];

  // const imgURL = images.find((e) => {
  //   e.name === weather.weather[0].main?.background;
  // });

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-10" />
        <Image
          src="/assets/weather.jpg"
          alt="/"
          layout="fill"
          className="object-cover"
        />
        <div className="relative flex justify-between items-center max-w-lg w-full m-auto pt-4 text-white z-20 mt-7 px-2 md:px-0">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between w-full items-center m-auto p-3 bg-transparent border-gray-300 text-white rounded-2xl border"
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent text-white outline-none text-2xl"
                type="text"
                placeholder="Search City"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {weather.main && <Weather data={weather} />}
      </>
    );
  }
};

export default FirstSection;
