import { browserHistory } from 'react-router'
import { updateLocation, locationChange } from '../store/location'
import { decodeJWT } from '../util/base64'
import request from '../services/request'

export const didLogIn = store => next => action => {
  if (action.type === 'LOGIN_USER_EMAIL_FULFILLED') {
    next(action)
    console.log(`Did Log In ____________
      store : _____ ${store}
      next : _______ ${next}
      action : ______ ${JSON.stringify(action)}
    `)

    /* decode Id token */
    let decodedToken = decodeJWT(action.payload.id_token)
    console.log(`Did Log In ____________
      decoded id token :  ${decodedToken}
    `)

    action.payload.id_token = decodedToken
    console.log(`Did Log In ____________
      decoded id token. sub :  ${decodedToken.sub}
    `)
    let getUserInfo = request({
      headers : { 'Accept': 'application/json' },
      method : 'get',
      url: `/api/users/${decodedToken.sub}`,
    })
    getUserInfo.then((user) => {
      console.log(`Did Log In ____________
      user object :  ${JSON.stringify(user)}
      `)
      action.payload.user = user
      browserHistory.push('/')
      // somehwo this interrupts the fullfilled
      next(action)
    })
  }
  return next(action)
}

export default didLogIn
