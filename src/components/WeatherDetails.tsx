// Importing necessary type
import { weatherDetailsType } from "../types/types";

// WeatherDetails component
const WeatherDetails = ({
  weatherInfo,
}: {
  weatherInfo?: weatherDetailsType;
}) => {
  // Checking if weatherInfo is available
  if (!weatherInfo) return <div></div>;

  // Rendering weather details
  return (
    <div className="flex flex-col w-full">
      {/* Rendering city name and weather icon */}
      <span className="title text-cyan-600 text-xl flex justify-between items-center">
        {weatherInfo.name}
        <img
          src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0]?.icon}@2x.png`}
          alt="weather"
        />
      </span>
      {/* Rendering temperature, humidity, and wind details */}
      <div className="details flex items-center justify-between">
        <p className="text-yellow-200 text-xl">
          {weatherInfo.main.temp ? (
            <span className="relative">
              {Math.floor(weatherInfo.main.temp)}{" "}
              <span className="absolute text-sm">°C</span>
            </span>
          ) : (
            ""
          )}
        </p>
        <div className="flex flex-col text-sm">
          <span>Humidity: {weatherInfo.main.humidity}%</span>
          <span>Wind: {Math.floor(weatherInfo.wind.speed)} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;