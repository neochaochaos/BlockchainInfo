import React from "react";
import { shallow } from "enzyme";
import SearchForm from "../SearchForm";
import Summary from "../Summary";
import Transaction from "../Transaction";
import App from "../App";
import mockBlockchainInfo from "../../mockBlockchainInfo.json";

describe("App", () => {
    let wrapper;
    let mockEvent;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("shows a search form", () => {
        expect(wrapper.find(SearchForm).length).toEqual(1);
    });

    it("shows summary and transaction list after handleResult is called", () => {
        wrapper.setState({ blockchainInfo: mockBlockchainInfo });
        expect(wrapper.find(Summary).length).toEqual(1);
        expect(wrapper.find(Transaction).length).toEqual(1);
        expect(wrapper.find("#input-hash-btn").length).toEqual(1);
    });
});
