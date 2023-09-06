// Importing necessary dependencies and components
import { useState } from "react";
import { API_KEY } from "./data/apiKey";
import CitySearch from "./components/CitySearch";
import MoonLoader from "react-spinners/ClipLoader";
import WeatherDetails from "./components/WeatherDetails";
import { weatherDetailsType } from "./types/types";
import axios from "axios";

// App component
const App = () => {
	// State variables
	const [weatherInfo, setWeatherDetails] = useState<weatherDetailsType>();
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState<boolean>(false);

	// Function to get city weather details
	const getCityWeatherDetails = async (city: string) => {
		try {
			setLoading(true);

			// Fetching weather data from the API
			const { data: resp } = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
			);

			// Processing the response
			setWeatherDetails(resp);
			setError("");
		} catch (err) {
			console.error(err);
			setError("No City Found!");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{/* Rendering the CitySearch component */}
			<CitySearch getCityWeatherDetails={getCityWeatherDetails} />

			{/* Info container */}
			<div className="w-full h-20 text-white mt-5 flex flex-col items-center">
				{/* Conditional rendering based on loading and error states */}
				{isLoading ? (
					// Displaying a loading spinner if data is being fetched
					<MoonLoader color="#67E8F9" size={50} />
				) : !error ? (
					// Rendering the WeatherDetails component if there are no errors
					<WeatherDetails weatherInfo={weatherInfo}></WeatherDetails>
				) : (
					// Displaying the error message if there is an error
					<p className="text-red-500">{error}</p>
				)}
			</div>
		</>
	);
};

export default App;
