import { browserHistory } from 'react-router'
import { clear } from 'redux-localstorage-simple'

export const didLogOut = store => next => action => {
  if (action.type === 'LOGOUT_USER_FULFILLED') {
    location.reload()
    // clears local storage
    clear()
    // redirects back to the main page, unauthenticated
    browserHistory.push('/')
    next(action)
  }
  return next(action)
}

export default didLogOut
