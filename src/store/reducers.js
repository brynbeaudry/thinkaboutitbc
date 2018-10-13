import { combineReducers } from 'redux'
import locationReducer from './location'
import postsReducer from '../services/modules/posts'
import authReducer from '../services/modules/auth'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    posts: postsReducer,
    auth: authReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
