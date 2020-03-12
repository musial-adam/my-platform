// import React from 'react'

// const Callback = () => <p>Callback</p>

// export default Callback

import React from 'react'
import { Link } from 'gatsby'
import { logout } from '../services/auth'

const Callback = () => {
  return (
    <>
      <p>Callback</p>
      <nav>
        <Link to="/">Home</Link> <Link to="/app/profile">My Account</Link>{' '}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
    </>
  )
}

export default Callback
