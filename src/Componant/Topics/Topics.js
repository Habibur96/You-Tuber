import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import './Topics.css'
import js from '../../images/js.png';
import react from '../../images/React.png';
import nodejs from '../../images/nodejs.png';
import python from '../../images/python.jpg';
import php from '../../images/php.jpg';
import mongodb from '../../images/mongodb.jpg';
import mysql from '../../images/mysql.png';
import Cplusplus from '../../images/C++.jpg';
import java from '../../images/java.jpg';
import Csharp from '../../images/C#.jpg';
import larabel from '../../images/larabel.png';
import bootstrap from '../../images/bootstrap.jpg';
import startIcon from '../../images/icon.png'
import { Link } from 'react-router-dom';

const Topics = () => {
    return (
        <div>
            <h1 className='mt-5 fw-bold text-danger mb-5 pb-5'> Topics</h1>

            <div className='container col-sm-12 col-md-6, col-lg-4 service fs-4 '>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={js} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>JavaScript</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Link to='/javaScript'>
                            <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                        </Link>


                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={react} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>React</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={nodejs} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>Node JS</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={python} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>Python</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={php} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>php</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={mongodb} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>MongoDB</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={mysql} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>MySQL</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Cplusplus} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>C++</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={java} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>Java</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={bootstrap} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>Bootstrap</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={larabel} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>Laravel</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Csharp} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>C#</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>
                    </Card.Body>
                </Card>

            </div>



        </div >
    );
};

export default Topics;