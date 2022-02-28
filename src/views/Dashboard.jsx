import React, { useEffect } from 'react'
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom'
import Header from '../components/navs/Header'
import Footer from '../components/navs/Footer'
import MyAccountNav from '../components/common/MyAccountNav'

const DashBoard = ({ children }) => {
    // const history = useHistory()
    // useEffect(() => {
    //     if(!user){
    //         history.push('/')
    //     }
    // }, [])

    const { url } = useRouteMatch()
    const { pathname } = useLocation()
    console.log('check path', pathname)
    return (
        <div>
            {(
                pathname.indexOf('/myaccounts/invoice') === -1
                && pathname.indexOf('/myaccounts/suborderinvoice') === -1
                && pathname.indexOf('/myaccounts/ivsuborderinvoice') === -1
                && pathname.indexOf('/myaccounts/invoicedetail') === -1
                && pathname.indexOf('/myaccounts/proposalgst') === -1
            )
                && <Header />}
            {(
                pathname.indexOf('/myaccounts/invoice') === -1
                && pathname.indexOf('/myaccounts/suborderinvoice') === -1
                && pathname.indexOf('/myaccounts/ivsuborderinvoice') === -1
                && pathname.indexOf('/myaccounts/invoicedetail') === -1
                && pathname.indexOf('/myaccounts/showAllProposal') === -1
                && pathname.indexOf('/myaccounts/proposalgst') === -1
            )
                && <MyAccountNav />}
            {children}
            {(
                pathname.indexOf('/myaccounts/invoice') === -1
                && pathname.indexOf('/myaccounts/suborderinvoice') === -1
                && pathname.indexOf('/myaccounts/ivsuborderinvoice') === -1
                && pathname.indexOf('/myaccounts/invoicedetail') === -1
                && pathname.indexOf('/myaccounts/proposalgst') === -1
            )
                && <Footer />}
        </div>
    )
}

export default DashBoard