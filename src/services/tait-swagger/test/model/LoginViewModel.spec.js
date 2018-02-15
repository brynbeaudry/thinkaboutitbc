/**
 * Think About IT BC
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ThinkAboutItBc);
  }
}(this, function(expect, ThinkAboutItBc) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ThinkAboutItBc.LoginViewModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LoginViewModel', function() {
    it('should create an instance of LoginViewModel', function() {
      // uncomment below and update the code to test LoginViewModel
      //var instane = new ThinkAboutItBc.LoginViewModel();
      //expect(instance).to.be.a(ThinkAboutItBc.LoginViewModel);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new ThinkAboutItBc.LoginViewModel();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new ThinkAboutItBc.LoginViewModel();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new ThinkAboutItBc.LoginViewModel();
      //expect(instance).to.be();
    });

    it('should have the property rememberMe (base name: "rememberMe")', function() {
      // uncomment below and update the code to test the property rememberMe
      //var instane = new ThinkAboutItBc.LoginViewModel();
      //expect(instance).to.be();
    });

  });

}));