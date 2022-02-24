import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../../../stylesheet/Technical.css'

const Ordering = () => {
    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row className="justify-content-xs-center">
                        <Col xs={12} className="bg-light mb-4" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-list"></i> Ordering
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>What information do you collect when I register for something?</h5>
                            <p><strong>Step 1: </strong> Login using your email and password</p>
                            <p><strong>Step 2: </strong> Click on the "Add to Cart" link for a single image purchase or "Download" link to download image under Pack given below the thumbnail of the image you want</p>
                            <p><strong>Step 3: </strong>Select the size of the Image or Pack, depending upon your requirements, click on "Add to Cart" or "Subscribe " respectively</p>
                            <p><strong>Step 4: </strong>Click on the "Checkout" button to confirm your order and pay using any of the options given below :</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Debit/Credit Cards (Immediate Delivery 24x7)</h5>
                            <p><strong>1.</strong> Select Credit Card as the mode of payment</p>
                            <p><strong>2.</strong> Click on "Confirm Order" button</p>
                            <p><strong>3.</strong> You will be redirected to a secure payment gateway where you can choose to pay by VISA, Master Card or American Express. Simply enter your Credit Card details and as soon as your transaction gets successful, you will immediately get a link to download the image(s).</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Cheque / Demand Draft</h5>
                            <p>Drop Cheque/Demand Draft in favour of MASH AUDIO VISUALS PVT. LTD. at any ICICI Bank Outlet in your city
                                (Account no. 015405002335)</p>
                            <p>Send Cheque/Demand Draft in favour of MASH AUDIO VISUALS PVT. LTD. Payable at NEW DELHI to the address given below :</p>

                            <address>
                                Mash Audio Visuals Pvt. Ltd. <br />
                                505, Aggarwal Prestige Mall,<br />
                                Plot No. 2, Road No. 44,<br />
                                PitamPura, New Delhi-110034
                            </address>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Net Banking (Direct debit to Bank Account)</h5>
                            <p>Transfer funds online from your bank account to ICICI BANK Account No. 015405002335 of MASH AUDIO VISUALS PVT. LTD. as per the details given below:</p>
                            <p>Wire Transfer/RTGS/NEFT/Remittance details:</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Company's Name :</th>
                                        <td style={{fontSize: "15px", fontWeight: "normal", paddingLeft: "80px"}}>
                                            MASH AUDIO VISUALS PVT. LTD.</td>
                                    </tr>
                                    <tr>
                                        <th>Bank Name </th>
                                        <td style={{fontSize: "15px", fontWeight: "normal", paddingLeft: "80px"}}>
                                            ICICI BANK LIMITED</td>
                                    </tr>
                                    <tr>
                                        <th>Account No :
                                        </th>
                                        <td style={{fontSize: "15px", fontWeight: "normal", paddingLeft: "80px"}}>015405002335</td>
                                    </tr>
                                    <tr>
                                        <th>Account Type :</th>
                                        <td style={{fontSize: "15px", fontWeight: "normal", paddingLeft: "80px"}}>
                                            CURRENT</td>
                                    </tr>
                                    <tr>
                                        <th>RTGS/NEFT/IFSC Code :</th>
                                        <td style={{fontSize: "15px", fontWeight: "normal", paddingLeft: "80px"}}>ICIC0000154</td>
                                    </tr>
                                    <tr>
                                        <th>Swift Code :</th>
                                        <td style={{fontSize: "15px", fontWeight: "normal", paddingLeft: "80px"}}>ICICINBBCTS</td>
                                    </tr>
                                    <tr>
                                        <th>Bank Address :
                                        </th>
                                        <td style={{fontSize: "15px", fontWeight: "normal", paddingLeft: "80px"}}>
                                            RP-1, PITAMPURA, DELHI - 110034 INDIA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>How to Download image under Pack</h5>
                            <p><strong>Step 1: </strong>Login using your email and password</p>
                            <p><strong>Step 2: </strong>Click on "Download" link given below the thumbnail of the image you want to download</p>
                            <p><strong>Step 3: </strong>Select the Pack under which you want to Download the image</p>
                            <p><strong>Step 4: </strong>Enter Client/Designated EndUser Name and click on Download</p>
                            <p><strong>Step 5: </strong>The image is Downloaded under your pack and can be viewed under Download History page</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Delivery Schedules (Subject to Payment Realisation)</h5>
                            <p> For all orders placed through Credit Cards (VISA, Master Card or American Express), the link to download the image(s) gets immediately activated as soon as your transaction gets successful, whether it's day or night, weekday or weekend.  </p>
                            <p>For orders placed through Net Banking, Cheque/Demand Draft or Electronic Fund Transfer, the link to download the image(s) gets activated as soon as we receive your payment. Orders placed after the office timings given below will be activated at 10:00 AM on the next working day. <br />
                                <strong>Office Timings (IST)</strong>:<br />  Monday to Friday: 10:00 AM to 8:30 PM <br />Saturday: 10:00 AM to 6:00 PM <br />(Closed on Sundays and National Holidays of India)
                            </p>
                            <p><strong>Urgent Requirements?  </strong><br /> We understand. If you're in a bind, kindly call us on <a className="link">+91-99113-66666</a> and we'll do everything we can to help you out.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Ordering