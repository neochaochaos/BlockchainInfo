import React, { Component } from "react";
import { ListGroup, ListGroupItem, Collapse } from "reactstrap";

class CollapseListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    };

    render() {
        return (
            <ListGroupItem>
                <button className="btn btn-info" onClick={this.toggle}>
                    {this.props.itemKey + ": "}
                </button>
                <Collapse isOpen={this.state.collapse}>
                    {this.props.itemValue instanceof Array ? (
                        <ListGroup>
                            {this.props.itemValue.map(value => value)}
                        </ListGroup>
                    ) : (
                        this.props.itemValue
                    )}
                </Collapse>
            </ListGroupItem>
        );
    }
}
export default CollapseListItem;
