import React from "react";
import { shallow, mount } from "enzyme";
import mockBlockchainInfo from "../../mockBlockchainInfo.json";
import CollapseList from "../CollapseList";
import CollapseListItem from "../CollapseListItem";

describe("CollapseList", () => {
    let tx;
    let wrapperShallow;
    let wrapperMount;
    let list;
    let generateList;
    beforeEach(() => {
        tx = mockBlockchainInfo.tx[0];
        generateList = jest.fn();
        wrapperShallow = shallow(<CollapseList tx={tx} />);
        wrapperMount = mount(<CollapseList index={1} tx={tx} />);
    });
    it("should contain exactly one transaction", () => {
        expect(wrapperShallow.find(CollapseListItem).length).toBe(1);
    });

    it("should containe correct number of key-value pairs", () => {
        expect(wrapperMount.find(CollapseListItem).length).toBe(
            JSON.stringify(tx).match(/[^\\]":/g).length + 1
        );
    });

    afterEach(() => {
        wrapperMount.unmount();
    });
});
