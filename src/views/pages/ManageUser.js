import React, { useState, useEffect } from 'react'
import Update from '../manageUser/Update'
import { useParams } from 'react-router-dom'
import { getUser } from '../../utils/apis/api'
import ChangePassword from '../manageUser/ChangePassword'

const ManageUser = ({user, setUser}) => {
    let { manageUser } = useParams();
    const [myDtl, setMyDtl] = useState(null)

    const callApi = async () => {
        const Detail = await getUser({ email: user.f_email });
        // const myDtl = { ...Detail.myDetails[0] }
        setMyDtl({ ...Detail.myDetails[0] })
    }

    useEffect(() => {
        callApi()
    }, [user])

    return (
      <div>
        {manageUser === "editUser" && myDtl && <Update myDtl={myDtl} user={user} setUser={setUser} />}
        {manageUser === "changepassword" && <ChangePassword user={user} />}
      </div>
    );
}

export default ManageUser