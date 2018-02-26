import React from "react";

class Weather extends React.Component {
    render() {
        const {weather} = this.props;
        var icon;
        var url;
        if(weather.list){
            icon = weather.list[0].weather[0].icon;
            url = `http://openweathermap.org/img/w/${icon}.png`;
        }
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header alert-primary alert">
                        City Information
                    </div>
                    <div className="card-body font-weight-bold">
                        <h5 className="card-title">{weather.city ? weather.city.name : weather.loading ? weather.loading : "City Name"}</h5>
                        {url && <img src={url} alt="weather icon"/>}
                        <p className="card-text">Lat/Long: {weather.city ? `${weather.city.coord.lat}, ${weather.city.coord.lon}` : weather.loading}</p>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Temperature (F)</div>
                                <div className="text-success">{weather.list ? `${weather.list[0].main.temp}F` : weather.loading}</div>
                            </div>
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Pressure</div>
                                <div className="text-success">{weather.list ? weather.list[0].main.pressure : weather.loading}</div>
                            </div>
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Humidity</div>
                                <div className="text-success">{weather.list ? `${weather.list[0].main.humidity}%` : weather.loading}</div>
                            </div>
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Lowest Temp (F)</div>
                                <div className="text-success">{weather.list ? `${weather.list[0].main.temp_min}F` : weather.loading}</div>
                            </div>
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Highest Temp (F)</div>
                                <div className="text-success">{weather.list ? `${weather.list[0].main.temp_max}F` : weather.loading}</div>
                            </div>
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Wind Speed</div>
                                <div className="text-success">{weather.list ? `${weather.list[0].wind.speed}mph` : weather.loading}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;