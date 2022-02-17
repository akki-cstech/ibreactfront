import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Update from './Update'
import Welcome from '../account/WelcomePage';
import { getUser } from '../../utils/apis/api'
import ChangePassword from './ChangePassword'

const ManageProfile = ({ user, setUser }) => {
    const [editInfo, setEditInfo] = useState(null)

    const callApi = async () => {
        const Detail = await getUser({ email: user.f_email });
        const myDtl = { ...Detail.myDetails[0] }
        setEditInfo({ ...Detail.myDetails[0] })
    }
    useEffect(() => {
        callApi()
    }, [user])
    return (
        <>
            <Switch>
                <Route path="/editUser" >
                    <Welcome brand="Update" setUser={setUser} >
                        {editInfo && <Update myDtl={editInfo} setUser={setUser} />}
                    </Welcome>
                </Route>
                <Route path="/changepassword" >
                    <Welcome brand="Change Password" setUser={setUser} >
                        {editInfo && <ChangePassword user={editInfo} />}
                    </Welcome>
                </Route>
            </Switch>
        </>
    )
}

export default ManageProfile;
