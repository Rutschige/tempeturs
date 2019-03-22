import React, { Component } from "react";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import UserContainer from "../components/UserProfile/UserContainer";

class UserProfile extends Component {
  cardStyle = { margin: "0% auto", minWidth: "300px" };
  render() {
    return (
      <div className="userprofile">
        <Card className="card" >
          <CardBody>
            <h1>User Profile</h1>
            <UserContainer />
          </CardBody>
          <CardFooter className="cardFooter">
            <i style={{ margin: ".5%" }} className="fa fa-paw" />
            Tempeturs
            <Button color="link" href="/home">
              Back to Home Page
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default UserProfile;
