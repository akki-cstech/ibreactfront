import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contributor = () => {
    return (
        <Container className="mt-4 pb-4" style={{overflow: "auto"}}>
            <Row>
                <Col sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row className="justify-content-xs-center">
                        <Col xs={12} className="bg-light mb-4" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-users"></i> Be a Contributor
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <img className='mb-3' src="/images/banner-ib.jpg" />
                            <h5 style={{ borderBottom: "3px solid", padding: "4px" }}>What information do you collect when I register for something?</h5>
                        </Col>
                        <Col xs={12} className="mb-2 text-justify" style={{position: "relative", top: "79px"}}>
                            <Row className="d-flex align-items-center">
                                <Col xs={1}> <span>1</span> </Col>
                                <Col>
                                    <h4>Submit</h4>
                                    <p className='mt-1'>To get started, you need to send your portfolio/samples.</p>
                                </Col>
                            </Row>
                            <Row className="d-flex align-items-center">
                                <Col xs={1}> <span>1</span> </Col>
                                <Col>
                                    <h4>Approval</h4>
                                    <p className='mt-1'>If your work/submission gets approved as per our acceptance criteria then you will be eligible to be our contributor.</p>
                                </Col>
                            </Row>
                            <Row className="d-flex align-items-center">
                                <Col xs={1}> <span>1</span> </Col>
                                <Col>
                                    <h4>Reach millions of buyers</h4>
                                    <p className='mt-1'>Now your work is open to millions of buyers.</p>
                                </Col>
                            </Row>
                            <Row className="d-flex align-items-center">
                                <Col xs={1}> <span>1</span> </Col>
                                <Col>
                                    <h4>Get 50% Royalty</h4>
                                    <p className='mt-1'>You will get 50% royalty on the net selling price.</p>
                                </Col>
                            </Row>
                            <Row className="d-flex align-items-center">
                                <Col xs={1}> <span>1</span> </Col>
                                <Col>
                                    <h4>Grow with us</h4>
                                    <p className='mt-1'>Improve your earnings by submitting more images on regular basis.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-2" style={{padding: "80px 10px 30px"}}> 
                        <hr />
                        <h4>To get started, kindly email your portfolio at <a href="mailto:creative@imagesbazaar.com">creative@imagesbazaar.com</a> or call<br /> us on
                            011-66545450.</h4> <hr /></Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Acceptance criteria</h5>
                            <ul className="mt-2" style={{ listStyle: "disc" }}>
                                <li>Content must be your personal work and you must own the copyright upon everything within it.</li>
                                <li>Image captured from camera must be of least 12MP resolution in 2:3 ratio eg.12x18 inches.</li>
                                <li>Must be RGB, saved at the highest JPG quality (100% or level 12).</li>
                                <li>Have a Model Release for all recognizable people in your image.</li>
                                <li>For traced illustrations you need to send the original image and if it is not the case you should
                                    mention the illustration is your own work, created from scratch.</li>
                                <li>Check carefully for copyright issues such as labels, logos, characters from cartoons or movies
                                    etc. Note that some buildings are protected by a trademark (such as new sculptures), cars like
                                    Maruti and Hyundai, motorcycles, the Coca-Cola bottle, the logos, designer furniture etc.</li>
                                <li>We don't accept offensive content such as explicit nudes, drugs, people in offensive positions
                                    etc.</li>
                                <li>Model/Property release files must be JPEG, filenames must contain only letters and numbers, no
                                    special characters.</li>
                            </ul>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>What kind of images/concepts?</h5>
                            <p className='mt-2'>Our customers are looking for high-quality content in all subject areas, including images with models, culture diversity, technology, fashion, food, portraiture, lifestyle, architecture, beauty, business, and more.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Contributor