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
  
  render() {
    return (
      <>
        <Card className="cardStyle">
          <CardHeader className="cardHeader">
            User Info (External View)
          </CardHeader>
          <CardBody>
            <img src={ProfilePic} alt="profilepic" />
            <h2>{this.state.name}</h2>
            <h6>Rating: {this.state.rating}</h6>
            <Card className="cardStyle">
              <CardHeader className="cardHeader">Bio</CardHeader>
              <CardBody>{this.state.bio}</CardBody>
            </Card>
          </CardBody>
          <CardFooter className="cardFooter">
            <Button color="primary" style={{ padding: ".5%" }} block>
              Leave a Review
            </Button>
            <Button color="info" style={{ padding: ".5%" }} block>
              Contact User
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }
}

export default UserExternal;
