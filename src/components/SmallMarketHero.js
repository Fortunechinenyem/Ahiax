import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SmallMarketHero = () => {
  return (
    <>
      <Card className="text-center w-75 mx-auto">
        <Card.Body className="card-body1">
          <Card.Title>Get upto 30% Discount!</Card.Title>
          <Card.Text>
            Get mouth watering discounts on your favorite items.
          </Card.Text>
          <Button variant="secondary">Explore</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default SmallMarketHero;
