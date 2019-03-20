import React from "react";
import { Button, Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import ProfilePic from "../../assets/logo.svg";

class UserExternal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      rating: "4.5 out of 5",
      bio:
        "Hi! My name is John Doe and I am a pet enthusiast with over 5 years of experience providing pet services"
    };
  }
  cardStyle = { margin: "0% auto", minWidth: "300px" };
  cardHeader = { padding: ".5%", backgroundColor: "#422ef7", color: "white" };
  cardFooter = { padding: "1%", backgroundColor: "#e6e6e6" };
  render() {
    return (
      <div className="userext">
        <Card style={this.cardStyle}>
          <CardHeader style={this.cardHeader}>
            User Info (External View)
          </CardHeader>
          <CardBody>
            <img src={ProfilePic} alt="profilepic" />
            <h2>{this.state.name}</h2>
            <h6>Rating: {this.state.rating}</h6>
            <Card style={this.cardStyle}>
              <CardHeader style={this.cardHeader}>Bio</CardHeader>
              <CardBody>{this.state.bio}</CardBody>
            </Card>
          </CardBody>
          <CardFooter style={this.cardFooter}>
            <Button color="primary" style={{ padding: ".5%" }} block>
              Leave a Review
            </Button>
            <Button color="info" style={{ padding: ".5%" }} block>
              Contact User
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default UserExternal;
