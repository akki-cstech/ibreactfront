import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import 'bootstrap/dist/css/bootstrap.min.css';

const Downloading = () => {
    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row className="justify-content-xs-center">
                        <Col xs={12} className="bg-light mb-4" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-download"></i> Downloading
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <p>The download link of the image(s) is made available in "My Account" section once your order is confirmed. Just click on that link and downloading of the image(s) will start automatically. If you have any trouble, please contact us, we'll be glad to help!</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>What information do you collect when I register for something?</h5>
                            <p className="mt-2"><strong>ON THE MAC : </strong>With cursor over image, hold down mouse button and choose appropriate command for saving the image.</p>
                            <p><strong>ON THE PC : </strong>With cursor over image, right-click and choose "Save Picture as..."</p>
                            <p><strong>Note : </strong>If you save the image from the thumbnails page, you will save the thumbnail-size file. To save the larger comping view click on any thumbnail to bring up its larger version and then save that.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Downloading