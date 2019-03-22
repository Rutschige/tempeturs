import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import UserExternal from "./UserExternal";
import UserInternal from "./UserInternal";
import ReviewsContainer from "./ReviewsContainer";
import PetsConatiner from "./PetsContainer";

function ProfileView(props) {
  const isUser = props.isUser;
  if (isUser) {
    return (
      <>
        <Col>
          <UserInternal />
        </Col>
        <Col>
          <ReviewsContainer />
        </Col>
        <Col>
          <PetsConatiner />
        </Col>
      </>
    );
  } else {
    return (
      <>
        <Col>
          <UserExternal />
        </Col>
        <Col>
          <ReviewsContainer />
        </Col>
      </>
    );
  }
}

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: true
    };
  }
  render() {
    const isUser = this.state.isUser;
    return (
      <>
        <Row>
          {/* this will show profile from internal perspective */}
          <ProfileView isUser={isUser} />
        </Row>
        <Row>
          {/* this will show profile from external perspective */}
          <ProfileView isUser={false} />
        </Row>
      </>
    );
  }
}

export default UserContainer;
