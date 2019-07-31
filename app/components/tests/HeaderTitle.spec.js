import React from "react";
import HeaderTitle from "../HeaderTitle";
import renderer from "react-test-renderer";

const props = {
  title: "Test"
};

test("renders correctly", () => {
  const headerTitle = renderer.create(<HeaderTitle {...props} />).toJSON();
  expect(headerTitle).toMatchSnapshot();
});
