module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WindowResize = exports.GeolocationChange = exports.DeviceOrientation = exports.TouchCancel = exports.TouchEnd = exports.TouchMove = exports.TouchStart = exports.Every = exports.KeyDown = exports.KeyUp = undefined;
	
	var _KeyUp = __webpack_require__(8);
	
	var _KeyUp2 = _interopRequireDefault(_KeyUp);
	
	var _KeyDown = __webpack_require__(7);
	
	var _KeyDown2 = _interopRequireDefault(_KeyDown);
	
	var _Every = __webpack_require__(5);
	
	var _Every2 = _interopRequireDefault(_Every);
	
	var _DeviceOrientation = __webpack_require__(4);
	
	var _DeviceOrientation2 = _interopRequireDefault(_DeviceOrientation);
	
	var _TouchStart = __webpack_require__(12);
	
	var _TouchStart2 = _interopRequireDefault(_TouchStart);
	
	var _TouchMove = __webpack_require__(11);
	
	var _TouchMove2 = _interopRequireDefault(_TouchMove);
	
	var _TouchEnd = __webpack_require__(10);
	
	var _TouchEnd2 = _interopRequireDefault(_TouchEnd);
	
	var _TouchCancel = __webpack_require__(9);
	
	var _TouchCancel2 = _interopRequireDefault(_TouchCancel);
	
	var _GeolocationChange = __webpack_require__(6);
	
	var _GeolocationChange2 = _interopRequireDefault(_GeolocationChange);
	
	var _WindowResize = __webpack_require__(13);
	
	var _WindowResize2 = _interopRequireDefault(_WindowResize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.KeyUp = _KeyUp2.default;
	exports.KeyDown = _KeyDown2.default;
	exports.Every = _Every2.default;
	exports.TouchStart = _TouchStart2.default;
	exports.TouchMove = _TouchMove2.default;
	exports.TouchEnd = _TouchEnd2.default;
	exports.TouchCancel = _TouchCancel2.default;
	exports.DeviceOrientation = _DeviceOrientation2.default;
	exports.GeolocationChange = _GeolocationChange2.default;
	exports.WindowResize = _WindowResize2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Touch = function (_Component) {
	  _inherits(Touch, _Component);
	
	  function Touch() {
	    _classCallCheck(this, Touch);
	
	    return _possibleConstructorReturn(this, (Touch.__proto__ || Object.getPrototypeOf(Touch)).apply(this, arguments));
	  }
	
	  _createClass(Touch, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.target = this.props.children ? this.refs.target : document;
	
	      if (Array.isArray(this.props.when)) {
	        this.props.when.forEach(this.addEvent.bind(this));
	
	        return;
	      }
	
	      this.addEvent(this.props.when);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (Array.isArray(this.props.when)) {
	        this.props.when.forEach(this.removeEvent.bind(this));
	
	        return;
	      }
	
	      this.removeEvent(this.props.when);
	    }
	  }, {
	    key: 'addEvent',
	    value: function addEvent(eventName) {
	      this.target.addEventListener('touch' + eventName, this.props.do);
	    }
	  }, {
	    key: 'removeEvent',
	    value: function removeEvent(eventName) {
	      this.target.removeEventListener('touch' + eventName, this.props.do);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return Touch;
	}(_react.Component);
	
	var validEvents = ['start', 'move', 'end', 'cancel'];
	
	Touch.propTypes = {
	  /**
	   * Touch event to trigger the callback
	   * @type {String}
	   */
	  when: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(validEvents).isRequired, _react.PropTypes.arrayOf(_react.PropTypes.oneOf(validEvents)).isRequired]),
	  /**
	   * Triggered when the key is pressed
	   * @type {Function}
	   */
	  do: _react.PropTypes.func.isRequired
	};
	
	exports.default = Touch;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KeyEvent = function (_Component) {
	  _inherits(KeyEvent, _Component);
	
	  function KeyEvent(props) {
	    _classCallCheck(this, KeyEvent);
	
	    var _this = _possibleConstructorReturn(this, (KeyEvent.__proto__ || Object.getPrototypeOf(KeyEvent)).call(this, props));
	
	    _this.listen = _this.listen.bind(_this);
	    return _this;
	  }
	
	  _createClass(KeyEvent, [{
	    key: 'listen',
	    value: function listen(event) {
	      if (event.key === this.props.when) {
	        this.props.do();
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.addEventListener(this.props.trigger, this.listen);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener(this.props.trigger, this.listen);
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return KeyEvent;
	}(_react.Component);
	
	KeyEvent.propTypes = {
	  /**
	   * A trigger to add listeners to
	   */
	  trigger: _react.PropTypes.string.isRequired,
	  /**
	   * A keyboard key to trigger the callback
	   * @type {String}
	   */
	  when: _react.PropTypes.string.isRequired,
	  /**
	   * Triggered when the key is pressed
	   * @type {Function}
	   */
	  do: _react.PropTypes.func.isRequired
	};
	
	exports.default = KeyEvent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DeviceOrientation = function (_Component) {
	  _inherits(DeviceOrientation, _Component);
	
	  function DeviceOrientation() {
	    _classCallCheck(this, DeviceOrientation);
	
	    return _possibleConstructorReturn(this, (DeviceOrientation.__proto__ || Object.getPrototypeOf(DeviceOrientation)).apply(this, arguments));
	  }
	
	  _createClass(DeviceOrientation, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('deviceorientation', this.props.do);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('deviceorientation', this.props.do);
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return DeviceOrientation;
	}(_react.Component);
	
	DeviceOrientation.propTypes = {
	  do: _react.PropTypes.func.isRequired
	};
	
	exports.default = DeviceOrientation;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Every = function (_Component) {
	  _inherits(Every, _Component);
	
	  function Every(props) {
	    _classCallCheck(this, Every);
	
	    var _this = _possibleConstructorReturn(this, (Every.__proto__ || Object.getPrototypeOf(Every)).call(this, props));
	
	    _this.state = {
	      intervalId: null,
	      shouldTriggerNextFrame: true,
	      lastFrame: Date.now()
	    };
	    _this.handleEveryFrame = _this.handleEveryFrame.bind(_this);
	    return _this;
	  }
	
	  _createClass(Every, [{
	    key: 'handleEveryFrame',
	    value: function handleEveryFrame() {
	      if (!this.state.shouldTriggerNextFrame) {
	        return;
	      }
	      var now = Date.now();
	      var dt = now - this.state.lastFrame;
	      this.setState({ lastFrame: now });
	      this.props.do(dt / 1000);
	      window.requestAnimationFrame(this.handleEveryFrame);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.frame) {
	        this.handleEveryFrame();
	        return;
	      }
	      var interval = (Number(this.props.s) || 0) * 1000 + (Number(this.props.ms) || 0);
	      this.setState({ intervalId: window.setInterval(this.props.do, interval) });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.frame) {
	        this.setState({ shouldTriggerNextFrame: false });
	        return;
	      }
	      window.clearInterval(this.state.intervalId);
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return Every;
	}(_react.Component);
	
	exports.default = Every;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var geolocation = 'geolocation' in navigator ? navigator.geolocation : null;
	
	var GeolocationChange = function (_Component) {
	  _inherits(GeolocationChange, _Component);
	
	  function GeolocationChange() {
	    _classCallCheck(this, GeolocationChange);
	
	    return _possibleConstructorReturn(this, (GeolocationChange.__proto__ || Object.getPrototypeOf(GeolocationChange)).apply(this, arguments));
	  }
	
	  _createClass(GeolocationChange, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (geolocation) {
	        var watchId = geolocation.watchPosition(this.props.do, this.handleError.bind(this));
	        this.setState({ watchId: watchId });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (geolocation) {
	        geolocation.clearWatch(this.state.watchId);
	      }
	    }
	  }, {
	    key: 'handleError',
	    value: function handleError(error) {
	      if (typeof this.props.onError === 'function') {
	        this.props.onError(error);
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return GeolocationChange;
	}(_react.Component);
	
	GeolocationChange.propTypes = {
	  /**
	   * Triggered when the location change 
	   * @type {Function}
	   */
	  do: _react.PropTypes.func.isRequired,
	  /**
	   * Triggered when location error occurs
	   * @type {Function}
	   */
	  onError: _react.PropTypes.func
	};
	
	exports.default = GeolocationChange;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _KeyEvent = __webpack_require__(3);
	
	var _KeyEvent2 = _interopRequireDefault(_KeyEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var KeyDown = function KeyDown(props) {
	  return _react2.default.createElement(_KeyEvent2.default, _extends({ trigger: 'keydown' }, props));
	};
	
	KeyDown.propTypes = {
	  /**
	   * A keyboard key to trigger the callback
	   * @type {String}
	   */
	  when: _react.PropTypes.string.isRequired,
	  /**
	   * Triggered when the key is pressed
	   * @type {Function}
	   */
	  do: _react.PropTypes.func.isRequired
	};
	
	exports.default = KeyDown;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _KeyEvent = __webpack_require__(3);
	
	var _KeyEvent2 = _interopRequireDefault(_KeyEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var KeyUp = function KeyUp(props) {
	  return _react2.default.createElement(_KeyEvent2.default, _extends({ trigger: 'keyup' }, props));
	};
	
	KeyUp.propTypes = {
	  /**
	   * A keyboard key to trigger the callback
	   * @type {String}
	   */
	  when: _react.PropTypes.string.isRequired,
	  /**
	   * Triggered when the key is pressed
	   * @type {Function}
	   */
	  do: _react.PropTypes.func.isRequired
	};
	
	exports.default = KeyUp;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TouchEvent = __webpack_require__(2);
	
	var _TouchEvent2 = _interopRequireDefault(_TouchEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TouchCancel = function TouchCancel(props) {
	  return _react2.default.createElement(_TouchEvent2.default, _extends({ when: 'cancel' }, props));
	};
	
	TouchCancel.propTypes = {
	  do: _react.PropTypes.func.isRequired
	};
	
	exports.default = TouchCancel;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TouchEvent = __webpack_require__(2);
	
	var _TouchEvent2 = _interopRequireDefault(_TouchEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TouchEnd = function TouchEnd(props) {
	  return _react2.default.createElement(_TouchEvent2.default, _extends({ when: 'end' }, props));
	};
	
	TouchEnd.propTypes = {
	  do: _react.PropTypes.func.isRequired
	};
	
	exports.default = TouchEnd;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TouchEvent = __webpack_require__(2);
	
	var _TouchEvent2 = _interopRequireDefault(_TouchEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TouchMove = function TouchMove(props) {
	  return _react2.default.createElement(_TouchEvent2.default, _extends({ when: 'move' }, props));
	};
	
	TouchMove.propTypes = {
	  do: _react.PropTypes.func.isRequired
	};
	
	exports.default = TouchMove;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TouchEvent = __webpack_require__(2);
	
	var _TouchEvent2 = _interopRequireDefault(_TouchEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TouchStart = function TouchStart(props) {
	  return _react2.default.createElement(_TouchEvent2.default, _extends({ when: 'start' }, props));
	};
	
	TouchStart.propTypes = {
	  do: _react.PropTypes.func.isRequired
	};
	
	exports.default = TouchStart;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _require = __webpack_require__(1);
	
	var Component = _require.Component;
	var PropTypes = _require.PropTypes;
	
	var WindowResize = function (_Component) {
	  _inherits(WindowResize, _Component);
	
	  function WindowResize() {
	    _classCallCheck(this, WindowResize);
	
	    return _possibleConstructorReturn(this, (WindowResize.__proto__ || Object.getPrototypeOf(WindowResize)).apply(this, arguments));
	  }
	
	  _createClass(WindowResize, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      window.addEventListener('resize', function (event) {
	        return _this2.props.do(event.target);
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize');
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return WindowResize;
	}(Component);
	
	WindowResize.propTypes = {
	  do: PropTypes.func.isRequired
	};
	
	module.exports = WindowResize;

/***/ }
/******/ ]);
//# sourceMappingURL=react-event-components.js.map