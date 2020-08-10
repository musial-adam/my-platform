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
  // expiresAt: false,
}

// export const isAuthenticated = () => {
//   if (!isBrowser) {
//     return
//   }

//   console.log(window.localStorage.getItem('isLoggedIn'))
//   console.log(window.localStorage.getItem('isLoggedIn') === 'true')

//   return window.localStorage.getItem('isLoggedIn') === 'true'
// }

const testString = 'LOLOLOLOL'

export const isAuthenticated = () => {
  console.log('begin---------------------------------inside is Authenticated')
  const checkResult = tokens.idToken !== false
  console.log('tokens.idToken', tokens.idToken)
  console.log('isAutheticatedCheckResult', checkResult)
  console.log('testString', testString)

  console.log('end-----------------------------------inside is Authenticated')

  return tokens.idToken !== false
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

export const logout = () => {
  tokens.accessToken = false
  tokens.idToken = false
  user = {}
  window.localStorage.setItem('isLoggedIn', false)

  auth.logout({
    returnTo: window.location.origin,
  })
}

const setSession = (callback = () => {}) => (err, authResult) => {
  console.log('setSESSION')

  if (err) {
    // if (err.error === 'login_required') {
    //   console.log('LOGIN REQUIRED ERROR THROWN')
    //   // login()
    //   callback()
    //   return
    // }
    console.error(err)
    callback()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    console.log('IS this SECTION of THE app EVEN reached?')

    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken

    auth.client.userInfo(tokens.accessToken, (_err, userProfile) => {
      user = userProfile
      window.localStorage.setItem('isLoggedIn', true)
      callback()
    })
  }
}

export const checkSession = callback => {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn')
  console.log('Inside the ACTUAL CHECK SESSION FROM AUTH')
  console.log('isLoggedIn', isLoggedIn)

  if (isLoggedIn === 'false' || isLoggedIn === null) {
    console.log('Not logged in')
    callback()
    return
  }
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
  auth.parseHash(setSession())
}

export const getUser = () => {
  return user
}
