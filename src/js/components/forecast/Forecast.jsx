import React from "react";
import dateFormat from "dateformat";

export default class Forecast extends React.Component{
    render(){
        var days = [];
        var {weather} = this.props;
        if (weather.list){
            for (let i=0; i < weather.list.length; i+=8){
                days.push(weather.list[i]);
            }
        }

        return (
            <div className="card text-center">
                <div className="card-header alert-primary alert">
                    Forecast
                </div>
                <div className="card-body font-weight-bold">
                    <h5 className="card-title">{weather.city ? weather.city.name : weather.loading ? weather.loading : "City Name"}</h5>
                    <p className="card-text">Lat/Long: {weather.city ? `${weather.city.coord.lat}, ${weather.city.coord.lon}` : weather.loading}</p>
                </div>
                <div className="card-body">
                    {days.length > 0 && days.map((day, i) => {
                        let icon = day.weather[0].icon;
                        let url = `http://openweathermap.org/img/w/${icon}.png`
                        return (<div className="row" key={i}>
                            <div className="col-md-3 col-sm-6 my-3">
                                <div className="font-weight-bold">Day</div>
                                <div className="text-success">{dateFormat(day.dt_txt, "mmm-dd-yyyy hh:MM")}</div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-3">
                                <img src={url} alt="weather"/>
                                <div className="text-success">{day.weather[0].description}</div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-3">
                                <div className="font-weight-bold">Highest Temp</div>
                                <div className="text-success">{`${day.main.temp_max}F`}</div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-3">
                                <div className="font-weight-bold">Lowest Temp (F)</div>
                                <div className="text-success">{`${day.main.temp_min}F`}</div>
                            </div>
                            <br />
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}