import React, { useEffect, useState } from 'react'
import { Row, Col, Navbar, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
import { pendingOrder, confirmOrder, subscriptionPlan, highResImage, subPlanOrder } from '../../utils/apis/api'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment'
import { Link, useHistory } from 'react-router-dom'

const MyAccount = ({ user }) => {
    const history = useHistory()
    const [pendingRows, setPendingRows] = useState([])
    const [confirmRows, setConfirmRows] = useState([])
    const [sPRows, setSPRows] = useState([])
    const [subPlanRows, setSubPlanRows] = useState([])
    const [downloadImages, setDownloadImages] = useState([])

    function createPendingOrderData(orderId, orderDate, totalAmount) {
        return { orderId, orderDate, totalAmount };
    }

    function createConfirmOrderData(invoiceId, orderId, orderDate, totalAmount, paymentStat) {
        return { invoiceId, orderId, orderDate, totalAmount, paymentStat };
    }

    function createSubPlanOrderData(invoiceId, orderId, orderDate, totalAmount, paymentStat, stat, remainingImg) {
        return { invoiceId, orderId, orderDate, totalAmount, paymentStat, stat, remainingImg };
    }

    useEffect(async () => {
        const res = await pendingOrder({ email: user.f_email })
        const { orders, message } = res
        // console.log('check res', message, orders)
        if (orders.length > 0) {
            setPendingRows(orders.map(order => createPendingOrderData(order.T_orderid, order.T_orderdate, order.f_orderAmt)))
        }

        const res2 = await confirmOrder({ email: user.f_email })
        if (res2.orders.length > 0) {
            setConfirmRows(res2.orders.map(order => createConfirmOrderData(order.t_invoiceid, order.T_orderid, order.T_orderdate, order.f_orderAmt, order.t_paymentstatus)))
        }

        const res3 = await subscriptionPlan({ email: user.f_email })
        const { subPlanOrders } = res3
        if (subPlanOrders.length > 0) {
            setSPRows(subPlanOrders.map(order => createSubPlanOrderData(order.invoices.length !== 0 && order.invoices[0].invoice_id, order.T_orderid, order.T_orderdate, order.f_orderAmt, order.t_paymentstatus, order.T_status, order.imgDetail.length !== 0 && order.imgDetail[0].f_RemainingImage)))
        }

        const { downloads } = await highResImage({ email: user.f_email })
        // console.log('check high res', downloads)
        if (downloads) {
            setDownloadImages(downloads)
        }

        const { spOrders } = await subPlanOrder({ email: user.f_email })
        // console.log('check spOrder', spOrders)
        if (spOrders) {
            setSubPlanRows(spOrders)
        }
    }, [])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            lineHeight: "10px",
            fontWeight: 500
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            color: theme.palette.common.black,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        // '&:nth-of-type(odd)': {
        //     backgroundColor: theme.palette.action.hover,
        // },
        // hide last border
        'td': {
            backgroundColor: "#f7f7f7",
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <Row className="justify-content-md-center bg-light">
            {pendingRows.length > 0 && <Col md="10" sm={12} xs={12} >
                <div style={{ color: "black", padding: "17px", background: "#f7f7f7", border: "1px solid #eee", marginTop: "0px", marginBottom: "20px" }}>
                    <h4>PENDING ORDERS</h4>
                    <TableContainer component={Paper} className="table-responsive">
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead >
                                <TableRow >
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold" >Order ID</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Order Date</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Total Amount</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Order Details</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pendingRows.map((row) => (
                                    <StyledTableRow key={row.orderId}>
                                        <StyledTableCell align="center" className="font-weight-bold">
                                            {row.orderId}
                                        </StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{moment(row.orderDate).format("DD-MM-YYYY")}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{row.totalAmount}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold"> 
                                        <a href={`${window.location.origin}/invoice/${window.btoa(row.orderId)}`} target="_blank"><i className="fa fa-search" title="Order Details" style={{ cursor: "pointer", background: '#333', color: '#fff', padding: '5px 7px', borderRadius: '4px' }} ></i> </a>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Col>}

            {confirmRows.length > 0 && <Col md="10" sm={12} xs={12} >
                <div style={{ color: "black", padding: "17px", background: "#f7f7f7", border: "1px solid #eee", marginTop: "0px", marginBottom: "20px" }}>
                    <h4>CONFIRM ORDERS</h4>
                    <TableContainer component={Paper} className="table-responsive">
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead >
                                <TableRow >
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold" >Invoice ID</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold" >Order ID</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Order Date</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Total Amount</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Payment Status</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {confirmRows.map((row) => (
                                    <StyledTableRow key={row.orderId}>
                                        <StyledTableCell align="center" className="font-weight-bold">{row.invoiceId}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">
                                            {row.orderId}
                                        </StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{moment(row.orderDate).format("DD-MM-YYYY")}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{Number(row.totalAmount).toFixed(0)}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{row.paymentStat === 'Paid' ? 'Recieved' : 'Pending'}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">
                                            <a href={`${window.location.origin}/invoice/${btoa(row.orderId)}`} target="_blank"><i className="fa fa-search" title="Invoice Performa" style={{ cursor: "pointer", background: '#333', color: '#fff', padding: '5px 7px', borderRadius: '4px' }} ></i></a> {' '}
                                            <i className="fa fa-download" title="Download" style={{ cursor: "pointer", background: '#333', color: '#fff', padding: '5px 7px', borderRadius: '4px' }} ></i>{' '}
                                            <a href={`${window.location.origin}/invoicedetail/${btoa(row.orderId)}`} target="_blank"><i className="fa fa-info-circle" title="Invoice Detail" style={{ cursor: "pointer", background: '#333', color: '#fff', padding: '5px 7px', borderRadius: '4px' }} ></i></a>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Col>}

            {subPlanRows.length > 0 && <Col md="10" sm={12} xs={12} >
                <div style={{ color: "black", padding: "17px", background: "#f7f7f7", border: "1px solid #eee", marginTop: "0px", marginBottom: "20px" }}>
                    <h4>SUBSCRIPTION PLAN ORDERS</h4>
                    <TableContainer component={Paper} className="table-responsive">
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead >
                                <TableRow >
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold" >Invoice ID</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold" >Order ID</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Order Date</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Total Amount</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Order Details</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Payment Status</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Download</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {subPlanRows.map((row) => (
                                    <StyledTableRow key={row.orderId}>
                                        <StyledTableCell align="center" className="font-weight-bold">{row.f_invoiceID}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">
                                            {row.T_orderid}
                                        </StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{moment(row.T_orderdate).format("DD-MM-YYYY")}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{Number(row.f_orderAmt).toFixed(0)}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">
                                            <a href={`${window.location.origin}/suborderinvoice/${btoa(row.T_orderid)}`} target="_blank"><i className="fa fa-search" title="Invoice Performa" style={{ cursor: "pointer", background: '#333', color: '#fff', padding: '5px 7px', borderRadius: '4px' }} ></i></a>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">Confirm</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">
                                            <i className="fa fa-download" title="Download" style={{ cursor: "pointer", background: '#333', color: '#fff', padding: '5px 7px', borderRadius: '4px' }} ></i>{' '}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Col>}

            {sPRows.length > 0 && <Col md="10" sm={12} xs={12} >
                <div style={{ color: "black", padding: "17px", background: "#f7f7f7", border: "1px solid #eee", marginTop: "0px", marginBottom: "20px" }}>
                    <h4>IMAGES/VIDEO SUBSCRIPTION PLAN ORDERS</h4>
                    <TableContainer component={Paper} className="table-responsive">
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead >
                                <TableRow >
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold" >Invoice ID</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold" >Order ID</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Order Date</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Total Amount</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Order Details</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Payment Status</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Download</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Remaining Images/Videos</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {console.log('check roed', sPRows)} */}
                                {sPRows.map((row) => (
                                    <StyledTableRow key={row.orderId}>
                                        <StyledTableCell align="center" className="font-weight-bold">{row.invoiceId}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{row.orderId}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{moment(row.orderDate).format("DD-MM-YYYY")}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{Number(row.totalAmount).toFixed(0)}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">
                                            <a href={`${window.location.origin}/ivsuborderinvoice/${btoa(row.orderId)}`} target="_blank"><i className="fa fa-search" title="Invoice Details" style={{ cursor: "pointer", background: '#333', color: '#fff', padding: '5px 7px', borderRadius: '4px' }} ></i></a>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">
                                            {row.stat === "C" && row.paymentStat === "Paid" ? "Recieved" : "Pending"}
                                        </StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">
                                            <span className="text-info"> View Details </span>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {row.remainingImg}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Col>}

            {downloadImages.length > 0 && <Col md="10" sm={12} xs={12} >
                <div style={{ color: "black", padding: "17px", background: "#f7f7f7", border: "1px solid #eee", marginTop: "0px", marginBottom: "20px" }}>
                    <h4>SUPER-RES DOWNLOAD</h4>
                    <TableContainer component={Paper} className="table-responsive">
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead >
                                <TableRow >
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold" >Image ID</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold" >Download Date</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Client Name</StyledTableCell>
                                    <StyledTableCell align="center" className="bg-dark font-weight-bold">Download Link</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {downloadImages.map((row) => (
                                    <StyledTableRow key={row.Imageid}>
                                        <StyledTableCell align="center" className="font-weight-bold">{row.Imageid}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{moment(row.download_date).format("DD-MM-YYYY")}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">{row.Client_name}</StyledTableCell>
                                        <StyledTableCell align="center" className="font-weight-bold">
                                            <i className="fa fa-download" title="Download" style={{ cursor: "pointer", background: '#333', color: '#fff', padding: '5px 7px', borderRadius: '4px' }} ></i>{' '}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Col>}
        </Row>
    )
}

export default MyAccount