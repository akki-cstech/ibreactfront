import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Nav, Row, Col, Navbar, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
import Header from '../../components/navs/Header'
import Footer from '../../components/navs/Footer'
import MyAccount from '../pages/MyAccount'
import MyAccountNav from '../../components/common/MyAccountNav'

const Welcome = (props) => {
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
            <Container fluid className="bg-light mt-4 pb-4">
                <MyAccountNav brand={props.brand} />
                {loggedInUser && !props.children && <MyAccount user={loggedInUser} />}
                {props.children}
            </Container>
            <Footer />
        </div>
    )
}

export default Welcome