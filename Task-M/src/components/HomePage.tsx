import React from "react";
import { Col, Container } from "react-bootstrap";
import Login from "./Login";
import Logout from "./Logout";

const HomePage: React.FC = () => {
    return (
        <Container>
            <Col>
            <h1>Hello World</h1>
            <Login />
            <Logout />
            
            </Col>
        </Container>
    );
};

export default HomePage