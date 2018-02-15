# ThinkAboutItBc.ManageApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**manageChangePasswordGet**](ManageApi.md#manageChangePasswordGet) | **GET** /Manage/ChangePassword | 
[**manageChangePasswordPost**](ManageApi.md#manageChangePasswordPost) | **POST** /Manage/ChangePassword | 
[**manageDisable2faPost**](ManageApi.md#manageDisable2faPost) | **POST** /Manage/Disable2fa | 
[**manageDisable2faWarningGet**](ManageApi.md#manageDisable2faWarningGet) | **GET** /Manage/Disable2faWarning | 
[**manageEnableAuthenticatorGet**](ManageApi.md#manageEnableAuthenticatorGet) | **GET** /Manage/EnableAuthenticator | 
[**manageEnableAuthenticatorPost**](ManageApi.md#manageEnableAuthenticatorPost) | **POST** /Manage/EnableAuthenticator | 
[**manageExternalLoginsGet**](ManageApi.md#manageExternalLoginsGet) | **GET** /Manage/ExternalLogins | 
[**manageGenerateRecoveryCodesGet**](ManageApi.md#manageGenerateRecoveryCodesGet) | **GET** /Manage/GenerateRecoveryCodes | 
[**manageIndexGet**](ManageApi.md#manageIndexGet) | **GET** /Manage/Index | 
[**manageIndexPost**](ManageApi.md#manageIndexPost) | **POST** /Manage/Index | 
[**manageLinkLoginCallbackGet**](ManageApi.md#manageLinkLoginCallbackGet) | **GET** /Manage/LinkLoginCallback | 
[**manageLinkLoginPost**](ManageApi.md#manageLinkLoginPost) | **POST** /Manage/LinkLogin | 
[**manageRemoveLoginPost**](ManageApi.md#manageRemoveLoginPost) | **POST** /Manage/RemoveLogin | 
[**manageResetAuthenticatorPost**](ManageApi.md#manageResetAuthenticatorPost) | **POST** /Manage/ResetAuthenticator | 
[**manageResetAuthenticatorWarningGet**](ManageApi.md#manageResetAuthenticatorWarningGet) | **GET** /Manage/ResetAuthenticatorWarning | 
[**manageSendVerificationEmailPost**](ManageApi.md#manageSendVerificationEmailPost) | **POST** /Manage/SendVerificationEmail | 
[**manageSetPasswordGet**](ManageApi.md#manageSetPasswordGet) | **GET** /Manage/SetPassword | 
[**manageSetPasswordPost**](ManageApi.md#manageSetPasswordPost) | **POST** /Manage/SetPassword | 
[**manageTwoFactorAuthenticationGet**](ManageApi.md#manageTwoFactorAuthenticationGet) | **GET** /Manage/TwoFactorAuthentication | 


<a name="manageChangePasswordGet"></a>
# **manageChangePasswordGet**
> manageChangePasswordGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageChangePasswordGet(callback);
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

<a name="manageChangePasswordPost"></a>
# **manageChangePasswordPost**
> manageChangePasswordPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var opts = { 
  'oldPassword': "oldPassword_example", // String | 
  'newPassword': "newPassword_example", // String | 
  'confirmPassword': "confirmPassword_example", // String | 
  'statusMessage': "statusMessage_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageChangePasswordPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oldPassword** | **String**|  | [optional] 
 **newPassword** | **String**|  | [optional] 
 **confirmPassword** | **String**|  | [optional] 
 **statusMessage** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="manageDisable2faPost"></a>
# **manageDisable2faPost**
> manageDisable2faPost()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageDisable2faPost(callback);
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

<a name="manageDisable2faWarningGet"></a>
# **manageDisable2faWarningGet**
> manageDisable2faWarningGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageDisable2faWarningGet(callback);
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

<a name="manageEnableAuthenticatorGet"></a>
# **manageEnableAuthenticatorGet**
> manageEnableAuthenticatorGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageEnableAuthenticatorGet(callback);
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

<a name="manageEnableAuthenticatorPost"></a>
# **manageEnableAuthenticatorPost**
> manageEnableAuthenticatorPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var opts = { 
  'code': "code_example", // String | 
  'sharedKey': "sharedKey_example", // String | 
  'authenticatorUri': "authenticatorUri_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageEnableAuthenticatorPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | [optional] 
 **sharedKey** | **String**|  | [optional] 
 **authenticatorUri** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="manageExternalLoginsGet"></a>
# **manageExternalLoginsGet**
> manageExternalLoginsGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageExternalLoginsGet(callback);
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

<a name="manageGenerateRecoveryCodesGet"></a>
# **manageGenerateRecoveryCodesGet**
> manageGenerateRecoveryCodesGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageGenerateRecoveryCodesGet(callback);
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

<a name="manageIndexGet"></a>
# **manageIndexGet**
> manageIndexGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageIndexGet(callback);
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

<a name="manageIndexPost"></a>
# **manageIndexPost**
> manageIndexPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var opts = { 
  'username': "username_example", // String | 
  'isEmailConfirmed': true, // Boolean | 
  'email': "email_example", // String | 
  'phoneNumber': "phoneNumber_example", // String | 
  'statusMessage': "statusMessage_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageIndexPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | [optional] 
 **isEmailConfirmed** | **Boolean**|  | [optional] 
 **email** | **String**|  | [optional] 
 **phoneNumber** | **String**|  | [optional] 
 **statusMessage** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="manageLinkLoginCallbackGet"></a>
# **manageLinkLoginCallbackGet**
> manageLinkLoginCallbackGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageLinkLoginCallbackGet(callback);
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

<a name="manageLinkLoginPost"></a>
# **manageLinkLoginPost**
> manageLinkLoginPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var opts = { 
  'provider': "provider_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageLinkLoginPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="manageRemoveLoginPost"></a>
# **manageRemoveLoginPost**
> manageRemoveLoginPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var opts = { 
  'loginProvider': "loginProvider_example", // String | 
  'providerKey': "providerKey_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageRemoveLoginPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginProvider** | **String**|  | [optional] 
 **providerKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="manageResetAuthenticatorPost"></a>
# **manageResetAuthenticatorPost**
> manageResetAuthenticatorPost()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageResetAuthenticatorPost(callback);
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

<a name="manageResetAuthenticatorWarningGet"></a>
# **manageResetAuthenticatorWarningGet**
> manageResetAuthenticatorWarningGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageResetAuthenticatorWarningGet(callback);
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

<a name="manageSendVerificationEmailPost"></a>
# **manageSendVerificationEmailPost**
> manageSendVerificationEmailPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var opts = { 
  'username': "username_example", // String | 
  'isEmailConfirmed': true, // Boolean | 
  'email': "email_example", // String | 
  'phoneNumber': "phoneNumber_example", // String | 
  'statusMessage': "statusMessage_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageSendVerificationEmailPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | [optional] 
 **isEmailConfirmed** | **Boolean**|  | [optional] 
 **email** | **String**|  | [optional] 
 **phoneNumber** | **String**|  | [optional] 
 **statusMessage** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="manageSetPasswordGet"></a>
# **manageSetPasswordGet**
> manageSetPasswordGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageSetPasswordGet(callback);
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

<a name="manageSetPasswordPost"></a>
# **manageSetPasswordPost**
> manageSetPasswordPost(opts)



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var opts = { 
  'newPassword': "newPassword_example", // String | 
  'confirmPassword': "confirmPassword_example", // String | 
  'statusMessage': "statusMessage_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageSetPasswordPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newPassword** | **String**|  | [optional] 
 **confirmPassword** | **String**|  | [optional] 
 **statusMessage** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="manageTwoFactorAuthenticationGet"></a>
# **manageTwoFactorAuthenticationGet**
> manageTwoFactorAuthenticationGet()



### Example
```javascript
var ThinkAboutItBc = require('think_about_it_bc');

var apiInstance = new ThinkAboutItBc.ManageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.manageTwoFactorAuthenticationGet(callback);
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

