// Importing necessary dependencies and types
import { useRef, useState } from "react";
import { WeatherProps } from "../types/types";

// CitySearch component
const CitySearch = ({ getCityWeatherDetails }: WeatherProps) => {
	// State variables
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	// Function to handle input value change
	const handleInputValueChange = (value: string) => {
		setInputValue(value);
	};

	return (
		<form
			className="flex flex-col gap-y-5 max-w-[200px]"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			{/* Input field */}
			<input
				ref={inputRef}
				type="text"
				placeholder="select your city"
				className="outline-none p-1.5 rounded bg-cyan-300 max-w-[200px] placeholder:text-[14px]"
				onChange={() => {
					if (inputRef.current) {
						handleInputValueChange(inputRef.current.value);
					}
				}}
			/>
			{/* Search button */}
			<input
				type="submit"
				value="Search"
				disabled={!inputValue ? true : false}
				onClick={() => {
					if (inputValue) getCityWeatherDetails(inputValue);
				}}
				className="rounded p-1 bg-cyan-400 active:scale-90 transition disabled:bg-slate-500 disabled:cursor-not-allowed cursor-pointer"
			/>
		</form>
	);
};

export default CitySearch;
