import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon
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
      zip: "77007"
    };
  }

  render() {
    return (
      <div className="userInfoForm">
        <Form>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name:</InputGroupAddon>
              <Input
                type="text"
                name="name"
                id="name"
                defaultValue={this.state.name}
                disabled
                required
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
                disabled
                required
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
                disabled
                required
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
                disabled
                required
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
                disabled
                required
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
                disabled
                required
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
                disabled
                required
              />
            </InputGroup>
          </FormGroup>
          <Button color="secondary" style={{ padding: ".5%" }} block>
            Edit Personal Information
          </Button>
        </Form>
      </div>
    );
  }
}

export default UserInfoForm;
