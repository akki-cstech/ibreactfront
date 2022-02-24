import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Glossary = () => {
    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row className="justify-content-xs-center">
                        <Col xs={12} className="bg-light mb-4" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-book"></i> Glossary
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>What information do you collect when I register for something?</h5>
                            <p className="mt-2">This refers to the process of setting a device to known colour conditions. Calibration must be performed externally for devices whose colour characteristics change frequently, e.g. monitors because phosphors lose brightness over time, and on printers because proofers and other digital printing devices can change output when colorant or paper stock is changed. Calibration is not required for most input devices (e.g., scanners and cameras) since these devices are generally self-calibrating .</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Characterization</h5>
                            <p className="mt-2">This is the process of creating an ICC profile that describes the unique colour characteristics of a device used to process your stock image, such as a monitor, scanner, colour printer, and printing press.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Comping Image</h5>
                            <p className="mt-2">A low-resolution stock photo used for non-final layouts.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Comp Usage</h5>
                            <p className="mt-2">'Comp Usage' is defined as the creation of a temporary test use, rough layout or comprehensive rendering of a proposed work for client review, internal company review or testing. The Image may not be used in any materials distributed or accessible to the public or in any final product or use, including, without limitation, any online or other electronic distribution system (except you may transmit comps digitally or electronically for their review) and may not be sold or sublicensed alone or as part of any product.</p>
                            <p><Link to="/static/compusagesagreement">Click Here </Link> to view the detailed explanation of COMP USAGE AGREEMENT. </p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Convergence</h5>
                            <p className="mt-2">This occurs in an RGB monitor, where red, green and blue signals all "converge" in one pixel. At full brightness, the RGB pixel in convergence would be white.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Digital Proof</h5>
                            <p className="mt-2">This is a proofing system that does not include the use of film. Data is sent to a printer and imaged directly onto a paper-based material. There are several limitations of digital proofs: 1) They do not use the film that will be used to produce plates, and thus are open to interpretation of the output device, 2) Few of these devices print in the same dot pattern as is utilized in the printing process, and 3) The ink utilized in these printers is not representative of the inks used in the printing process and can show a vast colour range and density not attainable on a printing press. Digital proofs are usually used where money or time is too much of an issue to run a wet proof.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Dimensions</h5>
                            <p className="mt-2">Height and width of a stock image is measured in centimetres or inches.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Halftone</h5>
                            <p className="mt-2">A stock image is looked at through a screen that converts the image into dots of various sizes. When printed, the dots merge to give an illusion of continuous tone to the naked eye.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Gamut</h5>
                            <p className="mt-2">This means every colour combination that is possible to produce with a given set of colourants on a given device or system.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Imposition</h5>
                            <p className="mt-2">This is the process of laying out pages in a press form so that they will be in the correct order after the printed sheet is folded.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Interpolation</h5>
                            <p className="mt-2">The process of increasing the resolution of a stock image .</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>JPEG</h5>
                            <p className="mt-2">Stands for Joint Photographic Experts Group and is the most common compressed standard for high-resolution stock photos.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Low-res</h5>
                            <p className="mt-2">This is a short form of low resolution. If you use a lo-res stock image it will result in low quality reproduction because of a small number of dots or lines per inch.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>LPI</h5>
                            <p className="mt-2">This stands for lines per inch and is a measure of resolution for halftones.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Model Release</h5>
                            <p className="mt-2">This is a signed release from the person/s depicted in a stock image, giving consent for his or her likeness to be used for commercial purposes as described in the release. It is your responsibility to ensure that you have the correct model releases for your license use and that you comply with the relevant local laws.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Non-Exclusive Rights</h5>
                            <p className="mt-2">Our images can be sold repeatedly to different clients. Non-Exclusive Rights means that other people can buy the image you have chosen.</p>
                            <p>Note: Nevertheless, you can't redistribute or resell images either after taking NON EXCLUSIVE RIGHTS AGREEMENT.
                                <Link href="/static/licensing">Click Here</Link> to view the detailed explanation of image procurement Rights agreement </p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-0 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Image Sizes</h5>
                            <p className="mt-2">All of the images in our site are available for purchase individually. (<Link to="/static/mashnonexeclusiverightagreement">Non-Exclusive Rights Price</Link> is determined by file size.) </p>
                            <p>WEB(1MB) image types are perfect for the Web, presentations and other multimedia uses, while the Low (1.5MB), Medium (10MB), High (16.1MB), Super (24.4MB) and XL (39.6MB) Image Types options are suitable for high-quality print reproduction.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Glossary