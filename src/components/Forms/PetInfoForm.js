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

class PetInfoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: this.props.name,
        type: this.props.type,
        description: this.props.description,
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
      // console.log(
      //   `[Pet Info]: \n [Name]: ${this.state.name} \n [Type]: ${this.state.type}\n [Description]: ${this.state.description}`
      // );
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
            Pet Information Successfully Updated!
          </UncontrolledAlert>
        );
      } else {
        return (
          <UncontrolledAlert color="info">
            Pet Information Unchanged
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
                <InputGroupAddon addonType="prepend">Type:</InputGroupAddon>
                <Input
                  type="select"
                  name="type"
                  id="type"
                  defaultValue={this.state.type}
                  disabled={inputDisabled}
                  required
                  onChange={e => {
                    this.handleChange(e);
                  }}
                >
                  <option>Amphibian</option>
                  <option>Bird</option>
                  <option>Cat</option>
                  <option>Dog</option>
                  <option>Fish</option>
                  <option>Horse</option>
                  <option>Reptile</option>
                  <option>Rodent</option>
                  <option>Other (Please specify in description)</option>
                </Input>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  Description:
                </InputGroupAddon>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  rows="5"
                  defaultValue={this.state.description}
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
                Edit Pet Information
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

  export default PetInfoForm;
