import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Nav, Row, Col, Navbar, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
import Header from '../../components/navs/Header'
import Footer from '../../components/navs/Footer'
import MyAccount from '../pages/MyAccount'

const Welcome = () => {
    const [loggedInUser, setLoggedInUser] = useState(null)
    const history = useHistory()

    useEffect(async () => {
        const winUser = window.localStorage.getItem("loggedUser")
        const user = JSON.parse(winUser)
        if (!user) {
            history.push("/")
        } else {
            setLoggedInUser(user)
        }
    }, [])

    return (
        <div>
            <Header />
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
                                        variant="primary"
                                        className="ml-4"
                                        size="sm"
                                        style={{ padding: "0px", width: "180px" }}
                                    >
                                        <Dropdown.Item eventKey="1" className="text-dark" >Edit Profile</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" className="text-dark" >Change Password</Dropdown.Item>
                                    </DropdownButton>
                                </Nav>
                            </Col>
                        </Row>
                    </Navbar>
                </Row>
                {loggedInUser && <MyAccount user={loggedInUser} />}
            </Container>
            <Footer />
        </div>
    )
}

export default Welcome