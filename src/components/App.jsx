import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
          <SearchBar />
          <WeatherList />
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
