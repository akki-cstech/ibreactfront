import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import '../../stylesheet/ProposalGST.css'
import { ProposalDetails, GetAProposalUser } from '../../utils/apis/api';
import moment from 'moment';

const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ProposalGST = () => {
    let query = useQuery();
    const [list, setList] = useState([])
    const [client, setClient] = useState({})
    const [tAmount, setTAmount] = useState('')

    // my order id is {atob(query.get("id"))}

    const callApi = async () => {
        const { proplist } = await ProposalDetails({ orderId: atob(query.get("id")) })
        if (proplist) {
            // console.log('check lsit', proplist)
            setList(proplist)
            let sum = 0;
            for (let x of proplist) {
                sum += x.t_price
            }
            setTAmount(sum)
        }

        const { user } = await GetAProposalUser({ T_orderid: atob(query.get("id")) })
        if (user) {
            setClient(user)
        }
    }

    useEffect(() => {
        document.body.style.background = "white"
        callApi()
    }, [])

    const findDimension = (imgType) => {
        switch (imgType) {
            case 'WEB':
                return '800 x 1200 at 72dpi';
            case 'SMALL':
                return '1500 X 2250 at 300dpi';
            case 'MEDIUM':
                return '3600 X 5400 at 300dpi';
            case 'LARGE':
                return '5400 X 8100 at 300dpi';
            case 'XXL':
                return '5400 X 8100 at 300dpi';
            case '3Months':
                return '3600 x 5400 at 300dpi';
            default:
                return '';
        }
    }

    return (
        <Container>
            {Object.keys(client).length !== 0 && list.length !== 0 &&
                <Row className="justify-content-md-center">
                    <Col md={8} xs={12}>

                        <Row>
                            <Col xs={12} id="myPagEheaDer" className="d-flex align-items-center justify-content-between mt-4">
                                <img src="http://ibcdn.imagesbazaar.com/Html2015/images/logo_imagesBazaar.png" border="0" />
                                <h4 className="text-center">QUOTATION</h4>
                                <span className="text-info" style={{ cursor: "pointer" }} onClick={() => window.print()}>Print</span>
                            </Col>
                            <Col xs={12} className="border border-dark">
                                <Row className="border-dark border-bottom">
                                    <Col className="border-dark border-right"> <strong>Quotation No.: {atob(query.get("id"))}</strong> </Col>
                                    <Col> <strong>Date: {moment(client.T_orderdate).format('DD/MM/YYYY')} </strong> </Col>
                                </Row>
                                <Row className="border-dark border-bottom">
                                    <Col className="border-dark border-right"> <strong>Kind Attn : {client.f_heading} </strong> </Col>
                                    <Col> <strong>Credit Period : {client.f_proposaluser} </strong> </Col>
                                </Row>
                                <Row className="border-dark border-bottom">
                                    <Col className="border-dark border-right"> <strong>Client Name : {client.f_client} </strong> </Col>
                                    <Col> <strong>GSTN No. : {client.f_GSTNNo && client.f_GSTNNo} </strong> </Col>
                                </Row>
                                <Row className="border-dark border-bottom">
                                    <Col> <strong>Place of Supply :  </strong> </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Table className="border border-dark mt-3">
                                            <thead className='thead-dark'>
                                                <tr className='bg-light'>
                                                    <th className="border-dark border-right" style={{ fontSize: "15px" }}> Image </th>
                                                    <th className="border-dark border-right" style={{ fontSize: "15px" }}> Item ID </th>
                                                    <th className="border-dark border-right" style={{ fontSize: "15px" }}> Image Type </th>
                                                    <th className="border-dark border-right" style={{ fontSize: "15px" }}> Rights </th>
                                                    <th className="border-dark border-right" style={{ fontSize: "15px" }}> Dimensions (Pixels) </th>
                                                    <th style={{ fontSize: "15px" }}> Amount (Rs.) </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {list.map(item => <tr key={item.t_imageid}>
                                                    <td className='border-dark border-right'> <img border="0" src={`https://ibcdn.imagesbazaar.com/img170/${item.f_rank}-${item.t_imageid}.jpg`} style={{ width: "80px", height: "80px" }}></img> </td>
                                                    <td className="font-weight-bold border-dark border-right" style={{ fontSize: "15px", verticalAlign: "middle" }}> {item.t_imageid} </td>
                                                    <td className="font-weight-bold border-dark border-right" style={{ fontSize: "15px", verticalAlign: "middle" }}> {item.t_quality} </td>
                                                    <td className="font-weight-bold border-dark border-right" style={{ fontSize: "15px", verticalAlign: "middle" }}> {item.f_rights} </td>
                                                    <td className="font-weight-bold border-dark border-right" style={{ fontSize: "15px", verticalAlign: "middle" }}> {item.f_mydimension !== '' || findDimension(item.t_quality)} </td>
                                                    <td className="font-weight-bold" style={{ fontSize: "15px", verticalAlign: "middle" }}> {item.t_price} </td>
                                                </tr>)}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="text-justify border-dark border mt-2">
                            <Col xs={12}>
                                <Row className='border-bottom border-dark'>
                                    <Col xs={10} className="d-flex justify-content-end border-right border-dark"> Total </Col>
                                    <Col className='text-center'> {tAmount} </Col>
                                </Row>
                            </Col>
                            <Col xs={12} className='border-bottom border-dark'>
                                <Row>
                                    <Col xs={10} className="d-flex justify-content-end border-right border-dark">  IGST Value @18% (INR) </Col>
                                    <Col className='text-center'> {Math.round((tAmount * 18) / 100)} </Col>
                                </Row>
                            </Col>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={10} className="d-flex justify-content-end border-right border-dark">  Net Payable Amount	 </Col>
                                    <Col className='text-center'> {tAmount + Math.round((tAmount * 18) / 100)} </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="mt-3">
                                <p>
                                    PAN No.: <strong>AADCM6333L</strong><br />
                                    GSTIN No.:<strong> 07AADCM6333L1ZA</strong><br />
                                    HSN/SAC no. <strong>998439</strong>
                                </p>
                                <p>Imagesbazaar is fully owned subsidiary of Mash Audio Visuals Pvt. Ltd. Usage of images subject to Mash Rights Agreement mentioned on <Link to="/static/licensing" target="_blank">www.imagesbazaar.com/licensing</Link></p>
                                <p>This is a computer generated Quotation and does not require any authorised signatory.</p>
                                <p>Kindly send Cheque/Demand Draft in favour of MASH AUDIO VISUALS PVT. LTD. Payable at NEW DELHI to the address given below :</p>
                                <address>
                                    <strong>
                                        Mash Audio Visuals Pvt. Ltd.<br />
                                        505, Aggarwal Prestige Mall,<br />
                                        Plot No.2, Road No.44,<br />
                                        Pitam Pura, New Delhi-110034<br />
                                        <a href="https://www.imagesbazaar.com" target="_blank">www.imagesbazaar.com</a>
                                    </strong>
                                </address>
                            </Col>
                        </Row>
                    </Col>
                </Row>}
        </Container>
    )
}

export default ProposalGST