import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import Invoice from './InvoiceReciept'

const OrderProcess = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUser = window.localStorage.getItem("loggedUser")
        const usr = JSON.parse(loggedUser)
        setUser(usr)
    }, [])

    return (
        <>
            {
                user &&
                <Route path="/invoice/:id" component={Invoice} />
            }
        </>
    )
}

export default OrderProcess;
