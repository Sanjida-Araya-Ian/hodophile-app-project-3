import React from "react";
import Carousel from "../components/Carousel";
import { Container, Row, Col } from 'react-bootstrap';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

function About() {
    return (
        <>
            {/* <Carousel /> */}
            <Container className="my-5">
                <Row>
                    <Col data-aos="fade-up" className="m-4 default">
                        <h1>Meet our developers...</h1>
                    </Col >
                </Row>
                <Row>
                    <Grid className="projects-grid">
                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '300px', margin: 'auto' }}>
                                <CardTitle style={{ height: '480px', width: '330px', color: 'white', background: 'url(/img/mee.jpg) center / cover' }}>
                                    Araya Nawrath
                    </CardTitle>
                                <CardText>
                                    Experienced Front-End/UI professional. Has personally developed applications used around the world.
                   </CardText>
                                <CardActions border>
                                    <Button colored href='https://github.com/My-unicorn'>Github</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{ color: '#fff' }}>
                                    <IconButton name='share' />
                                </CardMenu>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ height: '480px', width: '330px', color: 'white', background: 'url(/img/sanjida_nawrin.jpg) center / cover' }}>
                                    Sanjida Nawrin
               </CardTitle>
                                <CardText>
                                    Expert in React.JS as well as a skilled back-end developer.
                  </CardText>
                                <CardActions border>
                                    <Button colored href='https://github.com/sn-1'>Github</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{ color: '#fff' }}>
                                    <IconButton name='share' />
                                </CardMenu>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/dashboard.png) center / cover' }}>
                                    Ian Edwards
                 </CardTitle>
                                <CardText>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </CardText>
                                <CardActions border>
                                    <Button colored href='https://github.com/sn-1'>Github</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{ color: '#fff' }}>
                                    <IconButton name='share' />
                                </CardMenu>
                            </Card>
                        </Cell>
                    </Grid>

                </Row>
            </Container>

        </>
    );
};

export default About;

