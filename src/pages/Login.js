import React, { Component } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Form,
  FormGroup,
  // FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "John Doe",
      email: "",
      password: "",
      validate: {
        emailState: "has-success",
        passwordState: "has-success"
      },
      loginValidated: false,
      alertSuccessVisible: false,
      alertSuccessMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDismiss() {
    //allows successful login alert to be dismissed
    this.setState({ alertSuccessVisible: false });
  }

  setAlertMessage() {
    //sets the message to be displayed to user on successful login
    let submitString =
      // `[Full Name]: ${this.state.fullname}\n` + // `[Email]: ${this.state.email}\n` +
      // `[Password]: ${this.state.password}\n` +
      `Login Successful, Welcome Back ${this.state.fullname}!`;
    this.setState({
      alertSuccessMessage: submitString,
      alertSuccessVisible: true
    });
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

  // validateEmail(e) {
  //   //ensures that user input adheres for email matches requiremnts given by regular expression
  //   const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   const { validate } = this.state;
  //   if (emailRex.test(e.target.value)) {
  //     validate.emailState = "has-success";
  //   } else {
  //     validate.emailState = "has-danger";
  //   }
  //   this.setState({ validate });
  // }

  // validatePassword(e) {
  //   //ensures that user input for password is not empty
  //   const { validate } = this.state;
  //   if (e.target.value !== "") {
  //     validate.passwordState = "has-success";
  //   } else {
  //     validate.passwordState = "has-danger";
  //   }
  //   this.setState({ validate });
  // }

  handleSubmit(event) {
    if (
      //if all of user input has been validated
      this.state.validate.emailState === "has-success" &&
      this.state.validate.passwordState === "has-success"
    ) {
      //then proceed to login user (send JOT of info to backend here)
      event.preventDefault();

      const { email, password } = this.state;
      axios.post("/login", { email, password }).then(result => {
        //access and sort return codes here
      });

      this.setAlertMessage(); //success message
    }
  }

  cardStyle = { margin: "5% auto", maxWidth: "600px", minWidth: "200px" };
  coloring = { backgroundColor: "#422ef7", color: "	#ffffff" };
  render() {
    return (
      <div className="login">
        <Card style={this.cardStyle} outline color="dark">
          <CardHeader style={this.coloring}>
            <i style={{ margin: "1%" }} className="fa fa-paw" />
            Tempeturs Login
          </CardHeader>
          <CardBody>
            {/* <Form action="/login" method="POST"> */}
            <Form onSubmit={e => this.handleSubmit(e)}>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={this.coloring}>
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
                    // valid={this.state.validate.emailState === "has-success"}
                    // invalid={this.state.validate.emailState === "has-danger"}
                    onChange={e => {
                      // this.validateEmail(e);
                      this.handleChange(e);
                    }}
                    required
                  />
                </InputGroup>
                {/* <FormFeedback invalid>
                  Please enter a valid email (example@example.com)
                </FormFeedback> */}
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={this.coloring}>
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
                    // valid={this.state.validate.passwordState === "has-success"}
                    // invalid={this.state.validate.passwordState === "has-danger"}
                    onChange={e => {
                      // this.validatePassword(e);
                      this.handleChange(e);
                    }}
                    required
                  />
                </InputGroup>
                {/* <FormFeedback invalid>Please enter a password</FormFeedback> */}
              </FormGroup>
              <FormGroup className="form-actions">
                <Button type="submit" size="sm" block color="danger">
                  Login
                </Button>
              </FormGroup>
            </Form>
            <Alert
              color="success"
              isOpen={this.state.alertSuccessVisible}
              toggle={this.onDismiss}
            >
              {this.state.alertSuccessMessage}
              <Button color="link" href="/userprofile">
                Proceed to Profile Page
              </Button>
            </Alert>
          </CardBody>
          <CardFooter style={{ padding: "0", backgroundColor: "#e6e6e6" }}>
            Not a Member Yet?
            <Button color="link" href="/register">
              Register Here
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Login;
