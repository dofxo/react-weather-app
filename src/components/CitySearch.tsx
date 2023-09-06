import { useRef, useState } from "react";
import {WeatherProps} from "../types/types"


const CitySearch = ({ getCityWeatherDetails }: WeatherProps) => {
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleInputValueChange = (value: string) => {
		setInputValue(value);
	};

	return (
		<div className="flex flex-col gap-y-5 max-w-[200px]">
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
			<button
				type="submit"
				disabled={!inputValue ? true : false}
				onClick={() => {
					if (inputValue) getCityWeatherDetails(inputValue);
				}}
				className="rounded p-1 bg-cyan-400 active:scale-90 transition disabled:bg-slate-500 disabled:cursor-not-allowed cursor-pointer"
			>
				Search
			</button>
		</div>
	);
};

export default CitySearch;
