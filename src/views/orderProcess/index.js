import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Invoice from '../../components/common/InvoiceReciept'

const OrderProcess = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUser = window.localStorage.getItem("loggedUser")
        const usr = JSON.parse(loggedUser)
        setUser(usr)
    }, [])

    // if (!user) {
    //     return
    // }

    return (
        <>
            <Switch>
                <Route path="/invoice/:id" >
                    <Invoice type="confirm" />
                </Route>
                <Route path="/suborderinvoice/:id" >
                    <Invoice type="subscriptionplan" />
                </Route>
                <Route path="/ivsuborderinvoice/:id" >
                    <Invoice type="ivsubscriptionplan" />
                </Route>
                <Route path="/invoicedetail/:id" >
                    <Invoice type="invoice" />
                </Route>
            </Switch>
        </>
    )
}

export default OrderProcess;