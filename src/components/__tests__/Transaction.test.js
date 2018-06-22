import React from "react";
import { shallow } from "enzyme";
import mockBlockchainInfo from "../../mockBlockchainInfo.json";
import Transaction from "../Transaction";
import CollapseList from "../CollapseList";

describe("Transaction", () => {
    let wrapper;
    let tx;
    let mockEvent;
    beforeEach(() => {
        tx = mockBlockchainInfo.tx;
        mockEvent = jest.fn();
        wrapper = shallow(<Transaction tx={tx} />);
    });

    it("should have correct number of transactions", () => {
        expect(wrapper.find(CollapseList).length).toBe(2);
    });

    it("current page should be 1", () => {
        expect(wrapper.state("currentPage")).toBe(1);
    });

    it("should not dispaly previous button when at first page", () => {
        expect(wrapper.find("#prev").length).toBe(0);
    });

    it("should not dispaly next button when at first page", () => {
        expect(wrapper.find("#next").length).toBe(0);
    });

    it("should go to next page after next button is clicked", () => {
        wrapper.setState({ txPerPage: 1 });
        expect(wrapper.find("#prev").length).toBe(0);
        const currentPage = wrapper.state("currentPage");
        wrapper.instance().handleNextClick(mockEvent);
        expect(wrapper.state("currentPage")).toBe(currentPage + 1);
    });

    it("should go to previous page after previous button is clicked", () => {
        wrapper.setState({ currentPage: 2, txPerPage: 1 });
        expect(wrapper.find("#next").length).toBe(0);
        const currentPage = wrapper.state("currentPage");
        wrapper.instance().handlePrevClick(mockEvent);
        expect(wrapper.state("currentPage")).toBe(currentPage - 1);
    });
});
