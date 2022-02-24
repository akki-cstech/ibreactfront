import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const StaticAcc = () => {
    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row className="justify-content-xs-center">
                        <Col xs={12} className="bg-light mb-4" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-user-circle-o"></i> My Account
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <p>My Account is your personal control center on our Website. Get there via the "My Account" link on the top navigation area of any page on the site.</p>
                            <p>From the My Account area, you may edit your profile as under:</p>
                            <ul style={{listStyle: "disc"}} className="text-dark">
                                <li>Change your contact details</li>
                                <li>Change your password</li>
                                <li>Review your personal Lightboxes</li>
                                <li>Review Pending Orders and Confirmed Orders</li>
                                <li>Print out Invoice for all Orders you have placed</li>
                                <li>View Shopping Cart</li>
                                <li>Access to this area requires <Link to="/ibregistration">Login </Link> or <Link to="/register">Register</Link> </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default StaticAcc