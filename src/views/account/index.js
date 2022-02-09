import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import IBRegistration from "./IBRegistration"
import Welcome from "./WelcomePage"
import Register from './UserRegister';
import ForgetPassword from './ForgetPassword'

const AccountSection = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUser = window.localStorage.getItem("loggedUser")
        const usr = JSON.parse(loggedUser)
        setUser(usr)
    }, [])

    return (
        <>
            <Route path="/ibregistration" >
                {!user ? <IBRegistration /> : <Redirect to="/" />}
            </Route>
            <Route path="/myaccounts" component={Welcome} />
            <Route path="/register" component={Register} />
            <Route path="/forgetPassword" component={ForgetPassword} />
        </>
    )
}

export default AccountSection;
