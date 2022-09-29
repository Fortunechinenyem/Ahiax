import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SmallerHero = () => {
  return (
    <>
      <Card className="text-center mb-3">
        <Card.Body className="card-body2">
          <Card.Title>
            We are a Vast Affiliate Marketplace with a Wide Network of Partners
            and Techniques.
          </Card.Title>

          <Button variant="success">Get to Know Us</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default SmallerHero;
