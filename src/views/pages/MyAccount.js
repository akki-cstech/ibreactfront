import React, { useContext } from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import Order from './Order'
import ManageUser from './ManageUser'
import { BrandName } from '../../App'

const MyAccount = ({ user, setUser }) => {
    let { path } = useRouteMatch();
    const [setBrand] = useContext(BrandName)

    return (
        <Switch>
            <Route exact path={path}>
                <Order />
            </Route>
            <Route path={`${path}/:manageUser`}>
                <ManageUser setUser={setUser} user={user} />
            </Route>
        </Switch>
    );
}

export default MyAccount