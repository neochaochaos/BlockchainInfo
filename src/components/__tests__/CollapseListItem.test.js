import React from "react";
import mockBlockchainInfo from "../../mockBlockchainInfo.json";
import { shallow, mount } from "enzyme";
import CollapseListItem from "../CollapseListItem";
import { ListGroup, ListGroupItem, Collapse } from "reactstrap";

describe("CollapseListItem", () => {
    let data;
    let wrapper;
    let mockToggle;
    beforeEach(() => {
        data = mockBlockchainInfo.tx;
        mockToggle = jest.fn();
        wrapper = shallow(<CollapseListItem itemKey={"tx"} itemValue={data} />);
    });

    it("should contains exactly one item and one button given a key-value parir and no sublist", () => {
        wrapper = shallow(
            <CollapseListItem itemKey={"tx"} itemValue={data[0].hash} />
        );
        expect(wrapper.find("button").length).toEqual(1);
        expect(wrapper.find(ListGroupItem).length).toEqual(1);
        expect(wrapper.find(ListGroup).length).toEqual(0);
    });

    it("should contains exactly one item, button and sublist given a array of key-value pair", () => {
        expect(wrapper.find("button").length).toEqual(1);
        expect(wrapper.find(ListGroupItem).length).toEqual(1);
        expect(wrapper.find(ListGroup).length).toEqual(1);
    });

    it("the default state of the item should be false", () => {
        expect(wrapper.state("collapse")).toBe(false);
    });

    it("should change collapse state from false to true after toggling", () => {
        wrapper.instance().toggle(mockToggle);
        expect(wrapper.state("collapse")).toBe(true);
    });

    it("should change collapse state from true to false after toggling", () => {
        wrapper.setState({ collapse: true });
        wrapper.instance().toggle(mockToggle);
        expect(wrapper.state("collapse")).toBe(false);
    });

    it("should contain correct hash text", () => {
        wrapper = mount(
            <CollapseListItem itemKey={"tx"} itemValue={data[0].hash} />
        );
        expect(wrapper.find(CollapseListItem).text()).toBe(
            `tx: ${data[0].hash}`
        );
        wrapper.unmount();
    });
});
