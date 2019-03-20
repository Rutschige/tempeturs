import React, { Component } from "react";
import { Card, Col, Row } from "reactstrap";
import WhatWeDo from "./WhatWeDoCarousel";
import HowWeDoIt from "./HowWeDoItCarousel";
import WhatYouCanDo from "./WhatYouCanDoCarousel";
import HowtoReachUs from "./HowToReachUsCarousel";

class HomeCarousel extends Component {
  carouselStyle = {
    backgroundColor: "#422ef7",
    color: "#ffffff",
    margin: "2% auto",
    minWidth: "800px",
    maxWidth: "800px",
    height: "fit-content"
  };

  render() {
    return (
      <Row>
        <Col>
          <Card style={this.carouselStyle}>
            <h2>What We Do</h2>
            <WhatWeDo />
          </Card>
        </Col>
        <Col>
          <Card style={this.carouselStyle}>
            <h2>How We Do It</h2>
            <HowWeDoIt />
          </Card>
        </Col>
        <Col>
          <Card style={this.carouselStyle}>
            <h2>What You Can Do</h2>
            <WhatYouCanDo />
          </Card>
        </Col>
        <Col>
          <Card style={this.carouselStyle}>
            <h2>How To Reach Us</h2>
            <HowtoReachUs />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default HomeCarousel;
