import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ReviewAllBooking = (props) => {
    const { handleRemove, handleApproveStatus} = props;
    const {order, orderStatus, _id, name} = props.bookingDetails;
    const {isLoading} = useAuth();
    if (isLoading) {
        return <Spinner className='my-3' animation="grow" variant="info" />;
    }
    return (
        <Col  xs={6} md={4}  className='text-start mb-5'>
           <div className="service-card">
                <div className="service-img">
                    <img src={order.imgUrl} alt="ServiceImage" className='img-fluid' />
                </div>
                <div className="service-title-details">
                    <h3>{order.packageName}</h3>
                    <p>Booked by {name}</p>
                    <p>Location: {order.location}</p>
                    <p>Duration: <span>{order.duration}</span></p>
                    <p>Price: <span>{order.price}</span></p>
                    <p>Order Status:{orderStatus}</p>
                    <br />
                    <button onClick={()=> handleApproveStatus(_id)}>Approve The Booking</button>
                    <br />
                    <button onClick={()=>handleRemove(_id)}>Delete</button>
                </div>
            </div>
        </Col>
    );
};

export default ReviewAllBooking;