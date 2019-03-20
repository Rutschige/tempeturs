import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
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
  cardStyle = { margin: "0% auto", minWidth: "300px" };
  innerCard = { margin: "5% auto", minWidth: "300px" };
  cardHeader = { padding: ".5%", backgroundColor: "#422ef7", color: "white" };
  cardFooter = { padding: "1%", backgroundColor: "#e6e6e6" };
  render() {
    return (
      <div className="userext">
        <Card style={this.cardStyle}>
          <CardHeader style={this.cardHeader}>
            User Info (Internal View)
          </CardHeader>
          <CardBody>
            <Card style={this.innerCard}>
              <CardBody>
                <img src={ProfilePic} alt="profilepic" />
                <Button color="secondary" style={{ padding: ".5%" }} block>
                  Change Profile Picture
                </Button>
              </CardBody>
            </Card>
            <h2>{this.state.name}</h2>
            <h6>Rating: {this.state.rating}</h6>
            <Card style={this.innerCard}>
              <CardHeader style={this.cardHeader}>Bio</CardHeader>
              <CardBody>
                <UserBioForm />
              </CardBody>
            </Card>
            <Card style={this.innerCard}>
              <CardHeader style={this.cardHeader}>
                Personal Information
              </CardHeader>
              <CardBody>
                <UserInfoForm />
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UserInternal;
