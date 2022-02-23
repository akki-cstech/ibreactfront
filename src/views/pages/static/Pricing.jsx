import React from 'react'
import Header from '../../../components/navs/Header'
import Footer from '../../../components/navs/Footer'
import { Container, Row, Col, Button, Table, Form, ListGroup } from 'react-bootstrap'
import '../../../stylesheet/Pricing.css'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <>
            <Header />
            <Container className="mt-4">
                <Row>
                    <Col xs={12} className="text-center">
                        <h1 className="pageTitle"> Subscribe &amp; Save Upto 60% </h1>
                    </Col>
                    <Col>
                        <Row id="ForLargePack">
                            <Col xs={12} className="d-flex justify-content-between SizePack" id="Large_SizePack" >
                                <div>
                                    <h2> Large Size Pack </h2>
                                    <p>5400 X 8100 pixels at 300 dpi (18” X 27” TIFF)</p>
                                </div>
                                <div className="align-self-center Large_InnerBtn">
                                    <Button type="submit">
                                        Subscribe
                                    </Button>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <Table responsive="sm" className="ForPack">
                                    <thead>
                                        <tr>
                                            <th>Select</th>
                                            <th>Images/Videos</th>
                                            <th>Discount</th>
                                            <th>Price (Rs.)</th>
                                            <th>Download Within</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                <Form.Check
                                                    type="radio"
                                                    id="select_plan"
                                                    checked
                                                    name="largeSizePack" />
                                            </td>
                                            <td>4</td>
                                            <td>50%</td>
                                            <td>64,000</td>
                                            <td>90 days</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check
                                                    type="radio"
                                                    id="select_plan"
                                                    name="largeSizePack" />
                                            </td>
                                            <td>8</td>
                                            <td>55%</td>
                                            <td>1,15,200</td>
                                            <td>180 days</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check
                                                    type="radio"
                                                    id="select_plan"
                                                    name="largeSizePack" />
                                            </td>
                                            <td>20</td>
                                            <td>60%</td>
                                            <td>2,56,000</td>
                                            <td>365 days</td>
                                        </tr>
                                    </tbody>

                                </Table>
                            </Col>
                            <Col className="text-center">
                                <p> <strong>The downloaded images/videos can be used for a period of 10 years</strong> </p>
                            </Col>
                        </Row>
                        <Row id="ForSmallPack">
                            <Col xs={12} className="d-flex justify-content-between SizePack" id="Small_SizePack" >
                                <div>
                                    <h2> Web Size Pack </h2>
                                    <p>800 X 1200 at 72 dpi (JPEG)</p>
                                </div>
                                <div className="align-self-center Large_InnerBtn">
                                    <Button type="submit">
                                        Subscribe
                                    </Button>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <Table responsive="sm" className="ForPack border-top-none">
                                    <thead>
                                        <tr>
                                            <th>Select</th>
                                            <th>Images/Videos</th>
                                            <th>Discount</th>
                                            <th>Price (Rs.)</th>
                                            <th>Download Within</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                <Form.Check
                                                    type="radio"
                                                    checked
                                                    id="select_plan"
                                                    name="SmallSizePack" />
                                            </td>
                                            <td>4</td>
                                            <td>30%</td>
                                            <td>22,400</td>
                                            <td>90 days</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check
                                                    type="radio"
                                                    id="select_plan"
                                                    name="SmallSizePack" />
                                            </td>
                                            <td>8</td>
                                            <td>35%</td>
                                            <td>41,600</td>
                                            <td>180 days</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form.Check
                                                    type="radio"
                                                    id="select_plan"
                                                    name="SmallSizePack" />
                                            </td>
                                            <td>20</td>
                                            <td>40%</td>
                                            <td>96,000</td>
                                            <td>365 days</td>
                                        </tr>
                                    </tbody>

                                </Table>
                            </Col>
                            <Col className="text-center">
                                <p> <strong>The downloaded images/videos can be used for a period of 10 years</strong> </p>
                            </Col>
                        </Row>
                        <Row id="SingleImagePricing">
                            <Col xs={12} className="text-center">
                                <h2>Single Image Pricing</h2>
                            </Col>
                            <Col xs={12}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th> Image Type </th>
                                            <th> Resolution </th>
                                            <th> Dimension (Pixels) </th>
                                            <th> Size (Inches) </th>
                                            <th> Price (Rs.)* </th>
                                            <th> File Format </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> WEB </td>
                                            <td> 72DPI </td>
                                            <td> 800 x 1200 </td>
                                            <td> For Web Use only </td>
                                            <td> 8000 </td>
                                            <td> JPEG </td>
                                        </tr>
                                        <tr>
                                            <td> SMALL </td>
                                            <td> 300DPI </td>
                                            <td> 1500 X 2250 </td>
                                            <td> 5" X 7.5" </td>
                                            <td> 16000 </td>
                                            <td> JPEG </td>
                                        </tr>
                                        <tr>
                                            <td> MEDIUM </td>
                                            <td> 300DPI </td>
                                            <td> 3600 X 5400 </td>
                                            <td> 12" X 18" </td>
                                            <td> 22000 </td>
                                            <td> TIFF </td>
                                        </tr>
                                        <tr>
                                            <td> LARGE </td>
                                            <td> 300DPI </td>
                                            <td> 5400 X 8100 </td>
                                            <td> 18" X 27" </td>
                                            <td> 32000 </td>
                                            <td> TIFF </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <p> <strong> *Tax @18% as applicable will be charged extra. </strong> </p>
                                <p> <strong> **The image type 'WEB' can only be used for online media and cannot be used in any kind of print media or otherwise. </strong> </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className="Terms_CondiTions">
                        <h4>Terms and Conditions:</h4>
                        <ul>
                            <li>Taxes extra (as applicable)</li>
                            <li>Downloaded videos/images will not be returned/replaced</li>
                            <li>Please read the <Link to="/static/licensing">End-User License
                                Agreement</Link> for usage of the images/videos</li>
                            <li>Available for Indian Territory Only.</li>
                            <li>100% Money Back Guarantee: All the Subscription Packs mentioned above comes with a
                                100%
                                Money Back Guarantee. The refund will only be processed if you have not downloaded
                                even
                                a single image/video during the Subscription period.</li>
                            <li>The downloaded images/videos can be used for a period of 10 years.</li>
                            <li>Images cannot be downloaded once the purchased pack is expired. </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Pricing