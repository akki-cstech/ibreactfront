import React from 'react';
import { Route } from "react-router-dom";
import IBRegistration from "./IBRegistration"
import Welcome from "./WelcomePage"

const AccountSection = () => {
    return (
        <>
            <Route path="/ibregistration" component={IBRegistration} />
            <Route path="/myaccounts" component={Welcome} />
        </>
    )
}

export default AccountSection;
