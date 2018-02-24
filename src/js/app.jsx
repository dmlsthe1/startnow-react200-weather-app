import React from 'react';
import Weather from "./components/weather";
import History from "./components/history";
import Search from "./components/search";
import Forecast from "./components/forecast"

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Origin Weather Application</h1>
            <p className="lead">Always know if you'll need an umbrella!</p>
          </div>
        </div>

        <Search />

        <div className="row">
          <div className="col-md-6">
            <Weather />
          </div>
          <div className="col-md-6">
            <History />
          </div>
          <div className="col">
            <Forecast />
          </div>
        </div>
      </div>
    );
  }
}
