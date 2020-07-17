import React from "react";
import Carousel from "../components/Carousel";
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <>
            <Carousel />
            <Container className="my-5">
                <Row>
                    <Col data-aos="fade-up" className="m-4 default">
                        <h1>Experience your dreams...</h1>
                    </Col >
                </Row>
            </Container>

        </>
    );
};

export default Home;