import React, { useState, useEffect, useContext } from 'react'
import Update from '../manageUser/Update'
import { useParams } from 'react-router-dom'
import { getUser } from '../../utils/apis/api'
import ChangePassword from '../manageUser/ChangePassword'
import { UserContext } from '../../App'

const ManageUser = () => {
  let { manageUser } = useParams();
  const [myDtl, setMyDtl] = useState(null)

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const callApi = async () => {
    if (loggedInUser) {
      const Detail = await getUser({ email: loggedInUser.f_email });
      // const myDtl = { ...Detail.myDetails[0] }
      setMyDtl({ ...Detail.myDetails[0] })
    }
  }

  useEffect(() => {
    callApi()
  }, [loggedInUser])

  return (
    <div style={{ background: "white", padding: "20px 0", marginRight: "-20px" }}>
      {manageUser === "editUser" && myDtl && <Update myDtl={myDtl} user={loggedInUser} setUser={setLoggedInUser} />}
      {manageUser === "changepassword" && <ChangePassword user={loggedInUser} />}
    </div>
  );
}

export default ManageUser