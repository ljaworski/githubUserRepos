import React from "react";
import renderer from "react-test-renderer";
import { InputScreen } from "../InputScreen";

const props = {
  navigation: {
    navigate: () => {}
  },
  fetchGithubRepos: () => {},
  darkMode: false
};

test("InputScreen renders correctly", () => {
  const tree = renderer.create(<InputScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
