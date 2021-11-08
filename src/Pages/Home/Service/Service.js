import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { packageName, price, duration, imgUrl, _id , location} = props.service;
    return (
        <Col md={4} sm={6} xs={12} className='text-start mb-5'>
            <div className="service-card">
                <div className="service-img">
                    <img src={imgUrl} alt="ServiceImage" className='img-fluid' />
                </div>
                <div className="service-title-details">
                    <h3>{packageName}</h3>
                    <p>Location: {location}</p>
                    <p>Duration: <span>{duration}</span></p>
                    <p>Price: <span>{price}</span></p>
                    <Link to={`/bookNow/${_id}`}>
                        <button>Book Now</button>
                    </Link>
                    <br />
                </div>
            </div>
        </Col>
    );
};

export default Service;