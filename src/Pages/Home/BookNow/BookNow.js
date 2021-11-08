import useServices from '../../../hooks/useServices';
import { useParams } from 'react-router-dom';
import './BookNow.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const BookNow = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { serviceID } = useParams();
    const { services } = useServices();


    const matchedPackage = services.find(service => service._id == serviceID);
    const { user } = useAuth();
    const { uid } = user;
    const onSubmit = data => {
        const orderView = 'Pending';
        const userID = uid;
        data.order = matchedPackage;
        data.orderStatus = orderView;
        data.userID = userID;
        console.log(data);
        fetch(`https://nameless-everglades-36815.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Booking Has Been Placed Successfully!!');
                    reset();
                }
            })

    };

    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Row>
                        <Col>
                            <div className="service-title mb-5">
                                <h2>Service Detail</h2>
                            </div>
                        </Col>
                    </Row>
                    <Col md={6} sm={6} xs={12}>
                        <div className="single-service-img d-flex align-items-center">
                            <img src={matchedPackage?.imgUrl} alt="SingleServiceIMG" className='img-fluid' />
                        </div>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <div className="single-service-detail text-start d-flex align-items-center">
                            <div>
                                <h3>{matchedPackage?.packageName}</h3>
                                <p>Details: <br /><span>{matchedPackage?.description}</span></p>
                                <p>Location:{matchedPackage?.location}</p>
                                <h5>Duration: <span>{matchedPackage?.duration}</span></h5>
                                <h4>Price: <span>{matchedPackage?.price}</span></h4>
                                <Link to='/contact'>Contact us</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <form className="book-now-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Place-Order</h1>
                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />


                    <input type="submit" />
                </form>
            </Container>

        </>
    );
};

export default BookNow;