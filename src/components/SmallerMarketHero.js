import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SmallerMarketHero = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Body className="card-body1">
          <Card.Title>New Arrivals</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="success">Explore</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default SmallerMarketHero;
