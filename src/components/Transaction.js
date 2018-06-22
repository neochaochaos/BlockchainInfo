import React, { Component } from "react";
import CollapseList from "./CollapseList";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            txPerPage: 5
        };
    }
    handleClick = event => {
        this.setState({ currentPage: event.target.id });
    };
    handlePrevClick = () => {
        this.setState(prevState => {
            if (prevState.currentPage > 1) {
                return { currentPage: prevState.currentPage - 1 };
            }
        });
    };
    handleNextClick = () => {
        this.setState(prevState => {
            return { currentPage: prevState.currentPage + 1 };
        });
    };
    render() {
        const { currentPage, txPerPage } = this.state;
        const indexOfLastTx = currentPage * txPerPage;
        const indexOfFirstTx = indexOfLastTx - txPerPage;
        const currentTx = this.props.tx.slice(indexOfFirstTx, indexOfLastTx);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.tx.length / txPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <PaginationItem key={number} onClick={this.handleClick}>
                    <PaginationLink id={number}>{number}</PaginationLink>
                </PaginationItem>
            );
        });
        return (
            <div className="container w-75 p-3">
                <h1>Transaction</h1>
                {currentTx.map((tx, index) => {
                    return (
                        <div key={index}>
                            <CollapseList
                                key={(currentPage - 1) * txPerPage + index}
                                index={(currentPage - 1) * txPerPage + index}
                                tx={tx}
                            />
                        </div>
                    );
                })}

                <Pagination>
                    {pageNumbers.length !== 0 &&
                    pageNumbers[0] !== currentPage ? (
                        <PaginationItem>
                            <PaginationLink
                                id="prev"
                                previous
                                onClick={this.handlePrevClick}
                            />
                        </PaginationItem>
                    ) : null}
                    {renderPageNumbers}
                    {currentPage !== pageNumbers[pageNumbers.length - 1] ? (
                        <PaginationItem>
                            <PaginationLink
                                id="next"
                                next
                                onClick={this.handleNextClick}
                            />
                        </PaginationItem>
                    ) : null}
                </Pagination>
            </div>
        );
    }
}

export default Transaction;
