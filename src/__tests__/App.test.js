import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import NavBar from "../components/NavBar";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

it("App shallow renders without crashing", () => {
  shallow(<App />);
});

it("App renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App renders correctly compared to snapshot', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe("NavBar functions", () => {
  const wrapper = shallow(<NavBar />);
  it("testing toggle function", () => {
    wrapper.instance().toggle();
  });
});
