import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faAddressBook,
    faMailBulk,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './Contact.css';

// this variable will show contact page
const Contact = () => {
    return (
        <div>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>CONTACT</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="query">
                <div className="mt-4 mb-5 contact-form">
                    <h1 className="text-dark text-center">Query</h1>
                    <Form className="w-50 mx-auto mb-2 pt-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="email" placeholder="Type Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button size="lg" className="text-center contact-btn"> Submit </Button>
                    </Form>
                </div>
            </div>

            <div className="d-lg-flex justify-content-around mt-5 text-light p-5 contact-footer">
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPhone} className="fs-1 me-2" />
                    <div>
                        <h3>+8801303151782</h3>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faAddressBook} className="fs-1 me-2" />
                    <div>
                        <h3>Sadhinata Sarani,Badda,Dhaka</h3>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faMailBulk} className="fs-1 me-2" />
                    <div>
                        <h3>mrmasum820@gmail.com</h3>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faClock} className="fs-1 me-2" />
                    <div>
                        <h3>24/7 service available</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;