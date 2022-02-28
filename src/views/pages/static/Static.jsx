import React from 'react'
import Header from '../../../components/navs/Header'
import Footer from '../../../components/navs/Footer'

const Static = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Static