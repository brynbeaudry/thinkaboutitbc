# ThinkAboutItBc.AccountApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountAccessDeniedGet**](AccountApi.md#accountAccessDeniedGet) | **GET** /Account/AccessDenied | 
[**accountConfirmEmailGet**](AccountApi.md#accountConfirmEmailGet) | **GET** /Account/ConfirmEmail | 
[**accountExternalLoginCallbackGet**](AccountApi.md#accountExternalLoginCallbackGet) | **GET** /Account/ExternalLoginCallback | 
[**accountExternalLoginConfirmationPost**](AccountApi.md#accountExternalLoginConfirmationPost) | **POST** /Account/ExternalLoginConfirmation | 
[**accountExternalLoginPost**](AccountApi.md#accountExternalLoginPost) | **POST** /Account/ExternalLogin | 
[**accountForgotPasswordConfirmationGet**](AccountApi.md#accountForgotPasswordConfirmationGet) | **GET** /Account/ForgotPasswordConfirmation | 
[**accountForgotPasswordGet**](AccountApi.md#accountForgotPasswordGet) | **GET** /Account/ForgotPassword | 
[**accountForgotPasswordPost**](AccountApi.md#accountForgotPasswordPost) | **POST** /Account/ForgotPassword | 
[**accountLockoutGet**](AccountApi.md#accountLockoutGet) | **GET** /Account/Lockout | 
[**accountLoginGet**](AccountApi.md#accountLoginGet) | **GET** /Account/Login | 
[**accountLoginPost**](AccountApi.md#accountLoginPost) | **POST** /Account/Login | 
[**accountLoginWith2faGet**](AccountApi.md#accountLoginWith2faGet) | **GET** /Account/LoginWith2fa | 
[**accountLoginWith2faPost**](AccountApi.md#accountLoginWith2faPost) | **POST** /Account/LoginWith2fa | 
[**accountLoginWithRecoveryCodeGet**](AccountApi.md#accountLoginWithRecoveryCodeGet) | **GET** /Account/LoginWithRecoveryCode | 
[**accountLoginWithRecoveryCodePost**](AccountApi.md#accountLoginWithRecoveryCodePost) | **POST** /Account/LoginWithRecoveryCode | 
[**accountLogoutPost**](AccountApi.md#accountLogoutPost) | **POST** /Account/Logout | 
[**accountRegisterGet**](AccountApi.md#accountRegisterGet) | **GET** /Account/Register | 
[**accountRegisterPost**](AccountApi.md#accountRegisterPost) | **POST** /Account/Register | 
[**accountResetPasswordConfirmationGet**](AccountApi.md#accountResetPasswordConfirmationGet) | **GET** /Account/ResetPasswordConfirmation | 
[**accountResetPasswordGet**](AccountApi.md#accountResetPasswordGet) | **GET** /Account/ResetPassword | 
[**accountResetPasswordPost**](AccountApi.md#accountResetPasswordPost) | **POST** /Account/ResetPassword | 
[**apiRegisterPost**](AccountApi.md#apiRegisterPost) | **POST** /api/register | 


<a name="accountAccessDeniedGet"></a>
# **accountAccessDeniedGet**
> accountAccessDeniedGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountAccessDeniedGet(callback);
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

<a name="accountConfirmEmailGet"></a>
# **accountConfirmEmailGet**
> accountConfirmEmailGet(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'userId': "userId_example", // String | 
  'code': "code_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountConfirmEmailGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountExternalLoginCallbackGet"></a>
# **accountExternalLoginCallbackGet**
> accountExternalLoginCallbackGet(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'returnUrl': "returnUrl_example", // String | 
  'remoteError': "remoteError_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountExternalLoginCallbackGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnUrl** | **String**|  | [optional] 
 **remoteError** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountExternalLoginConfirmationPost"></a>
# **accountExternalLoginConfirmationPost**
> accountExternalLoginConfirmationPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'email': "email_example", // String | 
  'returnUrl': "returnUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountExternalLoginConfirmationPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | [optional] 
 **returnUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountExternalLoginPost"></a>
# **accountExternalLoginPost**
> accountExternalLoginPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'provider': "provider_example", // String | 
  'returnUrl': "returnUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountExternalLoginPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**|  | [optional] 
 **returnUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountForgotPasswordConfirmationGet"></a>
# **accountForgotPasswordConfirmationGet**
> accountForgotPasswordConfirmationGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountForgotPasswordConfirmationGet(callback);
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

<a name="accountForgotPasswordGet"></a>
# **accountForgotPasswordGet**
> accountForgotPasswordGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountForgotPasswordGet(callback);
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

<a name="accountForgotPasswordPost"></a>
# **accountForgotPasswordPost**
> accountForgotPasswordPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'email': "email_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountForgotPasswordPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountLockoutGet"></a>
# **accountLockoutGet**
> accountLockoutGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountLockoutGet(callback);
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

<a name="accountLoginGet"></a>
# **accountLoginGet**
> accountLoginGet(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'returnUrl': "returnUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountLoginGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountLoginPost"></a>
# **accountLoginPost**
> accountLoginPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'email': "email_example", // String | 
  'userName': "userName_example", // String | 
  'password': "password_example", // String | 
  'rememberMe': true, // Boolean | 
  'returnUrl': "returnUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountLoginPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | [optional] 
 **userName** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **rememberMe** | **Boolean**|  | [optional] 
 **returnUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountLoginWith2faGet"></a>
# **accountLoginWith2faGet**
> accountLoginWith2faGet(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'rememberMe': true, // Boolean | 
  'returnUrl': "returnUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountLoginWith2faGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rememberMe** | **Boolean**|  | [optional] 
 **returnUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountLoginWith2faPost"></a>
# **accountLoginWith2faPost**
> accountLoginWith2faPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'twoFactorCode': "twoFactorCode_example", // String | 
  'rememberMachine': true, // Boolean | 
  'rememberMe': true, // Boolean | 
  'rememberMe2': true, // Boolean | 
  'returnUrl': "returnUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountLoginWith2faPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **twoFactorCode** | **String**|  | [optional] 
 **rememberMachine** | **Boolean**|  | [optional] 
 **rememberMe** | **Boolean**|  | [optional] 
 **rememberMe2** | **Boolean**|  | [optional] 
 **returnUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountLoginWithRecoveryCodeGet"></a>
# **accountLoginWithRecoveryCodeGet**
> accountLoginWithRecoveryCodeGet(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'returnUrl': "returnUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountLoginWithRecoveryCodeGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountLoginWithRecoveryCodePost"></a>
# **accountLoginWithRecoveryCodePost**
> accountLoginWithRecoveryCodePost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'recoveryCode': "recoveryCode_example", // String | 
  'returnUrl': "returnUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountLoginWithRecoveryCodePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recoveryCode** | **String**|  | [optional] 
 **returnUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountLogoutPost"></a>
# **accountLogoutPost**
> accountLogoutPost()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountLogoutPost(callback);
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

<a name="accountRegisterGet"></a>
# **accountRegisterGet**
> accountRegisterGet(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'returnUrl': "returnUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountRegisterGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountRegisterPost"></a>
# **accountRegisterPost**
> accountRegisterPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'email': "email_example", // String | 
  'password': "password_example", // String | 
  'confirmPassword': "confirmPassword_example", // String | 
  'returnUrl': "returnUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountRegisterPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **confirmPassword** | **String**|  | [optional] 
 **returnUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountResetPasswordConfirmationGet"></a>
# **accountResetPasswordConfirmationGet**
> accountResetPasswordConfirmationGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountResetPasswordConfirmationGet(callback);
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

<a name="accountResetPasswordGet"></a>
# **accountResetPasswordGet**
> accountResetPasswordGet(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'code': "code_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountResetPasswordGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountResetPasswordPost"></a>
# **accountResetPasswordPost**
> accountResetPasswordPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'email': "email_example", // String | 
  'password': "password_example", // String | 
  'confirmPassword': "confirmPassword_example", // String | 
  'code': "code_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountResetPasswordPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **confirmPassword** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiRegisterPost"></a>
# **apiRegisterPost**
> apiRegisterPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.AccountApi();

var opts = { 
  'lmv': new ThinkAboutItBc.LoginViewModel() // LoginViewModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRegisterPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lmv** | [**LoginViewModel**](LoginViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: Not defined

