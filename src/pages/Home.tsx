import React, { useEffect, useState } from "react";
import { getWeather } from "../api/weather";
import Today from "../components/Today";
import { useQuery } from "react-query";

type Props = {};

const Home = (props: Props) => {
	const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });
	useEffect(() => {
		const successCallback: PositionCallback = location => {
			setCoords(location.coords);
		};
		const errorCallback: PositionErrorCallback = error => {
			console.error("Error getting geolocation:", error);
		};

		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};
		navigator.geolocation.getCurrentPosition(
			successCallback,
			errorCallback,
			options,
		);
	}, []);

	const { data, isLoading, error } = useQuery("weatherData", () =>
		getWeather(
			coords.latitude,
			coords.longitude,
			Intl.DateTimeFormat().resolvedOptions().timeZone,
		),
	);

	return (
		<>
			<Today data={data} />
		</>
	);
};

export default Home;
