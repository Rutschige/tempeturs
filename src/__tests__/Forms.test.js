import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
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
    const event = {
      target: {
        name: "name",
        value: "test"
      }
    };
    const expected = {
      name: "test",
      type: undefined,
      description: undefined,
      inputDisabled: false,
      alertVisible: false,
      infoChanged: true
    };
    wrapper.instance().handleChange(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing submitChanges function", () => {
    const event = {};
    const expected = {
      name: "test",
      type: undefined,
      description: undefined,
      inputDisabled: true,
      alertVisible: true,
      infoChanged: true
    };
    wrapper.instance().submitChanges(event);
    expect(wrapper.state()).toEqual(expected);
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
        value: "test"
      }
    };
    const expected = {
      bio: "test",
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
      bio: "test",
      inputDisabled: true,
      alertVisible: true,
      bioChanged: true
    };
    wrapper.instance().submitChanges(event);
    expect(wrapper.state()).toEqual(expected);
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

  it("testing handleChange function", () => {
    const event = {
      target: {
        name: "name",
        value: "test"
      }
    };
    const expected = {
      name: "test",
      email: undefined,
      rating: undefined,
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      inputDisabled: false,
      alertVisible: false,
      infoChanged: true
    };
    wrapper.instance().handleChange(event);
    expect(wrapper.state()).toEqual(expected);
  });

  it("testing submitChanges function", () => {
    const event = {};
    const expected = {
      name: "test",
      email: undefined,
      rating: undefined,
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      inputDisabled: true,
      alertVisible: true,
      infoChanged: true
    };
    wrapper.instance().submitChanges(event);
    expect(wrapper.state()).toEqual(expected);
  });
});
