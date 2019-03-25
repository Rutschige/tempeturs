import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  UncontrolledAlert
} from "reactstrap";
import renderer from "react-test-renderer";
import PetInfoForm from "../components/Forms/PetInfoForm";
import UserBioForm from "../components/Forms/UserBioForm";
import UserInfoForm from "../components/Forms/UserInfoForm";

// PetInfoForm testing
it("PetInfoForm shallow renders without crashing", () => {
  shallow(<PetInfoForm />);
});

describe("PetInfoForm functions", () => {
  const wrapper = shallow(<PetInfoForm />);
  it("testing editInfo function", () => {
    const event = {};
    const expected = {
      name: undefined,
      type: undefined,
      description: undefined,
      inputDisabled: false,
      alertVisible: false,
      infoChanged: false
    };
    wrapper.instance().editInfo(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing handleChange function", () => {
    const nameEvent = {
      target: {
        name: "name",
        value: "test name"
      }
    };
    const typeEvent = {
      target: {
        name: "type",
        value: "Dog"
      }
    };
    const descEvent = {
      target: {
        name: "description",
        value: "test test test"
      }
    };
    const expected = {
      name: "test name",
      type: "Dog",
      description: "test test test",
      inputDisabled: false,
      alertVisible: false,
      infoChanged: true
    };
    wrapper.instance().handleChange(nameEvent);
    wrapper.instance().handleChange(typeEvent);
    wrapper.instance().handleChange(descEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing submitChanges function", () => {
    const event = {};
    const expected = {
      name: "test name",
      type: "Dog",
      description: "test test test",
      inputDisabled: true,
      alertVisible: true,
      infoChanged: true
    };
    wrapper.instance().submitChanges(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing showAlert function", () => {
    expect(wrapper.instance().showAlert(true)).toEqual(
      <UncontrolledAlert color="success">
        Pet Information Successfully Updated!
      </UncontrolledAlert>
    );
    expect(wrapper.instance().showAlert(false)).toEqual(
      <UncontrolledAlert color="info">
        Pet Information Unchanged
      </UncontrolledAlert>
    );
  });
});

//UserBioForm testing
it("UserBioForm shallow renders without crashing", () => {
  shallow(<UserBioForm />);
});

describe("UserBioForm functions", () => {
  const wrapper = shallow(<UserBioForm />);
  it("testing editInfo function", () => {
    const event = {};
    const expected = {
      bio: undefined,
      inputDisabled: false,
      alertVisible: false,
      bioChanged: false
    };
    wrapper.instance().editBio(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing handleChange function", () => {
    const event = {
      target: {
        name: "bio",
        value: "test test test"
      }
    };
    const expected = {
      bio: "test test test",
      inputDisabled: false,
      alertVisible: false,
      bioChanged: true
    };
    wrapper.instance().handleChange(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing submitChanges function", () => {
    const event = {};
    const expected = {
      bio: "test test test",
      inputDisabled: true,
      alertVisible: true,
      bioChanged: true
    };
    wrapper.instance().submitChanges(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing showAlert function", () => {
    expect(wrapper.instance().showAlert(true)).toEqual(
      <UncontrolledAlert color="success">
        Bio Successfully Updated!
      </UncontrolledAlert>
    );
    expect(wrapper.instance().showAlert(false)).toEqual(
      <UncontrolledAlert color="info">Bio Unchanged</UncontrolledAlert>
    );
  });
});

//UserInfoForm testing
it("UserInfoForm shallow renders without crashing", () => {
  shallow(<UserInfoForm />);
});

describe("UserInfoForm functions", () => {
  const wrapper = shallow(<UserInfoForm />);

  it("testing editInfo function", () => {
    const event = {};
    const expected = {
      name: undefined,
      email: undefined,
      rating: undefined,
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      inputDisabled: false,
      alertVisible: false,
      infoChanged: false
    };
    wrapper.instance().editInfo(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing handleChange function with", () => {
    const nameEvent = {
      target: {
        name: "name",
        value: "test name"
      }
    };
    const emailEvent = {
      target: {
        name: "email",
        value: "test@test.com"
      }
    };
    const ratingEvent = {
      target: {
        name: "rating",
        value: "test rating"
      }
    };
    const add1Event = {
      target: {
        name: "address1",
        value: "test add1"
      }
    };
    const add2Event = {
      target: {
        name: "address2",
        value: "test add2"
      }
    };
    const cityEvent = {
      target: {
        name: "city",
        value: "test city"
      }
    };
    const stateEvent = {
      target: {
        name: "state",
        value: "test state"
      }
    };
    const zipEvent = {
      target: {
        name: "zip",
        value: "test zip"
      }
    };
    const expected = {
      name: "test name",
      email: "test@test.com",
      rating: "test rating",
      address1: "test add1",
      address2: "test add2",
      city: "test city",
      state: "test state",
      zip: "test zip",
      inputDisabled: false,
      alertVisible: false,
      infoChanged: true
    };
    wrapper.instance().handleChange(nameEvent);
    wrapper.instance().handleChange(emailEvent);
    wrapper.instance().handleChange(ratingEvent);
    wrapper.instance().handleChange(add1Event);
    wrapper.instance().handleChange(add2Event);
    wrapper.instance().handleChange(cityEvent);
    wrapper.instance().handleChange(stateEvent);
    wrapper.instance().handleChange(zipEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing submitChanges function", () => {
    const event = {};
    const expected = {
      name: "test name",
      email: "test@test.com",
      rating: "test rating",
      address1: "test add1",
      address2: "test add2",
      city: "test city",
      state: "test state",
      zip: "test zip",
      inputDisabled: true,
      alertVisible: true,
      infoChanged: true
    };
    wrapper.instance().submitChanges(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing showAlert function", () => {
    expect(wrapper.instance().showAlert(true)).toEqual(
      <UncontrolledAlert color="success">
        Personal Information Successfully Updated!
      </UncontrolledAlert>
    );
    expect(wrapper.instance().showAlert(false)).toEqual(
      <UncontrolledAlert color="info">
        Personal Information Unchanged
      </UncontrolledAlert>
    );
  });
});
