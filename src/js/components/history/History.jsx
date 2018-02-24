import React from "react";
import dateFormat from "dateformat";

class History extends React.Component {
    render() {
        var history = [...this.props.history];
        history.reverse();
        return (
            <div>
                <div className="card">
                    <div className="card-header text-center alert alert-primary">
                        Search History
                    </div>
                    <div className="container">
                        <table className="table table-striped">
                            <tbody>
                                {history.map((historyItem, index) => {
                                    let date = dateFormat(historyItem.date, "mmm-dd-yyyy hh:MM:ss");
                                    return (
                                        <tr key={index}>
                                            <td>{historyItem.input}</td>
                                            <td>{date}</td>
                                            <td>{historyItem.success}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default History;