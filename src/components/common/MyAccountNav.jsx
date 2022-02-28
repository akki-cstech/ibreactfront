import React, { useEffect, useState } from 'react'
import { Nav, Row, Col, Navbar, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { OrderProposalList } from '../../utils/apis/api'

const MyAccountNav = ({ brand }) => {
    const [pList, setPList] = useState([])
    const history = useHistory()
    const { pathname } = useLocation()

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

    return (
        <Row lg="12" className="mt-4">
            <Navbar expand="lg" bg="light" style={{ height: "auto" }}>
                <Row className="justify-content-lg-center">
                    <Col lg={{ span: 1, offset: 1 }} xs={12}>
                        <Navbar.Brand style={{ fontSize: "24px" }} className="p-4" href="#"> 
                        {pathname === "/myaccounts/changepassword" && brand === 'changepassword' && 'Change Password'} 
                        {pathname === '/myaccounts/editUser' && brand === 'editUser' && 'Edit Profile'} 
                        {pathname === '/myaccounts' && 'My Account'} 
                        </Navbar.Brand>
                    </Col>
                    <Col lg={{ span: 9, offset: 1 }} xs={12}>
                        <Nav className="me-auto pt-3" style={{ color: "black" }}>
                            <Nav.Link href="#" style={{ width: "200px", color: "black" }}>Wishlist Manager</Nav.Link>
                            {pList.length > 0 && <Nav.Link onClick={() => history.push('/showAllProposal')} style={{ width: "200px", color: "black" }}>Proposal</Nav.Link>}
                            <Nav.Link href="#" style={{ width: "200px", color: "black" }}>Upgrade Images</Nav.Link>
                            <Nav.Link href="#" style={{ width: "210px", color: "black" }}>Subscription Images</Nav.Link>
                            <DropdownButton
                                as={ButtonGroup}
                                id="dropdown-variants-dark"
                                title="Manage"
                                variant="primary"
                                className="ml-4 manage_button"
                                size="sm"
                                style={{ padding: "0px", width: "180px" }}
                            >
                                <Dropdown.Item eventKey="1" className="text-dark" onClick={() => history.push(`/myaccounts/editUser`)} >
                                    Edit Profile
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" className="text-dark" onClick={() => history.push(`/myaccounts/changepassword`)} >Change Password</Dropdown.Item>
                            </DropdownButton>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>
        </Row>
    )
}

export default MyAccountNav