# ThinkAboutItBc.AuthorizationApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUserinfoGet**](AuthorizationApi.md#apiUserinfoGet) | **GET** /api/userinfo | 
[**connectAuthorizeGet**](AuthorizationApi.md#connectAuthorizeGet) | **GET** /connect/authorize | 
[**connectAuthorizePost**](AuthorizationApi.md#connectAuthorizePost) | **POST** /connect/authorize | 
[**connectLogoutPost**](AuthorizationApi.md#connectLogoutPost) | **POST** /connect/logout | 
[**connectTokenPost**](AuthorizationApi.md#connectTokenPost) | **POST** /connect/token | 


<a name="apiUserinfoGet"></a>
# **apiUserinfoGet**
> apiUserinfoGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AuthorizationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUserinfoGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="connectAuthorizeGet"></a>
# **connectAuthorizeGet**
> connectAuthorizeGet(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AuthorizationApi();

var opts = { 
  'accessToken': "accessToken_example", // String | 
  'acrValues': "acrValues_example", // String | 
  'assertion': "assertion_example", // String | 
  'claims': {key: "claims_example"}, // {String: String} | 
  'claimsLocales': "claimsLocales_example", // String | 
  'clientAssertion': "clientAssertion_example", // String | 
  'clientAssertionType': "clientAssertionType_example", // String | 
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example", // String | 
  'code': "code_example", // String | 
  'codeChallenge': "codeChallenge_example", // String | 
  'codeChallengeMethod': "codeChallengeMethod_example", // String | 
  'codeVerifier': "codeVerifier_example", // String | 
  'display': "display_example", // String | 
  'grantType': "grantType_example", // String | 
  'identityProvider': "identityProvider_example", // String | 
  'idTokenHint': "idTokenHint_example", // String | 
  'loginHint': "loginHint_example", // String | 
  'maxAge': 789, // Number | 
  'nonce': "nonce_example", // String | 
  'password': "password_example", // String | 
  'postLogoutRedirectUri': "postLogoutRedirectUri_example", // String | 
  'prompt': "prompt_example", // String | 
  'redirectUri': "redirectUri_example", // String | 
  'refreshToken': "refreshToken_example", // String | 
  'request': "request_example", // String | 
  'requestId': "requestId_example", // String | 
  'requestUri': "requestUri_example", // String | 
  'resource': "resource_example", // String | 
  'responseMode': "responseMode_example", // String | 
  'responseType': "responseType_example", // String | 
  'scope': "scope_example", // String | 
  'state': "state_example", // String | 
  'token': "token_example", // String | 
  'tokenTypeHint': "tokenTypeHint_example", // String | 
  'registration': {key: "registration_example"}, // {String: String} | 
  'uiLocales': "uiLocales_example", // String | 
  'username': "username_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.connectAuthorizeGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | [optional] 
 **acrValues** | **String**|  | [optional] 
 **assertion** | **String**|  | [optional] 
 **claims** | [**{String: String}**](String.md)|  | [optional] 
 **claimsLocales** | **String**|  | [optional] 
 **clientAssertion** | **String**|  | [optional] 
 **clientAssertionType** | **String**|  | [optional] 
 **clientId** | **String**|  | [optional] 
 **clientSecret** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **codeChallenge** | **String**|  | [optional] 
 **codeChallengeMethod** | **String**|  | [optional] 
 **codeVerifier** | **String**|  | [optional] 
 **display** | **String**|  | [optional] 
 **grantType** | **String**|  | [optional] 
 **identityProvider** | **String**|  | [optional] 
 **idTokenHint** | **String**|  | [optional] 
 **loginHint** | **String**|  | [optional] 
 **maxAge** | **Number**|  | [optional] 
 **nonce** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **postLogoutRedirectUri** | **String**|  | [optional] 
 **prompt** | **String**|  | [optional] 
 **redirectUri** | **String**|  | [optional] 
 **refreshToken** | **String**|  | [optional] 
 **request** | **String**|  | [optional] 
 **requestId** | **String**|  | [optional] 
 **requestUri** | **String**|  | [optional] 
 **resource** | **String**|  | [optional] 
 **responseMode** | **String**|  | [optional] 
 **responseType** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **tokenTypeHint** | **String**|  | [optional] 
 **registration** | [**{String: String}**](String.md)|  | [optional] 
 **uiLocales** | **String**|  | [optional] 
 **username** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="connectAuthorizePost"></a>
# **connectAuthorizePost**
> connectAuthorizePost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AuthorizationApi();

var opts = { 
  'accessToken': "accessToken_example", // String | 
  'acrValues': "acrValues_example", // String | 
  'assertion': "assertion_example", // String | 
  'claims': {key: "claims_example"}, // {String: String} | 
  'claimsLocales': "claimsLocales_example", // String | 
  'clientAssertion': "clientAssertion_example", // String | 
  'clientAssertionType': "clientAssertionType_example", // String | 
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example", // String | 
  'code': "code_example", // String | 
  'codeChallenge': "codeChallenge_example", // String | 
  'codeChallengeMethod': "codeChallengeMethod_example", // String | 
  'codeVerifier': "codeVerifier_example", // String | 
  'display': "display_example", // String | 
  'grantType': "grantType_example", // String | 
  'identityProvider': "identityProvider_example", // String | 
  'idTokenHint': "idTokenHint_example", // String | 
  'loginHint': "loginHint_example", // String | 
  'maxAge': 789, // Number | 
  'nonce': "nonce_example", // String | 
  'password': "password_example", // String | 
  'postLogoutRedirectUri': "postLogoutRedirectUri_example", // String | 
  'prompt': "prompt_example", // String | 
  'redirectUri': "redirectUri_example", // String | 
  'refreshToken': "refreshToken_example", // String | 
  'request': "request_example", // String | 
  'requestId': "requestId_example", // String | 
  'requestUri': "requestUri_example", // String | 
  'resource': "resource_example", // String | 
  'responseMode': "responseMode_example", // String | 
  'responseType': "responseType_example", // String | 
  'scope': "scope_example", // String | 
  'state': "state_example", // String | 
  'token': "token_example", // String | 
  'tokenTypeHint': "tokenTypeHint_example", // String | 
  'registration': {key: "registration_example"}, // {String: String} | 
  'uiLocales': "uiLocales_example", // String | 
  'username': "username_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.connectAuthorizePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | [optional] 
 **acrValues** | **String**|  | [optional] 
 **assertion** | **String**|  | [optional] 
 **claims** | [**{String: String}**](String.md)|  | [optional] 
 **claimsLocales** | **String**|  | [optional] 
 **clientAssertion** | **String**|  | [optional] 
 **clientAssertionType** | **String**|  | [optional] 
 **clientId** | **String**|  | [optional] 
 **clientSecret** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **codeChallenge** | **String**|  | [optional] 
 **codeChallengeMethod** | **String**|  | [optional] 
 **codeVerifier** | **String**|  | [optional] 
 **display** | **String**|  | [optional] 
 **grantType** | **String**|  | [optional] 
 **identityProvider** | **String**|  | [optional] 
 **idTokenHint** | **String**|  | [optional] 
 **loginHint** | **String**|  | [optional] 
 **maxAge** | **Number**|  | [optional] 
 **nonce** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **postLogoutRedirectUri** | **String**|  | [optional] 
 **prompt** | **String**|  | [optional] 
 **redirectUri** | **String**|  | [optional] 
 **refreshToken** | **String**|  | [optional] 
 **request** | **String**|  | [optional] 
 **requestId** | **String**|  | [optional] 
 **requestUri** | **String**|  | [optional] 
 **resource** | **String**|  | [optional] 
 **responseMode** | **String**|  | [optional] 
 **responseType** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **tokenTypeHint** | **String**|  | [optional] 
 **registration** | [**{String: String}**](String.md)|  | [optional] 
 **uiLocales** | **String**|  | [optional] 
 **username** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="connectLogoutPost"></a>
# **connectLogoutPost**
> connectLogoutPost()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AuthorizationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.connectLogoutPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="connectTokenPost"></a>
# **connectTokenPost**
> connectTokenPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AuthorizationApi();

var opts = { 
  'accessToken': "accessToken_example", // String | 
  'acrValues': "acrValues_example", // String | 
  'assertion': "assertion_example", // String | 
  'claims': {key: "claims_example"}, // {String: String} | 
  'claimsLocales': "claimsLocales_example", // String | 
  'clientAssertion': "clientAssertion_example", // String | 
  'clientAssertionType': "clientAssertionType_example", // String | 
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example", // String | 
  'code': "code_example", // String | 
  'codeChallenge': "codeChallenge_example", // String | 
  'codeChallengeMethod': "codeChallengeMethod_example", // String | 
  'codeVerifier': "codeVerifier_example", // String | 
  'display': "display_example", // String | 
  'grantType': "grantType_example", // String | 
  'identityProvider': "identityProvider_example", // String | 
  'idTokenHint': "idTokenHint_example", // String | 
  'loginHint': "loginHint_example", // String | 
  'maxAge': 789, // Number | 
  'nonce': "nonce_example", // String | 
  'password': "password_example", // String | 
  'postLogoutRedirectUri': "postLogoutRedirectUri_example", // String | 
  'prompt': "prompt_example", // String | 
  'redirectUri': "redirectUri_example", // String | 
  'refreshToken': "refreshToken_example", // String | 
  'request': "request_example", // String | 
  'requestId': "requestId_example", // String | 
  'requestUri': "requestUri_example", // String | 
  'resource': "resource_example", // String | 
  'responseMode': "responseMode_example", // String | 
  'responseType': "responseType_example", // String | 
  'scope': "scope_example", // String | 
  'state': "state_example", // String | 
  'token': "token_example", // String | 
  'tokenTypeHint': "tokenTypeHint_example", // String | 
  'registration': {key: "registration_example"}, // {String: String} | 
  'uiLocales': "uiLocales_example", // String | 
  'username': "username_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.connectTokenPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | [optional] 
 **acrValues** | **String**|  | [optional] 
 **assertion** | **String**|  | [optional] 
 **claims** | [**{String: String}**](String.md)|  | [optional] 
 **claimsLocales** | **String**|  | [optional] 
 **clientAssertion** | **String**|  | [optional] 
 **clientAssertionType** | **String**|  | [optional] 
 **clientId** | **String**|  | [optional] 
 **clientSecret** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **codeChallenge** | **String**|  | [optional] 
 **codeChallengeMethod** | **String**|  | [optional] 
 **codeVerifier** | **String**|  | [optional] 
 **display** | **String**|  | [optional] 
 **grantType** | **String**|  | [optional] 
 **identityProvider** | **String**|  | [optional] 
 **idTokenHint** | **String**|  | [optional] 
 **loginHint** | **String**|  | [optional] 
 **maxAge** | **Number**|  | [optional] 
 **nonce** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **postLogoutRedirectUri** | **String**|  | [optional] 
 **prompt** | **String**|  | [optional] 
 **redirectUri** | **String**|  | [optional] 
 **refreshToken** | **String**|  | [optional] 
 **request** | **String**|  | [optional] 
 **requestId** | **String**|  | [optional] 
 **requestUri** | **String**|  | [optional] 
 **resource** | **String**|  | [optional] 
 **responseMode** | **String**|  | [optional] 
 **responseType** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **tokenTypeHint** | **String**|  | [optional] 
 **registration** | [**{String: String}**](String.md)|  | [optional] 
 **uiLocales** | **String**|  | [optional] 
 **username** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

