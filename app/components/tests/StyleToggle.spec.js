import React from "react";
import { StyleToggle } from "../StyleToggle";
import renderer from "react-test-renderer";

const props = {
  darkMode: false,
  toggleDarkMode: () => {}
};

test("renders correctly", () => {
  const styleToggle = renderer.create(<StyleToggle {...props} />).toJSON();
  expect(styleToggle).toMatchSnapshot();
});
