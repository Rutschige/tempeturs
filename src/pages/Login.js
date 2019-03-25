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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      validate: {
        emailState: "",
        passwordState: ""
      },
      loginValidated: false,
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
    //ensures that user input for password is not empty
    const { validate } = this.state;
    if (e.target.value !== "") {
      validate.passwordState = "has-success";
    } else {
      validate.passwordState = "has-danger";
    }
    this.setState({ validate });
  }

  handleSubmit(event) {
    if (
      //if all of user input has been validated
      this.state.validate.emailState === "has-success" &&
      this.state.validate.passwordState === "has-success"
    ) {
      //then proceed to login user (send JOT of info to backend here)
      //event.preventDefault();

      const { email, password } = this.state;
      axios.post("/login", { email, password }).then(result => {
        //access and sort return codes here
        console.log(`[Result]: ${result}`);
      });

      this.setState({ alertVisible: true });
    }
  }

  showAlert(loginValidated) {
    if (loginValidated) {
      return (
        <UncontrolledAlert color="success">
          Login Successful. Welcome Back!
          <Button color="link" href="/userprofile">
            Proceed to Profile Page
          </Button>
        </UncontrolledAlert>
      );
    } else {
      return (
        <UncontrolledAlert color="danger">
          Login Unsuccessful. Invalid Username and/or Password.
        </UncontrolledAlert>
      );
    }
  }

  render() {
    const alertVisible = this.state.alertVisible;
    return (
      <>
        <Card className="loginStyle" outline color="dark">
          <CardHeader className="coloring">
            <i style={{ margin: "1%" }} className="fa fa-paw" />
            Tempeturs Login
          </CardHeader>
          <CardBody>
            {/* <Form action="/login" method="POST"> */}
            <Form onSubmit={e => this.handleSubmit(e)}>
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
                </InputGroup>
                <FormFeedback>
                  Please enter a valid email (example@example.com)
                </FormFeedback>
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
                    autoComplete="current-password"
                    value={this.state.password}
                    valid={this.state.validate.passwordState === "has-success"}
                    invalid={this.state.validate.passwordState === "has-danger"}
                    onChange={e => {
                      this.validatePassword(e);
                      this.handleChange(e);
                    }}
                    required
                  />
                </InputGroup>
                <FormFeedback>Please enter a password</FormFeedback>
              </FormGroup>
              <FormGroup className="form-actions">
                <Button type="submit" size="sm" block color="danger">
                  Login
                </Button>
              </FormGroup>
            </Form>
            {alertVisible ? this.showAlert(this.state.loginValidated) : <></>}
          </CardBody>
          <CardFooter style={{ padding: "0", backgroundColor: "#e6e6e6" }}>
            Not a Member Yet?
            <Button color="link" href="/register">
              Register Here
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }
}

export default Login;
