import React from "react";
import { View, Text } from "react-native";
import { Spinner, List } from "native-base";
import { shallow } from "enzyme";
import { expect } from "chai";
import { ListScreen } from "../ListScreen";

const props = {
  repos: [
    {
      id: 1,
      name: "1",
      description: "desc",
      stargazers_count: 3
    },
    {
      id: 2,
      name: "2",
      description: "desc2",
      stargazers_count: 1
    }
  ],
  isFetching: false,
  darkMode: false
};

describe("ListScreen", () => {
  test("renders correctly", () => {
    const listScreen = shallow(<ListScreen {...props} />);

    expect(listScreen.find(View)).to.have.lengthOf(1);
    expect(listScreen.find(List)).to.have.lengthOf(1);
  });

  test("spinner renders correctly", () => {
    const newProps = {
      ...props,
      isFetching: true
    };
    const listScreen = shallow(<ListScreen {...newProps} />);
    expect(listScreen.contains(<Spinner />)).to.equal(true);
  });

  test("should render text if no repos", () => {
    const newProps = {
      ...props,
      repos: []
    };
    const listScreen = shallow(<ListScreen {...newProps} />);
    expect(listScreen.find(Text)).to.have.lengthOf(1);
  });
});
