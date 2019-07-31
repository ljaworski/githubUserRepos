import React from "react";
import { ListItem } from "../ListItem";
import renderer from "react-test-renderer";

const props = {
  name: "test name",
  description: "description",
  stargazersCount: 3,
  darkMode: false
};

test("renders correctly", () => {
  const listItem = renderer.create(<ListItem {...props} />).toJSON();
  expect(listItem).toMatchSnapshot();
});
