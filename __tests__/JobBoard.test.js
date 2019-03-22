import React from "react";
import ReactDOM from "react-dom";
import JobBoard from "../pages/JobBoard";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

it("JobBoard shallow renders without crashing", () => {
  shallow(<JobBoard />);
});

it("JobBoard renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<JobBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('JobBoard renders correctly compared to snapshot', () => {
  const tree = renderer
    .create(<JobBoard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
