import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/navs/Header'
import Footer from '../../components/navs/Footer'

const Welcome = () => {
    const history = useHistory()
    useEffect(() => {
        const winUser = window.localStorage.getItem("loggedUser")
        const user = JSON.parse(winUser)
        if(!user){
            history.push("/")
        }
    }, [])

    return (
        <div>
            <Header />
            <h1 className='text-center m-5 p-5'>Welcome to ImagesBazaar</h1>
            <Footer />
        </div>
    )
}

export default Welcome