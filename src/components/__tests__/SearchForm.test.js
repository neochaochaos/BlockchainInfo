import React from "react";
import { shallow } from "enzyme";
import mockBlockchainInfo from "../../mockBlockchainInfo.json";
import SearchForm from "../SearchForm";

describe("SearchForm", () => {
    let mockEvent;
    let mockHash;
    let mockHandleResult;
    let wrapper;
    beforeEach(() => {
        mockEvent = { preventDefault: jest.fn() };
        mockHash =
            "00000000d1145790a8694403d4063f323d499e655c83426834d4ce2f8dd4a2ee";
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                status: 200,
                json: () =>
                    Promise.resolve({
                        blockchainInfo: mockBlockchainInfo
                    })
            })
        );
        mockHandleResult = jest.fn();
        wrapper = shallow(<SearchForm handleResult={mockHandleResult} />);
    });
    it("calls fetch once with the correct hash", () => {
        wrapper.setState({ hash: mockHash });
        wrapper.instance().handleSubmit(mockEvent);

        expect(window.fetch).toHaveBeenCalledWith(
            "/block/00000000d1145790a8694403d4063f323d499e655c83426834d4ce2f8dd4a2ee.json"
        );
        expect(window.fetch).toHaveBeenCalledTimes(1);
    });

    it("resets the state after making the request", async () => {
        await wrapper.instance().handleSubmit(mockEvent);
        wrapper.update();
        expect(wrapper.state("hash")).toEqual("");
    });

    it("calls the handleResult callback once after receive the data", async () => {
        await wrapper.instance().handleSubmit(mockEvent);
        expect(mockHandleResult).toHaveBeenCalledWith({
            blockchainInfo: mockBlockchainInfo
        });
        expect(mockHandleResult).toHaveBeenCalledTimes(1);
    });
});
