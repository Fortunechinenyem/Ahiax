import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SmallerMarketHero = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Body className="card-body1">
          <Card.Title>
            <h1>50% off Orders</h1>
          </Card.Title>
          <Card.Text></Card.Text>
          <Button variant="success" className="m-2">
            Go to Sale
          </Button>
          <Button variant="success">Shop Collection</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default SmallerMarketHero;
