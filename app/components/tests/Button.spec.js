import React from "react";
import Button from "../Button";
import renderer from "react-test-renderer";

const props = {
  label: "Test",
  onClick: () => {}
};

test("renders correctly", () => {
  const button = renderer.create(<Button {...props} />).toJSON();
  expect(button).toMatchSnapshot();
});
