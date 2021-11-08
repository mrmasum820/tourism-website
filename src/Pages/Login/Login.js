import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const gIcon = <FontAwesomeIcon icon={faGoogle} />;

    const {
        signInByGoogle,
        setUser,
        error,
        setError
    } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInByGoogle()
            .then(result => {
                history.push(redirectURL);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <>
            <div className="login-form my-5 py-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="service-title">
                                <h2>Please Login</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={handleGoogleSignIn} className='google-btn'>{gIcon} Login with Google</button>
                            <p>{error}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Login;