import React from 'react'
import Header from '../components/navs/Header'
import Footer from '../components/navs/Footer'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Help from '../components/common/Help'
import '../stylesheet/contact.css'

const Contact = () => {
    return <>
        <Header />
        {/* Static Page */}
        <Container className="section mt-4 pb-4">
            <Row>
                <Col md={3} sm={3} className="d-xs-none">
                    <Help />
                </Col>
                <Col md={9} sm={9} xs={12}>
                    <Row>
                        <Col md={12} sm={12} xs={12} className="mb-4">
                        <h4 className="page_title mt-3"><span><i className="fa fa-headphones"></i>  Contact Us </span></h4>
                        </Col>
                        <Col md={6} className="pr-4">
                            <h4 className="text-justify text-dark">
                                Please fill out this form and submit with your queries or suggestions.
                                Our representatives will answer to your queries, at the earliest.
                            </h4>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" />
                                    {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Phone/Mobile</Form.Label>
                                    <Form.Control placeholder="Enter Phone/Mobile" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Comments/Question</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label captcha1">
                                        <span>ABCS</span>
                                        <i style={{cursor: "pointer"}} className="fa fa-refresh"></i>
                                        </Form.Label>
                                    <Form.Control style={{height: "55px", marginTop: "-5px"}} placeholder="Please enter the above code" />
                                </Form.Group>

                                <Button type="submit" id="btnsendmail">
                                    Send Mail
                                </Button>
                            </Form>
                            <div className="contact_details">
                                <p>For sales &amp; orders related queries:<br />
                                    <a href="mailto:orders@imagesbazaar.com">orders@imagesbazaar.com</a> </p>
                                <p>For general information &amp; other queries:<br />
                                    <a href="mailto:info@imagesbazaar.com">info@imagesbazaar.com</a> </p>
                                <p>For strategic tie-up &amp; marketing proposals:<br />
                                    <a href="mailto:deepak@imagesbazaar.com">deepak@imagesbazaar.com</a> </p>
                                <p>For giving us your feedback &amp; suggestions:<br />
                                    <a href="mailto:bindu@imagesbazaar.com">bindu@imagesbazaar.com</a> </p>
                                <p>For doing photo shoots with us as a model, email your pictures at:<br />
                                    <a target="_blank" href="mailto:models@imagesbazaar.com">models@imagesbazaar.com</a>
                                </p>
                                <p>For working with us, email your details at:<br />
                                    <a href="mailto:careers@imagesbazaar.com">careers@imagesbazaar.com</a> </p>
                                <p >For contributing your images, kindly email your portfolio at<br />
                                    <a href="mailto:creative@imagesbazaar.com">creative@imagesbazaar.com </a>
                                    or call us in 011-66545450. <Link to="/contributor" target="_blank">Know more</Link>
                                </p>
                            </div>
                        </Col>
                        <Col md={6} className="topright">
                            <h4><b>Customer Support Team</b></h4>
                            <p><abbr>Monday to Friday</abbr>: 10:00 AM to 8:30 PM</p>
                            <p><abbr>Saturday</abbr>: 10:00 AM to 6:00 PM</p>
                            <p>(Closed on Sundays and National Holidays of India)</p>
                            <div>
                                <h5 className="text-dark mb-2 mt-3">All India Toll Free: 1800-11-6869</h5>
                            </div>

                            <h4>Head Office:</h4>
                            <p><strong>Mash Audio Visuals Pvt. Ltd.</strong><br />
                                505, Aggarwal Prestige Mall, <br />
                                Plot No.2, Road No.44,<br />
                                Pitam Pura, New Delhi-110034<br />
                                Phone : (+91) 11 66545466 <br />
                                Fax : (+91) 11 66545465
                            </p>

                            <Row>
                                <Col className="font-weight-bold text-dark mt-4">
                                    <Row className='mb-1'>
                                        <Col>Mumbai</Col>
                                        <Col md={{offset: 2, span:4}} >93202-66666<br />93202-66566</Col>
                                    </Row><hr style={{width: "92%", margin: "-2px 0 3px 0"}} />
                                    <Row className='mb-1'>
                                        <Col>Delhi</Col>
                                        <Col md={{offset: 2, span:4}} >93202-66666<br />93202-66566</Col>
                                    </Row><hr style={{width: "92%", margin: "-2px 0 3px 0"}} />
                                    <Row className='mb-1'>
                                        <Col>Bangalore</Col>
                                        <Col md={{offset: 2, span:4}} > 93420-66666 </Col>
                                    </Row><hr style={{width: "92%", margin: "-2px 0 3px 0"}} />
                                    <Row className='mb-1'>
                                        <Col>Chennai</Col>
                                        <Col md={{offset: 2, span:4}} >93810-69988 </Col>
                                    </Row><hr style={{width: "92%", margin: "-2px 0 3px 0"}} />
                                    <Row className='mb-1'>
                                        <Col>Pune</Col>
                                        <Col md={{offset: 2, span:4}} >93252-65666 </Col>
                                    </Row><hr style={{width: "92%", margin: "-2px 0 3px 0"}} />
                                    <Row className='mb-1'>
                                        <Col>Cochin</Col>
                                        <Col md={{offset: 2, span:4}} > 93885-66666 </Col>
                                    </Row><hr style={{width: "92%", margin: "-2px 0 3px 0"}} />
                                    <Row className='mb-1'>
                                        <Col>Kolkata</Col>
                                        <Col md={{offset: 2, span:4}} >93399-66666 </Col>
                                    </Row><hr style={{width: "92%", margin: "-2px 0 3px 0"}} />
                                    <Row className='mb-1'>
                                        <Col>Indore</Col>
                                        <Col md={{offset: 2, span:4}} >93292-65666</Col>
                                    </Row><hr style={{width: "92%", margin: "-2px 0 3px 0"}} />
                                    <Row className='mb-1'>
                                        <Col>Lucknow</Col>
                                        <Col md={{offset: 2, span:4}} >93078-65666 </Col>
                                    </Row><hr style={{width: "92%", margin: "-2px 0 3px 0"}} />
                                    <Row className='mb-1'>
                                        <Col>Chandigarh</Col>
                                        <Col md={{offset: 2, span:4}} >93564-65666  </Col>
                                    </Row><hr style={{width: "92%", margin: "-2px 0 3px 0"}} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

        <Footer />
    </>
}

export default Contact