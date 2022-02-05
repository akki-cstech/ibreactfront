import React from 'react';
import { Route } from "react-router-dom";
import IBRegistration from "./IBRegistration"
import Welcome from "./WelcomePage"
import Register from './UserRegister';

const AccountSection = () => {
    return (
        <>
            <Route path="/ibregistration" component={IBRegistration} />
            <Route path="/myaccounts" component={Welcome} />
            <Route path="/register" component={Register} />
        </>
    )
}

export default AccountSection;
