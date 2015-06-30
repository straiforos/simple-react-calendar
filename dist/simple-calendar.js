(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _calendarCalendar = __webpack_require__(1);
	
	var _calendarCalendar2 = _interopRequireDefault(_calendarCalendar);
	
	var SimpleCalendar = _calendarCalendar2['default'];
	exports.SimpleCalendar = SimpleCalendar;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _month = __webpack_require__(2);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _month_header = __webpack_require__(16);
	
	var _month_header2 = _interopRequireDefault(_month_header);
	
	/*
	  activeMonth — Date, default `new Date()`
	  onActiveMonthChange — function
	
	  selected — object | default false
	  onSelect — function
	
	  selectionMode — string | default 'single'
	*/
	
	var Calendar = (function (_React$Component) {
	  function Calendar(props) {
	    _classCallCheck(this, Calendar);
	
	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props);
	
	    var firstDayOfMonth = this.props.activeMonth;
	    firstDayOfMonth.setDate(1);
	    this.state = {
	      activeMonth: firstDayOfMonth,
	      selected: this.props.selected
	    };
	  }
	
	  _inherits(Calendar, _React$Component);
	
	  _createClass(Calendar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (!_.isEqual(nextProps.selected, this.props.selected)) {
	        this.setState({
	          selected: nextProps.selected
	        });
	      }
	    }
	  }, {
	    key: '_getActiveMonth',
	    value: function _getActiveMonth() {
	      if (_.isFunction(this.props.onActiveMonthChange)) {
	        return this.props.activeMonth;
	      } else {
	        return this.state.activeMonth;
	      }
	    }
	  }, {
	    key: '_switchMonth',
	    value: function _switchMonth(offset) {
	      var month = new Date(this._getActiveMonth());
	      month.setMonth(month.getMonth() + offset);
	
	      if (_.isFunction(this.props.onActiveMonthChange)) {
	        this.props.onActiveMonthChange(month);
	      } else {
	        this.setState({
	          activeMonth: month
	        });
	      }
	    }
	  }, {
	    key: '_selectionChanged',
	    value: function _selectionChanged(selection) {
	      if (_.isFunction(this.props.onSelect) && !selection.selectionInProgress) {
	        this.props.onSelect(selection);
	      }
	      this.setState({
	        selected: [selection.selectionStart, selection.selectionEnd]
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'calendar' },
	        React.createElement(_month_header2['default'], {
	          activeMonth: this._getActiveMonth(),
	          onMonthChange: this._switchMonth.bind(this)
	        }),
	        React.createElement(_month2['default'], {
	          activeMonth: this._getActiveMonth(),
	          selectionMode: this.props.selectionMode,
	          selected: this.state.selected,
	          data: this.props.data,
	          onChange: this._selectionChanged.bind(this)
	        })
	      );
	    }
	  }]);
	
	  return Calendar;
	})(React.Component);
	
	exports['default'] = Calendar;
	
	Calendar.propTypes = {
	  activeMonth: React.PropTypes.instanceOf(Date),
	  onActiveMonthChange: React.PropTypes.func,
	  selected: React.PropTypes.object,
	  onSelectionChange: React.PropTypes.func,
	  selectionMode: React.PropTypes.string,
	  data: React.PropTypes.object
	};
	
	Calendar.defaultProps = {
	  activeMonth: new Date(),
	  selectionMode: 'single'
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _day = __webpack_require__(3);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _week = __webpack_require__(9);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _utilsGet_weeks_in_month = __webpack_require__(15);
	
	var _utilsGet_weeks_in_month2 = _interopRequireDefault(_utilsGet_weeks_in_month);
	
	// activeMonth   = { this._getActiveMonth() }
	// selectionMode = { this.props.selectionMode }
	// selection     = { this._getSelection() }
	// onChange
	
	var Month = (function (_React$Component) {
	  function Month(props) {
	    _classCallCheck(this, Month);
	
	    _get(Object.getPrototypeOf(Month.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      selectionInProgress: false,
	      selectionStart: null,
	      selectionEnd: null
	    };
	  }
	
	  _inherits(Month, _React$Component);
	
	  _createClass(Month, [{
	    key: '_pushUpdate',
	    value: function _pushUpdate() {
	      this.props.onChange(_.pick(this.state, ['selectionStart', 'selectionEnd', 'selectionInProgress']));
	    }
	  }, {
	    key: '_onDayClick',
	    value: function _onDayClick(date) {
	      var _this = this;
	
	      var nextState = {};
	      if (this.props.selectionMode == 'range') {
	        if (this.state.selectionInProgress) {
	          nextState = {
	            selectionInProgress: false,
	            selectionStart: this.state.selectionStart.getTime() < date.getTime() ? this.state.selectionStart : date,
	            selectionEnd: this.state.selectionStart.getTime() > date.getTime() ? this.state.selectionStart : date
	          };
	        } else {
	          nextState = {
	            selectionInProgress: true,
	            selectionStart: date,
	            selectionEnd: date
	          };
	        }
	      } else if (this.props.selectionMode == 'single' || !this.props.selectionMode) {
	        nextState = {
	          selectionStart: date,
	          selectionEnd: date
	        };
	      }
	      this.setState(nextState, function () {
	        _this._pushUpdate();
	      });
	    }
	  }, {
	    key: '_onDayMouseMove',
	    value: function _onDayMouseMove(date) {
	      var _this2 = this;
	
	      if (this.state.selectionInProgress && (!this.state.selectionEnd || this.state.selectionEnd.getTime() != date.getTime())) {
	        this.setState({ selectionEnd: date }, function () {
	          _this2._pushUpdate();
	        });
	      }
	    }
	  }, {
	    key: '_renderWeeks',
	    value: function _renderWeeks() {
	      var _this3 = this;
	
	      var weeks = (0, _utilsGet_weeks_in_month2['default'])(this.props.activeMonth);
	      return weeks.map(function (week) {
	        return React.createElement(_week2['default'], {
	          key: week.getTime(),
	          startDate: week,
	          activeMonth: _this3.props.activeMonth,
	          selected: _this3.props.selected,
	          data: _this3.props.data,
	
	          onDayClick: _this3._onDayClick.bind(_this3),
	          onDayMouseMove: _this3._onDayMouseMove.bind(_this3)
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'month' },
	        this._renderWeeks()
	      );
	    }
	  }]);
	
	  return Month;
	})(React.Component);
	
	exports['default'] = Month;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsIs_weekend = __webpack_require__(5);
	
	var _utilsIs_weekend2 = _interopRequireDefault(_utilsIs_weekend);
	
	var _utilsIs_today = __webpack_require__(6);
	
	var _utilsIs_today2 = _interopRequireDefault(_utilsIs_today);
	
	var _utilsNo_op = __webpack_require__(7);
	
	var _utilsNo_op2 = _interopRequireDefault(_utilsNo_op);
	
	var _utilsPrevent_default = __webpack_require__(8);
	
	var _utilsPrevent_default2 = _interopRequireDefault(_utilsPrevent_default);
	
	var Day = (function (_React$Component) {
	  function Day() {
	    _classCallCheck(this, Day);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Day, _React$Component);
	
	  _createClass(Day, [{
	    key: '_getClasses',
	    value: function _getClasses() {
	      var classes = {};
	      if (_.isArray(this.props.data.modifiers)) {
	        classes = _.zipObject(this.props.data.modifiers.map(function (modifier) {
	          return ['is-' + modifier, true];
	        }));
	      }
	      classes = _.assign(classes, {
	        day: true,
	        'is-selected': this.props.selected,
	        'is-weekend': (0, _utilsIs_weekend2['default'])(this.props.date),
	        'is-workday': !(0, _utilsIs_weekend2['default'])(this.props.date),
	        'is-today': (0, _utilsIs_today2['default'])(this.props.date),
	        'is-current_month': this.props.date.getMonth() == this.props.activeMonth.getMonth(),
	        'is-prev_month': this.props.date.getMonth() < this.props.activeMonth.getMonth(),
	        'is-next_month': this.props.date.getMonth() > this.props.activeMonth.getMonth()
	      });
	
	      return (0, _classnames2['default'])(classes);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        {
	          className: this._getClasses(),
	          onClick: (0, _utilsPrevent_default2['default'])(_.partial(this.props.onClick, this.props.date)),
	          onMouseMove: (0, _utilsPrevent_default2['default'])(_.partial(this.props.onMouseMove, this.props.date))
	        },
	        new Date(this.props.date).getDate()
	      );
	    }
	  }]);
	
	  return Day;
	})(React.Component);
	
	exports['default'] = Day;
	
	Day.defaultProps = {
	  data: {},
	  onClick: _utilsNo_op2['default'],
	  onMouseMove: _utilsNo_op2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	(function () {
		'use strict';
	
		function classNames () {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
	
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
	
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Returns true if date falls on the weekend and false otherwise.
	 *
	 * @param {date|string} date
	 * @returns {boolean}
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isWeekend;
	
	function isWeekend(date) {
	  return date.getDay() == 0 || date.getDay() == 6;
	}
	
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Returns true if date is today and false otherwise.
	 *
	 * @param {date} date
	 * @returns {boolean}
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isToday;
	
	function isToday(date) {
	  var today = new Date();
	  return today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() && today.getDate() == date.getDate();
	}
	
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	/** A no op function to be used as a default value for optional function props. */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = noOp;
	
	function noOp() {}
	
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = preventDefault;
	
	function preventDefault(func) {
	  var that = this;
	  return function (e) {
	    e.preventDefault();
	    func && func.call(that, e);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _day = __webpack_require__(3);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _utilsGet_days_in_week = __webpack_require__(10);
	
	var _utilsGet_days_in_week2 = _interopRequireDefault(_utilsGet_days_in_week);
	
	var _utilsDate_key = __webpack_require__(11);
	
	var _utilsDate_key2 = _interopRequireDefault(_utilsDate_key);
	
	var _utilsIs_date_in_range = __webpack_require__(12);
	
	var _utilsIs_date_in_range2 = _interopRequireDefault(_utilsIs_date_in_range);
	
	var Week = (function (_React$Component) {
	  function Week() {
	    _classCallCheck(this, Week);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Week, _React$Component);
	
	  _createClass(Week, [{
	    key: '_renderDays',
	    value: function _renderDays() {
	      var _this = this;
	
	      return (0, _utilsGet_days_in_week2['default'])(this.props.startDate).map(function (day) {
	        return React.createElement(_day2['default'], {
	          key: day.getTime(),
	          date: day,
	          data: _this.props.data[(0, _utilsDate_key2['default'])(day)],
	          selected: (0, _utilsIs_date_in_range2['default'])(day, _this.props.selected),
	          activeMonth: _this.props.activeMonth,
	
	          onClick: _this.props.onDayClick,
	          onMouseMove: _this.props.onDayMouseMove
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'week' },
	        this._renderDays()
	      );
	    }
	  }]);
	
	  return Week;
	})(React.Component);
	
	exports['default'] = Week;
	
	Week.defaultProps = {
	  data: {}
	};
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Accepts the first day and returns an array containing 7 days starting
	 * with the first day. Intended for generating days in a week.
	 *
	 * @param {date} date
	 * @returns {array}
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getDaysInWeek;
	
	function getDaysInWeek(firstDay) {
	  return _.range(0, 7).map(function (day) {
	    return new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + day);
	  });
	}
	
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Accepts a date or a string representation of a date and returns
	 * a string suitable to be used as a key in the format: YYYY-MM-DD
	 *
	 * @param {date|string} date
	 * @returns {string}
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = dateKey;
	
	function dateKey(date) {
	  date = new Date(date);
	  var yyyy = date.getFullYear();
	  var mm = ('0' + (date.getMonth() + 1)).slice(-2);
	  var dd = ('0' + date.getDate()).slice(-2);
	  return '' + yyyy + '-' + mm + '-' + dd;
	}
	
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = isDateInRange;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _date_range_to_array = __webpack_require__(13);
	
	var _date_range_to_array2 = _interopRequireDefault(_date_range_to_array);
	
	var _is_date_between = __webpack_require__(14);
	
	var _is_date_between2 = _interopRequireDefault(_is_date_between);
	
	/**
	 * Returns true if date is within the range, false otherwise.
	 * See documentation for dateRangeToArray for details on range formats.
	 *
	 * @param {date} date
	 * @param {object|array|undefined} datesRange
	 * @returns {boolean}
	 */
	
	function isDateInRange(date, datesRange) {
	  var range = (0, _date_range_to_array2['default'])(datesRange);
	  return (0, _is_date_between2['default'])(date, range[0], range[1]);
	}
	
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * It takes one of the following:
	 *  - an object with selectionStart and/or selectionEnd properties with dates
	 *  - an array with 1 or 2 dates
	 *  - nothing
	 *
	 * In all the cases it returns an array with two values that are Date object
	 * representing start and end of a range. In cases where either start or end
	 * end is missing it defaults to current Date.
	 *
	 * @param {object|array|undefined} value
	 * @returns {array}
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = dateRangeToArray;
	
	function dateRangeToArray(value) {
	  var now = new Date();
	
	  if (_.isPlainObject(value)) {
	    return [new Date(value.selectionStart || now), new Date(value.selectionEnd || now)];
	  } else if (_.isArray(value)) {
	    return [new Date(value[0] || now), new Date(value[1] || now)];
	  } else {
	    return [now, now];
	  }
	}
	
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Returns true if date falls between dateFrom and dateTo, false otherwise.
	 *
	 * @param {date} date
	 * @param {date|string} dateFrom
	 * @param {date|string} dateTo
	 * @returns {boolean}
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isDateBetween;
	
	function isDateBetween(date, dateFrom, dateTo) {
	  var fromTime = new Date(dateFrom).getTime();
	  var toTime = new Date(dateTo).getTime();
	  var min = Math.min(fromTime, toTime);
	  var max = Math.max(fromTime, toTime);
	  var time = date.getTime();
	  return time >= min && time <= max;
	}
	
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Accepts the first day of month and returns an array containing
	 * all mondays for all weeks that intersect that month. So, if a month
	 * starts on a Wednesday, the first entry will be the previous monday.
	 *
	 * @param {date} date
	 * @returns {array}
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getWeeksInMonth;
	
	function getWeeksInMonth(month) {
	  var date = new Date(month.getFullYear(), month.getMonth(), month.getDate());
	
	  var daysFromWeekStart = (date.getDay() || 7) - 1;
	  var daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	
	  var weeksCount = Math.ceil((daysInMonth + daysFromWeekStart) / 7);
	  var startDate = new Date(date.getFullYear(), date.getMonth(), 1 - daysFromWeekStart);
	
	  return _.range(0, weeksCount).map(function (week) {
	    return new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + week * 7);
	  });
	}
	
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var MonthHeader = (function (_React$Component) {
	  function MonthHeader() {
	    _classCallCheck(this, MonthHeader);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(MonthHeader, _React$Component);
	
	  _createClass(MonthHeader, [{
	    key: '_switchMonth',
	    value: function _switchMonth(e, id, offset) {
	      e.preventDefault();
	      if (_.isFunction(this.props.onMonthChange)) {
	        this.props.onMonthChange(offset);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var m = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
	      var date = this.props.activeMonth;
	      return React.createElement(
	        'div',
	        { className: 'month-header' },
	        React.createElement(
	          'a',
	          { href: '#', onClick: _.partialRight(this._switchMonth, -1).bind(this) },
	          'prev'
	        ),
	        React.createElement(
	          'div',
	          { className: 'month-title' },
	          m[date.getMonth()],
	          ' ',
	          date.getFullYear()
	        ),
	        React.createElement(
	          'a',
	          { href: '#', onClick: _.partialRight(this._switchMonth, 1).bind(this) },
	          'next'
	        )
	      );
	    }
	  }]);
	
	  return MonthHeader;
	})(React.Component);
	
	exports['default'] = MonthHeader;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyZjM1ZmI0YjBkNWUzZThmNjYwOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvbW9udGguanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci9kYXkuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfdG9kYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3V0aWxzL25vX29wLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9wcmV2ZW50X2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL3dlZWsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9nZXRfZGF5c19pbl93ZWVrLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9kYXRlX2tleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9pbl9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9yYW5nZV90b19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfZGF0ZV9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci91dGlscy9nZXRfd2Vla3NfaW5fbW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyL21vbnRoX2hlYWRlci5qc3giXSwibmFt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QUssU0FBUyxFQUFDLGNBQWM7U0FDM0I7O2FBQUcsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRzs7VUFBUztTQUNqRjs7YUFBSyxTQUFTLEVBQUMsYUFBYTtXQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztXQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7VUFDcEM7U0FDTjs7YUFBRyxJQUFJLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRzs7VUFBUztRQUM1RSxDQUNQO01BQ0Y7OztVQXBCa0IsV0FBVztJQUFTLEtBQUssQ0FBQyxTQUFTOztzQkFBbkMsV0FBVyIsImZpbGUiOiJzaW1wbGUtY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDJmMzVmYjRiMGQ1ZTNlOGY2NjA4XG4gKiovIiwiaW1wb3J0IF9DYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyJztcblxuZXhwb3J0IGNvbnN0IFNpbXBsZUNhbGVuZGFyID0gX0NhbGVuZGFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgTW9udGggICAgICAgZnJvbSAnLi9tb250aCdcbmltcG9ydCBNb250aEhlYWRlciBmcm9tICcuL21vbnRoX2hlYWRlcidcblxuXG4vKlxuICBhY3RpdmVNb250aCDigJQgRGF0ZSwgZGVmYXVsdCBgbmV3IERhdGUoKWBcbiAgb25BY3RpdmVNb250aENoYW5nZSDigJQgZnVuY3Rpb25cblxuICBzZWxlY3RlZCDigJQgb2JqZWN0IHwgZGVmYXVsdCBmYWxzZVxuICBvblNlbGVjdCDigJQgZnVuY3Rpb25cblxuICBzZWxlY3Rpb25Nb2RlIOKAlCBzdHJpbmcgfCBkZWZhdWx0ICdzaW5nbGUnXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB2YXIgZmlyc3REYXlPZk1vbnRoID0gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuICAgIGZpcnN0RGF5T2ZNb250aC5zZXREYXRlKDEpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZU1vbnRoOiBmaXJzdERheU9mTW9udGgsXG4gICAgICBzZWxlY3RlZDogdGhpcy5wcm9wcy5zZWxlY3RlZFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCFfLmlzRXF1YWwobmV4dFByb3BzLnNlbGVjdGVkLCB0aGlzLnByb3BzLnNlbGVjdGVkKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkOiBuZXh0UHJvcHMuc2VsZWN0ZWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX2dldEFjdGl2ZU1vbnRoKCkge1xuICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkFjdGl2ZU1vbnRoQ2hhbmdlKSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWN0aXZlTW9udGhcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlTW9udGhcbiAgICB9XG4gIH1cblxuICBfc3dpdGNoTW9udGgob2Zmc2V0KSB7XG4gICAgbGV0IG1vbnRoID0gbmV3IERhdGUodGhpcy5fZ2V0QWN0aXZlTW9udGgoKSlcbiAgICBtb250aC5zZXRNb250aChtb250aC5nZXRNb250aCgpICsgb2Zmc2V0KVxuXG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQWN0aXZlTW9udGhDaGFuZ2UobW9udGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVNb250aDogbW9udGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZWQoc2VsZWN0aW9uKSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uU2VsZWN0KSAmJiAhc2VsZWN0aW9uLnNlbGVjdGlvbkluUHJvZ3Jlc3MpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0aW9uKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkOiBbc2VsZWN0aW9uLnNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb24uc2VsZWN0aW9uRW5kXVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgPE1vbnRoSGVhZGVyXG4gICAgICAgICAgYWN0aXZlTW9udGggICA9IHsgdGhpcy5fZ2V0QWN0aXZlTW9udGgoKSB9XG4gICAgICAgICAgb25Nb250aENoYW5nZSA9IHsgdGhpcy5fc3dpdGNoTW9udGguYmluZCh0aGlzKSB9XG4gICAgICAgIC8+XG4gICAgICAgIDxNb250aFxuICAgICAgICAgIGFjdGl2ZU1vbnRoICAgPSB7IHRoaXMuX2dldEFjdGl2ZU1vbnRoKCkgfVxuICAgICAgICAgIHNlbGVjdGlvbk1vZGUgPSB7IHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSB9XG4gICAgICAgICAgc2VsZWN0ZWQgICAgICA9IHsgdGhpcy5zdGF0ZS5zZWxlY3RlZCB9XG4gICAgICAgICAgZGF0YSAgICAgICAgICA9IHsgdGhpcy5wcm9wcy5kYXRhIH1cbiAgICAgICAgICBvbkNoYW5nZSAgICAgID0geyB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkNhbGVuZGFyLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlTW9udGg6ICAgICAgICAgUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG9uQWN0aXZlTW9udGhDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RlZDogICAgICAgICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBvblNlbGVjdGlvbkNoYW5nZTogICBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0aW9uTW9kZTogICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YTogICAgICAgICAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufVxuXG5DYWxlbmRhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZU1vbnRoOiAgIG5ldyBEYXRlKCksXG4gIHNlbGVjdGlvbk1vZGU6ICdzaW5nbGUnXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9jYWxlbmRhci5qc3hcbiAqKi8iLCJpbXBvcnQgRGF5ICBmcm9tICcuL2RheSdcbmltcG9ydCBXZWVrIGZyb20gJy4vd2VlaydcblxuaW1wb3J0IGdldFdlZWtzSW5Nb250aCBmcm9tICcuL3V0aWxzL2dldF93ZWVrc19pbl9tb250aCdcblxuLy8gYWN0aXZlTW9udGggICA9IHsgdGhpcy5fZ2V0QWN0aXZlTW9udGgoKSB9XG4vLyBzZWxlY3Rpb25Nb2RlID0geyB0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgfVxuLy8gc2VsZWN0aW9uICAgICA9IHsgdGhpcy5fZ2V0U2VsZWN0aW9uKCkgfVxuLy8gb25DaGFuZ2VcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0aW9uSW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICBzZWxlY3Rpb25TdGFydDogICAgICBudWxsLFxuICAgICAgc2VsZWN0aW9uRW5kOiAgICAgICAgbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9wdXNoVXBkYXRlKCkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICBfLnBpY2sodGhpcy5zdGF0ZSwgWydzZWxlY3Rpb25TdGFydCcsICdzZWxlY3Rpb25FbmQnLCAnc2VsZWN0aW9uSW5Qcm9ncmVzcyddKVxuICAgIClcbiAgfVxuXG4gIF9vbkRheUNsaWNrKGRhdGUpIHtcbiAgICB2YXIgbmV4dFN0YXRlID0ge31cbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlID09ICdyYW5nZScpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGlvbkluUHJvZ3Jlc3MpIHtcbiAgICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICAgIHNlbGVjdGlvbkluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0OiB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0LmdldFRpbWUoKSA8IGRhdGUuZ2V0VGltZSgpID8gdGhpcy5zdGF0ZS5zZWxlY3Rpb25TdGFydCA6IGRhdGUsXG4gICAgICAgICAgc2VsZWN0aW9uRW5kOiAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uU3RhcnQuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCkgPyB0aGlzLnN0YXRlLnNlbGVjdGlvblN0YXJ0IDogZGF0ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0aW9uSW5Qcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydDogZGF0ZSxcbiAgICAgICAgICBzZWxlY3Rpb25FbmQ6IGRhdGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlID09ICdzaW5nbGUnIHx8ICF0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IGRhdGUsXG4gICAgICAgIHNlbGVjdGlvbkVuZDogZGF0ZVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgKCkgPT4ge1xuICAgICAgdGhpcy5fcHVzaFVwZGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9vbkRheU1vdXNlTW92ZShkYXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0aW9uSW5Qcm9ncmVzcyAmJiAoIXRoaXMuc3RhdGUuc2VsZWN0aW9uRW5kIHx8IHRoaXMuc3RhdGUuc2VsZWN0aW9uRW5kLmdldFRpbWUoKSAhPSBkYXRlLmdldFRpbWUoKSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3Rpb25FbmQ6IGRhdGUgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9wdXNoVXBkYXRlKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX3JlbmRlcldlZWtzKCkge1xuICAgIGxldCB3ZWVrcyA9IGdldFdlZWtzSW5Nb250aCh0aGlzLnByb3BzLmFjdGl2ZU1vbnRoKVxuICAgIHJldHVybiB3ZWVrcy5tYXAoKHdlZWspID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXZWVrXG4gICAgICAgICAga2V5ICAgICAgICAgPSB7IHdlZWsuZ2V0VGltZSgpIH1cbiAgICAgICAgICBzdGFydERhdGUgICA9IHsgd2VlayB9XG4gICAgICAgICAgYWN0aXZlTW9udGggPSB7IHRoaXMucHJvcHMuYWN0aXZlTW9udGggfVxuICAgICAgICAgIHNlbGVjdGVkICAgID0geyB0aGlzLnByb3BzLnNlbGVjdGVkIH1cbiAgICAgICAgICBkYXRhICAgICAgICA9IHsgdGhpcy5wcm9wcy5kYXRhIH1cblxuICAgICAgICAgIG9uRGF5Q2xpY2sgICAgID0geyB0aGlzLl9vbkRheUNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uRGF5TW91c2VNb3ZlID0geyB0aGlzLl9vbkRheU1vdXNlTW92ZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9udGhcIj5cbiAgICAgICAgeyB0aGlzLl9yZW5kZXJXZWVrcygpIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci9tb250aC5qc3hcbiAqKi8iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgaXNXZWVrZW5kICAgICBmcm9tICcuL3V0aWxzL2lzX3dlZWtlbmQnXG5pbXBvcnQgaXNUb2RheSAgICAgICBmcm9tICcuL3V0aWxzL2lzX3RvZGF5J1xuaW1wb3J0IG5vT3AgICAgICAgICAgZnJvbSAnLi91dGlscy9ub19vcCdcblxuaW1wb3J0IHByZXZlbnREZWZhdWx0ICAgICAgIGZyb20gJy4vdXRpbHMvcHJldmVudF9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIF9nZXRDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge31cbiAgICBpZiAoXy5pc0FycmF5KHRoaXMucHJvcHMuZGF0YS5tb2RpZmllcnMpKSB7XG4gICAgICBjbGFzc2VzID0gXy56aXBPYmplY3QodGhpcy5wcm9wcy5kYXRhLm1vZGlmaWVycy5tYXAoKG1vZGlmaWVyKSA9PiB7IHJldHVybihbYGlzLSR7bW9kaWZpZXJ9YCwgdHJ1ZV0pfSkpXG4gICAgfVxuICAgIGNsYXNzZXMgPSBfLmFzc2lnbihjbGFzc2VzLCB7XG4gICAgICBkYXk6IHRydWUsXG4gICAgICAnaXMtc2VsZWN0ZWQnOiB0aGlzLnByb3BzLnNlbGVjdGVkLFxuICAgICAgJ2lzLXdlZWtlbmQnOiBpc1dlZWtlbmQodGhpcy5wcm9wcy5kYXRlKSxcbiAgICAgICdpcy13b3JrZGF5JzogIWlzV2Vla2VuZCh0aGlzLnByb3BzLmRhdGUpLFxuICAgICAgJ2lzLXRvZGF5JzogaXNUb2RheSh0aGlzLnByb3BzLmRhdGUpLFxuICAgICAgJ2lzLWN1cnJlbnRfbW9udGgnOiB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSA9PSB0aGlzLnByb3BzLmFjdGl2ZU1vbnRoLmdldE1vbnRoKCksXG4gICAgICAnaXMtcHJldl9tb250aCc6ICAgIHRoaXMucHJvcHMuZGF0ZS5nZXRNb250aCgpIDwgdGhpcy5wcm9wcy5hY3RpdmVNb250aC5nZXRNb250aCgpLFxuICAgICAgJ2lzLW5leHRfbW9udGgnOiAgICB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSA+IHRoaXMucHJvcHMuYWN0aXZlTW9udGguZ2V0TW9udGgoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcyhjbGFzc2VzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZSAgID0geyB0aGlzLl9nZXRDbGFzc2VzKCkgfVxuICAgICAgICBvbkNsaWNrICAgICA9IHsgcHJldmVudERlZmF1bHQoXy5wYXJ0aWFsKHRoaXMucHJvcHMub25DbGljaywgdGhpcy5wcm9wcy5kYXRlKSkgfVxuICAgICAgICBvbk1vdXNlTW92ZSA9IHsgcHJldmVudERlZmF1bHQoXy5wYXJ0aWFsKHRoaXMucHJvcHMub25Nb3VzZU1vdmUsIHRoaXMucHJvcHMuZGF0ZSkpIH1cbiAgICAgID5cbiAgICAgICAge25ldyBEYXRlKHRoaXMucHJvcHMuZGF0ZSkuZ2V0RGF0ZSgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkRheS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9LFxuICBvbkNsaWNrOiBub09wLFxuICBvbk1vdXNlTW92ZTogbm9PcFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvZGF5LmpzeFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmICgnc3RyaW5nJyA9PT0gYXJnVHlwZSB8fCAnbnVtYmVyJyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cblx0XHRcdH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChhcmcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuc3Vic3RyKDEpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxuXG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRhdGUgZmFsbHMgb24gdGhlIHdlZWtlbmQgYW5kIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV8c3RyaW5nfSBkYXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNXZWVrZW5kKGRhdGUpIHtcbiAgcmV0dXJuIChkYXRlLmdldERheSgpID09IDAgfHwgZGF0ZS5nZXREYXkoKSA9PSA2KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfd2Vla2VuZC5qc1xuICoqLyIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRhdGUgaXMgdG9kYXkgYW5kIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICByZXR1cm4gKFxuICAgICh0b2RheS5nZXRGdWxsWWVhcigpID09IGRhdGUuZ2V0RnVsbFllYXIoKSkgJiZcbiAgICAodG9kYXkuZ2V0TW9udGgoKSA9PSBkYXRlLmdldE1vbnRoKCkpICYmXG4gICAgKHRvZGF5LmdldERhdGUoKSA9PSBkYXRlLmdldERhdGUoKSlcbiAgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvaXNfdG9kYXkuanNcbiAqKi8iLCIvKiogQSBubyBvcCBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGEgZGVmYXVsdCB2YWx1ZSBmb3Igb3B0aW9uYWwgZnVuY3Rpb24gcHJvcHMuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub09wKCkge31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL25vX29wLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZnVuYykge1xuICB2YXIgdGhhdCA9IHRoaXNcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBmdW5jICYmIGZ1bmMuY2FsbCh0aGF0LCBlKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9wcmV2ZW50X2RlZmF1bHQuanNcbiAqKi8iLCJpbXBvcnQgRGF5IGZyb20gJy4vZGF5J1xuXG5pbXBvcnQgZ2V0RGF5c0luV2VlayBmcm9tICcuL3V0aWxzL2dldF9kYXlzX2luX3dlZWsnXG5pbXBvcnQgZGF0ZUtleSBmcm9tICcuL3V0aWxzL2RhdGVfa2V5J1xuaW1wb3J0IGlzRGF0ZUluUmFuZ2UgZnJvbSAnLi91dGlscy9pc19kYXRlX2luX3JhbmdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWVrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgX3JlbmRlckRheXMoKSB7XG4gICAgcmV0dXJuIGdldERheXNJbldlZWsodGhpcy5wcm9wcy5zdGFydERhdGUpLm1hcCgoZGF5KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGF5XG4gICAgICAgICAga2V5ICA9IHsgZGF5LmdldFRpbWUoKSB9XG4gICAgICAgICAgZGF0ZSA9IHsgZGF5IH1cbiAgICAgICAgICBkYXRhID0geyB0aGlzLnByb3BzLmRhdGFbZGF0ZUtleShkYXkpXSB9XG4gICAgICAgICAgc2VsZWN0ZWQgPSB7IGlzRGF0ZUluUmFuZ2UoZGF5LCB0aGlzLnByb3BzLnNlbGVjdGVkKSB9XG4gICAgICAgICAgYWN0aXZlTW9udGggPSB7IHRoaXMucHJvcHMuYWN0aXZlTW9udGggfVxuXG4gICAgICAgICAgb25DbGljayAgICAgPSB7IHRoaXMucHJvcHMub25EYXlDbGljayB9XG4gICAgICAgICAgb25Nb3VzZU1vdmUgPSB7IHRoaXMucHJvcHMub25EYXlNb3VzZU1vdmUgfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2Vla1wiPlxuICAgICAgICB7IHRoaXMuX3JlbmRlckRheXMoKSB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5XZWVrLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge31cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3dlZWsuanN4XG4gKiovIiwiLyoqXG4gKiBBY2NlcHRzIHRoZSBmaXJzdCBkYXkgYW5kIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyA3IGRheXMgc3RhcnRpbmdcbiAqIHdpdGggdGhlIGZpcnN0IGRheS4gSW50ZW5kZWQgZm9yIGdlbmVyYXRpbmcgZGF5cyBpbiBhIHdlZWsuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERheXNJbldlZWsoZmlyc3REYXkpIHtcbiAgcmV0dXJuIF8ucmFuZ2UoMCwgNylcbiAgICAubWFwKChkYXkpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgICAgZmlyc3REYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZmlyc3REYXkuZ2V0TW9udGgoKSxcbiAgICAgICAgZmlyc3REYXkuZ2V0RGF0ZSgpICsgZGF5XG4gICAgICApXG4gICAgfSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF9kYXlzX2luX3dlZWsuanNcbiAqKi8iLCIvKipcbiAqIEFjY2VwdHMgYSBkYXRlIG9yIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgZGF0ZSBhbmQgcmV0dXJuc1xuICogYSBzdHJpbmcgc3VpdGFibGUgdG8gYmUgdXNlZCBhcyBhIGtleSBpbiB0aGUgZm9ybWF0OiBZWVlZLU1NLUREXG4gKlxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZUtleShkYXRlKSB7XG4gIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICBsZXQgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBsZXQgbW0gPSAoJzAnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMilcbiAgbGV0IGRkID0gKCcwJyArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMilcbiAgcmV0dXJuIGAke3l5eXl9LSR7bW19LSR7ZGR9YFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvdXRpbHMvZGF0ZV9rZXkuanNcbiAqKi8iLCJpbXBvcnQgZGF0ZVJhbmdlVG9BcnJheSBmcm9tICcuL2RhdGVfcmFuZ2VfdG9fYXJyYXknXG5pbXBvcnQgaXNEYXRlQmV0d2VlbiAgICBmcm9tICcuL2lzX2RhdGVfYmV0d2VlbidcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZGF0ZSBpcyB3aXRoaW4gdGhlIHJhbmdlLCBmYWxzZSBvdGhlcndpc2UuXG4gKiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgZGF0ZVJhbmdlVG9BcnJheSBmb3IgZGV0YWlscyBvbiByYW5nZSBmb3JtYXRzLlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl8dW5kZWZpbmVkfSBkYXRlc1JhbmdlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlSW5SYW5nZSAoZGF0ZSwgZGF0ZXNSYW5nZSkge1xuICBsZXQgcmFuZ2UgPSBkYXRlUmFuZ2VUb0FycmF5KGRhdGVzUmFuZ2UpXG4gIHJldHVybiBpc0RhdGVCZXR3ZWVuKGRhdGUsIHJhbmdlWzBdLCByYW5nZVsxXSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2lzX2RhdGVfaW5fcmFuZ2UuanNcbiAqKi8iLCIvKipcbiAqIEl0IHRha2VzIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxuICogIC0gYW4gb2JqZWN0IHdpdGggc2VsZWN0aW9uU3RhcnQgYW5kL29yIHNlbGVjdGlvbkVuZCBwcm9wZXJ0aWVzIHdpdGggZGF0ZXNcbiAqICAtIGFuIGFycmF5IHdpdGggMSBvciAyIGRhdGVzXG4gKiAgLSBub3RoaW5nXG4gKlxuICogSW4gYWxsIHRoZSBjYXNlcyBpdCByZXR1cm5zIGFuIGFycmF5IHdpdGggdHdvIHZhbHVlcyB0aGF0IGFyZSBEYXRlIG9iamVjdFxuICogcmVwcmVzZW50aW5nIHN0YXJ0IGFuZCBlbmQgb2YgYSByYW5nZS4gSW4gY2FzZXMgd2hlcmUgZWl0aGVyIHN0YXJ0IG9yIGVuZFxuICogZW5kIGlzIG1pc3NpbmcgaXQgZGVmYXVsdHMgdG8gY3VycmVudCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fHVuZGVmaW5lZH0gdmFsdWVcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZVJhbmdlVG9BcnJheSh2YWx1ZSkge1xuICBsZXQgbm93ID0gbmV3IERhdGUoKVxuXG4gIGlmIChfLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZS5zZWxlY3Rpb25TdGFydCB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZS5zZWxlY3Rpb25FbmQgfHwgbm93KV1cbiAgfSBlbHNlIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIFtuZXcgRGF0ZSh2YWx1ZVswXSB8fCBub3cpLCBuZXcgRGF0ZSh2YWx1ZVsxXSB8fCBub3cpXVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBbbm93LCBub3ddXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2RhdGVfcmFuZ2VfdG9fYXJyYXkuanNcbiAqKi8iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkYXRlIGZhbGxzIGJldHdlZW4gZGF0ZUZyb20gYW5kIGRhdGVUbywgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHBhcmFtIHtkYXRlfHN0cmluZ30gZGF0ZUZyb21cbiAqIEBwYXJhbSB7ZGF0ZXxzdHJpbmd9IGRhdGVUb1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZUJldHdlZW4gKGRhdGUsIGRhdGVGcm9tLCBkYXRlVG8pIHtcbiAgbGV0IGZyb21UaW1lID0gbmV3IERhdGUoZGF0ZUZyb20pLmdldFRpbWUoKVxuICBsZXQgdG9UaW1lID0gbmV3IERhdGUoZGF0ZVRvKS5nZXRUaW1lKClcbiAgbGV0IG1pbiA9IE1hdGgubWluKGZyb21UaW1lLCB0b1RpbWUpXG4gIGxldCBtYXggPSBNYXRoLm1heChmcm9tVGltZSwgdG9UaW1lKVxuICBsZXQgdGltZSA9IGRhdGUuZ2V0VGltZSgpXG4gIHJldHVybiAodGltZSA+PSBtaW4gJiYgdGltZSA8PSBtYXgpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci91dGlscy9pc19kYXRlX2JldHdlZW4uanNcbiAqKi8iLCIvKipcbiAqIEFjY2VwdHMgdGhlIGZpcnN0IGRheSBvZiBtb250aCBhbmQgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nXG4gKiBhbGwgbW9uZGF5cyBmb3IgYWxsIHdlZWtzIHRoYXQgaW50ZXJzZWN0IHRoYXQgbW9udGguIFNvLCBpZiBhIG1vbnRoXG4gKiBzdGFydHMgb24gYSBXZWRuZXNkYXksIHRoZSBmaXJzdCBlbnRyeSB3aWxsIGJlIHRoZSBwcmV2aW91cyBtb25kYXkuXG4gKlxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdlZWtzSW5Nb250aChtb250aCkge1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKFxuICAgIG1vbnRoLmdldEZ1bGxZZWFyKCksXG4gICAgbW9udGguZ2V0TW9udGgoKSxcbiAgICBtb250aC5nZXREYXRlKClcbiAgKVxuXG4gIGxldCBkYXlzRnJvbVdlZWtTdGFydCA9IChkYXRlLmdldERheSgpIHx8IDcpIC0gMVxuICBsZXQgZGF5c0luTW9udGggICAgICAgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKVxuXG4gIGxldCB3ZWVrc0NvdW50ID0gTWF0aC5jZWlsKChkYXlzSW5Nb250aCArIGRheXNGcm9tV2Vla1N0YXJ0KSAvIDcpXG4gIHZhciBzdGFydERhdGUgID0gbmV3IERhdGUoXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAxIC0gZGF5c0Zyb21XZWVrU3RhcnRcbiAgKVxuXG4gIHJldHVybiBfLnJhbmdlKDAsIHdlZWtzQ291bnQpXG4gICAgLm1hcCgod2VlaykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgICBzdGFydERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgc3RhcnREYXRlLmdldE1vbnRoKCksXG4gICAgICAgIHN0YXJ0RGF0ZS5nZXREYXRlKCkgKyB3ZWVrICogN1xuICAgICAgKVxuICAgIH0pXG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyL3V0aWxzL2dldF93ZWVrc19pbl9tb250aC5qc1xuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGhIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfc3dpdGNoTW9udGgoZSwgaWQsIG9mZnNldCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uTW9udGhDaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTW9udGhDaGFuZ2Uob2Zmc2V0KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbSA9IFsnamFuJywgJ2ZlYicsICdtYXInLCAnYXByJywgJ21heScsICdqdW4nLCAnanVsJywgJ2F1ZycsICdzZXAnLCAnb2N0JywgJ25vdicsICdkZWMnXVxuICAgIGxldCBkYXRlID0gdGhpcy5wcm9wcy5hY3RpdmVNb250aFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbnRoLWhlYWRlclwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyBfLnBhcnRpYWxSaWdodCh0aGlzLl9zd2l0Y2hNb250aCwgLTEpLmJpbmQodGhpcykgfT5wcmV2PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbnRoLXRpdGxlXCI+XG4gICAgICAgICAge21bZGF0ZS5nZXRNb250aCgpXX0ge2RhdGUuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17IF8ucGFydGlhbFJpZ2h0KHRoaXMuX3N3aXRjaE1vbnRoLCAxKS5iaW5kKHRoaXMpIH0+bmV4dDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIvbW9udGhfaGVhZGVyLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=