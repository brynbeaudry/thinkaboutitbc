import request from '../request'
import querystring from 'query-string'

// get facebook from somewhere

function getFacebookToken () {
  // something
}

function register (user) {
  let username = user.userName !== undefined ? user.userName : `${user.email.split('@')[0]}`
  console.log('auth api in register: ', `${user} \n Username ${username}`)
  let data = { email: user.email, password: user.password, userName: username, firstName : user.firstName, lastName : user.lastName }
  return request({
    headers : { 'Content-Type': 'application/json' },
    method : 'post',
    url: '/api/register',
    data : data,
  })
}

function loginWithEmail (email, password) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: '/connect/token',
    method: 'POST',
    data: querystring.stringify({
      response_type: 'code',
      grant_type: 'password',
      username: email,
      password: password
    })
  })
}

async function loginWithFacebook (facebookAccessToken) {
  console.log(`facebook acces token : ${facebookAccessToken}`)
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: '/connect/token',
    method: 'POST',
    data: querystring.stringify({
      response_type: 'code',
      grant_type: 'urn:ietf:params:oauth:grant-type:facebook_access_token',
      scope: 'openid profile email',
      assertion: facebookAccessToken,
    })
  })
}

function loginWithGoogle (googleAccessToken) {
  console.log(`google access token : ${googleAccessToken}`)
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: '/connect/token',
    method: 'POST',
    data: querystring.stringify({
      response_type: 'code',
      grant_type: 'urn:ietf:params:oauth:grant-type:google_access_token',
      scope: 'openid profile email https://www.googleapis.com/auth/userinfo.email',
      assertion: googleAccessToken,
    })
  })
}

function logout () {
  return request({
    url: '/logout',
    method: 'POST'
  })
}

const AuthService = {
  register, loginWithEmail, loginWithFacebook, loginWithGoogle, logout,
}

export default AuthService
