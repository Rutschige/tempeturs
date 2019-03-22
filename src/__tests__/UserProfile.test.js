import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "../pages/UserProfile";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

it("UserProfile shallow renders without crashing", () => {
  shallow(<UserProfile />);
});

it("UserProfile renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('UserProfile renders correctly compared to snapshot', () => {
  const tree = renderer
    .create(<UserProfile />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
