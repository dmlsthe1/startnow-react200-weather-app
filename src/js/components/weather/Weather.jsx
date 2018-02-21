import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header alert-primary alert">
                        City Information
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Tokyo</h5>
                        <p className="card-text">Lat/Long:12.34,567.89</p>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Temperature (F)</div>
                                <div className="text-success">65.62F</div>
                            </div>
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Pressure</div>
                                <div className="text-success">997</div>
                            </div>
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Humidity</div>
                                <div className="text-success">39%</div>
                            </div>
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Lowest Temp (F)</div>
                                <div className="text-success">62.01F</div>
                            </div>
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Highest Temp (F)</div>
                                <div className="text-success">71.01F</div>
                            </div>
                            <div className="col-md-4 col-sm-6 my-3">
                                <div className="font-weight-bold">Wind Speed</div>
                                <div className="text-success">24.16mph</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;