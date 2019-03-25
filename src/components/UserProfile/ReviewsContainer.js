import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";

class ReviewsContainer extends Component {
  render() {
    return (
      <>
        <Card className="cardStyle">
          <CardHeader className="cardHeader">Recent Reviews</CardHeader>
          <CardBody>
            <Card className="innerCard">
              <CardHeader className="cardHeader">Rating: 4</CardHeader>
              <CardBody>Review content...</CardBody>
              <CardFooter className="cardFooter">by Jane Doris on 3/18/19</CardFooter>
            </Card>
            <Card className="innerCard">
              <CardHeader className="cardHeader">Rating: 5</CardHeader>
              <CardBody>Review content...</CardBody>
              <CardFooter className="cardFooter">by George Nolan on 3/16/19</CardFooter>
            </Card>
            <Card className="innerCard">
              <CardHeader className="cardHeader">Rating: 3</CardHeader>
              <CardBody>Review content...</CardBody>
              <CardFooter className="cardFooter">by Regina North on 3/15/19</CardFooter>
            </Card>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default ReviewsContainer;
