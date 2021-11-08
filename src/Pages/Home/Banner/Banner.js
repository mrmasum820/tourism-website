import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slideOne from '../../../Images/carousel/slide-01.jpg';
import slideTwo from '../../../Images/carousel/slide-02.jpg';
import slideThree from '../../../Images/carousel/slide-03.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={slideOne}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={slideTwo}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={slideThree}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;