import auth0 from 'auth0-js'

import { navigate } from 'gatsby'

export const isBrowser = typeof window !== 'undefined'

// To speed things up, we’ll keep the profile stored unless the user logs out.
// This prevents a flicker while the HTTP round-trip completes.

// const profile = false

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

// Only instantiate Auth0 if we’re in the browser.
const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      // audience: process.env.AUTH0_AUDIENCE,
      responseType: 'token id_token',
      scope: 'openid profile email',
    })
  : {}

export const login = () => {
  if (!isBrowser) {
    return
  }
  auth.authorize()
}

export const setSession = (callback = () => {}) => (err, authResult) => {
  if (err) {
    // throw new Error(JSON.stringify(err, null, 2))
    // throw new Error(err)
    // navigate('/')
    // callback()
    // return
    if (err.error === 'login_required') {
      console.log('LOGIN REQUIRED ERROR THROWN')
      callback()
      // login()
    }
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    callback()
  }
}

export const checkSession = callback => {
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
  auth.parseHash(setSession())
}
