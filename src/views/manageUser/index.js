import React from 'react';
import { Route } from "react-router-dom";
import Update from './Update'
import Welcome from '../account/WelcomePage';

const ManageProfile = () => {
    return (
        <>
            <Route path="/editUser" >
                <Welcome brand="Update">   
                    <Update />
                </Welcome>
            </Route>
            {/* <Route path="/register" component={Register} /> */}
        </>
    )
}

export default ManageProfile;
