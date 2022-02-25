import React, {useEffect} from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import Header from '../components/navs/Header'
import Footer from '../components/navs/Footer'
import MyAccountNav from '../components/common/MyAccountNav'

const DashBoard = ({ user, setUser, children, brand }) => {
    // const history = useHistory()
    // useEffect(() => {
    //     if(!user){
    //         history.push('/')
    //     }
    // }, [])

    const { url } = useRouteMatch()

    return (
        <div>
            <Header loggedInUser={user} setLoggedInUser={setUser} />
            {url === '/myaccounts' && <MyAccountNav brand={brand} />}
            {children}
            <Footer />
        </div>
    )
}

export default DashBoard