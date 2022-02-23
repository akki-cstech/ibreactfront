import React from 'react'
import Header from '../../../components/navs/Header'
import Footer from '../../../components/navs/Footer'

const Static = ({ children, user, setUser }) => {
    return (
        <>
            <Header loggedInUser={user} setLoggedInUser={setUser} />
            {children}
            <Footer />
        </>
    )
}

export default Static