import React from 'react'
import Header from '../../components/navs/Header'
import Footer from '../../components/navs/Footer'

const Welcome = () => {
    return (
        <div>
            <Header />
            <h1 className='text-center m-5 p-5'>Welcome to ImagesBazaar</h1>
            <Footer />
        </div>
    )
}

export default Welcome