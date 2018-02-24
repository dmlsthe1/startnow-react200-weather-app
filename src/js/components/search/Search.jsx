import React from "react";

import {
    updateSearchInput,
    searchBtn,
    searchCache
} from "./searchActions"

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleUpdateSearchInput = this.handleUpdateSearchInput.bind(this);
        this.handleSearchBtn = this.handleSearchBtn.bind(this);
    }

    handleUpdateSearchInput(e){
        var input = e.target.value;
        const {dispatch} = this.props;
        dispatch(updateSearchInput(input));
    }

    handleSearchBtn(e){
        var {dispatch, cache, input} = this.props;
        var date = new Date();
        if (e.target.name == "options") {
            input = e.target.value;
        }
        if (!input) {
            return alert("Please enter city");
        }
        if (cache.hasOwnProperty(input) && date > cache[input].date) {
            return dispatch(searchCache(cache[input]));
        }
        dispatch(searchBtn(input));
    }

    render() {
        const {weather} = this.props;
        return (
            <div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-primary">
                        <input onClick={this.handleSearchBtn} value="San Diego" type="radio" name="options" id="option1" autoComplete="off" />San Diego
                    </label>
                    <label className="btn btn-primary">
                        <input onClick={this.handleSearchBtn} value="New York" type="radio" name="options" id="option2" autoComplete="off" />New York
                    </label>
                    <label className="btn btn-primary">
                        <input onClick={this.handleSearchBtn} value="District Of Columbia" type="radio" name="options" id="option3" autoComplete="off" />Washington D.C.
                    </label>
                    <label className="btn btn-primary">
                        <input onClick={this.handleSearchBtn} value="London" type="radio" name="options" id="option4" autoComplete="off" />London
                    </label>
                    <label className="btn btn-primary">
                        <input onClick={this.handleSearchBtn} value="Tokyo" type="radio" name="options" id="option5" autoComplete="off" />Tokyo
                    </label>
                </div>

                <div className="input-group mb-3">
                    <input onChange={this.handleUpdateSearchInput} type="text" className="form-control" placeholder="Type location here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button onClick={this.handleSearchBtn} className="btn btn-outline-secondary" type="button">Go!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;