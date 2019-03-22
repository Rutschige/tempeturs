import React from "react";
import ReactDOM from "react-dom";
import Login from "../pages/Login";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

it("Login shallow renders without crashing", () => {
  shallow(<Login />);
});

it("Login renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Login renders correctly compared to snapshot', () => {
  const tree = renderer
    .create(<Login />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
