import React from 'react'
import { Switch, useRouteMatch, Route } from 'react-router-dom'
import Main from './Main';
import License from './License';

const LicenseRouter = () => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <License />
            </Route>
            <Route path={`${path}/:licenseId`}>
                <Main />
            </Route>
        </Switch>
    );
}

export default LicenseRouter