import axios from "axios";

const instance = axios.create({
	baseURL: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
	timeout: 1000,
});

export async function getNowWeather() {
	const data = await instance.get("getUltraSrtNcst").then(function (response) {
		console.log(response);
	});

	return data;
}
