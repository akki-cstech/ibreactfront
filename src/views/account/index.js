import React from 'react';
import { Route } from "react-router-dom";
import IBRegistration from "./IBRegistration"
import Welcome from "./WelcomePage"
import Register from './UserRegister';
import ForgetPassword from './ForgetPassword'

const AccountSection = () => {
    return (
        <>
            <Route path="/ibregistration" component={IBRegistration} />
            <Route path="/myaccounts" component={Welcome} />
            <Route path="/register" component={Register} />
            <Route path="/forgetPassword" component={ForgetPassword} />
        </>
    )
}

export default AccountSection;
