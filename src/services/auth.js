import auth0 from 'auth0-js'

// import { navigate } from 'gatsby'

export const isBrowser = typeof window !== 'undefined'

// To speed things up, we’ll keep the profile stored unless the user logs out.
// This prevents a flicker while the HTTP round-trip completes.

// const profile = false
let user = {}

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  console.log(window.localStorage.getItem('isLoggedIn'))
  console.log(window.localStorage.getItem('isLoggedIn') === 'true')

  return window.localStorage.getItem('isLoggedIn') === 'true'
}

// export const isAuthenticated = () => {
//   return tokens.idToken !== false
// }

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

export const logout = () => {
  window.localStorage.setItem('isLoggedIn', false)
  tokens.accessToken = false
  tokens.idToken = false
  user = false

  auth.logout({
    returnTo: window.location.origin,
  })
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
      login()
      // callback()
    }
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    window.localStorage.setItem('isLoggedIn', true)
    callback()
  }
}

export const checkSession = callback => {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn')
  if (isLoggedIn === 'false' || isLoggedIn === null) {
    callback()
  } else {
    auth.checkSession({}, setSession(callback))
  }
}

export const handleAuthentication = () => {
  auth.parseHash(setSession())
}
