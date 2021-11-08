
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import ReviewBooking from './ReviewBooking';


const MyBookingList = () => {
    const [booking, setBooking] = useState([]);
    const { user } = useAuth();
    const { uid } = user;
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${uid}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [uid]);
    const handleRemove = key => {

        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${key}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const newBooking = booking.filter(book => book._id !== key);
                        setBooking(newBooking);;
                    }
                });
        }

    }



    return (
        <div>
            <Container>
                <Row>
                    {
                        booking.map(bookingDetails => <ReviewBooking bookingDetails={bookingDetails} key={bookingDetails._id} handleRemove={handleRemove}> </ReviewBooking>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyBookingList;