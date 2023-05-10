import axios from "axios";

/**미세먼지
 *https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.5235&longitude=13.4115&hourly=pm10,pm2_5&domains=cams_global&timezone=Asia%2FTokyo&timeformat=unixtime
 */

export function getWeather(lat: number, lon: number, timezone: string) {
	return axios
		.get(
			"https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&windspeed_unit=ms&timeformat=unixtime",
			{
				params: {
					latitude: lat,
					longitude: lon,
					timezone,
				},
			},
		)
		.then(({ data }) => {
			console.log(data);
			return {
				// current: parseCurrentWeather(data),
			};
		});
}

// function parseCurrentWeather({ current_weather, daily }) {}
