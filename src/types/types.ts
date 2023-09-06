export type weatherDetailsType = {
	name: string;
	main: {
		feels_like: number;
		humidity: number;
		pressure: number;
		temp: number;
		temp_max: number;
		temp_min: number;
	};
	weather: [{ id: number; main: string; description: string; icon: string }];
	wind: { speed: number; deg: number };
};

export type WeatherProps = {
	getCityWeatherDetails: (city: string) => void;
};
