import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import Order from './Order'
import ManageUser from './ManageUser'
import Invoice from '../../components/common/InvoiceReciept'

const MyAccount = ({ user, setUser }) => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                {user && <Order user={user} />}
            </Route>
            <Route path={`${path}/:manageUser`}>
                <ManageUser setUser={setUser} user={user} />
            </Route>
        </Switch>
    );
}

export default MyAccount