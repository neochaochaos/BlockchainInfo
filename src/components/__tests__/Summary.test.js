import React from "react";
import Summary from "../Summary";
import mockBlockchainInfo from "../../mockBlockchainInfo.json";
import { shallow, mount } from "enzyme";
import { ListGroupItem } from "reactstrap";

describe("Summary", () => {
    let wrapper;
    delete mockBlockchainInfo.tx;
    beforeEach(() => {
        wrapper = shallow(<Summary summary={mockBlockchainInfo} />);
    });

    it("should have correct number of list item", () => {
        expect(wrapper.find(ListGroupItem).length).toBe(
            JSON.stringify(mockBlockchainInfo).match(/[^\\]":/g).length
        );
    });

    it("should have corret information dispalyed", () => {
        wrapper = mount(<Summary summary={mockBlockchainInfo} />);
        wrapper.find(ListGroupItem).forEach(item => {
            const text = item.text();
            const key = text.slice(0, text.indexOf(":"));
            const value = text.slice(text.indexOf(":") + 2);
            expect(value).toBe(mockBlockchainInfo[key].toString());
        });
        wrapper.unmount();
    });
});
