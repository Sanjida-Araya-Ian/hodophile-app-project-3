import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

const divStyle = {
    backgroundImage: 'url(/img/cd.jpeg)',
    width: '100vw',
    height: '120vh'
  };

function About() {
    return (
        <>
            <div style={divStyle}>
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
                                        <Button colored href='http://www.arayanawrath.com/'>Website</Button>
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
                                        {/* //<Button colored>Website</Button> */}
                                    </CardActions>
                                    <CardMenu style={{ color: '#fff' }}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                            <Cell col={4}>
                                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                    <CardTitle style={{ height: '480px', width: '330px', color: 'white', background: 'url(/img/Me.jpg) center / cover' }}>
                                        Ian Edwards
                 </CardTitle>
                                    <CardText>
                                        Highly trained full-stack developer fluent in Node.JS and server setup. Free agent able to do any task required.
                </CardText>
                                    <CardActions border>
                                        <Button colored href='https://github.com/ianedwards-jpg'>Github</Button>
                                        <Button colored href='https://ianedwards.dev'>Website</Button>
                                    </CardActions>
                                    <CardMenu style={{ color: '#fff' }}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                        </Grid>

                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;

