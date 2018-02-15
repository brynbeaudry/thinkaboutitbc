// ------------------------------------
// Imports
// ------------------------------------
// import {defaultStore} from '../../../store/createStore'
import CommentsService from '../api/comments'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_PENDING = 'GET_COMMENTS_PENDING'
export const GET_COMMENTS_REJECTED = 'GET_COMMENTS_REJECTED'
export const GET_COMMENTS_FULFILLED = 'GET_COMMENTS_FULFILLED'
export const POST_COMMENTS = 'POST_COMMENTS'
export const POST_COMMENTS_PENDING = 'POST_COMMENTS_PENDING'
export const POST_COMMENTS_REJECTED = 'POST_COMMENTS_REJECTED'
export const POST_COMMENTS_FULFILLED = 'POST_COMMENTS_FULFILLED'
export const GET_COMMENTS_BY_ID = 'GET_COMMENTS_BY_ID'
export const GET_COMMENTS_BY_ID_PENDING = 'GET_COMMENTS_BY_ID_PENDING'
export const GET_COMMENTS_BY_ID_REJECTED = 'GET_COMMENTS_BY_ID_REJECTED'
export const GET_COMMENTS_BY_ID_FULFILLED = 'GET_COMMENTS_BY_ID_FULFILLED'
export const PUT_COMMENTS_BY_ID = 'PUT_COMMENTS_BY_ID'
export const PUT_COMMENTS_BY_ID_PENDING = 'PUT_COMMENTS_BY_ID_PENDING'
export const PUT_COMMENTS_BY_ID_REJECTED = 'PUT_COMMENTS_BY_ID_REJECTED'
export const PUT_COMMENTS_BY_ID_FULFILLED = 'PUT_COMMENTS_BY_ID_FULFILLED'
export const DELETE_COMMENTS_BY_ID = 'DELETE_COMMENTS_BY_ID'
export const DELETE_COMMENTS_BY_ID_PENDING = 'DELETE_COMMENTS_BY_ID_PENDING'
export const DELETE_COMMENTS_BY_ID_REJECTED = 'DELETE_COMMENTS_BY_ID_REJECTED'
export const DELETE_COMMENTS_BY_ID_FULFILLED = 'DELETE_COMMENTS_BY_ID_FULFILLED'

// ------------------------------------
// Actions
// ------------------------------------
/* User object should be structured to include all relevant information
payload should be an axios.post(register roue, user)
*/

export function CommentsByIdDelete (id) {
  return {
    type    : DELETE_COMMENTS_BY_ID,
    payload : {
      promise: CommentsService.CommentsByIdDelete(id)
    }
  }
}

export function CommentsByIdGet (id) {
  return {
    type    : GET_COMMENTS_BY_ID,
    payload : {
      promise: CommentsService.CommentsByIdGet(id)
    }
  }
}

export function CommentsByIdPut (id, comment) {
  return {
    type    : PUT_COMMENTS_BY_ID,
    payload : {
      promise: CommentsService.CommentsByIdPut(id, comment)
    }
  }
}

export function CommentsPost (comment) {
  return {
    type    : POST_COMMENTS,
    payload : {
      promise: CommentsService.CommentsPost(comment)
    }
  }
}

export function CommentsGet () {
  return {
    type    : GET_COMMENTS,
    payload : {
      promise: CommentsService.CommentsGet()
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
  CommentsByIdDelete, CommentsByIdGet, CommentsByIdPut, CommentsPost, CommentsGet
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_COMMENTS_BY_ID_PENDING]  : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : true,
      comments : null
    })
  },
  [GET_COMMENTS_BY_ID_REJECTED] : (state, action) => {
    return ({ ...state,
      error: action.payload,
      fetching : false,
      comments : undefined
    })
  },
  [GET_COMMENTS_BY_ID_FULFILLED] : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : false,
      comments : action.payload
    })
  },
  [DELETE_COMMENTS_BY_ID_PENDING]  : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : true,
    })
  },
  [DELETE_COMMENTS_BY_ID_REJECTED] : (state, action) => {
    return ({ ...state,
      error: action.payload,
      fetching : false,
    })
  },
  [DELETE_COMMENTS_BY_ID_FULFILLED] : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : false,
    })
  },
  [PUT_COMMENTS_BY_ID_PENDING]  : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : true,
    })
  },
  [PUT_COMMENTS_BY_ID_REJECTED] : (state, action) => {
    return ({ ...state,
      error: action.payload,
      fetching : false,
    })
  },
  [PUT_COMMENTS_BY_ID_FULFILLED] : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : false,
    })
  },
  [GET_COMMENTS_PENDING]  : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : true,
      comments : null
    })
  },
  [GET_COMMENTS_REJECTED] : (state, action) => {
    return ({ ...state,
      error: action.payload,
      fetching : false,
      comments : null
    })
  },
  [GET_COMMENTS_FULFILLED] : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : false,
      comments : action.payload
    })
  },
  [POST_COMMENTS_PENDING]  : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : true,
    })
  },
  [POST_COMMENTS_REJECTED] : (state, action) => {
    return ({ ...state,
      error: action.payload,
      fetching : false,
    })
  },
  [POST_COMMENTS_FULFILLED] : (state, action) => {
    return ({ ...state,
      error: undefined,
      fetching : false,
    })
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function commentsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
