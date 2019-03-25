import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  UncontrolledAlert
} from "reactstrap";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
      validate: {
        nameState: "",
        emailState: "",
        passwordState: "",
        confirmpasswordState: ""
      },
      registerValidated: false,
      alertVisible: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = async event => {
    //handles changes in input groups form user
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value
    });
  };

  validateName(e) {
    //ensures user input for full name matches requiremnts given by regular expression
    //Name should be at least one letter (lowecase or uppercase)
    //Name should only be comprised of letters and spaces
    const nameRex = /^[a-zA-Z ]{2,30}$/;
    const { validate } = this.state;
    if (nameRex.test(e.target.value)) {
      validate.nameState = "has-success";
    } else {
      validate.nameState = "has-danger";
    }
    this.setState({ validate });
  }

  validateEmail(e) {
    //ensures that user input adheres for email matches requiremnts given by regular expression
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }

  validatePassword(e) {
    //ensures user input for password meets the minimum requirements
    //Password should
    //... contain at least 1 digit
    //... contain at least 1 lowercase
    //... contain at least 1 upper case
    //... be at least 8 characters long
    const passRex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const { validate } = this.state;
    if (passRex.test(e.target.value)) {
      validate.passwordState = "has-success";
    } else {
      validate.passwordState = "has-danger";
    }
    this.setState({ validate });
  }

  validateConfirmPassword(e) {
    //ensures user input for confirm password is a match to the input entered for password by user
    const password = this.state.password;
    const { validate } = this.state;
    if (password === e.target.value) {
      validate.confirmpasswordState = "has-success";
    } else {
      validate.confirmpasswordState = "has-danger";
    }
    this.setState({ validate });
  }

  handleSubmit(event) {
    if (
      //if all of user input has been validated
      this.state.validate.nameState === "has-success" &&
      this.state.validate.emailState === "has-success" &&
      this.state.validate.passwordState === "has-success" &&
      this.state.validate.confirmpasswordState === "has-success"
    ) {
      //then proceed to register user (send JOT of info to backend here)

      //put axios portion here
      const { fullname, email, password } = this.state;
      axios.post("/register", { fullname, email, password }).then(result => {
        //access and sort return codes here
        console.log(`[Result]: ${result}`);
      });

      this.setState({ registerValidated: true, alertVisible: true });
    }
  }

  showAlert(registerValidated) {
    if (registerValidated) {
      return (
        <UncontrolledAlert color="success">
          Registration Successful. Welcome Aboard!
          <Button color="link" href="/userprofile">
            Proceed to Profile Page
          </Button>
        </UncontrolledAlert>
      );
    } else {
      return (
        <UncontrolledAlert color="danger">
          Registration Unsuccessful. Please try again.
        </UncontrolledAlert>
      );
    }
  }

  render() {
    const alertVisible = this.state.alertVisible;
    return (
      <>
        <Card className="registerStyle" outline color="dark">
          <CardHeader className="coloring">
            <i style={{ margin: "1%" }} className="fa fa-paw" />
            Tempeturs Registration
          </CardHeader>
          <CardBody>
            {/* <Form action="/register" method="POST"> */}
            <Form onSubmit={e => this.handleSubmit(e)}>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="coloring">
                      <i className="fa fa-user" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Full Name"
                    value={this.state.fullname}
                    valid={this.state.validate.nameState === "has-success"}
                    invalid={this.state.validate.nameState === "has-danger"}
                    onChange={e => {
                      this.validateName(e);
                      this.handleChange(e);
                    }}
                    required
                  />
                  <FormFeedback>
                    Please enter a valid name (Letters and Spaces Only)
                  </FormFeedback>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="coloring">
                      <i className="fa fa-envelope" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={this.state.email}
                    valid={this.state.validate.emailState === "has-success"}
                    invalid={this.state.validate.emailState === "has-danger"}
                    onChange={e => {
                      this.validateEmail(e);
                      this.handleChange(e);
                    }}
                    required
                  />
                  <FormFeedback>
                    Please enter a valid email (example@example.com)
                  </FormFeedback>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="coloring">
                      <i className="fa fa-lock" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    valid={this.state.validate.passwordState === "has-success"}
                    invalid={this.state.validate.passwordState === "has-danger"}
                    onChange={e => {
                      this.validatePassword(e);
                      this.handleChange(e);
                    }}
                    required
                  />
                  <FormFeedback>
                    Please enter a valid password{" "}
                    <p>
                      (NOTE: a Password must contain at least 1 digit, 1 lower
                      case letter, 1 uppercase letter, and be at least 8
                      chracters long)
                    </p>
                  </FormFeedback>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="coloring">
                      <i className="fa fa-lock" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    value={this.state.confirmpassword}
                    valid={
                      this.state.validate.confirmpasswordState === "has-success"
                    }
                    invalid={
                      this.state.validate.confirmpasswordState === "has-danger"
                    }
                    onChange={e => {
                      this.validateConfirmPassword(e);
                      this.handleChange(e);
                    }}
                    required
                  />
                  <FormFeedback>Password does not match</FormFeedback>
                </InputGroup>
              </FormGroup>
              <FormGroup className="form-actions">
                <Button type="submit" size="sm" block color="danger">
                  Register
                </Button>
              </FormGroup>
            </Form>
            {alertVisible ? this.showAlert(this.state.registerValidated) : <></>}
          </CardBody>
          <CardFooter style={{ padding: "0", backgroundColor: "#e6e6e6" }}>
            Already a Member?
            <Button color="link" href="/login">
              Login Here
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }
}

export default Register;
