import React from "react";
import { Button, Form, FormGroup, Input, UncontrolledAlert } from "reactstrap";

class UserBioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: this.props.bio,
      inputDisabled: true,
      alertVisible: false,
      bioChanged: false
    };
    this.editBio = this.editBio.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editBio(e) {
    this.setState({
      inputDisabled: false,
      alertVisible: false,
      bioChanged: false
    });
  }

  submitChanges(e) {
    this.setState({ inputDisabled: true, alertVisible: true });
    // console.log(`[User Bio]: ${this.state.bio}`);
    //post changes to database here
  }

  handleChange(e) {
    this.setState({ bio: e.target.value, bioChanged: true });
  }

  showAlert(bioChanged) {
    if (bioChanged) {
      return (
        <UncontrolledAlert color="success">
          Bio Successfully Updated!
        </UncontrolledAlert>
      );
    } else {
      return <UncontrolledAlert color="info">Bio Unchanged</UncontrolledAlert>;
    }
  }

  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Input
              type="textarea"
              name="bio"
              id="bio"
              defaultValue={this.state.bio}
              rows="5"
              disabled={this.state.inputDisabled}
              required
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </FormGroup>
          {this.state.inputDisabled ? (
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
          {this.state.alertVisible ? this.showAlert(this.state.bioChanged) : <></>}
        </Form>
      </>
    );
  }
}

export default UserBioForm;
