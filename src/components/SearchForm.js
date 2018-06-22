import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { hash: "" };
    }
    handleChange = event => {
        this.setState({ hash: event.target.value });
    };

    //fetch block chain data by call webbtc API and
    //pass it back to App component by calling handleResult callback
    handleSubmit = async event => {
        event.preventDefault();
        let json;
        try {
            const baseUrl = "/block/";
            const requestUrl = `${baseUrl}${this.state.hash}.json`;
            const response = await fetch(requestUrl);
            json = await response.json();
        } catch (error) {
            alert(error);
        }

        this.setState({ hash: "" });
        this.props.handleResult(json);
    };
    //render a input area and a submit button
    render() {
        return (
            <div className="container">
                <form
                    className="form-inline justify-content-center"
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="hash">Blockchain Hash: </label>
                        <input
                            className="form-control"
                            required
                            pattern="[0-9a-f]+"
                            type="text"
                            name="hash"
                            size="75"
                            placeholder="Enter Hash Here"
                            value={this.state.hash}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        );
    }
}

export default SearchForm;
