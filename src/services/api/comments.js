import request from '../request'
const url = `/api/Comments`

function CommentsByIdDelete (id) {
  return request({
    headers: { 'Accept': 'application/json' },
    url: `${url}/${id}`,
    method: 'DELETE',
  })
}

function CommentsByIdGet (id) {
  return request({
    headers: { 'Accept': 'application/json' },
    url: `${url}/${id}`,
    method: 'GET',
  })
}

function CommentsByIdPut (id, comment) {
  let data = { comment }
  return request({
    headers: { 'Accept': 'application/json' },
    url: `${url}/${id}`,
    method: 'PUT',
    data : data
  })
}

function CommentsPost (comment) {
  let data = { comment }
  return request({
    headers: { 'Content-Type': 'application/json' },
    url: url,
    method: 'POST',
    data: data
  })
}

function CommentsGet () {
  return request({
    headers: { 'Accept': 'application/json' },
    url: url,
    method: 'GET',
  })
}

const CommentsService = {
  CommentsByIdDelete, CommentsByIdGet, CommentsByIdPut, CommentsPost, CommentsGet
}

export default CommentsService
