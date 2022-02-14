import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { oIDetailsList, confirmListImage, subPlanInfo, ivSubPlanInfo } from '../../utils/apis/api'
import moment, { relativeTimeRounding } from 'moment'
import { fontSize } from '@mui/system'
import Confirm from '../../views/orderProcess/ConfirmList'
import SubPlan from '../../views/orderProcess/SubOrderList'
import IVSubPlan from '../../views/orderProcess/IVSubPlan'

const Invoice = ({ type }) => {
    const orderID = atob(useParams().id)
    const [OIDetails, setOIDetails] = useState(null)
    const [iData, setIData] = useState([])
    const [tAmount, setTAmount] = useState(0)

    useEffect(() => {
        const callApi = async () => {
            const { ivDetails } = await oIDetailsList({ oId: orderID })
            // console.log('check invoice details', ivDetails)
            ivDetails && setOIDetails(...ivDetails)

            if (type === "confirm") {
                const { iList } = await confirmListImage({ oId: orderID })
                // console.log('check img list', iList)
                if (iList) {
                    let sum = 0
                    for (let x in iList) {
                        sum += iList[x].t_price
                    }
                    // console.log('check sum', sum)
                    setTAmount(sum)
                    setIData(iList)
                }
            }
            else if (type === "subscriptionplan") {
                const { iList } = await subPlanInfo({ oId: orderID })
                if (iList) {
                    setTAmount(ivDetails[0].f_orderAmt)
                    setIData(iList)
                }
            }
            else if (type === "ivsubscriptionplan") {
                const { iList } = await ivSubPlanInfo({ oId: orderID })
                if (iList) {
                    setTAmount(ivDetails[0].f_orderAmt)
                    setIData(iList)
                }
            }
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
                                <Col xs={7} md={7} lg={7} sm={7} className="p-1">
                                    <span> <strong> Date:</strong> &nbsp;
                                        {OIDetails && moment(OIDetails.T_orderdate).format('LLL')}
                                    </span>
                                </Col>
                                {type === "invoice" && <Col xs={5} md={5} lg={5} sm={5} className="p-1 border-left border-dark">
                                    <span> <strong>Invoice No.:</strong>
                                        {OIDetails && OIDetails.invoices.length > 0 && OIDetails.invoices[0].invoice_id}
                                    </span>
                                </Col>}
                            </Row>
                            <Row className="border-bottom border-dark">
                                <Col xs={7} md={7} lg={7} sm={7} className="p-1 border-right border-dark">
                                    <span> <strong>Order Confirmation No.: {orderID}</strong></span>
                                </Col>
                                <Col xs={5} md={5} lg={5} sm={5} className="p-1">
                                    <span> <strong>HSN/SAC:</strong> 998439 </span>
                                </Col>
                            </Row>
                            <Row className="border-bottom border-dark">
                                <Col xs={7} md={7} lg={7} sm={7} className="p-1 border-right border-dark">
                                    <span> <strong>Mode of Payment: </strong>
                                        {OIDetails && OIDetails.T_paymode}
                                    </span>
                                </Col>
                                <Col xs={5} md={5} lg={5} sm={5} className="p-1">
                                    <span> <strong>State Code: </strong>  </span>
                                </Col>
                            </Row>
                            <Row className="border-bottom border-dark">
                                <Col xs={7} md={7} lg={7} sm={7} className="p-1 border-right border-dark">
                                    <span> <strong>Payment Status:</strong>{' '}
                                        {OIDetails && OIDetails.t_paymentstatus}
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
                        <Col className="border-right border-dark">
                            <div className="mt-1 ml-0">
                                <span> <strong>Party's Name:</strong>{' '}
                                    {OIDetails && OIDetails.invoices.length > 0 && OIDetails.invoices[0].Companyname}
                                </span>
                                <p>{OIDetails && OIDetails.invoices.length > 0 && OIDetails.invoices[0].address}</p>
                                <span> <strong>State:</strong>{' '}
                                    {OIDetails && OIDetails.invoices.length > 0 && OIDetails.invoices[0].f_statecrm}
                                </span> &nbsp;
                                <span> <strong>State Code:</strong> </span>
                            </div>
                        </Col>
                        <Col>
                            <div className="m-1">
                                <strong>Client Name:</strong> &nbsp;
                                {OIDetails && OIDetails.invoices.length > 0 && OIDetails.invoices[0].f_client}
                                <br />
                                <strong>Order By:</strong> &nbsp;
                                {OIDetails && OIDetails.invoices.length > 0 && OIDetails.invoices[0].orderby}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="border-top border-dark p-2">
                    {type === "confirm" && <Confirm iData={iData} />}
                    {type === "subscriptionplan" && <SubPlan iData={iData} amount={tAmount} />}
                    {type === "ivsubscriptionplan" && iData.length > 0 && <IVSubPlan iData={iData} amount={tAmount} />}
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className="border-top border-dark">
                    <Row >
                        <Col>
                            <Row>
                                <Col lg={{ span: 5, offset: 5 }} md={{ span: 5, offset: 5 }} sm={{ span: 5, offset: 5 }} xs={{ span: 5, offset: 5 }} className="text-right border-right border-dark">
                                    <span> <strong>Total Value (INR)</strong> </span>
                                </Col>
                                <Col lg={2} sm={2} md={2} xs={2} className="text-center"> <span> {Number(tAmount).toFixed(0)} </span></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row lg={12} md={12} sm={12} xs={12} className="border-top border-dark">
                        <Col>
                            <Row>
                                <Col lg={{ span: 5, offset: 5 }} md={{ span: 5, offset: 5 }} sm={{ span: 5, offset: 5 }} xs={{ span: 5, offset: 5 }} className="text-right border-right border-dark">
                                    <span> <strong>SGST/UTGST Value @9% (INR)</strong> </span>
                                </Col>
                                <Col lg={2} sm={2} md={2} xs={2} className="text-center"> <span> {Math.round(tAmount / 9)} </span></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row lg={12} md={12} sm={12} xs={12} className="border-top border-dark">
                        <Col>ImagesBazaar is a unit of Mash Audio Visuals Pvt. Ltd</Col>
                        <Col>
                            <Row>
                                <Col lg={{ span: 5, offset: 3 }} md={{ span: 5, offset: 3 }} sm={{ span: 5, offset: 3 }} xs={{ span: 5, offset: 3 }} className="text-right border-right border-dark">
                                    <span> <strong>CGST Value @9% (INR)</strong> </span>
                                </Col>
                                <Col lg={4} sm={4} md={4} xs={4} className="text-center"> <span> {Math.round(tAmount / 9)} </span></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className="border-top border-dark">
                    <Row>
                        <Col>
                            <Row>
                                <Col xs={6} lg={6} md={6} sm={6} > <span className="font-weight-bold" style={{ fontSize: "16px" }}> Total Amount before GST (SGST / UGST / CGST / IGST) </span></Col>
                                <Col className="text-center" lg={{ span: 2, offset: 4 }} md={{ span: 2, offset: 4 }} sm={{ span: 2, offset: 4 }} xs={{ span: 2, offset: 4 }}> {Number(tAmount).toFixed(0)} </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className="border-top border-dark">
                    <Row>
                        <Col>
                            <Row>
                                <Col xs={8} lg={8} md={8} sm={8} > <span className="font-weight-bold" style={{ fontSize: "16px" }}> Total Amount Payable inclusive of GST (SGST / UGST / CGST / IGST) </span></Col>
                                <Col className="text-center" lg={{ span: 2, offset: 2 }} md={{ span: 2, offset: 2 }} sm={{ span: 2, offset: 2 }} xs={{ span: 2, offset: 2 }}> {Number(tAmount) + (Math.round(Number(tAmount) / 9) * 2)} </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className="border-top border-dark p-3">
                    ImagesBazaar is a unit of Mash Audio Visuals Pvt. Ltd. Usage of content subject to Mash Rights Agreement mentioned on <a href="https://www.imagesbazaar.com/licensing">
                        www.imagesbazaar.com/licensing
                    </a>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className="border-top border-dark">
                    <Row>
                        <Col lg={8} md={8} sm={8} xs={8} className="border-right border-dark">
                            <div style={{ fontSize: "12px" }}>
                                <h6 style={{ position: "relative", left: "-10px" }}>Terms &amp; Conditions:</h6>
                                <ol className='pl-2'>
                                    <li>Payment must reach us before due date. Interest @24% p.a. will be levied on all delayed payments.</li>
                                    <li> Payment to be made in favour of <strong>Mash Audio Visuals Pvt. Ltd.</strong> payable at Delhi and send to our address mentioned above.</li>
                                    <li>Kindly mention on the reverse of the cheque the order Confirmation No. and Invoice No. against which the amount is paid.</li>
                                </ol>
                                <strong style={{ position: "relative", left: "-10px" }}>If you have any problem with your order, please call us at <span style={{ color: "#f54f0c" }}>+91-9911366666</span> or <span style={{ color: "#f54f0c" }}>+91-1166545466</span> or send us a message at <span style={{ color: "#f54f0c" }}>orders@imagesbazaar.com</span></strong>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-center">
                                <p>For Mash Audio Visuals Pvt. Ltd.</p>
                                <strong style={{ position: "relative", top: "118px", }}>Authorised Signatory</strong>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <h5>WE THANK YOU FOR YOUR BUSINESS. WE VALUE YOUR PATRONAGE</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default Invoice