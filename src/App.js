import React, { useEffect, useState, useRef } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './views/Home';
import SearchImage from "./views/SearchImage";
import Sections from "./views/pages";
import IBRegistration from './views/account/IBRegistration';
import Dashboard from './views/Dashboard'
import MyAccount from './views/pages/MyAccount';
import ForgetPassword from './views/account/ForgetPassword';
import Register from './views/account/UserRegister';
import Invoice from './components/common/InvoiceReciept'
import LogOut from './views/account/Logout';
import NoMatch from './NoMatch'
import Contact from './views/pages/static/Contact';
import Pricing from './views/pages/static/Pricing'
import Static from './views/pages/static/Static';
import AboutUs from './views/pages/static/AboutUs'
import License from './views/pages/static/License';
import SearchTips from './views/pages/static/SearchTips';
import Testimonial from './views/pages/static/Testimonial';
import Term from './views/pages/static/Terms'

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
        <Route path="/static/contactus">
          <Contact user={user} setUser={setUser} />
        </Route>
        <Route path="/static/pricing">
          <Static user={user} setUser={setUser}>
            <Pricing />
          </Static>
        </Route>
        <Route path="/static/aboutus">
          <Static user={user} setUser={setUser}>
            <AboutUs />
          </Static>
        </Route>
        <Route path="/static/licensing">
          <Static user={user} setUser={setUser}>
            <License />
          </Static>
        </Route>
        <Route path="/static/searchtips">
          <Static user={user} setUser={setUser}>
            <SearchTips />
          </Static>
        </Route>
        <Route path="/static/testimonials">
          <Static user={user} setUser={setUser}>
            <Testimonial />
          </Static>
        </Route>
        <Route path="/static/termsofuse">
          <Static user={user} setUser={setUser}>
            <Term />
          </Static>
        </Route>
        <Route path="/logout" component={LogOut} />
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
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

    </>
  );
}

export default App;
