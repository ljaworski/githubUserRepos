import React from "react";
import Input from "../Input";
import renderer from "react-test-renderer";

const props = {
  onChange: () => {},
  value: "test",
  placeholder: "Test"
};

test("renders correctly", () => {
  const input = renderer.create(<Input {...props} />).toJSON();
  expect(input).toMatchSnapshot();
});
