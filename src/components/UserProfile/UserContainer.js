import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import UserExternal from "./UserExternal";
import UserInternal from "./UserInternal";
import RecentReviews from "./RecentReviews";

function ProfileView(props) {
  const isUser = props.isUser;
  if (isUser) {
    return <UserInternal />;
  } else {
    return <UserExternal />;
  }
}

class UserContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      isUser: true
    };
  }
  render() {
    const isUser= this.state.isUser;
    return (
      <Row>
        <Col>
          {/* false for external view, and true for internal */}
          <ProfileView isUser={isUser} />
        </Col>
        <Col>
          <RecentReviews />
        </Col>
        <Col>Pet Cards</Col>
      </Row>
    );
  }
}

export default UserContainer;
