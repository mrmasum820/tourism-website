import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import notFound from '../../Images/000-404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className="common-banner mb-5 pt-5">
            <Container>
            <Row>
                <Col md={12} sm={12} xs={12}>
                    <div className="section-title">
                        <h2>404 Not Found</h2>
                    </div>
                </Col>
            </Row>
        </Container>
            </div>
        
        <img className="my-4 img-fluid" src={notFound} alt="" />
    </div>
    );
};

export default NotFound;