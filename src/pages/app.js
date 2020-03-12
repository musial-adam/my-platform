import React from 'react'
import { Router } from '@reach/router'
// import Layout from '../components/layout'
// import Profile from '../components/profile'
// import Details from '../components/Details'
// import Login from '../components/Login'
// import Default from '../components/Default'
import PrivateRoute from '../components/PrivateRoute'

import { login, logout, isAuthenticated, getUser } from '../services/auth'

const AppHome = () => <p>AppHome</p>
const Settings = () => <p>Settings</p>
const Profile = () => <p>Profile</p>
const Login = () => <p>Login page, amigo</p>

const App = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getUser()

  return (
    <>
      <h1>Hi, from App page</h1>

      <nav>
        <Link to="/app/">AppHome</Link>{' '}
        <Link to="/account/settings/">Settings</Link>{' '}
        <Link to="/account/profile/">Profile</Link>{' '}
        {/* <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a> */}
      </nav>

      {/* <button type="button" onClick={login}>
        Login
      </button> */}
      <br />
      <button type="button" onClick={logout}>
        Logout
      </button>

      <Router basepath="/app">
        <AppHome path="/" />
        <Login path="/login" />
        <Settings path="/settings" />
        <Profile path="/profile" />
        {/* <PrivateRoute path="/settings" component={Settings} />
        <PrivateRoute path="/profile" component={Profile} /> */}
      </Router>
    </>
  )
}
export default App
