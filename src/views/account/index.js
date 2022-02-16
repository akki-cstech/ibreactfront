import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import IBRegistration from "./IBRegistration"
import Welcome from "./WelcomePage"
import Register from './UserRegister';
import ForgetPassword from './ForgetPassword'

const AccountSection = ({user}) => {
    // const [user, setUser] = useState(null)

    // useEffect(() => {
    //     const loggedUser = window.localStorage.getItem("loggedUser")
    //     const usr = JSON.parse(loggedUser)
    //     console.log('user logged in', usr)
    //     setUser(usr)
    // }, [])

    return (
        <>
            <Switch>
                <Route path="/ibregistration" >
                    {!user ? <IBRegistration /> : <Redirect to="/" />}
                </Route>
                <Route path="/myaccounts" component={Welcome} />
                <Route path="/myaccounts/:aid" component={Welcome} />
                <Route path="/register" component={Register} />
                <Route path="/forgetPassword" component={ForgetPassword} />
            </Switch>
        </>
    )
}

export default AccountSection;
