import React, { useState, useEffect, useContext } from 'react'
import { BrandName } from '../../App'
import Update from '../manageUser/Update'
import { useParams } from 'react-router-dom'
import { getUser } from '../../utils/apis/api'
import ChangePassword from '../manageUser/ChangePassword'

const ManageUser = ({ user, setUser }) => {
  let { manageUser } = useParams();
  const [myDtl, setMyDtl] = useState(null)
  const [brand, setBrand] = useContext(BrandName)

  const callApi = async () => {
    if (user) {
      const Detail = await getUser({ email: user.f_email });
      // const myDtl = { ...Detail.myDetails[0] }
      setMyDtl({ ...Detail.myDetails[0] })
    }
  }

  setBrand(manageUser)
  useEffect(() => {
    callApi()
  }, [user])

  return (
    <div style={{ background: "white", padding: "20px 0", marginRight: "-20px" }}>
      {manageUser === "editUser" && myDtl && <Update myDtl={myDtl} user={user} setUser={setUser} />}
      {manageUser === "changepassword" && <ChangePassword user={user} />}
    </div>
  );
}

export default ManageUser