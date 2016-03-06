import React from 'react';
import {connect} from "react-redux";
import {Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine} from "react-sparklines";
import GoogleMaps from "../components/google_maps";



class WeatherList extends React.Component {
    //props are passed down from React.Component
    constructor(props){
        //super is used to call functions on an object's parent
        super(props);

        this.renderWeather = this.renderWeather.bind(this);
        this.renderChart = this.renderChart.bind(this);
    }

    average(data){

        let total = data.reduce((acc,next)=>{
            return ((acc + next))
        }, 0);

        return (total/data.length).toFixed(2)
    }

    renderChart(data, color){
        return (
            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
                <div>Average: {this.average(data)} {color === "blue" ? "C": color === "green" ? "hPa" : color === "red" ? "%" : ""}</div>
            </Sparklines>
        );
    }

    renderWeather(cityData) {
        console.log(cityData)
        const temps = cityData.list.map(weather=>{
            return weather.main.temp
        });
        const press = cityData.list.map(weather=>{
            return weather.main.pressure
        });
        const humids = cityData.list.map(weather=>{
            return weather.main.humidity
        });

        const lng = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;

        return (
            <tr key={cityData.city.id}>
                <td><GoogleMaps lng={lng} lat={lat}/></td>
                <td>
                    {this.renderChart(temps, "blue")}
                </td>
                <td>
                    {this.renderChart(press, "green")}
                </td>
                <td>
                    {this.renderChart(humids, "red")}
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (&deg;C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

//The current instance of WeatherList will have as it's props weather.
function mapStateToProps(state) {
    return {weather: state.weather}
}


export default connect(mapStateToProps)(WeatherList);
