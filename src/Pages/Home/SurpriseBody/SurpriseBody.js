import React from 'react';
import './SurpriseBody.css';
import surPriseImg from '../../../Images/pexels-artem-beliaikin-1319829.jpg';
import ratingShape from '../../../Images/my-bg.png';
import { Col, Container, Row } from 'react-bootstrap';

const SurpriseBody = () => {
    return (
        <>
            <div className="surprise-body-section">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="surpise-body-img">
                                <img src={surPriseImg} className="img-fluid" alt="SURPRISEBODYIMG" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="surprise-body-details text-start">
                                <div className="surprise-heading">
                                    <h2><span style={{ color: 'white' }}>Make Holidays</span> With Us</h2>
                                    <p style={{color:"white"}}>A travel agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination. Travel agencies can provide outdoor recreation activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, package tours, insurance, guide books, VIP airport lounge access, arranging logistics for luggage and medical items delivery for travellers upon request, public transport timetables, car rentals, and bureau de change services. Travel agencies can also serve as general sales agents for airlines that do not have offices in a specific region. A travel agency's main function is to act as an agent, selling travel products and services on behalf of a supplier. They do not keep inventory in-hand unless they have pre-booked hotel rooms or cabins on a cruise ship for a group travel event such as a wedding, honeymoon, or other group event.</p>
                                </div>
                                <div className="rating-area">
                                    <img src={ratingShape} alt="ratingshape" />
                                    <div className="rating-text d-flex">
                                        <h2 style={{color:"white"}}>4.3</h2>
                                        <p style={{color:"white"}}>Rating based on 3500 user.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SurpriseBody;