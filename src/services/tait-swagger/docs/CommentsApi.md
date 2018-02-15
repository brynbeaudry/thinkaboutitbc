# ThinkAboutItBc.CommentsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiCommentsByIdDelete**](CommentsApi.md#apiCommentsByIdDelete) | **DELETE** /api/Comments/{id} | 
[**apiCommentsByIdGet**](CommentsApi.md#apiCommentsByIdGet) | **GET** /api/Comments/{id} | 
[**apiCommentsByIdPut**](CommentsApi.md#apiCommentsByIdPut) | **PUT** /api/Comments/{id} | 
[**apiCommentsGet**](CommentsApi.md#apiCommentsGet) | **GET** /api/Comments | 
[**apiCommentsPost**](CommentsApi.md#apiCommentsPost) | **POST** /api/Comments | 


<a name="apiCommentsByIdDelete"></a>
# **apiCommentsByIdDelete**
> apiCommentsByIdDelete(id)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.CommentsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiCommentsByIdDelete(id, callback);
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

<a name="apiCommentsByIdGet"></a>
# **apiCommentsByIdGet**
> apiCommentsByIdGet(id)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.CommentsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiCommentsByIdGet(id, callback);
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

<a name="apiCommentsByIdPut"></a>
# **apiCommentsByIdPut**
> apiCommentsByIdPut(id, opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.CommentsApi();

var id = 56; // Number | 

var opts = { 
  'comment': new ThinkAboutItBc.Comment() // Comment | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiCommentsByIdPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **comment** | [**Comment**](Comment.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiCommentsGet"></a>
# **apiCommentsGet**
> [Comment] apiCommentsGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.CommentsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiCommentsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Comment]**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiCommentsPost"></a>
# **apiCommentsPost**
> apiCommentsPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.CommentsApi();

var opts = { 
  'comment': new ThinkAboutItBc.Comment() // Comment | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiCommentsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comment** | [**Comment**](Comment.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: Not defined

