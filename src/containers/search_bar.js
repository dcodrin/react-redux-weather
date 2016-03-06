import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };

        //Create new functions with the "this" bound to the current component instance
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();

        //Fetch weather data here
        //Access to the fetchWeather function is given by the mapDispatchToProps function
        this.props.fetchWeather(this.state.input);
        //Clear input field
        this.setState({
            input: ""
        })
    }

    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.input} onChange={this.handleInputChange} placeholder="Enter city name" className="form-control"/>
              <span className="input-group-btn">
                  <button className="btn btn-secondary" type="submit">Submit</button>
              </span>
                </form>
            </div>
        );
    }
}

//Anything returned from this function will end up as props on the SearchBar container. In this case we will have access to this.props.fetchWeather in the container.
function mapDispatchToProps(dispatch){
    //When fetchWeather is called bindActionCreators will make sure that the result of that action flows through the different reducers.
    return bindActionCreators({fetchWeather}, dispatch);
}


//Since this container is not concerned with the redux state we pass in null as the first argument to connect.
export default connect(null, mapDispatchToProps)(SearchBar);


