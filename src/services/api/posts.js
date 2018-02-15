import request from '../request'
const url = `/api/Posts`

function PostsByIdDelete (id) {
  return request({
    headers: { 'Accept': 'application/json' },
    url: `${url}/${id}`,
    method: 'DELETE',
  })
}

function PostsByIdGet (id) {
  return request({
    headers: { 'Accept': 'application/json' },
    url: `${url}/${id}`,
    method: 'GET',
  })
}

function PostsByIdPut (id, comment) {
  let data = { comment }
  return request({
    headers: { 'Accept': 'application/json' },
    url: `${url}/${id}`,
    method: 'PUT',
    data : data
  })
}

function PostsPost (comment) {
  let data = { comment }
  return request({
    headers: { 'Content-Type': 'application/json' },
    url: url,
    method: 'POST',
    data: data
  })
}

function PostsGet () {
  return request({
    headers: { 'Accept': 'application/json' },
    url: url,
    method: 'GET',
  })
}

const PostsService = {
  PostsByIdDelete, PostsByIdGet, PostsByIdPut, PostsPost, PostsGet
}

export default PostsService
