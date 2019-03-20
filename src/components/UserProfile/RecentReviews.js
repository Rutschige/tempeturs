import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";

class RecentReviews extends Component {
  cardStyle = { margin: "0% auto", minWidth: "300px" };
  innerCard = { margin: "5% auto", minWidth: "300px" };
  cardHeader = { padding: ".5%", backgroundColor: "#422ef7", color: "white" };
  cardFooter = { padding: "1%", backgroundColor: "#e6e6e6" };
  render() {
    return (
      <div className="recentreviews">
        <Card style={this.cardStyle}>
          <CardHeader style={this.cardHeader}>Recent Reviews</CardHeader>
          <CardBody>
            <Card style={this.innerCard}>
              <CardHeader style={this.cardHeader}>Rating: 4</CardHeader>
              <CardBody>Review content...</CardBody>
              <CardFooter style={this.cardFooter}>by Jane Doris on 3/18/19</CardFooter>
            </Card>
            <Card style={this.innerCard}>
              <CardHeader style={this.cardHeader}>Rating: 5</CardHeader>
              <CardBody>Review content...</CardBody>
              <CardFooter style={this.cardFooter}>by George Nolan on 3/16/19</CardFooter>
            </Card>
            <Card style={this.innerCard}>
              <CardHeader style={this.cardHeader}>Rating: 3</CardHeader>
              <CardBody>Review content...</CardBody>
              <CardFooter style={this.cardFooter}>by Regina North on 3/15/19</CardFooter>
            </Card>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default RecentReviews;
