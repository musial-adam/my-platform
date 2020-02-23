import React from 'react'
import { Router } from '@reach/router'
// import Layout from '../components/layout'
// import Profile from '../components/profile'
// import Details from '../components/Details'
// import Login from '../components/Login'
// import Default from '../components/Default'
import PrivateRoute from '../components/PrivateRoute'

import { login } from '../services/auth'

const AppHome = () => <p>AppHome</p>
const Settings = () => <p>Settings</p>
const Profile = () => <p>Profile</p>
const Login = () => <p>Login page, amigo</p>

const App = () => {
  login()

  return (
    <>
      <h1>Hi, from App page</h1>
      <Router basepath="/app">
        <AppHome path="/" />
        <Login path="/login" />
        <PrivateRoute path="/settings" component={Settings} />
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
    </>
  )
}
export default App
