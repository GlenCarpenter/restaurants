import React from "react";
import renderer from "react-test-renderer";
import { Paginator } from "../";

it("renders correctly", () => {
  const tree = renderer.create(<Paginator />).toJSON();
  expect(tree).toMatchSnapshot();
});
