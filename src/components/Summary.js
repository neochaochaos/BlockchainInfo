import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";

class Summary extends Component {
    render() {
        const listgroup = [];
        for (const key in this.props.summary) {
            if (key === "tx") continue;
            listgroup.push(
                <ListGroupItem key={key}>{`${key}: ${
                    this.props.summary[key]
                }`}</ListGroupItem>
            );
        }
        return (
            <div className="container w-75 p-3">
                <h1>Summary</h1>
                <ListGroup>{listgroup}</ListGroup>
            </div>
        );
    }
}

export default Summary;
