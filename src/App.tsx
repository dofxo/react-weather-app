// Importing necessary dependencies and components
import { useState } from "react";
import { API_KEY } from "./data/apiKey";
import CitySearch from "./components/CitySearch";
import MoonLoader from "react-spinners/ClipLoader";
import WeatherDetails from "./components/WeatherDetails";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// App component
const App = () => {
	// State variables
	const [cityName, setCityName] = useState("");

	const {
		data: weatherInfo,
		isError,
		isLoading,
	} = useQuery({
		queryKey: ["city", cityName],
		queryFn: () => getCityWeatherDetails(cityName),
	});

	// Function to get city weather details
	const getCityWeatherDetails = async (city: string) => {
		try {
			if (!city) return;

			setCityName(city);
			// Fetching weather data from the API
			const { data: resp } = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
			);

			return resp;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{/* Rendering the CitySearch component */}
			<CitySearch getCityWeatherDetails={getCityWeatherDetails} />

			{/* Info container */}
			{cityName ? (
				<div className="w-full h-20 text-white mt-5 flex flex-col items-center">
					{/* Conditional rendering based on loading and error states */}
					{isLoading ? (
						// Displaying a loading spinner if data is being fetched
						<MoonLoader color="#67E8F9" size={50} />
					) : isError ? (
						// Displaying the error message if there is an error
						<p className="text-red-500">No City Found!</p>
					) : (
						// Rendering the WeatherDetails component if there are no errors
						<WeatherDetails
							weatherInfo={weatherInfo}
						></WeatherDetails>
					)}
				</div>
			) : (
				""
			)}
		</>
	);
};

export default App;
