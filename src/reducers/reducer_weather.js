import {FETCH_WEATHER} from "../actions/index.js";

export default function (state = [], action) {
    //For this example use action.payload.data to access weather data.

    switch (action.type){
        case FETCH_WEATHER:
            //NOTICE: NEVER modify original state data. Do not use .push(). For this reason we use concat in one of the examples. Concat returns a new array.
            //return state.concat([action.payload.data])
            //We can also use es6 to return a new array.
            return [action.payload.data, ...state];
    }

    return state;
}