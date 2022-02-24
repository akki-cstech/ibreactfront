import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../../../stylesheet/Technical.css'

const Technical = () => {
    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row className="justify-content-xs-center">
                        <Col xs={12} className="bg-light mb-4" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-desktop"></i> Technical
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <p>All of the images on our Website are available for purchase individually. Try before you buy. Check out these free samples to know the technical specifications for various image sizes:</p>
                        </Col>
                        <Col className="mb-2" xs={12}>
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Horizontal Sample Images</h5>
                            <Table className="sample_Image_Table mt-4 bg-light">
                                <thead>
                                    <tr>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Image Type </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Dimension (Pixels) </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Size (Inches) </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Resolution </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Download Size </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> File Format </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Download Sample </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'> WEB </td>
                                        <td> 1200 X 800 </td>
                                        <td> For Web Use only </td>
                                        <td> 72 dpi </td>
                                        <td> 205 KB </td>
                                        <td> JPEG </td>
                                        <td> <a href="https://ibcdn.imagesbazaar.com/try/Hor/Web.zip"> Sample
                                        </a> </td>
                                    </tr>
                                    <tr>
                                        <td className='font-weight-bold'> SMALL </td>
                                        <td> 2250 X 1500 </td>
                                        <td> 5" X 7.5" </td>
                                        <td> 300 dpi </td>
                                        <td> 1.2 MB </td>
                                        <td> JPEG </td>
                                        <td> <a href="https://ibcdn.imagesbazaar.com/try/Hor/Small.zip">Sample
                                        </a> </td>
                                    </tr>
                                    <tr>
                                        <td className='font-weight-bold'> MEDIUM </td>
                                        <td> 5400 X 3600 </td>
                                        <td> 12" X 18" </td>
                                        <td> 300 dpi </td>
                                        <td> 55.6 MB </td>
                                        <td> TIFF </td>
                                        <td> <a href="https://ibcdn.imagesbazaar.com/try/Hor/Medium.zip">Sample
                                        </a> </td>
                                    </tr>
                                    <tr>
                                        <td className='font-weight-bold'    > LARGE </td>
                                        <td> 8100 X 5400 </td>
                                        <td> 18" X 27" </td>
                                        <td> 300 dpi </td>
                                        <td> 125.1 MB </td>
                                        <td> TIFF </td>
                                        <td> <a href="https://ibcdn.imagesbazaar.com/try/Hor/Large.zip">Sample
                                        </a> </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col className="mb-2" xs={12}>
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Vertical Sample Images</h5>
                            <Table className="sample_Image_Table mt-4 bg-light">
                                <thead>
                                    <tr>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Image Type </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Dimension (Pixels) </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Size (Inches) </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Resolution </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Download Size </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> File Format </th>
                                        <th className="font-weight-bold" style={{ fontSize: "18px" }}> Download Sample </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'> WEB </td>
                                        <td> 800 X 1200 </td>
                                        <td> For Web Use only </td>
                                        <td> 72 dpi </td>
                                        <td> 205 KB </td>
                                        <td> JPEG </td>
                                        <td> <a href="https://ibcdn.imagesbazaar.com/try/ver/Web.zip">Sample
                                        </a> </td>
                                    </tr>
                                    <tr>
                                        <td className='font-weight-bold'> SMALL </td>
                                        <td> 1500 X 2250 </td>
                                        <td> 5" X 7.5" </td>
                                        <td> 300 dpi </td>
                                        <td> 1.2 MB </td>
                                        <td> JPEG </td>
                                        <td> <a href="https://ibcdn.imagesbazaar.com/try/ver/Small.zip">Sample
                                        </a> </td>
                                    </tr>
                                    <tr>
                                        <td className='font-weight-bold'> MEDIUM </td>
                                        <td> 3600 X 5400 </td>
                                        <td> 12" X 18" </td>
                                        <td> 300 dpi </td>
                                        <td> 55.6 MB </td>
                                        <td> TIFF </td>
                                        <td> <a href="https://ibcdn.imagesbazaar.com/try/ver/Medium.zip">Sample
                                        </a> </td>
                                    </tr>
                                    <tr>
                                        <td className='font-weight-bold'> LARGE </td>
                                        <td> 5400 X 5100 </td>
                                        <td> 18" X 27" </td>
                                        <td> 300 dpi </td>
                                        <td> 125.1 MB </td>
                                        <td> TIFF </td>
                                        <td> <a href="https://ibcdn.imagesbazaar.com/try/ver/Large.zip">Sample
                                        </a> </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="bg-light " id="smallImgDIV">
                                <p>Note: The format of all images that you download is in respective file
                                    type. The file size of compressed format is smaller, which allow for faster download of image.
                                    When selecting the size of an image, make sure that the dimensions listed are appropriate of your
                                    intended use. Selecting a larger size will give you more flexibility to scale an image without
                                    losing quality. </p>
                                <p>By downloading any FREE sample, you agree that your usage of the image(s) will comply with our <Link to="/static/compusagesagreement">COMP USAGE AGREEMENT &gt;&gt;</Link> </p>
                            </div>
                        </Col>
                        <Col className="mb-2" xs={12}>
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Download Times</h5>
                            <p>Following are approximate download times for the image sizes given below :</p>
                            <Table className="sample_Image_Table mt-4 bg-light">
                                <thead>
                                    <tr>
                                        <th className="font-weight-bold text-center" style={{ fontSize: "18px" }}> File Size </th>
                                        <th className="font-weight-bold text-center" style={{ fontSize: "18px" }}> Compressed File Size </th>
                                        <th className="font-weight-bold text-center" style={{ fontSize: "18px" }}> 56K Time </th>
                                        <th className="font-weight-bold text-center" style={{ fontSize: "18px" }}> ISDN </th>
                                        <th className="font-weight-bold text-center" style={{ fontSize: "18px" }}> Broadband </th>
                                        <th className="font-weight-bold text-center" style={{ fontSize: "18px" }}> T1 </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 1 MB </td>
                                        <td> 200-400 K </td>
                                        <td> 1 min </td>
                                        <td> 20 sec </td>
                                        <td> 10 sec </td>
                                        <td> 6 sec </td>
                                    </tr>
                                    <tr>
                                        <td> 17 MB </td>
                                        <td> 1-4 MB </td>
                                        <td> 15 Min </td>
                                        <td> 4 Min </td>
                                        <td> 3 Min </td>
                                        <td> 2 Min </td>
                                    </tr>
                                    <tr>
                                        <td> 47 MB </td>
                                        <td> 4-12 MB </td>
                                        <td> 30 Min </td>
                                        <td> 15 Min </td>
                                        <td> 7 Min </td>
                                        <td> 4 Min </td>
                                    </tr>
                                    <tr>
                                        <td> 99 MB </td>
                                        <td> 6-16 MB </td>
                                        <td> 60 Min </td>
                                        <td> 30 Min </td>
                                        <td> 10 Min </td>
                                        <td> 5 Min </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Technical