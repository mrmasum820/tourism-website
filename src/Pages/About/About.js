import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain, faPlane } from '@fortawesome/free-solid-svg-icons';
import whyPeopleImg from '../../Images/carousel/slide-01.jpg';
import './About.css';

const About = () => {
    const trainIcon = <FontAwesomeIcon icon={faTrain} />
    const planeIcon = <FontAwesomeIcon icon={faPlane} />
    // const labICon = <FontAwesomeIcon icon={faTrain} />
    // const doctorICon = <FontAwesomeIcon icon={faPlane} />
    // const checkICon = <FontAwesomeIcon icon={faPlane} />
    return (
        <>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>ABOUT US</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='my-5'>
                <Row>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-1">
                                {trainIcon}
                            </div>
                            <div className="feature-details">
                                <h2>Tour Reasearch</h2>
                                <p>Travel is one of the renowned travel agency for tour guide and travel all in world.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-2">
                                {planeIcon}
                            </div>
                            <div className="feature-details">
                                <h2>Visa Services</h2>
                                <p>All kind of visa  are here for you, we are open 24/7 you can always get our help and stay safe.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-1">
                                {trainIcon}
                            </div>
                            <div className="feature-details">
                                <h2>Ticket Booking</h2>
                                <p>Most low cost ticket here. Our concern for your safety and trust relief also.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-2">
                                {planeIcon}
                            </div>
                            <div className="feature-details">
                                <h2>Travel Guide</h2>
                                <p>Most experienced travel guide are here for you they are very much dedicated to all.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="why-people-choose-us-setion">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="why-people-choose-img">
                                <img src={whyPeopleImg} className='img-fluid' alt="WHYPEOPLECHOOSEUS" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="why-people-choose-details">
                                <div className="why-people-detail text-start">
                                    <h2>Why people choose us</h2>
                                    <p>We are the best of the best, recently we have been on a free medication seminar
                                        and we got a huge response and also a survey from our beloved clients.
                                    </p>
                                </div>
                            </div>
                            <Container fluid>
                                <Row>
                                    <Col lg={6} md={12} sm={12} xs={12}>
                                        <div className="why-choose-list d-flex">
                                            <div className="why-choose-icon-1">{trainIcon}</div>
                                            <div className="why-choose-list-title">
                                                <h2>Always online services</h2>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} xs={12}>
                                        <div className="why-choose-list d-flex">
                                            <div className="why-choose-icon-2">{planeIcon}</div>
                                            <div className="why-choose-list-title">
                                                <h2>Instant Operation</h2>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={12} sm={12} xs={12}>
                                        <div className="why-choose-list d-flex">
                                            <div className="why-choose-icon-3">{trainIcon}</div>
                                            <div className="why-choose-list-title">
                                                <h2>24/ 7 Advanced care</h2>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} xs={12}>
                                        <div className="why-choose-list d-flex">
                                            <div className="why-choose-icon-4">{planeIcon}</div>
                                            <div className="why-choose-list-title">
                                                <h2>Make Appointment</h2>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="acheivements-section">
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <div className="achievment-inner">
                                <h2 className='achievment-one'>30+</h2>
                                <p>YEARS OF EXPERIENCE</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className="achievment-inner">
                                <h2 className='achievment-two'>78M+</h2>
                                <p>Happy Customers</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className="achievment-inner">
                                <h2 className='achievment-three'>449+</h2>
                                <p>Types Of Insurance</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className="achievment-inner">
                                <h2 className='achievment-four'>56+</h2>
                                <p>Travel Destination</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;