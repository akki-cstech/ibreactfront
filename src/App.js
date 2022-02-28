import React, { useEffect, useState, useRef, createContext } from 'react';
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
import Proposal from './views/pages/ShowProposal';
import ProposalGST from './views/pages/ProposalGST';
import StaticRouteMain from './views/pages/static';

const UserContext = createContext([{}, () => { }]);

const App = () => {
  const [progress, setProgress] = useState(0)
  const [loggedInUser, setLoggedInUser] = useState(null)
  // const [brand, setBrand] = useState('')
  // const [progress, setProgress] = useState(0);
  const [Loader, setLoader] = useState(false);
  const ref = useRef(null)

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser")
    const usr = JSON.parse(loggedUser)
    setLoggedInUser(usr)
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
        <Route path="/static">
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <StaticRouteMain />
          </UserContext.Provider>
        </Route>
        <Route path="/logout" component={LogOut} />
        <Route path="/ibregistration" onLoader={onLoader} >
          {!loggedInUser ? <IBRegistration setUser={setLoggedInUser} /> : <Redirect to="/" />}
        </Route>
        <Route path="/myaccounts" onLoader={onLoader} >
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Dashboard>
              <MyAccount />
            </Dashboard>
          </UserContext.Provider>
        </Route>
        <Route path="/forgetPassword" onLoader={onLoader} >
          <ForgetPassword />
        </Route>
        <Route path="/register" onLoader={onLoader} >
          <Register setUser={setLoggedInUser} />
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
        {/* <Route exact path="/"
          children={
            () => <Home
              Loader={Loader}
              progress={100}
              setProgress={setProgress}
            />
          }
        /> */}
        <Route path="/" >
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Home Loader={Loader} progress={100} setProgress={setProgress} />
          </UserContext.Provider>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

    </>
  );
}

export default App;
export { UserContext }