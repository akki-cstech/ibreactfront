import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { oIDetailsList, confirmListImage } from '../../utils/apis/api'
import moment from 'moment'

const Invoice = () => {
    const orderID = atob(useParams().id)
    const [OIDetails, setOIDetails] = useState(null)
    const [iData, setIData] = useState([])

    useEffect(() => {
        const callApi = async () => {
            const { ivDetails } = await oIDetailsList({ oId: orderID })
            console.log('check detail', ivDetails)
            setOIDetails(...ivDetails)

            const { iList } = await confirmListImage({ oId: orderID })
            console.log('check img list', iList)
            setIData(iList)
        }
        callApi()
    }, [])


    return (
        // <h1>my name is akash {id} </h1>
        <Container style={{
            maxWidth: '930px',
            background: '#fff',
            fontSize: '14px',
            color: '#000000',
            fontFamily: 'Trebuchet MS',
        }}  >
            <Row className="justify-content-md-center" style={{ padding: "9px 0" }}>
                <Col className="pl-4">
                    <img src="/images/invoiceLogo.jpg" style={{ width: "150px", height: "50px" }} alt="logo" />
                </Col>
                <Col className="text-center">
                    <h3 style={{ fontSize: '24px', marginTop: '20px' }}> TAX INVOICE </h3>
                </Col>
                <Col className="text-right pr-4">
                    <span className="text-info" style={{ position: "relative", top: "24px", cursor: "pointer" }} onClick={() => window.print()} >View/Print</span>
                </Col>
            </Row>
            <Row className="border border-dark m-1">
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Row>
                        <Col className="border-right border-dark">
                            <div className="mt-2 ml-0">
                                <span> <strong> Mash Audio Visuals Private Limited </strong> </span>
                                <p>
                                    505, Aggarwal Prestige Mall, Plot No.2,
                                    Road No.44, PitamPura, New Delhi-110034
                                    Phone: (+91) 11 66545466​​​​ | Fax: (+91) 11 66545465
                                </p>
                                <p> <strong>CIN:</strong> U92111DL2003PTC122096 </p>
                                <p> <strong>GSTIN:</strong> 07AADCM6333L1ZA </p>
                                <p> <strong>PAN:</strong> AADCM6333L </p>
                            </div>
                        </Col>
                        <Col>
                            <Row className="border-bottom border-dark">
                                <Col xs={7} md={7} lg={7} sm={7} className="p-1 border-right border-dark">
                                    <span> <strong> Date:</strong> &nbsp;
                                        {OIDetails && moment(OIDetails.T_orderdate).format('LLL')}
                                    </span>
                                </Col>
                                <Col xs={5} md={5} lg={5} sm={5} className="p-1">
                                    <span> <strong>Invoice No.:</strong>
                                        {OIDetails && OIDetails.invoices.length > 0 && OIDetails.invoices.invoice_id}
                                    </span>
                                </Col>
                            </Row>
                            <Row className="border-bottom border-dark">
                                <Col xs={7} md={7} lg={7} sm={7} className="p-1 border-right border-dark">
                                    <span> <strong>Order Confirmation No.:</strong>
                                        {orderID}
                                    </span>
                                </Col>
                                <Col xs={5} md={5} lg={5} sm={5} className="p-1">
                                    <span> <strong>HSN/SAC:</strong> 998439 </span>
                                </Col>
                            </Row>
                            <Row className="border-bottom border-dark">
                                <Col xs={7} md={7} lg={7} sm={7} className="p-1 border-right border-dark">
                                    <span> <strong>Mode of Payment: </strong>
                                        {OIDetails && OIDetails.invoices.length > 0 && OIDetails.invoices.f_paymode}
                                    </span>
                                </Col>
                                <Col xs={5} md={5} lg={5} sm={5} className="p-1">
                                    <span> <strong>State Code: </strong>  </span>
                                </Col>
                            </Row>
                            <Row className="border-bottom border-dark">
                                <Col xs={7} md={7} lg={7} sm={7} className="p-1 border-right border-dark">
                                    <span> <strong>Payment Status:</strong>
                                        {OIDetails && OIDetails.invoices.length > 0 && OIDetails.invoices.t_paymentstatus}
                                    </span>
                                </Col>
                                <Col xs={5} md={5} lg={5} sm={5} className="p-1">
                                    <span> <strong>State: </strong>
                                        {OIDetails && OIDetails.f_state}
                                    </span>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={12} md={12} lg={12} sm={12} className="p-1">
                                    <span> <strong>Reverse Charges Applicability: </strong> Not Applicable </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} lg={12} sm={12} className="p-1">
                                    <span> <strong>Place of Supply: </strong>
                                        {OIDetails && OIDetails.f_state}
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className="border-top border-dark">
                    <Row>
                        <Col>
                            <div className="mt-2 ml-0">
                                <span> <strong>Party's Name:</strong>
                                    {OIDetails && OIDetails.invoices.Companyname}
                                </span>
                                <p>{OIDetails && OIDetails.invoices.address}</p>
                                <span> <strong>State:</strong>
                                    {OIDetails && OIDetails.invoices.f_statecrm}
                                </span> &nbsp;
                                <span> <strong>State Code:</strong> </span>
                            </div>
                        </Col>
                        <Col>
                            <div className="m-1">
                                <strong>Client Name:</strong> &nbsp;
                                {OIDetails && OIDetails.t_client}
                                <br />
                                <strong>Order By:</strong> &nbsp;
                                {OIDetails && OIDetails.t_orderedby}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="border-top border-dark p-2">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Item ID</th>
                                <th>Image Type</th>
                                <th>Rights</th>
                                <th>Dimensions (Pixels)</th>
                                <th>Amount (Rs.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                iData.map((image) => <tr>
                                    <td className="text-center"> <img src={`https://ibcdn.imagesbazaar.com/img280/${image.f_groupid}/${image.f_rank}-${image.t_imageid}.jpg`} alt={image.t_imageid} style={{ width: "120px", height: "80px" }} /> </td>
                                    <td> {image.t_imageid} </td>
                                    <td>{image.t_quality}</td>
                                    <td>Non-Exclusive</td>
                                    <td> {image.f_mydimension} </td>
                                    <td> {image.t_price} </td>
                                </tr>
                                )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Invoice