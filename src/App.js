import React, { useEffect, useState, useRef } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './views/Home';
import SearchImage from "./views/SearchImage";
import Sections from "./views/pages";
import Header from "./components/navs/Header";
import Footer from "./components/navs/Footer"
import { Box } from '@mui/material';
import LoadingBar from 'react-top-loading-bar'
import AccountSection from './views/account/index'
import OrderProcess from './views/orderProcess/index';
import ManageProfile from './views/manageUser';
import { loginUser } from './utils/apis/api'
import Account from './views/pages/routes/AccountRoute';
import IBRegistration from './views/account/IBRegistration';
import Dashboard from './views/Dashboard'
import MyAccount from './views/pages/MyAccount';
import ForgetPassword from './views/account/ForgetPassword';
import Register from './views/account/UserRegister';
import Invoice from './components/common/InvoiceReciept'

const App = () => {
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState(null)

  const [inputValue, setInputValue] = useState('');
  // const [progress, setProgress] = useState(0);
  const [Loader, setLoader] = useState(false);
  const ref = useRef(null)

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser")
    const usr = JSON.parse(loggedUser)
    setUser(usr)
    return () => {
      clearTimeout(ref.current);
    };
  }, []);

  const onLoader = () => {
    setLoader(true);
  }


  return (
    <>
      {/* <Box sx={{ width: '100%' }}>
        {Loader ? <LoadingBar ref={ref}
          color='#FFFFFF'
          progress={100}
        /> : null}
      </Box> */}
      {/* <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}
      {/* <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(progress + 20)}>Add 20%</button> */}
      {/* <button onClick={() => setProgress(100)}>Complete</button> */}
      {/* <OrderProcess user={user} />
      {user && <ManageProfile user={user} setUser={setUser} />}
      <AccountSection user={user} setUser={setUser} /> */}

      <Switch>
        <Route path="/invoice/:id" onLoader={onLoader} >
          <Invoice type="confirm" />
        </Route>
        <Route path="/suborderinvoice/:id" onLoader={onLoader} >
          <Invoice type="subscriptionplan" />
        </Route>
        <Route path="/ivsuborderinvoice/:id" onLoader={onLoader} >
          <Invoice type="ivsubscriptionplan" />
        </Route>
        <Route path="/invoicedetail/:id" onLoader={onLoader} >
          <Invoice type="invoice" />
        </Route>
        <Route path="/ibregistration" onLoader={onLoader} >
          {!user ? <IBRegistration setUser={setUser} /> : <Redirect to="/" />}
        </Route>
        <Route path="/myaccounts" onLoader={onLoader} >
          <Dashboard user={user} setUser={setUser} brand="My Account" > <MyAccount user={user} setUser={setUser} />  </Dashboard>
        </Route>
        <Route path="/forgetPassword" onLoader={onLoader} >
          <ForgetPassword />
        </Route>
        <Route path="/register" onLoader={onLoader} >
          <Register setUser={setUser} />
        </Route>
        <Route path="/search" onLoader={onLoader}
          children={
            () => <SearchImage
              Loader={Loader}
              progress={progress}
              setProgress={setProgress}
            />
          }
        />
        <Route path="/browserSearch/:filname" onLoader={onLoader}
          children={
            () => <SearchImage
              Loader={Loader}
              progress={progress}
              setProgress={setProgress}
            />
          }
        />
        <Route path="/active"
          children={
            () =>
              <Sections
              />
          }
        />
        <Route exact path="/"
          children={
            () => <Home
              Loader={Loader}
              progress={100}
              setProgress={setProgress}
              user={user}
              setUser={setUser}
            />
          }
        />
      </Switch>

    </>
  );
}

export default App;
