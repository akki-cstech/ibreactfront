import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap'
import { OrderProposalList, DeleteProposal } from '../../utils/apis/api'
import '../../stylesheet/ShowProposal.css'
import SimpleMail from '../../components/Modal/SimpleMail'
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const Proposal = () => {
    const history = useHistory()
    const [pList, setPList] = useState([])
    const [mailModalShow, setMailModalShow] = useState(false)
    const [link, setLink] = useState('')

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem('loggedUser'))
        const checkProposal = async () => {
            const { list } = await OrderProposalList({ email: user.f_email })
            if (list) {
                setPList(list)
            }
        }
        checkProposal()
    }, [])

    const sendMail = (myUrl) => {
        setMailModalShow(true)
        setLink(myUrl)
    }

    const deleteHandler = async (orderId) => {
        const confirm = window.confirm('Are you sure to delete it?');
        if(confirm){
            await DeleteProposal({orderId})
        }
    }

    return (
        <Container className="mt-4">
            <SimpleMail open={mailModalShow} onClose={() => setMailModalShow(false)} link={link} />
            <Row>
                <Col xs={12} className="pt-4 bg-light mx-auto" id="showPropOsal">
                    <h4>MY CURRENT PROPOSAL</h4>
                    <Table className="mt-3" id="prop0salTTable">
                        <thead>
                            <tr>
                                <th className="text-center">Proposal Heading</th>
                                <th className="text-center">Proposal Date	</th>
                                <th className="text-center">No. of images</th>
                                <th className="text-center">Amount</th>
                                <th className="text-center">Discount</th>
                                <th className="text-center">Tax</th>
                                <th className="text-center">Total Amount</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Type</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pList.length > 0 && pList.map(item => <tr>
                                <td className="text-center"> {item.f_heading} </td>
                                <td className="text-center"> {moment(item.T_orderdate).format('DD-MM-YYYY')} </td>
                                <td className="text-center"> {item.f_totimg} </td>
                                <td className="text-center"> {item.f_amt} </td>
                                <td className="text-center"> {item.f_discount} </td>
                                <td className="text-center"> {Math.round(parseInt(item.f_sertax))} </td>
                                <td className="text-center"> {parseInt(item.f_amt) + Math.round(parseInt(item.f_sertax)) - parseInt(item.f_discount)} </td>
                                <td className="text-center">
                                    <span style={{ cursor: "pointer" }} onClick={() => sendMail(`/proposalgst?id=${btoa(item.T_orderid)}`)} > Email </span>
                                </td>
                                <td className="text-center">
                                    <i className="fa fa-search pr7table" onClick={() => history.push(`/proposalgst?id=${btoa(item.T_orderid)}`)} style={{ cursor: "pointer" }}></i> </td>
                                <td className="text-center"> <i className="fa fa-trash pr7table" onClick={() => deleteHandler(item.T_orderid)} style={{ cursor: "pointer" }}></i> </td>
                            </tr>)}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Proposal