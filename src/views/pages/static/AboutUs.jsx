import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={3} sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col>
                    <Row>
                        <Col xs={12} className="mt-4 ml-1">
                            <h3><i className="fa fa-group"></i> About Us </h3>
                        </Col>
                        <Col xs={12} className="mb-3 mt-4 text-justify">
                            <p>
                                ImagesBazaar is an imperative resource for searching, purchasing and downloading creative Indian images and videos. Thousands of leading brands across the globe have been using our content for their advertising, marketing and publishing needs.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-3 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", width: "267px" }}>The ImagesBazaar Philosophy</h5>
                            <p>
                                India's diversity and complexity can be witnessed through its people, traditions and values associated with distinctive regional customs, habits, lifestyle, food & festivals. That's why our images and videos reflects the innate expressions of deep-rooted feelings of individuals through which spring their day-to-day actions. Indians believe in sharing happiness and sorrow together as a community. While doing so, there are unique mannerisms and expressions which are captured in our extensive library of creative imagery.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-3 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", width: "260px" }}>People Behind ImagesBazaar</h5>
                            <p>
                                ImagesBazaar is a collective endeavour of thousands of passionate photographers led by Sandeep Maheshwari, who is a World Record Holder in creative photography. Our team is forever on the move, to capture the essence of India for serving it to the global audience. Some other services offered by our company ranges from photography, production, coordination, art direction, location, casting, make-up to costumes and styling. We are the first Indian stock photography company to employ full time creative researchers for studying market trends and consumer needs. This ensures that the images and videos produced by our team are not just exceptional in quality but also extremely relevant.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-3 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", width: "240px" }}>What ImagesBazaar Offers </h5>
                            <p>
                                According to many surveys, in visual communication, a product or service meant for a particular audience has better chances of success if it carries a face that viewers can relate to. With India emerging as a leading market for an ever-increasing range of products and services, there has been a huge surge in demand for creative images and videos with Indian faces.
                            </p>
                            <p>
                                ImagesBazaar offers an immense advantage with its vast database of images and videos that are reflective of India, making them available in the most accessible way. From contemporary Indian imagery to the broadest range of categories depicting Indians in virtually all walks of life, age groups and expressions - you will find it all here!
                            </p>
                        </Col>
                        <Col xs={12} className="mb-3 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", width: "160px" }}>More Information</h5>
                            <Link to="/static/testimonials">
                                <i className="fa fa-user" style={{
                                    padding: '16px 34px',
                                    background: '#333',
                                    color: '#fff',
                                    marginTop: "30px",
                                    marginLeft: "30px",
                                    fontSize: '46px'
                                }}></i><span style={{position: "relative", top: "-9px"}}> Testimonials</span>
                            </Link>
                            <Link to="/static/contactus" style={{ position: "relative", left: "200px" }}>
                                <i className="fa fa-user" style={{
                                    padding: '16px 34px',
                                    background: '#333',
                                    color: '#fff',
                                    fontSize: '46px'
                                }}></i><span style={{position: "relative", top: "-9px"}}> Contact Us</span>
                            </Link>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs