import React, { useEffect, useState } from "react";
import "./Home.css";

type Props = {};

const Home = (props: Props) => {
	const [gps, setGps] = useState({
		latitude: 0,
		longitude: 0,
	});

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(position => {
				setGps({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				});
			});
		}
	}, []);

	return (
		<div className="location">
			<span>위도 : {gps.latitude}</span>
			<span>경도 : {gps.longitude}</span>
		</div>
	);
};

export default Home;
