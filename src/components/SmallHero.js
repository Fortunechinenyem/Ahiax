import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SmallHero = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Body className="card-body1">
          <Card.Title>One Platform, Litmitless Potential</Card.Title>
          <Card.Text>
            Growing your business should never have a limit. At Ahiax, we offer
            trusted eCommerce tools, an African Affiliate marketplace, an
            idustry leading support and education- everything you need to build
            and sell with confidence.
          </Card.Text>
          <Button variant="success">Explore</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default SmallHero;
