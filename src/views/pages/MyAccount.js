import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import Order from './Order'
import ManageUser from './ManageUser'
import Invoice from '../../components/common/InvoiceReciept'
import ProposalGST from './ProposalGST'
import Proposal from './ShowProposal'

const MyAccount = () => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <Order />
            </Route>
            <Route exact path={`${path}/invoice/:id`}>
                <Invoice type="confirm" />
            </Route>
            <Route exact path={`${path}/suborderinvoice/:id`}>
                <Invoice type="subscriptionplan" />
            </Route>
            <Route exact path={`${path}/ivsuborderinvoice/:id`}>
                <Invoice type="ivsubscriptionplan" />
            </Route>
            <Route exact path={`${path}/invoicedetail/:id`}>
                <Invoice type="invoice" />
            </Route>
            <Route exact path={`${path}/proposalgst`}>
                <ProposalGST />
            </Route>
            <Route exact path={`${path}/showAllProposal`}>
                <Proposal />
            </Route>
            <Route path={`${path}/:manageUser`}>
                <ManageUser />
            </Route>
        </Switch>
    );
}

export default MyAccount