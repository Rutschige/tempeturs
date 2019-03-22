import React, { Component } from "react";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import HomeCarousel from "../components/Home/HomeCarousel";

class Home extends Component {
  cardStyle = { margin: "0% auto", minWidth: "300px" };
  cardFooter ={padding: "0", backgroundColor: "#e6e6e6"};
  render() {
    return (
      <div className="home">
        <Card style={this.cardStyle}>
          <CardBody>
            <h1>Welcome to Tempeturs!</h1>
            <HomeCarousel />
          </CardBody>
          <CardFooter style={this.cardFooter}>
            <i style={{ margin: ".5%" }} className="fa fa-paw" />
            Tempeturs
            <Button color="link" href="/register">
              Become a Member
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Home;
