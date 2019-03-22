import React from "react";
import ReactDOM from "react-dom";
import Register from "../pages/Register";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

it("Register shallow renders without crashing", () => {
  shallow(<Register />);
});

it("Register renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Register />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Register renders correctly compared to snapshot', () => {
  const tree = renderer
    .create(<Register />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
