import {combineReducers} from "redux";
import WeatherReducer from "./reducer_weather.js";

const reducers = combineReducers({
    weather: WeatherReducer
});

export default reducers;