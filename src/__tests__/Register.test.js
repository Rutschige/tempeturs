import React from "react";
import ReactDOM from "react-dom";
import Register from "../pages/Register";
import { Button, UncontrolledAlert } from "reactstrap";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("Register shallow renders without crashing", () => {
  shallow(<Register />);
});

it("Register renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Register />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Register renders correctly compared to snapshot", () => {
  const tree = renderer.create(<Register />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Register functions", () => {
  const wrapper = shallow(<Register />);

  it("testing handleChange function", () => {
    const fnameEvent = {
      target: {
        name: "fullname",
        value: "test name"
      }
    };
    const emailEvent = {
      target: {
        name: "email",
        value: "test@test.com"
      }
    };
    const opassEvent = {
      target: {
        name: "password",
        value: "testP123123"
      }
    };
    const cpassEvent = {
      target: {
        name: "confirmpassword",
        value: "testP123123"
      }
    };
    const expected = {
      fullname: "test name",
      email: "test@test.com",
      password: "testP123123",
      confirmpassword: "testP123123",
      validate: {
        nameState: "",
        emailState: "",
        passwordState: "",
        confirmpasswordState: ""
      },
      registerValidated: false,
      alertVisible: false
    };
    wrapper.instance().handleChange(fnameEvent);
    wrapper.instance().handleChange(emailEvent);
    wrapper.instance().handleChange(opassEvent);
    wrapper.instance().handleChange(cpassEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing validateName function", () => {
    const failEvent = {
      target: {
        name: "fullname",
        value: "123invalid"
      }
    };
    const failExpected = {
      fullname: "test name",
      email: "test@test.com",
      password: "testP123123",
      confirmpassword: "testP123123",
      validate: {
        nameState: "has-danger",
        emailState: "",
        passwordState: "",
        confirmpasswordState: ""
      },
      registerValidated: false,
      alertVisible: false
    };

    const passEvent = {
      target: {
        name: "fullname",
        value: "test name"
      }
    };
    const passExpected = {
      fullname: "test name",
      email: "test@test.com",
      password: "testP123123",
      confirmpassword: "testP123123",
      validate: {
        nameState: "has-success",
        emailState: "",
        passwordState: "",
        confirmpasswordState: ""
      },
      registerValidated: false,
      alertVisible: false
    };

    wrapper.instance().validateName(failEvent);
    expect(wrapper.state()).toEqual(failExpected);

    wrapper.instance().validateName(passEvent);
    expect(wrapper.state()).toEqual(passExpected);
  });

  it("testing validateEmail function", () => {
    const failEvent = {
      target: {
        name: "email",
        value: "123invalid"
      }
    };
    const failExpected = {
      fullname: "test name",
      email: "test@test.com",
      password: "testP123123",
      confirmpassword: "testP123123",
      validate: {
        nameState: "has-success",
        emailState: "has-danger",
        passwordState: "",
        confirmpasswordState: ""
      },
      registerValidated: false,
      alertVisible: false
    };

    const passEvent = {
      target: {
        name: "email",
        value: "test@test.com"
      }
    };
    const passExpected = {
      fullname: "test name",
      email: "test@test.com",
      password: "testP123123",
      confirmpassword: "testP123123",
      validate: {
        nameState: "has-success",
        emailState: "has-success",
        passwordState: "",
        confirmpasswordState: ""
      },
      registerValidated: false,
      alertVisible: false
    };

    wrapper.instance().validateEmail(failEvent);
    expect(wrapper.state()).toEqual(failExpected);

    wrapper.instance().validateEmail(passEvent);
    expect(wrapper.state()).toEqual(passExpected);
  });

  it("testing validatePassword function", () => {
    const failEvent = {
      target: {
        name: "password",
        value: "123invalid"
      }
    };
    const failExpected = {
      fullname: "test name",
      email: "test@test.com",
      password: "testP123123",
      confirmpassword: "testP123123",
      validate: {
        nameState: "has-success",
        emailState: "has-success",
        passwordState: "has-danger",
        confirmpasswordState: ""
      },
      registerValidated: false,
      alertVisible: false
    };

    const passEvent = {
      target: {
        name: "password",
        value: "testP123123"
      }
    };
    const passExpected = {
      fullname: "test name",
      email: "test@test.com",
      password: "testP123123",
      confirmpassword: "testP123123",
      validate: {
        nameState: "has-success",
        emailState: "has-success",
        passwordState: "has-success",
        confirmpasswordState: ""
      },
      registerValidated: false,
      alertVisible: false
    };

    wrapper.instance().validatePassword(failEvent);
    expect(wrapper.state()).toEqual(failExpected);

    wrapper.instance().validatePassword(passEvent);
    expect(wrapper.state()).toEqual(passExpected);
  });

  it("testing validateConfirmPassword function", () => {
    const failEvent = {
      target: {
        name: "confirmpassword",
        value: "123invalid"
      }
    };
    const failExpected = {
      fullname: "test name",
      email: "test@test.com",
      password: "testP123123",
      confirmpassword: "testP123123",
      validate: {
        nameState: "has-success",
        emailState: "has-success",
        passwordState: "has-success",
        confirmpasswordState: "has-danger"
      },
      registerValidated: false,
      alertVisible: false
    };

    const passEvent = {
      target: {
        name: "confirmpassword",
        value: "testP123123"
      }
    };
    const passExpected = {
      fullname: "test name",
      email: "test@test.com",
      password: "testP123123",
      confirmpassword: "testP123123",
      validate: {
        nameState: "has-success",
        emailState: "has-success",
        passwordState: "has-success",
        confirmpasswordState: "has-success"
      },
      registerValidated: false,
      alertVisible: false
    };

    wrapper.instance().validateConfirmPassword(failEvent);
    expect(wrapper.state()).toEqual(failExpected);

    wrapper.instance().validateConfirmPassword(passEvent);
    expect(wrapper.state()).toEqual(passExpected);
  });

  it("testing handleSubmit function", () => {
    const event = {};
    const expected = {
      fullname: "test name",
      email: "test@test.com",
      password: "testP123123",
      confirmpassword: "testP123123",
      validate: {
        nameState: "has-success",
        emailState: "has-success",
        passwordState: "has-success",
        confirmpasswordState: "has-success"
      },
      registerValidated: true,
      alertVisible: true
    };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing showAlert function", () => {
    expect(wrapper.instance().showAlert(true)).toEqual(
      <UncontrolledAlert color="success">
        Registration Successful. Welcome Aboard!
        <Button color="link" href="/userprofile">
          Proceed to Profile Page
        </Button>
      </UncontrolledAlert>
    );
    expect(wrapper.instance().showAlert(false)).toEqual(
      <UncontrolledAlert color="danger">
        Registration Unsuccessful. Please try again.
      </UncontrolledAlert>
    );
  });
});
