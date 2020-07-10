import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import lostQuote from "./img/ls.png"

function NoMatch() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="text-center">
            <img src={lostQuote} />
            <h1>But ... YOU ... you're lost!</h1>
            <hr/>
            <h2>404 — Page Not Found</h2>
            <Link to="/">
              <button className="btn btn-warning mb-2" style={{fontSize: "20px"}}>
                Wander over to Hodophile's home page
              </button>
            </Link>
             
          </div>
        </Col>
      </Row>
    </Container>
      );
    }
    
export default NoMatch;