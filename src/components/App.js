import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Summary from "./Summary";
import Transaction from "./Transaction";
import CollapseListItem from "./CollapseListItem";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blockchainInfo: null
        };
    }

    handleResult = data => {
        this.setState({ blockchainInfo: data });
    };

    render() {
        let summary = null;
        let transaction = null;
        let hash = null;
        if (this.state.blockchainInfo) {
            const info = this.state.blockchainInfo;
            summary = <Summary summary={info} />;
            transaction = <Transaction tx={info.tx} />;
            hash = (
                <div id="input-hash-btn" className="container w-75 p-3">
                    <CollapseListItem itemKey="hash" itemValue={info.hash} />
                </div>
            );
        }
        return (
            <div>
                <h1>Blockchain Info</h1>
                <SearchForm handleResult={this.handleResult} />
                {hash}
                {summary}
                {transaction}
            </div>
        );
    }
}

export default App;
