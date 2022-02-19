import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/navs/Header'
import Footer from '../components/navs/Footer'
import MyAccountNav from '../components/common/MyAccountNav'

const DashBoard = ({ user, setUser, children, brand }) => {
    const history = useHistory()
    useEffect(() => {
        if(!user){
            history.push('/')
        }
    }, [])

    return (
        <div>
            <Header loggedInUser={user} setLoggedInUser={setUser} />
            <MyAccountNav brand={brand} />
            {children}
            <Footer />
        </div>
    )
}

export default DashBoard