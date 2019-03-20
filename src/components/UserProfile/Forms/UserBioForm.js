import React from "react";
import { Button, Form, FormGroup, Input, UncontrolledAlert } from "reactstrap";

class UserBioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio:
        "Hi! My name is John Doe and I am a pet enthusiast with over 5 years of experience providing pet services",
      inputDisabled: true,
      alertVisible: false,
      bioChanged: false
    };
    this.editBio = this.editBio.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
    this.editBio = this.editBio.bind(this);
  }

  editBio(e) {
    this.setState({ inputDisabled: false, alertVisible: false, bioChanged: false });
  }

  submitChanges(e) {
    this.setState({ inputDisabled: true, alertVisible: true });
    console.log("[User Bio]: " + this.state.bio);
    //post changes to database here
  }

  handleChange(e) {
    this.setState({ bio: e.target.value, bioChanged: true });
  }

  showAlert() {
    const bioChanged = this.state.bioChanged;
    if(bioChanged){
      return (
        <UncontrolledAlert color="success">
          Bio Successfully Updated!
        </UncontrolledAlert>
      );
    } else{
      return (
        <UncontrolledAlert color="info">
          Bio Unchanged
        </UncontrolledAlert>
      );
    }
    
  }

  render() {
    const inputDisabled = this.state.inputDisabled;
    const alertVisible = this.state.alertVisible;
    return (
      <div className="userBioForm">
        <Form>
          <FormGroup>
            <Input
              type="textarea"
              name="bio"
              id="bio"
              defaultValue={this.state.bio}
              rows="5"
              disabled={inputDisabled}
              required
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </FormGroup>
          {inputDisabled ? (
            <Button
              color="secondary"
              style={{ padding: ".5%" }}
              block
              onClick={e => this.editBio(e)}
            >
              Edit Bio
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
      </div>
    );
  }
}

export default UserBioForm;
