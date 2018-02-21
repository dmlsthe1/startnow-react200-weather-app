import React from "react";

class History extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header alert alert-primary">
                        Search History
                    </div>
                    <div className="container">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>San Diego</td>
                                    <td><div>04/28/2016</div><div>19:04:46</div></td>
                                </tr>
                                <tr>
                                    <td>New York</td>
                                    <td><div>04/28/2016</div><div>19:04:46</div></td>
                                </tr>
                                <tr>
                                    <td>Washington D.C.</td>
                                    <td><div>04/28/2016</div><div>19:04:46</div></td>
                                </tr>
                                <tr>
                                    <td>London</td>
                                    <td><div>04/28/2016</div><div>19:04:46</div></td>
                                </tr>
                                <tr>
                                    <td>Tokyo</td>
                                    <td><div>04/28/2016</div><div>19:04:46</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default History;