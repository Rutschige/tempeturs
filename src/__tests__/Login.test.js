import React from "react";
import ReactDOM from "react-dom";
import Login from "../pages/Login";
import { Button, UncontrolledAlert } from "reactstrap";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("Login shallow renders without crashing", () => {
  shallow(<Login />);
});

it("Login renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Login renders correctly compared to snapshot", () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Login functions", () => {
  const wrapper = shallow(<Login />);

  it("testing handleChange function", () => {
    const emailEvent = {
      target: {
        name: "email",
        value: "test@test.com"
      }
    };
    const passEvent = {
      target: {
        name: "password",
        value: "testP123123"
      }
    };
    const expected = {
      email: "test@test.com",
      password: "testP123123",
      validate: {
        emailState: "",
        passwordState: ""
      },
      loginValidated: false,
      alertVisible: false
    };
    wrapper.instance().handleChange(emailEvent);
    wrapper.instance().handleChange(passEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing validateEmail function", () =>{
    const failEvent = {
      target: {
        name: "email",
        value: "123invalid"
      }
    }

    const failExpected = {
      email: "test@test.com",
      password: "testP123123",
      validate: {
        emailState: "has-danger",
        passwordState: ""
      },
      loginValidated: false,
      alertVisible: false
    };

    const passEvent = {
      target: {
        name: "email",
        value: "test@test.com"
      }
    }

    const passExpected = {
      email: "test@test.com",
      password: "testP123123",
      validate: {
        emailState: "has-success",
        passwordState: ""
      },
      loginValidated: false,
      alertVisible: false
    };

    wrapper.instance().validateEmail(failEvent);
    expect(wrapper.state()).toEqual(failExpected);

    wrapper.instance().validateEmail(passEvent);
    expect(wrapper.state()).toEqual(passExpected);
  });

  it("testing validatePassword function", () =>{
    const failEvent = {
      target: {
        name: "password",
        value: ""
      }
    }

    const failExpected = {
      email: "test@test.com",
      password: "testP123123",
      validate: {
        emailState: "has-success",
        passwordState: "has-danger"
      },
      loginValidated: false,
      alertVisible: false
    };

    const passEvent = {
      target: {
        name: "password",
        value: "testP123123"
      }
    }

    const passExpected = {
      email: "test@test.com",
      password: "testP123123",
      validate: {
        emailState: "has-success",
        passwordState: "has-success"
      },
      loginValidated: false,
      alertVisible: false
    };

    wrapper.instance().validatePassword(failEvent);
    expect(wrapper.state()).toEqual(failExpected);

    wrapper.instance().validatePassword(passEvent);
    expect(wrapper.state()).toEqual(passExpected);
  });

  it("testing handleSubmit function", () => {
    const event = {};
    const expected = {
      email: "test@test.com",
      password: "testP123123",
      validate: {
        emailState: "has-success",
        passwordState: "has-success"
      },
      loginValidated: false,
      alertVisible: true
    };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing showAlert function", () => {
    expect(wrapper.instance().showAlert(true)).toEqual(
      <UncontrolledAlert color="success">
        Login Successful. Welcome Back!
        <Button color="link" href="/userprofile">
          Proceed to Profile Page
        </Button>
      </UncontrolledAlert>
    );
    expect(wrapper.instance().showAlert(false)).toEqual(
      <UncontrolledAlert color="danger">
        Login Unsuccessful. Invalid Username and/or Password.
      </UncontrolledAlert>
    );
  });
});
