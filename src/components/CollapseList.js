import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import shortid from "shortid";
import CollapseListItem from "./CollapseListItem";

class CollapseList extends Component {
    constructor(props) {
        super(props);
        this.state = { tx: [] };
        this.tempTx = [];
        this.id = shortid.generate();
        this.count = 0;
    }
    //flatten json object to CollapseListItem component
    generateList(obj) {
        let result = [];
        if (obj instanceof Array) {
            let list = [];
            for (const item of obj) {
                list.push(this.generateList(item));
            }
            result.push(<ListGroup key={this.count++}>{list}</ListGroup>);
        } else {
            for (const key in obj) {
                let sublist = [];
                if (obj[key] instanceof Array || obj[key] instanceof Object) {
                    sublist = this.generateList(obj[key]);
                    result.push(
                        <CollapseListItem
                            key={key}
                            itemKey={key}
                            itemValue={sublist}
                        />
                    );
                } else {
                    result.push(
                        <CollapseListItem
                            itemKey={key}
                            itemValue={obj[key]}
                            key={key}
                        />
                    );
                }
            }
        }
        return result;
    }
    render() {
        return (
            <CollapseListItem
                key={this.props.index}
                itemKey={`Transaction: ${this.props.index}`}
                itemValue={this.generateList(this.props.tx)}
            />
        );
    }
}

export default CollapseList;
