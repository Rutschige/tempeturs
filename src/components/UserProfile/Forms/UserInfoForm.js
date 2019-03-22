import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  UncontrolledAlert
} from "reactstrap";

class UserInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      email: "johndoe@gmail.com",
      rating: "4.5 out of 5",
      address1: "123 Main Street",
      address2: "Apt 58",
      city: "Houston",
      state: "TX",
      zip: "77007",
      inputDisabled: true,
      alertVisible: false,
      infoChanged: false
    };
    this.editInfo = this.editInfo.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editInfo(e) {
    this.setState({
      inputDisabled: false,
      alertVisible: false,
      infoChanged: false
    });
  }

  submitChanges(e) {
    this.setState({ inputDisabled: true, alertVisible: true });
    console.log(
      "[User Info]: \n [Name]: " +
        this.state.name +
        "\n [Email]: " +
        this.state.email +
        +"\n [Address 1]: " +
        this.state.address1 +
        "\n [Address 2]: " +
        this.state.address2 +
        "\n [City]: " +
        this.state.city +
        " \n [State]: " +
        this.state.state +
        "\n [ZIP]: " +
        this.state.zip
    );
    //post changes to database here
  }

  handleChange = async event => {
    //handles changes in input groups form user
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
      infoChanged: true
    });
  };

  showAlert() {
    const infoChanged = this.state.infoChanged;
    if (infoChanged) {
      return (
        <UncontrolledAlert color="success">
          Personal Information Successfully Updated!
        </UncontrolledAlert>
      );
    } else {
      return (
        <UncontrolledAlert color="info">
          Personal Information Unchanged
        </UncontrolledAlert>
      );
    }
  }

  render() {
    const inputDisabled = this.state.inputDisabled;
    const alertVisible = this.state.alertVisible;
    return (
      <>
        <Form>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name:</InputGroupAddon>
              <Input
                type="text"
                name="name"
                id="name"
                defaultValue={this.state.name}
                disabled={inputDisabled}
                required
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Email:</InputGroupAddon>
              <Input
                type="email"
                name="email"
                id="email"
                defaultValue={this.state.email}
                disabled={inputDisabled}
                required
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                Address Line 1:
              </InputGroupAddon>
              <Input
                type="text"
                name="address1"
                id="address1"
                defaultValue={this.state.address1}
                disabled={inputDisabled}
                required
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                Address Line 2:
              </InputGroupAddon>
              <Input
                type="text"
                name="address2"
                id="address2"
                defaultValue={this.state.address2}
                disabled={inputDisabled}
                required
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">City:</InputGroupAddon>
              <Input
                type="text"
                name="city"
                id="city"
                defaultValue={this.state.city}
                disabled={inputDisabled}
                required
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">State:</InputGroupAddon>
              <Input
                type="text"
                name="state"
                id="state"
                defaultValue={this.state.state}
                disabled={inputDisabled}
                required
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">ZIP Code:</InputGroupAddon>
              <Input
                type="text"
                name="zip"
                id="zip"
                defaultValue={this.state.zip}
                disabled={inputDisabled}
                required
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </InputGroup>
          </FormGroup>
          {inputDisabled ? (
            <Button
              color="secondary"
              style={{ padding: ".5%" }}
              block
              onClick={e => this.editInfo(e)}
            >
              Edit Personal Information
            </Button>
          ) : (
            <Button
              color="primary"
              style={{ padding: ".5%" }}
              block
              onClick={e => this.submitChanges(e)}
            >
              Submit Changes
            </Button>
          )}
          {alertVisible ? this.showAlert() : <></>}
        </Form>
      </>
    );
  }
}

export default UserInfoForm;
