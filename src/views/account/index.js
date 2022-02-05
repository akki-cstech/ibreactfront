import React from 'react';
import { Route } from "react-router-dom";
import IBRegistration from "./IBRegistration"

const AccountSection = () => {
    return (
        <>
            <Route path="/ibregistration" component={IBRegistration} />
        </>
    )
}

export default AccountSection;
