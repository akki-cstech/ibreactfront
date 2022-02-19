import { Route, Redirect } from 'react-router-dom'
import MyAccount from '../MyAccount';
import Home from '../../Home';
import IBRegistration from '../../account/IBRegistration';

export default function Account({ user }) {
  return (
    <>
      <Route path="/ibregistration" >
        {!user ? <IBRegistration /> : <Redirect to="/" />}
      </Route>
      {/* <Route path="/myaccounts">
        <MyAccount />
      </Route> */}
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
}