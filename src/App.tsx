import { useState } from "react";
import { API_KEY } from "./data/apiKey";
import CitySearch from "./components/CitySearch";
import MoonLoader from "react-spinners/ClipLoader";
import WeatherDetails from "./components/WeatherDetails";
import { weatherDetailsType } from "./types/types";

const App = () => {
	const [weatherInfo, setWeatherDetails] = useState<weatherDetailsType>();
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState<boolean>(false);

	// getting city weather details
	const getCityWeatherDetails = async (city: string) => {
		setLoading(true);

		const resp = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		);
		const jsonedResp = await resp.json();

		if (jsonedResp.cod === 200) {
			setWeatherDetails(jsonedResp);
			setError("");
		}
		if (jsonedResp.cod === "404") setError("No City Found!");
		setLoading(false);
	};

	return (
		<>
			<CitySearch getCityWeatherDetails={getCityWeatherDetails} />

			{/* info container */}
			<div className=" w-full h-20 text-white mt-5 flex flex-col items-center">
				{isLoading ? (
					<MoonLoader color="#67E8F9" size={50} />
				) : !error ? (
					<WeatherDetails weatherInfo={weatherInfo}></WeatherDetails>
				) : (
					<p className="text-red-500">{error}</p>
				)}
			</div>
		</>
	);
};

export default App;
