module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(6)();
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Touch=function(_Component){_inherits(Touch,_Component);function Touch(){_classCallCheck(this,Touch);return _possibleConstructorReturn(this,(Touch.__proto__||Object.getPrototypeOf(Touch)).apply(this,arguments));}_createClass(Touch,[{key:'componentDidMount',value:function componentDidMount(){this.target=this.props.children?this.refs.target:document;if(Array.isArray(this.props.when)){this.props.when.forEach(this.addEvent.bind(this));return;}this.addEvent(this.props.when);}},{key:'componentWillUnmount',value:function componentWillUnmount(){if(Array.isArray(this.props.when)){this.props.when.forEach(this.removeEvent.bind(this));return;}this.removeEvent(this.props.when);}},{key:'addEvent',value:function addEvent(eventName){this.target.addEventListener('touch'+eventName,this.props.do);}},{key:'removeEvent',value:function removeEvent(eventName){this.target.removeEventListener('touch'+eventName,this.props.do);}},{key:'render',value:function render(){return null;}}]);return Touch;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);var validEvents=['start','move','end','cancel'];Touch.propTypes={/**
   * Touch event to trigger the callback
   * @type {String}
   */when:__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOfType"]([__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOf"](validEvents).isRequired,__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"](__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOf"](validEvents)).isRequired]),/**
   * Triggered when the key is pressed
   * @type {Function}
   */do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (Touch);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var KeyEvent=function(_Component){_inherits(KeyEvent,_Component);function KeyEvent(props){_classCallCheck(this,KeyEvent);var _this=_possibleConstructorReturn(this,(KeyEvent.__proto__||Object.getPrototypeOf(KeyEvent)).call(this,props));_this.handleTrigger=_this.handleTrigger.bind(_this);return _this;}_createClass(KeyEvent,[{key:'handleTrigger',value:function handleTrigger(event){if(this.props.when===event.key){this.props.do();}if(this.props.when==='*'||!this.props.when){this.props.do(event.key);}}},{key:'componentDidMount',value:function componentDidMount(){document.addEventListener(this.props.trigger,this.handleTrigger);}},{key:'componentWillUnmount',value:function componentWillUnmount(){document.removeEventListener(this.props.trigger,this.handleTrigger);}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){return false;}},{key:'render',value:function render(){return null;}}]);return KeyEvent;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);KeyEvent.propTypes={/**
   * A trigger to add listeners to
   */trigger:__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,/**
   * A keyboard key to trigger the callback
   * @type {String}
   */when:__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],/**
   * Triggered when the key is pressed
   * @type {Function}
   */do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (KeyEvent);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyUp__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KeyDown__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Every__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DeviceOrientation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TouchStart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TouchMove__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TouchEnd__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TouchCancel__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__GeolocationChange__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WindowResize__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BatteryStatus__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "KeyUp", function() { return __WEBPACK_IMPORTED_MODULE_0__KeyUp__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "KeyDown", function() { return __WEBPACK_IMPORTED_MODULE_1__KeyDown__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Every", function() { return __WEBPACK_IMPORTED_MODULE_2__Every__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TouchStart", function() { return __WEBPACK_IMPORTED_MODULE_4__TouchStart__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TouchMove", function() { return __WEBPACK_IMPORTED_MODULE_5__TouchMove__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TouchEnd", function() { return __WEBPACK_IMPORTED_MODULE_6__TouchEnd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TouchCancel", function() { return __WEBPACK_IMPORTED_MODULE_7__TouchCancel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOrientation", function() { return __WEBPACK_IMPORTED_MODULE_3__DeviceOrientation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationChange", function() { return __WEBPACK_IMPORTED_MODULE_8__GeolocationChange__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WindowResize", function() { return __WEBPACK_IMPORTED_MODULE_9__WindowResize__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryStatus", function() { return __WEBPACK_IMPORTED_MODULE_10__BatteryStatus__["a"]; });


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__KeyEvent__ = __webpack_require__(3);
var KeyUp=function KeyUp(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__KeyEvent__["a" /* default */],Object.assign({trigger:'keyup'},props));};KeyUp.propTypes={/**
   * A keyboard key to trigger the callback
   * @type {String}
   */when:__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,/**
   * Triggered when the key is pressed
   * @type {Function}
   */do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (KeyUp);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__KeyEvent__ = __webpack_require__(3);
var KeyDown=function KeyDown(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__KeyEvent__["a" /* default */],Object.assign({trigger:'keydown'},props));};KeyDown.propTypes={/**
   * A keyboard key to trigger the callback
   * @type {String}
   */when:__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,/**
   * Triggered when the key is pressed
   * @type {Function}
   */do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (KeyDown);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Every=function(_Component){_inherits(Every,_Component);function Every(props){_classCallCheck(this,Every);var _this=_possibleConstructorReturn(this,(Every.__proto__||Object.getPrototypeOf(Every)).call(this,props));_this.state={intervalId:null,shouldTriggerNextFrame:true,lastFrame:Date.now()};_this.handleEveryFrame=_this.handleEveryFrame.bind(_this);return _this;}_createClass(Every,[{key:'handleEveryFrame',value:function handleEveryFrame(){if(!this.state.shouldTriggerNextFrame){return;}var now=Date.now();var dt=now-this.state.lastFrame;this.setState({lastFrame:now});this.props.do(dt/1000);window.requestAnimationFrame(this.handleEveryFrame);}},{key:'componentDidMount',value:function componentDidMount(){if(this.props.frame){this.handleEveryFrame();return;}var interval=(Number(this.props.s)||0)*1000+(Number(this.props.ms)||0);this.setState({intervalId:window.setInterval(this.props.do,interval)});}},{key:'componentWillUnmount',value:function componentWillUnmount(){if(this.props.frame){this.setState({shouldTriggerNextFrame:false});return;}window.clearInterval(this.state.intervalId);}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){return false;}},{key:'render',value:function render(){return null;}}]);return Every;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Every);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var DeviceOrientation=function(_Component){_inherits(DeviceOrientation,_Component);function DeviceOrientation(){_classCallCheck(this,DeviceOrientation);return _possibleConstructorReturn(this,(DeviceOrientation.__proto__||Object.getPrototypeOf(DeviceOrientation)).apply(this,arguments));}_createClass(DeviceOrientation,[{key:'componentDidMount',value:function componentDidMount(){window.addEventListener('deviceorientation',this.props.do);}},{key:'componentWillUnmount',value:function componentWillUnmount(){window.removeEventListener('deviceorientation',this.props.do);}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){return false;}},{key:'render',value:function render(){return null;}}]);return DeviceOrientation;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);DeviceOrientation.propTypes={do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (DeviceOrientation);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TouchEvent__ = __webpack_require__(2);
var TouchStart=function TouchStart(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TouchEvent__["a" /* default */],Object.assign({when:'start'},props));};TouchStart.propTypes={do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (TouchStart);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TouchEvent__ = __webpack_require__(2);
var TouchMove=function TouchMove(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TouchEvent__["a" /* default */],Object.assign({when:'move'},props));};TouchMove.propTypes={do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (TouchMove);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TouchEvent__ = __webpack_require__(2);
var TouchEnd=function TouchEnd(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TouchEvent__["a" /* default */],Object.assign({when:'end'},props));};TouchEnd.propTypes={do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (TouchEnd);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TouchEvent__ = __webpack_require__(2);
var TouchCancel=function TouchCancel(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TouchEvent__["a" /* default */],Object.assign({when:'cancel'},props));};TouchCancel.propTypes={do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (TouchCancel);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var geolocation='geolocation'in navigator?navigator.geolocation:null;var GeolocationChange=function(_Component){_inherits(GeolocationChange,_Component);function GeolocationChange(){_classCallCheck(this,GeolocationChange);return _possibleConstructorReturn(this,(GeolocationChange.__proto__||Object.getPrototypeOf(GeolocationChange)).apply(this,arguments));}_createClass(GeolocationChange,[{key:'componentDidMount',value:function componentDidMount(){if(geolocation){var watchId=geolocation.watchPosition(this.props.do,this.handleError.bind(this));this.setState({watchId:watchId});}}},{key:'componentWillUnmount',value:function componentWillUnmount(){if(geolocation){geolocation.clearWatch(this.state.watchId);}}},{key:'handleError',value:function handleError(error){if(typeof this.props.onError==='function'){this.props.onError(error);}}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){return false;}},{key:'render',value:function render(){return null;}}]);return GeolocationChange;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);GeolocationChange.propTypes={/**
   * Triggered when the location change
   * @type {Function}
   */do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,/**
   * Triggered when location error occurs
   * @type {Function}
   */onError:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]};/* harmony default export */ __webpack_exports__["a"] = (GeolocationChange);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var WindowResize=function(_Component){_inherits(WindowResize,_Component);function WindowResize(){_classCallCheck(this,WindowResize);return _possibleConstructorReturn(this,(WindowResize.__proto__||Object.getPrototypeOf(WindowResize)).apply(this,arguments));}_createClass(WindowResize,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;window.addEventListener('resize',function(event){return _this2.props.do(event.target);});}},{key:'componentWillUnmount',value:function componentWillUnmount(){window.removeEventListener('resize');}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){return false;}},{key:'render',value:function render(){return null;}}]);return WindowResize;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);WindowResize.propTypes={do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (WindowResize);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var BatteryStatus=function(_Component){_inherits(BatteryStatus,_Component);function BatteryStatus(){_classCallCheck(this,BatteryStatus);var _this=_possibleConstructorReturn(this,(BatteryStatus.__proto__||Object.getPrototypeOf(BatteryStatus)).call(this));_this.state={};return _this;}_createClass(BatteryStatus,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;if(!navigator.getBattery){return;}navigator.getBattery().then(function(_ref){var charging=_ref.charging,chargingTime=_ref.chargingTime,dischargingTime=_ref.dischargingTime,level=_ref.level;_this2.props.do({charging:charging,chargingTime:chargingTime,dischargingTime:dischargingTime,level:level*100});});}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){return false;}},{key:'render',value:function render(){return null;}}]);return BatteryStatus;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);BatteryStatus.propTypes={do:__WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired};/* harmony default export */ __webpack_exports__["a"] = (BatteryStatus);

/***/ })
/******/ ]);
//# sourceMappingURL=react-event-components.js.map