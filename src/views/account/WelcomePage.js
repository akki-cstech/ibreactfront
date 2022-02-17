import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../../components/navs/Header'
import Footer from '../../components/navs/Footer'
import MyAccount from '../pages/MyAccount'
import MyAccountNav from '../../components/common/MyAccountNav'

const Welcome = (props) => {
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [alertMsg, setAlertMsg] = useState(null)
    const history = useHistory()

    useEffect(() => {
        const winUser = window.localStorage.getItem("loggedUser")
        const user = JSON.parse(winUser)
        if (!user) {
            history.push("/")
        } else {
            setLoggedInUser(user)
        }

        const msg = window.localStorage.getItem("updatedUser")
        msg && setAlertMsg(JSON.parse(msg))
        window.localStorage.removeItem("updatedUser")
    }, [])

    return (
        <div>
            <Header/>
            <Container fluid className="bg-light mt-4 pb-4">
                <MyAccountNav brand={props.brand} />
                {alertMsg && loggedInUser && !props.children && <h2 className='text-success text-center'> {alertMsg.message} </h2>}
                {loggedInUser && !props.children && !alertMsg && <MyAccount user={loggedInUser} />}
                {props.children}
            </Container>
            <Footer />
        </div>
    )
}

export default Welcome