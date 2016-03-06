import axios from "axios";

const WEATHER_API_KEY = "380170ad0ee01fe048ecc89e68a8b13d";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}&units=metric`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},CA`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}