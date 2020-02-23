import auth0js from 'auth0-js'

export const isBrowser = typeof window !== 'undefined'

// To speed things up, we’ll keep the profile stored unless the user logs out.
// This prevents a flicker while the HTTP round-trip completes.

// const profile = false

// const tokens = {
//   accessToken: false,
//   idToken: false,
//   expiresAt: false,
// }

// Only instantiate Auth0 if we’re in the browser.
const auth0 = isBrowser
  ? new auth0js.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      audience: process.env.AUTH0_AUDIENCE,
      responseType: 'token id_token',
      scope: 'openid profile email',
    })
  : {}
