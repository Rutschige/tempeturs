import React from "react";
import { Button, Card, CardHeader, CardBody } from "reactstrap";
import ProfilePic from "../../assets/logo.svg";
import UserInfoForm from "./Forms/UserInfoForm";
import UserBioForm from "./Forms/UserBioForm";

class UserInternal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      rating: "4.5 out of 5"
    };
  }
  
  render() {
    return (
      <>
        <Card className="cardStyle">
          <CardHeader className="cardHeader">
            User Info (Internal View)
          </CardHeader>
          <CardBody>
            <Card className="innerCard">
              <CardBody>
                <img src={ProfilePic} alt="profilepic" />
                <Button color="secondary" style={{ padding: ".5%" }} block>
                  Change Profile Picture
                </Button>
              </CardBody>
            </Card>
            <h2>{this.state.name}</h2>
            <h6>Rating: {this.state.rating}</h6>
            <Card className="innerCard">
              <CardHeader className="cardHeader">Bio</CardHeader>
              <CardBody>
                <UserBioForm />
              </CardBody>
            </Card>
            <Card className="innerCard">
              <CardHeader className="cardHeader">
                Personal Information
              </CardHeader>
              <CardBody>
                <UserInfoForm />
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default UserInternal;
