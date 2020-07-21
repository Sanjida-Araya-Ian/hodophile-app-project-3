import React, { Component } from "react";
import { Redirect } from "react-router"
import { Container, Row, Col } from "react-bootstrap";
import Calender from "../components/calendar";


class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldRedirectToChat: false
    }
    this.redirectToChat = this.redirectToChat.bind(this)
  }
  redirectToChat() {
    this.setState({
      shouldRedirectToChat: true
    })
  }

  render() {

    if (this.state.shouldRedirectToChat) {
      return <Redirect to="/chat"></Redirect>
    }
    else {
      return (
        <Container fluid id="profile" className="m-0 p-0">
          <Container className="px-5" style={{ marginTop: "50px", paddingTop: "50px", paddingBottom: "100px"}} >
            <Row className="text-justify">
              <Col className="col-md-6 p-4 text-profile">
                <p>Welcome back, {this.props.username}!</p>
                <p>
                  Buckle up and ENJOY!
                </p>
              </Col>
              
            </Row>
            <Row className="my-5" id="calendar-profile">
              <Col className="col-md-12 p-4">
                <Calender />
              </Col>
            </Row>
          </Container>
        </Container>
      )
    }
  }
}

export default Profile;
