import React, { Component } from "react";
import { Collapse, Table } from "reactstrap";

class CollapseTable extends Component {
    constructor(props) {
        super(props);
    }

    // extract(obj) {
    //     for (const key in obj) {
    //         if (obj.hasOwnProperty(key)) {
    //             if (typeof obj[key] === "object") {
    //                 this.extract(obj[key]);
    //             } else {
    //                 const newItem = {
    //                     id: shortid.generate(),
    //                     key: key,
    //                     value: obj[key]
    //                 };
    //                 this.tempTx.push(newItem);
    //             }
    //         }
    //     }
    // }

    // updateTx() {
    //     this.tempTx = [];
    //     this.extract(this.props.tx);
    //     this.setState({ tx: this.tempTx });
    // }
    //
    // componentWillReceiveProps() {
    //     this.updateTx();
    // }
    // componentDidMount() {
    //     this.updateTx();
    // }

    // toggle() {
    //     this.setState({ collapse: !this.state.collapse });
    // }

    // getList() {
    //     const list = [];
    //     for (const key in this.props.tx) {
    //         list.push(
    //             <Collapse key={key} isOpen={this.state.collapse}>
    //                 <CollapseListItem
    //                     itemKey={key}
    //                     itemValue={this.props.tx[key]}
    //                 />
    //             </Collapse>
    //         );
    //     }
    //     return list;
    // }

    //     render() {
    //         return (
    //             <ListGroup className="m-1">
    //                 <span>
    //                     Transaction {this.props.index}
    //                     <button
    //                         className="btn btn-info float-right"
    //                         onClick={this.toggle}
    //                     >
    //                         +
    //                     </button>
    //                 </span>
    //
    //                 {this.getList()}
    //             </ListGroup>
    //         );
    //     }
    render() {
        <Collapse>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Field</th>
                        <th>Description</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.transaction.map(tx => {
                        // <tr>
                        // tx.map((node, index) => {
                        //     if (node) {
                        //         return <td>{node}</td>
                        //     }
                        // })
                        // </tr>
                        //     <tr>
                        //         <td>"ver"</td>
                        //         <td>"Transaction Protocol Version"</td>
                        //         <td>tx.ver</td>
                        //     </tr>;
                        //     <tr>
                        //         <td>ver</td>
                        //         <td>"Number of inputs"</td>
                        //         <td>tx.vin_sz</td>
                        //     </tr>;
                        //     <tr>
                        //         <td>"ver"</td>
                        //         <td>"Number of outputs"</td>
                        //         <td>tx.vout_sz</td>
                        //     </tr>;
                        //     <tr>
                        //         <td>"ver"</td>
                        //         <td>
                        //             `Time until the transaction is locked (not
                        //             allowed to be accepted into a block)`
                        //         </td>
                        //         <td>tx.lock_time</td>
                        //     </tr>;
                        //     <tr>
                        //         <td>"size"</td>
                        //         <td>"TSize of the transaction in bytes."</td>
                        //         <td>tx.size</td>
                        //     </tr>;
                        //     <tr>
                        //         <td>"in"</td>
                        //         <td>"in Inputs to this transaction."</td>
                        //         // <td>tx.in</td>
                        //     </tr>;
                        //     <tr>
                        //         <td>"prev_out"</td>
                        //         <td>
                        //             "Reference to the previous output that this
                        //             input spends."
                        //         </td>
                        //         <td>tx.in.prev_out</td>
                        //     </tr>;
                        //     <tr>
                        //         <td>"hash"</td>
                        //         <td>"hash Hash of the previous transaction."</td>
                        //         <td>tx.in.hash</td>
                        //     </tr>;
                        //     <tr>
                        //         <td>"n"</td>
                        //         <td>
                        //             "Index of the output in the previous transaction
                        //             0."
                        //         </td>
                        //         <td>tx.in.n</td>
                        //     </tr>;
                        //     <tr>
                        //         <td>"scriptSig"</td>
                        //         <td>
                        //             "Signature Script satisfying the requirements of
                        //             the previous outputs Pubkey Script."
                        //         </td>
                        //         <td>tx.in.scriptSig</td>
                        //     </tr>;
                        //
                    })}
                </tbody>
            </Table>
        </Collapse>;
    }
}
