import React from "react";
import ReactDOM from "react-dom";
import Home from "../pages/Home";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

it("Home shallow renders without crashing", () => {
  shallow(<Home />);
});

it("Home renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Home renders correctly compared to snapshot', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
