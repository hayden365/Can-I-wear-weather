import React, { useEffect, useState } from "react";
import { getWeather } from "../api/weather";
import Today from "../components/Today";

type Props = {};

const Home = (props: Props) => {
	// navigator.geolocation.getCurrentPosition(positionSuccess);

	// function positionSuccess({ coords }: GeolocationPosition) {
	// 	getWeather(
	// 		coords.latitude,
	// 		coords.longitude,
	// 		Intl.DateTimeFormat().resolvedOptions().timeZone,
	// 	)
	// 		.then(renderWeather)
	// 		.catch(e => {
	// 			console.log(e);
	// 			alert("error getting weather.");
	// 		});
	// }
	// function renderWeather({ current, daily, hourly }) {
	// 	renderCurrentWeather(current);
	// }

	return (
		<>
			<Today />
		</>
	);
};

export default Home;
