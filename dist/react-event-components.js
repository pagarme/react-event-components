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
	
	var KeyUp = __webpack_require__(8);
	var KeyDown = __webpack_require__(7);
	var Every = __webpack_require__(5);
	var DeviceOrientation = __webpack_require__(4);
	var TouchStart = __webpack_require__(12);
	var TouchMove = __webpack_require__(11);
	var TouchEnd = __webpack_require__(10);
	var TouchCancel = __webpack_require__(9);
	var GeolocationChange = __webpack_require__(6);
	var WindowResize = __webpack_require__(13);
	
	module.exports = {
	  KeyUp: KeyUp,
	  KeyDown: KeyDown,
	  Every: Every,
	  TouchStart: TouchStart,
	  TouchMove: TouchMove,
	  TouchEnd: TouchEnd,
	  TouchCancel: TouchCancel,
	  DeviceOrientation: DeviceOrientation,
	  GeolocationChange: GeolocationChange,
	  WindowResize: WindowResize
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _require = __webpack_require__(1),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;
	
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
	}(Component);
	
	var validEvents = ['start', 'move', 'end', 'cancel'];
	
	Touch.propTypes = {
	  /**
	   * Touch event to trigger the callback
	   * @type {String}
	   */
	  when: PropTypes.oneOfType([PropTypes.oneOf(validEvents).isRequired, PropTypes.arrayOf(PropTypes.oneOf(validEvents)).isRequired]),
	  /**
	   * Triggered when the key is pressed
	   * @type {Function}
	   */
	  do: PropTypes.func.isRequired
	};
	
	module.exports = Touch;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _require = __webpack_require__(1),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;
	
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
	}(Component);
	
	KeyEvent.propTypes = {
	  /**
	   * A trigger to add listeners to
	   */
	  trigger: PropTypes.string.isRequired,
	  /**
	   * A keyboard key to trigger the callback
	   * @type {String}
	   */
	  when: PropTypes.string.isRequired,
	  /**
	   * Triggered when the key is pressed
	   * @type {Function}
	   */
	  do: PropTypes.func.isRequired
	};
	
	module.exports = KeyEvent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _require = __webpack_require__(1),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;
	
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
	}(Component);
	
	DeviceOrientation.propTypes = {
	  do: PropTypes.func.isRequired
	};
	
	module.exports = DeviceOrientation;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _require = __webpack_require__(1),
	    Component = _require.Component;
	
	module.exports = function (_Component) {
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
	}(Component);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _require = __webpack_require__(1),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;
	
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
	}(Component);
	
	GeolocationChange.propTypes = {
	  /**
	   * Triggered when the location change 
	   * @type {Function}
	   */
	  do: PropTypes.func.isRequired,
	  /**
	   * Triggered when location error occurs
	   * @type {Function}
	   */
	  onError: PropTypes.func
	};
	
	module.exports = GeolocationChange;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var PropTypes = React.PropTypes;
	
	var KeyEvent = __webpack_require__(3);
	
	var KeyDown = function KeyDown(props) {
	  return React.createElement(KeyEvent, Object.assign({ trigger: 'keydown' }, props));
	};
	
	KeyDown.propTypes = {
	  /**
	   * A keyboard key to trigger the callback
	   * @type {String}
	   */
	  when: PropTypes.string.isRequired,
	  /**
	   * Triggered when the key is pressed
	   * @type {Function}
	   */
	  do: PropTypes.func.isRequired
	};
	
	module.exports = KeyDown;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var PropTypes = React.PropTypes;
	
	var KeyEvent = __webpack_require__(3);
	
	var KeyUp = function KeyUp(props) {
	  return React.createElement(KeyEvent, Object.assign({ trigger: 'keyup' }, props));
	};
	
	KeyUp.propTypes = {
	  /**
	   * A keyboard key to trigger the callback
	   * @type {String}
	   */
	  when: PropTypes.string.isRequired,
	  /**
	   * Triggered when the key is pressed
	   * @type {Function}
	   */
	  do: PropTypes.func.isRequired
	};
	
	module.exports = KeyUp;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var PropTypes = React.PropTypes;
	
	var TouchEvent = __webpack_require__(2);
	
	var TouchCancel = function TouchCancel(props) {
	  return React.createElement(TouchEvent, Object.assign({ when: 'cancel' }, props));
	};
	
	TouchCancel.propTypes = {
	  do: PropTypes.func.isRequired
	};
	
	module.exports = TouchCancel;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var PropTypes = React.PropTypes;
	
	var TouchEvent = __webpack_require__(2);
	
	var TouchEnd = function TouchEnd(props) {
	  return React.createElement(TouchEvent, Object.assign({ when: 'end' }, props));
	};
	
	TouchEnd.propTypes = {
	  do: PropTypes.func.isRequired
	};
	
	module.exports = TouchEnd;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var PropTypes = React.PropTypes;
	
	var TouchEvent = __webpack_require__(2);
	
	var TouchMove = function TouchMove(props) {
	  return React.createElement(TouchEvent, Object.assign({ when: 'move' }, props));
	};
	
	TouchMove.propTypes = {
	  do: PropTypes.func.isRequired
	};
	
	module.exports = TouchMove;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var PropTypes = React.PropTypes;
	
	var TouchEvent = __webpack_require__(2);
	
	var TouchStart = function TouchStart(props) {
	  return React.createElement(TouchEvent, Object.assign({ when: 'start' }, props));
	};
	
	TouchStart.propTypes = {
	  do: PropTypes.func.isRequired
	};
	
	module.exports = TouchStart;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _require = __webpack_require__(1),
	    Component = _require.Component,
	    PropTypes = _require.PropTypes;
	
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