// ------------------------------------
// Imports
// ------------------------------------
// import {defaultStore} from '../../../store/createStore'
import PostsService from '../api/posts'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_PENDING = 'GET_POSTS_PENDING'
export const GET_POSTS_REJECTED = 'GET_POSTS_REJECTED'
export const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED'
export const POST_POSTS = 'POST_POSTS'
export const POST_POSTS_PENDING = 'POST_POSTS_PENDING'
export const POST_POSTS_REJECTED = 'POST_POSTS_REJECTED'
export const POST_POSTS_FULFILLED = 'POST_POSTS_FULFILLED'
export const GET_POSTS_BY_ID = 'GET_POSTS_BY_ID'
export const GET_POSTS_BY_ID_PENDING = 'GET_POSTS_BY_ID_PENDING'
export const GET_POSTS_BY_ID_REJECTED = 'GET_POSTS_BY_ID_REJECTED'
export const GET_POSTS_BY_ID_FULFILLED = 'GET_POSTS_BY_ID_FULFILLED'
export const PUT_POSTS_BY_ID = 'PUT_POSTS_BY_ID'
export const PUT_POSTS_BY_ID_PENDING = 'PUT_POSTS_BY_ID_PENDING'
export const PUT_POSTS_BY_ID_REJECTED = 'PUT_POSTS_BY_ID_REJECTED'
export const PUT_POSTS_BY_ID_FULFILLED = 'PUT_POSTS_BY_ID_FULFILLED'
export const DELETE_POSTS_BY_ID = 'DELETE_POSTS_BY_ID'
export const DELETE_POSTS_BY_ID_PENDING = 'DELETE_POSTS_BY_ID_PENDING'
export const DELETE_POSTS_BY_ID_REJECTED = 'DELETE_POSTS_BY_ID_REJECTED'
export const DELETE_POSTS_BY_ID_FULFILLED = 'DELETE_POSTS_BY_ID_FULFILLED'

// ------------------------------------
// Actions
// ------------------------------------
/* User object should be structured to include all relevant information
payload should be an axios.post(register roue, user)
*/

export function PostsByIdDelete (id) {
  return {
    type    : DELETE_POSTS_BY_ID,
    payload : {
      promise: PostsService.PostsByIdDelete(id)
    }
  }
}

export function PostsByIdGet (id) {
  return {
    type    : GET_POSTS_BY_ID,
    payload : {
      promise: PostsService.PostsByIdGet(id)
    }
  }
}

export function PostsByIdPut (id, post) {
  return {
    type    : PUT_POSTS_BY_ID,
    payload : {
      promise: PostsService.PostsByIdPut(id, post)
    }
  }
}

export function PostsPost (post) {
  return {
    type    : POST_POSTS,
    payload : {
      promise: PostsService.PostsPost(post)
    }
  }
}

export function PostsGet () {
  return {
    type    : GET_POSTS,
    payload : {
      promise: PostsService.PostsGet()
    }
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */
/*
export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}
*/
export const actions = {
  PostsByIdDelete, PostsByIdGet, PostsByIdPut, PostsPost, PostsGet
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_POSTS_BY_ID_PENDING]  : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : true,
      posts : null
    })
  },
  [GET_POSTS_BY_ID_REJECTED] : (state, action) => {
    return ({ ...state,
      error: action.payload,
      fetching : false,
      posts : undefined
    })
  },
  [GET_POSTS_BY_ID_FULFILLED] : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : false,
      posts : action.payload
    })
  },
  [DELETE_POSTS_BY_ID_PENDING]  : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : true,
    })
  },
  [DELETE_POSTS_BY_ID_REJECTED] : (state, action) => {
    return ({ ...state,
      error: action.payload,
      fetching : false,
    })
  },
  [DELETE_POSTS_BY_ID_FULFILLED] : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : false,
    })
  },
  [PUT_POSTS_BY_ID_PENDING]  : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : true,
    })
  },
  [PUT_POSTS_BY_ID_REJECTED] : (state, action) => {
    return ({ ...state,
      error: action.payload,
      fetching : false,
    })
  },
  [PUT_POSTS_BY_ID_FULFILLED] : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : false,
    })
  },
  [GET_POSTS_PENDING]  : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : true,
      posts : null
    })
  },
  [GET_POSTS_REJECTED] : (state, action) => {
    return ({ ...state,
      error: action.payload,
      fetching : false,
      posts : null
    })
  },
  [GET_POSTS_FULFILLED] : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : false,
      posts : action.payload
    })
  },
  [POST_POSTS_PENDING]  : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : true,
    })
  },
  [POST_POSTS_REJECTED] : (state, action) => {
    return ({ ...state,
      error: action.payload,
      fetching : false,
    })
  },
  [POST_POSTS_FULFILLED] : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : false,
    })
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function postsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
