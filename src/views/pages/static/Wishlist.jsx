import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row className="justify-content-xs-center">
                        <Col xs={12} className="bg-light mb-4" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-lightbulb-o"></i> Wishlist
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <p>A Wishlist is a "folder" on the website that you create, in which you can store, manage, and share images of interest to you.Wishlists are designed to help you get organized. When you find an image on our website that you like, you can save it to a Wishlist you've created and continue searching. No need to save the image to your hard drive or jot down the image number.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>1. Managing your Wishlists</h5>
                            <p className="mt-2"><strong>1. </strong>Access your Wishlist Manager by going to our home page and clicking on the "Wishlists" link at the top of the page.</p>
                            <p><strong>2. </strong>If you're already registered and logged into our website, great! Jump to step</p>
                            <p><strong>3. </strong>If you're either not registered yet or you are registered but have not logged in, you must do so in order to access the Wishlist manager.</p>
                            <p>Not registered? Do so now by going to our home page and clicking on the <Link to="/register">'register'</Link> link. </p>
                            <p>Can't remember your username and password? No problem. Go to Forgot Password and we'll email you your username and password.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>2. Adding / Removing Images</h5>
                            <p className="mt-2">Adding images to a Wishlist : To add an image to a Wishlist, simply click on the "Add to Wishlist" icon underneath the thumbnail of the image you're interested in.</p>
                            <p>Removing images from a Wishlist : To remove images from your Wishlist, select the Wishlist you're interested in by clicking on the Hyperlink within the Wishlist Manager (get there by clicking the 'Wishlists' link at the top navigational area of any page on our Web site).</p>
                            <p>Then, check the checkbox along the thumbnail of the image you wish to remove, select from the drop down menu above for the action required, select 'Remove' and click 'GO'</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>3. Adding Comments to a Wishlist</h5>
                            <p className="mt-2">Within the Wishlist Manager you can add comments for yourself and those with whom you share the Wishlist!</p>
                            <p>Type what you'd like in the Text box provided; Click the "Add/ Update comments" button. Your comments will now appear any time you click on the "Comments" link for that Wishlist.</p>
                            <p>ImagesBazaar offers an immense advantage with its vast database of images and videos that are reflective of India, making them available in the most accessible way. From contemporary Indian imagery to the broadest range of categories depicting Indians in virtually all walks of life, age groups and expressions - you will find it all here!</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>4. Deleting Wishlist</h5>
                            <p className="mt-2">In the Wishlist Manager area, click on the 'Delete Wishlist' link and the Wishlist will get deleted.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>5. Renaming Wishlist</h5>
                            <p className="mt-2">In the Wishlist Manager area, click on the 'Rename Wishlist' link and rename your Wishlist in the Text box area in the next screen, Click 'Rename Wishlist'. The Wishlist will be renamed</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>6. Sharing A Wishlist</h5>
                            <p className="mt-2">You can email your Wishlist to colleagues and clients! Select the Wishlist you'd like to share. Then, click the "Email Wishlist" link at the top of the page. In the next screen enter the email address of the intended recipients, an optional message and Subject and click the "Send" button. This will send an email with a link to your Wishlist.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Wishlist