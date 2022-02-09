import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Nav, Row, Col, Navbar, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
import Header from '../../components/navs/Header'
import Footer from '../../components/navs/Footer'
import { pendingOrder } from '../../utils/apis/api'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment'

const Welcome = () => {
    const [pendingRows, setPendingRows] = useState([])
    const history = useHistory()

    function createPendingOrderData(orderId, orderDate, totalAmount) {
        return { orderId, orderDate, totalAmount };
    }

    useEffect(async () => {
        const winUser = window.localStorage.getItem("loggedUser")
        const user = JSON.parse(winUser)
        if (!user) {
            history.push("/")
        }

        const res = await pendingOrder({ email: user.f_email })
        const { orders, message } = res
        console.log('check res', message, orders)
        if (orders.length > 0) {
            setPendingRows(orders.map(order => createPendingOrderData(order.T_orderid, order.T_orderdate, order.f_orderAmt)))
        }
    }, [])

    // console.log('pending rows', pendingRows)

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <div>
            <Header />
            {/* <h1 className='text-center m-5 p-5'>Welcome to ImagesBazaar</h1> */}
            <Container fluid >
                <Row lg="12">
                    <Navbar expand="lg" bg="light" className="mt-4" style={{ height: "auto" }}>
                        <Row className="justify-content-lg-center">
                            <Col lg={{ span: 1, offset: 1 }} xs={12}>
                                <Navbar.Brand style={{ fontSize: "24px" }} className="p-4" href="#">My account</Navbar.Brand>
                            </Col>
                            <Col lg={{ span: 8, offset: 2 }} xs={12}>
                                <Nav className="me-auto pt-3" style={{ color: "black" }}>
                                    <Nav.Link href="#" style={{ width: "200px", color: "black" }}>Wishlist Manager</Nav.Link>
                                    <Nav.Link href="#" style={{ width: "200px", color: "black" }}>Proposal</Nav.Link>
                                    <Nav.Link href="#" style={{ width: "200px", color: "black" }}>Upgrade Images</Nav.Link>
                                    <Nav.Link href="#" style={{ width: "210px", color: "black" }}>Subscription Images</Nav.Link>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        id="dropdown-variants-dark"
                                        title="Manage"
                                        variant="dark"
                                        className="ml-4"
                                        style={{ height: "40px", fontSize: "10px", width: "180px" }}
                                    >
                                        <Dropdown.Item eventKey="1" className="text-dark" >Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" className="text-dark" >Another action</Dropdown.Item>
                                    </DropdownButton>
                                </Nav>
                            </Col>
                        </Row>
                    </Navbar>
                </Row>
                <Row className="justify-content-md-center bg-light">
                    {pendingRows.length > 0 && <Col md="10" sm={12} xs={12} >
                        <div style={{ color: "black", padding: "17px", background: "#f7f7f7", border: "1px solid #eee", marginTop: "0px", marginBottom: "20px" }}>
                            <h4>PENDING ORDERS</h4>
                            <TableContainer component={Paper} className="table-responsive">
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="center">Order ID</StyledTableCell>
                                            <StyledTableCell align="center">Order Date</StyledTableCell>
                                            <StyledTableCell align="center">Total Amount</StyledTableCell>
                                            <StyledTableCell align="center">Order Details</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {pendingRows.map((row) => (
                                            <StyledTableRow key={row.orderId}>
                                                <StyledTableCell component="th" scope="row" align="center">
                                                    {row.orderId}
                                                </StyledTableCell>
                                                <StyledTableCell align="center" >{moment(row.orderDate).format("DD-MM-YYYY")}</StyledTableCell>
                                                <StyledTableCell align="center" >{row.totalAmount}</StyledTableCell>
                                                <StyledTableCell align="center" > <i class="fa fa-search" title="Order Details" style={{cursor: "pointer"}} ></i> </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Col>}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Welcome