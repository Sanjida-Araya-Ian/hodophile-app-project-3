import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

const divStyle = {
    backgroundImage: 'url(/img/cd.jpeg)',
    width: '100vw',
    height: '120vh'
};

function Gallery() {
    return (
        <>
            <div style={divStyle}>
                <Container className="my-5">
                    <Row>
                        <Col data-aos="fade-up" className="m-4 default">
                            <h1>Gallery</h1>
                        </Col >
                    </Row>
                    <Row>
                        <Grid className="projects-grid">
                            <Cell col={3}>
                                <Card shadow={5} style={{ maxWidth: '250px', margin: 'auto' }}>
                                    <CardTitle style={{ height: '300px', width: '250px', color: 'white', background: 'url(/img/gallery/sorrentosunset.jpg) center / cover' }}>
                                    </CardTitle>
                                    <CardText>
                                        Sorrento, Italy, 2016
                   </CardText>
                                    <CardActions border>
                                        <Button colored href={"./img/gallery/sorrentosunset.jpg"}>View Full Size</Button>
                                    </CardActions>
                                    <CardMenu style={{ color: '#fff' }}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                            <Cell col={3}>
                                <Card shadow={5} style={{ maxWidth: '250px', margin: 'auto' }}>
                                    <CardTitle style={{ height: '300px', width: '250px', color: 'white', background: 'url(/img/gallery/positanoitaly.jpg) center / cover' }}>
                                    </CardTitle>
                                    <CardText>
                                    Positano, Italy, 2016
                  </CardText>
                                    <CardActions border>
                                        <Button colored href={"./img/gallery/positanoitaly.jpg"}>View Full Size</Button>
                                    </CardActions>
                                    <CardMenu style={{ color: '#fff' }}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                            <Cell col={3}>
                                <Card shadow={5} style={{ maxWidth: '250px', margin: 'auto' }}>
                                    <CardTitle style={{ height: '300px', width: '250px', color: 'white', background: 'url(/img/gallery/centralparknight.jpg) center / cover' }}>
                                    </CardTitle>
                                    <CardText>
                                    Central Park, NYC, 2020
                </CardText>
                                    <CardActions border>
                                        <Button colored href={"./img/gallery/centralparknight.jpg"}>View Full Size</Button>
                                    </CardActions>
                                    <CardMenu style={{ color: '#fff' }}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                            <Cell col={3}>
                                <Card shadow={5} style={{ maxWidth: '250px', margin: 'auto' }}>
                                    <CardTitle style={{ height: '300px', width: '250px', color: 'white', background: 'url(/img/gallery/palmtreedusk.jpg) center / cover' }}>
                                    </CardTitle>
                                    <CardText>
                                    Fort Lauderdale, FL, 2015
                </CardText>
                                    <CardActions border>
                                        <Button colored href={"./img/gallery/palmtreedusk.jpg"}>View Full Size</Button>
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

export default Gallery;
