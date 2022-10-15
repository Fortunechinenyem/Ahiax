import React from "react";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div className="text-center section__title section__title--services">
        <h1>Login</h1>
      </div>
      <Form className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="mt-3 mb-3">
          <Link to="/">Sign UP</Link>
        </div>
        <div className="text-center mt-3 mb-3">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <Footer />
    </section>
  );
};
export default Login;
