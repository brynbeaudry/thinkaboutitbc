# ThinkAboutItBc.PostsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPostsByIdDelete**](PostsApi.md#apiPostsByIdDelete) | **DELETE** /api/Posts/{id} | 
[**apiPostsByIdGet**](PostsApi.md#apiPostsByIdGet) | **GET** /api/Posts/{id} | 
[**apiPostsByIdPut**](PostsApi.md#apiPostsByIdPut) | **PUT** /api/Posts/{id} | 
[**apiPostsGet**](PostsApi.md#apiPostsGet) | **GET** /api/Posts | 
[**apiPostsPost**](PostsApi.md#apiPostsPost) | **POST** /api/Posts | 


<a name="apiPostsByIdDelete"></a>
# **apiPostsByIdDelete**
> apiPostsByIdDelete(id)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.PostsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPostsByIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiPostsByIdGet"></a>
# **apiPostsByIdGet**
> apiPostsByIdGet(id)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.PostsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPostsByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiPostsByIdPut"></a>
# **apiPostsByIdPut**
> apiPostsByIdPut(id, opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.PostsApi();

var id = 56; // Number | 

var opts = { 
  'post': new ThinkAboutItBc.Post() // Post | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPostsByIdPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **post** | [**Post**](Post.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiPostsGet"></a>
# **apiPostsGet**
> [Post] apiPostsGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.PostsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiPostsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Post]**](Post.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiPostsPost"></a>
# **apiPostsPost**
> apiPostsPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.PostsApi();

var opts = { 
  'post': new ThinkAboutItBc.Post() // Post | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPostsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post** | [**Post**](Post.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: Not defined

