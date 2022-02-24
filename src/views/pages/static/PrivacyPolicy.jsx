import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivacyPolicy = () => {
    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col sm={3}>
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row>
                        <Col xs={12} className="bg-light mb-4" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-lock"></i> Privacy Policy
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <p>The online Registration Form asks visitors for demographic information (like their PIN code or Telephone No.) . Demographic and profile data is also collected at the site. We use this data to tailor our visitor's experience and services at our site, showing them content that we think they might be interested in, and displaying the content according to their preferences.</p>
                            <p>The customer's contact information is used to contact the visitor when necessary. Users may opt-out of receiving future mailings; see the choice/opt-out section below. We do not divulge the visitor's information to any third party for commercial use. We may use the data for informing the users of our services and offerings from time to time.</p>
                        </Col>
                        <Col xs={12} className="mb-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>What information do you collect when I register for something?</h5>
                            <p className="mt-2">
                                IMAGESBAZAAR offers access to some services that require registration. We may use your contact information to send notification to you of IMAGESBAZAAR products and services by e-mail and/or postal mail. We also may share that information with our clients. Our clients may send you promotional material that is related to the topic of the service for which you registered. We may also use your IP address internally and share it with third parties.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>What information do you collect when I purchase something?</h5>
                            <p className="mt-2">
                                We may also request your e-mail address or mailing address for the purpose of conducting a survey or to provide additional services (for example, subscriptions to e-mail newsletters, announcement lists or information about conferences and trade shows). Whenever we request the identity of a visitor, we will clearly indicate the purpose of the inquiry before the information is requested. We maintain a strict "No-Spam" policy that means that we do not sell, rent, or otherwise give your e-mail address to a third-party, without your consent or as permitted by this Privacy Policy.
                            </p>
                            <p>We may from time to time send e-mail announcing new IMAGESBAZAAR products and services. If you choose to supply your postal address in an online form, you may receive postal mailings from other third party companies.</p>
                        </Col>
                        <Col xs={12} className="mb-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Will you disclose the information you collect to outside third parties?</h5>
                            <p className="mt-2">
                                IMAGESBAZAAR will disclose personal information and/or an IP address, when required by law or in the good-faith belief that such action is necessary to :
                            </p>
                            <ul>
                                <li>Cooperate with the investigations of purported unlawful activities and conform to the edicts of the law or comply with legal process served on IMAGESBAZAAR,</li>
                                <li>Protect and defend the rights or property of the IMAGESBAZAAR and related properties, or visitors to the IMAGESBAZAAR and related properties,</li>
                                <li>Identify persons who may be violating the law, the IMAGESBAZAAR legal notice and Web site User Agreement, the rights of third parties, or otherwise misusing the IMAGESBAZAAR Network or its related properties,</li>
                                <li>Fulfill a user's order or request.</li>
                                <li>IMAGESBAZAAR uses reasonable precautions to keep the information disclosed to us secure. IMAGESBAZAAR reserves the right to transfer all such information in connection with the sale of all or part of IMAGESBAZAAR'S capital stock or assets. Furthermore, we are not responsible for any breach of security or for any actions of any third parties that receive the information. We are not responsible for such third party privacy policies or how they treat information about their users</li>
                            </ul>
                        </Col>
                        <Col xs={12} className="mb-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Choice Opt-Out/ Opt-in announcement List Privacy Policy</h5>
                            <p className="mt-2">
                                When you sign up for an IMAGESBAZAAR e-mail newsletter, you are given the opportunity to sign up for targeted third-party mailings. Whether you want to receive these announcements is your choice. You may stop the arrival of these announcement lists at any time by removing your e-mail address from the list by forwarding the announcement list to info@imagesbazaar.com or by following the instructions on the e-mails you receive.
                            </p>
                            <p>By using the IMAGESBAZAAR site, you consent to the collection and use of information by IMAGESBAZAAR as specified above. We reserve the right to modify this policy. If we decide to change our Privacy Policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.</p>
                            <p>Please send any questions about IMAGESBAZAAR'S Privacy Policy to <strong><a className="text-info" href="mailto:info@imagesbazaar.com">info@imagesbazaar.com</a></strong></p>
                            <p>"We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time"</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default PrivacyPolicy