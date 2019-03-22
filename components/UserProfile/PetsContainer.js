import React, { Component } from "react";
import { Button, Card, CardHeader, CardBody } from "reactstrap";
import PetInfoForm from "../Forms/PetInfoForm";

class PetsConatiner extends Component {
  render() {
    return (
      <>
        <Card className="cardStyle">
          <CardHeader className="cardHeader">My Pets</CardHeader>
          <CardBody>
            <Card className="innerCard">
              <CardHeader className="cardHeader">Pet 1</CardHeader>
              <CardBody>
                <PetInfoForm
                  name="Einstein"
                  type="Dog"
                  description="Einstein is a white husky mix that loves long walks on the beach"
                />
              </CardBody>
            </Card>
            <Card className="innerCard">
              <CardHeader className="cardHeader">Pet 2</CardHeader>
              <CardBody>
                <PetInfoForm
                  name="Cleo"
                  type="Cat"
                  description="Cleo is an independent cat with an allergy to scented candles"
                />
              </CardBody>
            </Card>
          </CardBody>
          <Button color="primary" style={{ padding: ".5%" }} block>
            Add a Pet
          </Button>
        </Card>
      </>
    );
  }
}

export default PetsConatiner;
