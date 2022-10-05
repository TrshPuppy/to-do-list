/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfToday/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfToday/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfToday)
/* harmony export */ });
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");

/**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */

function endOfToday() {
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfYear/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfYear/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */

function endOfYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var time = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var startTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start).getTime();
  var endTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfMonth/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMonth/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfToday/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfToday/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfToday)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */

function startOfToday() {
  return (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfYear/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfYear/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var cleanDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/UIhandlers.js":
/*!***************************!*\
  !*** ./src/UIhandlers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayProjectModal),
/* harmony export */   "displayListForm": () => (/* binding */ displayListForm),
/* harmony export */   "displayToDoForm": () => (/* binding */ displayToDoForm)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfYear/index.js");






function displayProjectModal() {
  return new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("form")
    .setAttributes({ class: "form", id: "add-project-form" })
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
        type: "text",
        class: "form-input",
        id: "project-name",
        placeholder: "Name your project",
        required: "required",
      })
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("button")
        .setAttributes({
          type: "button",
          class: "form-btn",
          id: "project-form-btn",
        })
        .setTextContent("Submit")
    )
    .buildElement();
}

function displayListForm(project) {
  return new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("form")
    .setAttributes({ class: "form", id: "add-list-form" })
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
        type: "text",
        class: "form-input",
        id: "list-name",
        placeholder: "Name your list",
        required: "required",
      })
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("button")
        .setAttributes({
          type: "button",
          class: "form-btn",
          id: "list-form-btn",
        })
        .appendEventListener("click", (e) => (0,_index__WEBPACK_IMPORTED_MODULE_1__.handleNewListSubmit)(e, project))
        .setTextContent("Submit")
    )
    .buildElement();
}

function displayToDoForm(list) {
  return new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("form")
    .setAttributes({ class: "form", id: "add-todo-form" })
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
        type: "text",
        class: "form-input",
        id: "todo-name",
        placeholder: "Name your to-do",
        required: "required",
      })
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("label")
        .setAttributes({ for: "due-date" })
        .setTextContent("Pick a due date:")
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
        type: "date",
        id: "due-date",
        name: "due-date",
        value: `${new Date()}`,
        min: `${(0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date())}`,
        max: "undefined",
      })
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("fieldset")
        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("legend").setTextContent("Choose a priority"))
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("low", "priority", true))
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("medium", "priority", false))
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("high", "priority", false))
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("fieldset")
        .addChild(
          new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("legend").setTextContent("Have you completed this task?")
        )
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("yes", "completed", true))
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("no", "completed", false))
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("button")
        .setAttributes({
          type: "button",
          class: "form-btn",
          id: "todo-form-btn",
        })
        .appendEventListener("click", (e) => (0,_index__WEBPACK_IMPORTED_MODULE_1__.handleNewToDoSubmit)(e, list))
        .setTextContent("Submit")
    )
    .buildElement();
}


/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Librarian": () => (/* binding */ Librarian),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isWithinInterval/index.js");



class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.lists = [];
    // this.priority;
  }

  appendList(list) {
    this.lists.push(list);
  }

  removeList(list) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.removeItemFromArray)(list, this.lists);
  }

  editDetails(detailType) {
    editItemDetail(this, detailType);
  }

  buildVirtualBoi() {
    return this.lists.reduce(
      (virtualProject, list) => virtualProject.addChild(list.buildVirtualBoi()),
      new Element("div")
        .setAttributes({
          class: "project",
          id: `Project-${this.id}`,
        })
        .addChild(
          new Element("button")
            .setAttributes({
              type: "button",
              class: "add-list-btn",
              id: `${this.name}-add-list-btn`,
            })
            .appendEventListener("click", (e) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.handleAddList)(e, this))
            .setTextContent("Add list")
        )
    );
  }

  getAllTasksInInterval(interval) {
    return this.lists.flatMap((list) => list.getAllToDosInInterval(interval));
  }
}

class List {
  constructor(listName) {
    this.name = listName;
    this.listItems = [];
    this.priority;
  }

  buildVirtualBoi() {
    return this.listItems.reduce(
      (virtualUl, toDo) => virtualUl.addChild(toDo.buildVirtualBoi()),
      new Element("ul")
        .setAttributes({
          id: this.name,
        })
        .addChild(
          new Element("button")
            .setAttributes({
              type: "button",
              class: "add-todo-btn",
              id: `${this.name}-add-todo-btn`,
            })
            .setTextContent("Add to do item")
            .appendEventListener("click", (e) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.handleAddToDo)(e, this))
        )
    );
  }

  appendItemToListArray(item) {
    this.listItems.push(item);
  }

  removeItemFromListArray(item) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.removeItemFromArray)(item, this.listItems);
  }

  getAllToDosInInterval(interval) {
    return this.listItems.filter(
      (toDo) => !toDo.date || (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(toDo.date, interval)
    );
  }
}

class ToDo {
  constructor(name, priority, isCompleted, date) {
    this.name = name;
    this.priority = priority;
    this.isCompleted = isCompleted;
    this.date = date;
  }

  buildVirtualBoi() {
    const virtualBoi = new Element("li");
    virtualBoi
      .addChild(new Element("h1").setTextContent(this.name))
      .addChild(new Element("h2").setTextContent(`Priority: ${this.priority}`))
      .addChild(new Element("button").setTextContent("Set Priority"))
      .addChild(new Element("button").setTextContent("Mark Done"));

    return virtualBoi;
  }

  editDueDate() {}
  // edit: name, priority, completed, date
}

class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
    this.eventListeners = {};
  }

  buildElement() {
    // Create element in DOM
    const realBoi = document.createElement(this.elementType);

    // Add attributes to element
    for (const attribute in this.attributes) {
      if (
        this.attributes[attribute] === true ||
        this.attributes[attribute] === false
      ) {
        realBoi.toggleAttribute(attribute, this.attributes[attribute]);
      } else {
        realBoi.setAttribute(attribute, this.attributes[attribute]);
      }
    }

    // Add event listeners:
    for (const ev in this.eventListeners) {
      this.eventListeners[ev].forEach((cb) => {
        realBoi.addEventListener(ev, cb);
      });
    }

    // Append children? Append text?
    if (this.text === undefined) {
      for (const virtualBoi of this.children) {
        realBoi.appendChild(virtualBoi.buildElement());
      }
    } else {
      const realText = document.createTextNode(this.text);
      realBoi.appendChild(realText);
    }
    return realBoi;
  }

  setAttributes(object) {
    Object.assign(this.attributes, object);
    return this;
  }

  addChild(element) {
    this.text = undefined;
    this.children.push(element);

    return this;
  }

  setTextContent(string) {
    this.children = [];
    this.text = string;
    return this;
  }

  appendEventListener(event, callback) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].push(callback);
    } else {
      this.eventListeners[event] = [callback];
    }
    return this;
  }
}

class Librarian {
  static projectsArray = [];

  static getAllProjects() {
    return Librarian.projectsArray;
  }

  static addProject(project) {
    Librarian.projectsArray.push(project);
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleAddList": () => (/* binding */ handleAddList),
/* harmony export */   "handleAddToDo": () => (/* binding */ handleAddToDo),
/* harmony export */   "handleNewListSubmit": () => (/* binding */ handleNewListSubmit),
/* harmony export */   "handleNewToDoSubmit": () => (/* binding */ handleNewToDoSubmit)
/* harmony export */ });
/* harmony import */ var _loadTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadTabs */ "./src/loadTabs.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _UIhandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UIhandlers */ "./src/UIhandlers.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
// Imports










// Globals:
const contentDiv = document.querySelector(".content");
const projectBtn = document.querySelector(".add-project-btn");
let addProjectForm;

//Load Default UI
// loadToday();

// Functions:
function handleNewProjectSubmit() {
  let projectFormInput = document.querySelector("#project-name");

  // Make project and give to Librarian
  const newProject = new _classes__WEBPACK_IMPORTED_MODULE_1__["default"](projectFormInput.value);
  // const newList = new List(projectFormInput.value);
  // newProject.appendList(newList);
  // const toDo1 = new ToDo("bake a cake", 2, false);
  // newList.appendItemToListArray(toDo1);

  _classes__WEBPACK_IMPORTED_MODULE_1__.Librarian.addProject(newProject);

  // Rebuild UI
  (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.rebuildUI)();
}

function handleAddProject() {
  addProjectForm = (0,_UIhandlers__WEBPACK_IMPORTED_MODULE_2__["default"])();
  contentDiv.appendChild(addProjectForm);

  const projectSubmitBtn = document.querySelector("#project-form-btn");

  projectSubmitBtn.addEventListener("click", () => {
    handleNewProjectSubmit();
  });
}

function handleNewListSubmit(e, project) {
  let listFormInput = document.querySelector("#list-name");
  const newList = new _classes__WEBPACK_IMPORTED_MODULE_1__.List(listFormInput.value);
  project.appendList(newList);

  (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.rebuildUI)();
}

function handleAddList(e, project) {
  const newListForm = (0,_UIhandlers__WEBPACK_IMPORTED_MODULE_2__.displayListForm)(project);
  e.target.parentElement.appendChild(newListForm);
}

function handleNewToDoSubmit(e, list) {
  let addToDoForm = document.querySelector("#add-todo-form");

  const newToDo = new _classes__WEBPACK_IMPORTED_MODULE_1__.ToDo(
    addToDoForm["todo-name"].value,
    addToDoForm["priority"].value,
    addToDoForm["completed"].value,
    addToDoForm["due-date"].value
  );

  list.appendItemToListArray(newToDo);
  console.log(_classes__WEBPACK_IMPORTED_MODULE_1__.Librarian.getAllProjects());

  (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.rebuildUI)();
}

function handleAddToDo(e, list) {
  const ā̷̔r̴͐́ť̷͊h̶̙̊v̸̍͆ả̸͘d̷̎̄r̴̄͂r̸̀̐_̶̅͝ẇ̸̑a̵̬̎ș̴̃_̴̄̒h̵̽̐ȩ̴̑ŕ̵̄ë̶́̕ = (0,_UIhandlers__WEBPACK_IMPORTED_MODULE_2__.displayToDoForm)(list);
  e.target.parentElement.appendChild(ā̷̔r̴͐́ť̷͊h̶̙̊v̸̍͆ả̸͘d̷̎̄r̴̄͂r̸̀̐_̶̅͝ẇ̸̑a̵̬̎ș̴̃_̴̄̒h̵̽̐ȩ̴̑ŕ̵̄ë̶́̕);
}

// Event Listeners:
projectBtn.addEventListener("click", handleAddProject);

// () => {
//   addProjectForm = displayProjectModal();
//   contentDiv.appendChild(addProjectForm);

//   handleFormInput(addProjectForm);
// });

/*
// Create default project on load:
const defaultProject = new Project("default", 1);

const myList = new List("first list");

const toDoItem = new ToDo("water the lawn", 3, false, new Date(2022, 8, 17));

const todo2 = new ToDo("Eat a watermelon", 2, true, new Date(2022, 11, 30));

myList.appendItemToListArray(toDoItem);
myList.appendItemToListArray(todo2);

defaultProject.appendList(myList);

Librarian.addProject(defaultProject);

const today = loadYear(Librarian.getAllProjects());
console.log(today);

const buildDefault = defaultProject.buildVirtualBoi();
console.log(buildDefault);
contentDiv.appendChild(today.buildElement());

*/

console.log(_classes__WEBPACK_IMPORTED_MODULE_1__.Librarian);


/***/ }),

/***/ "./src/loadTabs.js":
/*!*************************!*\
  !*** ./src/loadTabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadToday),
/* harmony export */   "loadMonth": () => (/* binding */ loadMonth),
/* harmony export */   "loadWeek": () => (/* binding */ loadWeek),
/* harmony export */   "loadYear": () => (/* binding */ loadYear)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfYear/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfYear/index.js");



// Returns a built element based on interval and projectsArray[]:
function buildTab(projectsArray, interval) {
  const intervalToDos = projectsArray.flatMap((project) =>
    project.getAllTasksInInterval(interval)
  );

  const intervalToDosUI = intervalToDos.reduce(
    (virtualUl, toDo) => virtualUl.addChild(toDo.buildVirtualBoi()),
    new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("ul").setAttributes({ id: "today" })
  );

  return new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("div")
    .setAttributes({
      class: "date-tab",
      id: "today-tab",
    })
    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("h1").setTextContent("Today"))
    .addChild(intervalToDosUI);
}

// Creates interval of range within today to be used by buildTab()
function loadToday(projectsArray) {
  const interval = {
    start: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    end: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(),
  };

  return buildTab(projectsArray, interval);
}

// Creates interval of range within the next week to be used in buildTab()
function loadWeek(projectsArray) {
  const rightJoin = new Date();

  const interval = {
    start: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(rightJoin),
    end: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(rightJoin),
  };

  return buildTab(projectsArray, interval);
}

function loadMonth(projectsArray) {
  const now = new Date();

  const interval = { start: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(now), end: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(now) };
  return buildTab(projectsArray, interval);
}

function loadYear(projectsArray) {
  const now = new Date();
  const interval = { start: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(now), end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(now) };

  return buildTab(projectsArray, interval);
}

//Today HTML:
/*
.content
panel div
> today div
> h1: 
>>>>>>li due today
*/


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFormDiv": () => (/* binding */ createFormDiv),
/* harmony export */   "rebuildUI": () => (/* binding */ rebuildUI),
/* harmony export */   "removeItemFromArray": () => (/* binding */ removeItemFromArray)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");



let contentDiv;

function removeItemFromArray(item, array) {
  let indexToRemove = array.indexOf(item);
  array.splice(indexToRemove, 1);
}

// rebuild UI
function rebuildUI() {
  contentDiv = document.querySelector(".content");
  contentDiv.textContent = "";

  const projectsArray = _classes__WEBPACK_IMPORTED_MODULE_0__.Librarian.getAllProjects();

  for (const project of projectsArray) {
    const virtualProject = project.buildVirtualBoi();

    contentDiv.appendChild(virtualProject.buildElement());
  }
}

function createFormDiv(id, name, checked) {
  return new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("div")
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
        type: "radio",
        id: id,
        name: name,
        value: id,
        checked: checked,
      })
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("label").setAttributes({ for: id }).setTextContent(id)
    );
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ2U7QUFDZjtBQUNBLFdBQVcsb0RBQVk7QUFDdkIsU0FBUyxvREFBVTtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDs7QUFFQTtBQUNBLFdBQVcsb0RBQVc7QUFDdEIsU0FBUyxvREFBUztBQUNsQjs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEscUJBQXFCLE9BQU8sb0RBQVksWUFBWSxvREFBVTtBQUM5RDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxxQkFBcUIsT0FBTyxvREFBVyxZQUFZLG9EQUFTOztBQUU1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFc0M7QUFDRjs7QUFFcEM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUEsd0JBQXdCLDhEQUF3Qjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxhQUFhLDZDQUFPO0FBQ3BCO0FBQ0EsVUFBVSw2Q0FBTztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxVQUFVLDZDQUFPLDBCQUEwQixTQUFTO0FBQ3BEO0FBQ0E7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzV2l0aGluSW50ZXJ2YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZlRvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9VSWhhbmRsZXJzLmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvbG9hZFRhYnMuanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBlbmRPZkRheSBmcm9tIFwiLi4vZW5kT2ZEYXkvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiB0b2RheS5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiB0b2RheS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZlRvZGF5KClcbiAqIC8vPT4gTW9uIE9jdCA2IDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZUb2RheSgpIHtcbiAgcmV0dXJuIGVuZE9mRGF5KERhdGUubm93KCkpO1xufSIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgZW5kT2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFNhdCBTZXAgMDYgMjAxNCAyMzo1OTo1OS45OTlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIGVuZCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyAtNyA6IDApICsgNiAtIChkYXkgLSB3ZWVrU3RhcnRzT24pO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mWWVhclxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBEZWMgMzEgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgMCk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzV2l0aGluSW50ZXJ2YWxcbiAqIEBjYXRlZ29yeSBJbnRlcnZhbCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbD8gKEluY2x1ZGluZyBzdGFydCBhbmQgZW5kLilcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7SW50ZXJ2YWx9IGludGVydmFsIC0gdGhlIGludGVydmFsIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgd2l0aGluIHRoZSBpbnRlcnZhbFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gVGhlIHN0YXJ0IG9mIGFuIGludGVydmFsIGNhbm5vdCBiZSBhZnRlciBpdHMgZW5kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBEYXRlIGluIGludGVydmFsIGNhbm5vdCBiZSBgSW52YWxpZCBEYXRlYFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMyksIHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4gKiB9KVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgZGF0ZSBvdXRzaWRlIG9mIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMTApLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgc3RhcnQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQsIGVuZDogZGF0ZSB9KSAvLyA9PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIGVuZDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgeyBzdGFydDogZGF0ZSwgZW5kIH0pIC8vID0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNXaXRoaW5JbnRlcnZhbChkaXJ0eURhdGUsIGludGVydmFsKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZSA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIHN0YXJ0VGltZSA9IHRvRGF0ZShpbnRlcnZhbC5zdGFydCkuZ2V0VGltZSgpO1xuICB2YXIgZW5kVGltZSA9IHRvRGF0ZShpbnRlcnZhbC5lbmQpLmdldFRpbWUoKTsgLy8gVGhyb3cgYW4gZXhjZXB0aW9uIGlmIHN0YXJ0IGRhdGUgaXMgYWZ0ZXIgZW5kIGRhdGUgb3IgaWYgYW55IGRhdGUgaXMgYEludmFsaWQgRGF0ZWBcblxuICBpZiAoIShzdGFydFRpbWUgPD0gZW5kVGltZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBpbnRlcnZhbCcpO1xuICB9XG5cbiAgcmV0dXJuIHRpbWUgPj0gc3RhcnRUaW1lICYmIHRpbWUgPD0gZW5kVGltZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldERhdGUoMSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIHRvZGF5LlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgdG9kYXkuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mVG9kYXkoKVxuICogLy89PiBNb24gT2N0IDYgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZUb2RheSgpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZEYXkoRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHllYXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGNsZWFuRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldEZ1bGxZZWFyKGNsZWFuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBoYW5kbGVOZXdMaXN0U3VibWl0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGhhbmRsZU5ld1RvRG9TdWJtaXQgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlRm9ybURpdiB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgc3RhcnRPZlllYXIgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RNb2RhbCgpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KFwiZm9ybVwiKVxuICAgIC5zZXRBdHRyaWJ1dGVzKHsgY2xhc3M6IFwiZm9ybVwiLCBpZDogXCJhZGQtcHJvamVjdC1mb3JtXCIgfSlcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImlucHV0XCIpLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgY2xhc3M6IFwiZm9ybS1pbnB1dFwiLFxuICAgICAgICBpZDogXCJwcm9qZWN0LW5hbWVcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiTmFtZSB5b3VyIHByb2plY3RcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwicmVxdWlyZWRcIixcbiAgICAgIH0pXG4gICAgKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIGNsYXNzOiBcImZvcm0tYnRuXCIsXG4gICAgICAgICAgaWQ6IFwicHJvamVjdC1mb3JtLWJ0blwiLFxuICAgICAgICB9KVxuICAgICAgICAuc2V0VGV4dENvbnRlbnQoXCJTdWJtaXRcIilcbiAgICApXG4gICAgLmJ1aWxkRWxlbWVudCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxpc3RGb3JtKHByb2plY3QpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KFwiZm9ybVwiKVxuICAgIC5zZXRBdHRyaWJ1dGVzKHsgY2xhc3M6IFwiZm9ybVwiLCBpZDogXCJhZGQtbGlzdC1mb3JtXCIgfSlcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImlucHV0XCIpLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgY2xhc3M6IFwiZm9ybS1pbnB1dFwiLFxuICAgICAgICBpZDogXCJsaXN0LW5hbWVcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiTmFtZSB5b3VyIGxpc3RcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwicmVxdWlyZWRcIixcbiAgICAgIH0pXG4gICAgKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIGNsYXNzOiBcImZvcm0tYnRuXCIsXG4gICAgICAgICAgaWQ6IFwibGlzdC1mb3JtLWJ0blwiLFxuICAgICAgICB9KVxuICAgICAgICAuYXBwZW5kRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVOZXdMaXN0U3VibWl0KGUsIHByb2plY3QpKVxuICAgICAgICAuc2V0VGV4dENvbnRlbnQoXCJTdWJtaXRcIilcbiAgICApXG4gICAgLmJ1aWxkRWxlbWVudCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvRG9Gb3JtKGxpc3QpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KFwiZm9ybVwiKVxuICAgIC5zZXRBdHRyaWJ1dGVzKHsgY2xhc3M6IFwiZm9ybVwiLCBpZDogXCJhZGQtdG9kby1mb3JtXCIgfSlcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImlucHV0XCIpLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgY2xhc3M6IFwiZm9ybS1pbnB1dFwiLFxuICAgICAgICBpZDogXCJ0b2RvLW5hbWVcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiTmFtZSB5b3VyIHRvLWRvXCIsXG4gICAgICAgIHJlcXVpcmVkOiBcInJlcXVpcmVkXCIsXG4gICAgICB9KVxuICAgIClcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImxhYmVsXCIpXG4gICAgICAgIC5zZXRBdHRyaWJ1dGVzKHsgZm9yOiBcImR1ZS1kYXRlXCIgfSlcbiAgICAgICAgLnNldFRleHRDb250ZW50KFwiUGljayBhIGR1ZSBkYXRlOlwiKVxuICAgIClcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImlucHV0XCIpLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgaWQ6IFwiZHVlLWRhdGVcIixcbiAgICAgICAgbmFtZTogXCJkdWUtZGF0ZVwiLFxuICAgICAgICB2YWx1ZTogYCR7bmV3IERhdGUoKX1gLFxuICAgICAgICBtaW46IGAke3N0YXJ0T2ZZZWFyKG5ldyBEYXRlKCkpfWAsXG4gICAgICAgIG1heDogXCJ1bmRlZmluZWRcIixcbiAgICAgIH0pXG4gICAgKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwiZmllbGRzZXRcIilcbiAgICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwibGVnZW5kXCIpLnNldFRleHRDb250ZW50KFwiQ2hvb3NlIGEgcHJpb3JpdHlcIikpXG4gICAgICAgIC5hZGRDaGlsZChjcmVhdGVGb3JtRGl2KFwibG93XCIsIFwicHJpb3JpdHlcIiwgdHJ1ZSkpXG4gICAgICAgIC5hZGRDaGlsZChjcmVhdGVGb3JtRGl2KFwibWVkaXVtXCIsIFwicHJpb3JpdHlcIiwgZmFsc2UpKVxuICAgICAgICAuYWRkQ2hpbGQoY3JlYXRlRm9ybURpdihcImhpZ2hcIiwgXCJwcmlvcml0eVwiLCBmYWxzZSkpXG4gICAgKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwiZmllbGRzZXRcIilcbiAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgIG5ldyBFbGVtZW50KFwibGVnZW5kXCIpLnNldFRleHRDb250ZW50KFwiSGF2ZSB5b3UgY29tcGxldGVkIHRoaXMgdGFzaz9cIilcbiAgICAgICAgKVxuICAgICAgICAuYWRkQ2hpbGQoY3JlYXRlRm9ybURpdihcInllc1wiLCBcImNvbXBsZXRlZFwiLCB0cnVlKSlcbiAgICAgICAgLmFkZENoaWxkKGNyZWF0ZUZvcm1EaXYoXCJub1wiLCBcImNvbXBsZXRlZFwiLCBmYWxzZSkpXG4gICAgKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIGNsYXNzOiBcImZvcm0tYnRuXCIsXG4gICAgICAgICAgaWQ6IFwidG9kby1mb3JtLWJ0blwiLFxuICAgICAgICB9KVxuICAgICAgICAuYXBwZW5kRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVOZXdUb0RvU3VibWl0KGUsIGxpc3QpKVxuICAgICAgICAuc2V0VGV4dENvbnRlbnQoXCJTdWJtaXRcIilcbiAgICApXG4gICAgLmJ1aWxkRWxlbWVudCgpO1xufVxuIiwiaW1wb3J0IHsgaGFuZGxlQWRkTGlzdCwgaGFuZGxlQWRkVG9EbyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyByZW1vdmVJdGVtRnJvbUFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBpc1dpdGhpbkludGVydmFsIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmxpc3RzID0gW107XG4gICAgLy8gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGFwcGVuZExpc3QobGlzdCkge1xuICAgIHRoaXMubGlzdHMucHVzaChsaXN0KTtcbiAgfVxuXG4gIHJlbW92ZUxpc3QobGlzdCkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkobGlzdCwgdGhpcy5saXN0cyk7XG4gIH1cblxuICBlZGl0RGV0YWlscyhkZXRhaWxUeXBlKSB7XG4gICAgZWRpdEl0ZW1EZXRhaWwodGhpcywgZGV0YWlsVHlwZSk7XG4gIH1cblxuICBidWlsZFZpcnR1YWxCb2koKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdHMucmVkdWNlKFxuICAgICAgKHZpcnR1YWxQcm9qZWN0LCBsaXN0KSA9PiB2aXJ0dWFsUHJvamVjdC5hZGRDaGlsZChsaXN0LmJ1aWxkVmlydHVhbEJvaSgpKSxcbiAgICAgIG5ldyBFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBjbGFzczogXCJwcm9qZWN0XCIsXG4gICAgICAgICAgaWQ6IGBQcm9qZWN0LSR7dGhpcy5pZH1gLFxuICAgICAgICB9KVxuICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgbmV3IEVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgY2xhc3M6IFwiYWRkLWxpc3QtYnRuXCIsXG4gICAgICAgICAgICAgIGlkOiBgJHt0aGlzLm5hbWV9LWFkZC1saXN0LWJ0bmAsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFwcGVuZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gaGFuZGxlQWRkTGlzdChlLCB0aGlzKSlcbiAgICAgICAgICAgIC5zZXRUZXh0Q29udGVudChcIkFkZCBsaXN0XCIpXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0QWxsVGFza3NJbkludGVydmFsKGludGVydmFsKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdHMuZmxhdE1hcCgobGlzdCkgPT4gbGlzdC5nZXRBbGxUb0Rvc0luSW50ZXJ2YWwoaW50ZXJ2YWwpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxpc3ROYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbGlzdE5hbWU7XG4gICAgdGhpcy5saXN0SXRlbXMgPSBbXTtcbiAgICB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgYnVpbGRWaXJ0dWFsQm9pKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RJdGVtcy5yZWR1Y2UoXG4gICAgICAodmlydHVhbFVsLCB0b0RvKSA9PiB2aXJ0dWFsVWwuYWRkQ2hpbGQodG9Eby5idWlsZFZpcnR1YWxCb2koKSksXG4gICAgICBuZXcgRWxlbWVudChcInVsXCIpXG4gICAgICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBpZDogdGhpcy5uYW1lLFxuICAgICAgICB9KVxuICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgbmV3IEVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgY2xhc3M6IFwiYWRkLXRvZG8tYnRuXCIsXG4gICAgICAgICAgICAgIGlkOiBgJHt0aGlzLm5hbWV9LWFkZC10b2RvLWJ0bmAsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNldFRleHRDb250ZW50KFwiQWRkIHRvIGRvIGl0ZW1cIilcbiAgICAgICAgICAgIC5hcHBlbmRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGhhbmRsZUFkZFRvRG8oZSwgdGhpcykpXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgYXBwZW5kSXRlbVRvTGlzdEFycmF5KGl0ZW0pIHtcbiAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlSXRlbUZyb21MaXN0QXJyYXkoaXRlbSkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG5cbiAgZ2V0QWxsVG9Eb3NJbkludGVydmFsKGludGVydmFsKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLmZpbHRlcihcbiAgICAgICh0b0RvKSA9PiAhdG9Eby5kYXRlIHx8IGlzV2l0aGluSW50ZXJ2YWwodG9Eby5kYXRlLCBpbnRlcnZhbClcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkLCBkYXRlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIH1cblxuICBidWlsZFZpcnR1YWxCb2koKSB7XG4gICAgY29uc3QgdmlydHVhbEJvaSA9IG5ldyBFbGVtZW50KFwibGlcIik7XG4gICAgdmlydHVhbEJvaVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDFcIikuc2V0VGV4dENvbnRlbnQodGhpcy5uYW1lKSlcbiAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgyXCIpLnNldFRleHRDb250ZW50KGBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWApKVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpLnNldFRleHRDb250ZW50KFwiU2V0IFByaW9yaXR5XCIpKVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpLnNldFRleHRDb250ZW50KFwiTWFyayBEb25lXCIpKTtcblxuICAgIHJldHVybiB2aXJ0dWFsQm9pO1xuICB9XG5cbiAgZWRpdER1ZURhdGUoKSB7fVxuICAvLyBlZGl0OiBuYW1lLCBwcmlvcml0eSwgY29tcGxldGVkLCBkYXRlXG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudFR5cGUpIHtcbiAgICB0aGlzLmVsZW1lbnRUeXBlID0gZWxlbWVudFR5cGU7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIGJ1aWxkRWxlbWVudCgpIHtcbiAgICAvLyBDcmVhdGUgZWxlbWVudCBpbiBET01cbiAgICBjb25zdCByZWFsQm9pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmVsZW1lbnRUeXBlKTtcblxuICAgIC8vIEFkZCBhdHRyaWJ1dGVzIHRvIGVsZW1lbnRcbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPT09IHRydWUgfHxcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgcmVhbEJvaS50b2dnbGVBdHRyaWJ1dGUoYXR0cmlidXRlLCB0aGlzLmF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWFsQm9pLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHRoaXMuYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzOlxuICAgIGZvciAoY29uc3QgZXYgaW4gdGhpcy5ldmVudExpc3RlbmVycykge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldl0uZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgICAgcmVhbEJvaS5hZGRFdmVudExpc3RlbmVyKGV2LCBjYik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBcHBlbmQgY2hpbGRyZW4/IEFwcGVuZCB0ZXh0P1xuICAgIGlmICh0aGlzLnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yIChjb25zdCB2aXJ0dWFsQm9pIG9mIHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgcmVhbEJvaS5hcHBlbmRDaGlsZCh2aXJ0dWFsQm9pLmJ1aWxkRWxlbWVudCgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnRleHQpO1xuICAgICAgcmVhbEJvaS5hcHBlbmRDaGlsZChyZWFsVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZWFsQm9pO1xuICB9XG5cbiAgc2V0QXR0cmlidXRlcyhvYmplY3QpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuYXR0cmlidXRlcywgb2JqZWN0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENoaWxkKGVsZW1lbnQpIHtcbiAgICB0aGlzLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRUZXh0Q29udGVudChzdHJpbmcpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy50ZXh0ID0gc3RyaW5nO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXBwZW5kRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5ldmVudExpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50XSA9IFtjYWxsYmFja107XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaWJyYXJpYW4ge1xuICBzdGF0aWMgcHJvamVjdHNBcnJheSA9IFtdO1xuXG4gIHN0YXRpYyBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gTGlicmFyaWFuLnByb2plY3RzQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgTGlicmFyaWFuLnByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IHtcbiAgZGVmYXVsdCBhcyBsb2FkVG9kYXksXG4gIGxvYWRXZWVrLFxuICBsb2FkTW9udGgsXG4gIGxvYWRZZWFyLFxufSBmcm9tIFwiLi9sb2FkVGFic1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBMaWJyYXJpYW4gfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgZGlzcGxheVByb2plY3RNb2RhbCBmcm9tIFwiLi9VSWhhbmRsZXJzXCI7XG5pbXBvcnQgeyBkaXNwbGF5TGlzdEZvcm0gfSBmcm9tIFwiLi9VSWhhbmRsZXJzXCI7XG5pbXBvcnQgeyBkaXNwbGF5VG9Eb0Zvcm0gfSBmcm9tIFwiLi9VSWhhbmRsZXJzXCI7XG5pbXBvcnQgeyByZWJ1aWxkVUkgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gR2xvYmFsczpcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5jb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idG5cIik7XG5sZXQgYWRkUHJvamVjdEZvcm07XG5cbi8vTG9hZCBEZWZhdWx0IFVJXG4vLyBsb2FkVG9kYXkoKTtcblxuLy8gRnVuY3Rpb25zOlxuZnVuY3Rpb24gaGFuZGxlTmV3UHJvamVjdFN1Ym1pdCgpIHtcbiAgbGV0IHByb2plY3RGb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcblxuICAvLyBNYWtlIHByb2plY3QgYW5kIGdpdmUgdG8gTGlicmFyaWFuXG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0Rm9ybUlucHV0LnZhbHVlKTtcbiAgLy8gY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KHByb2plY3RGb3JtSW5wdXQudmFsdWUpO1xuICAvLyBuZXdQcm9qZWN0LmFwcGVuZExpc3QobmV3TGlzdCk7XG4gIC8vIGNvbnN0IHRvRG8xID0gbmV3IFRvRG8oXCJiYWtlIGEgY2FrZVwiLCAyLCBmYWxzZSk7XG4gIC8vIG5ld0xpc3QuYXBwZW5kSXRlbVRvTGlzdEFycmF5KHRvRG8xKTtcblxuICBMaWJyYXJpYW4uYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblxuICAvLyBSZWJ1aWxkIFVJXG4gIHJlYnVpbGRVSSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBZGRQcm9qZWN0KCkge1xuICBhZGRQcm9qZWN0Rm9ybSA9IGRpc3BsYXlQcm9qZWN0TW9kYWwoKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSk7XG5cbiAgY29uc3QgcHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtLWJ0blwiKTtcblxuICBwcm9qZWN0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGFuZGxlTmV3UHJvamVjdFN1Ym1pdCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5ld0xpc3RTdWJtaXQoZSwgcHJvamVjdCkge1xuICBsZXQgbGlzdEZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC1uYW1lXCIpO1xuICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QobGlzdEZvcm1JbnB1dC52YWx1ZSk7XG4gIHByb2plY3QuYXBwZW5kTGlzdChuZXdMaXN0KTtcblxuICByZWJ1aWxkVUkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUFkZExpc3QoZSwgcHJvamVjdCkge1xuICBjb25zdCBuZXdMaXN0Rm9ybSA9IGRpc3BsYXlMaXN0Rm9ybShwcm9qZWN0KTtcbiAgZS50YXJnZXQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChuZXdMaXN0Rm9ybSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVOZXdUb0RvU3VibWl0KGUsIGxpc3QpIHtcbiAgbGV0IGFkZFRvRG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdG9kby1mb3JtXCIpO1xuXG4gIGNvbnN0IG5ld1RvRG8gPSBuZXcgVG9EbyhcbiAgICBhZGRUb0RvRm9ybVtcInRvZG8tbmFtZVwiXS52YWx1ZSxcbiAgICBhZGRUb0RvRm9ybVtcInByaW9yaXR5XCJdLnZhbHVlLFxuICAgIGFkZFRvRG9Gb3JtW1wiY29tcGxldGVkXCJdLnZhbHVlLFxuICAgIGFkZFRvRG9Gb3JtW1wiZHVlLWRhdGVcIl0udmFsdWVcbiAgKTtcblxuICBsaXN0LmFwcGVuZEl0ZW1Ub0xpc3RBcnJheShuZXdUb0RvKTtcbiAgY29uc29sZS5sb2coTGlicmFyaWFuLmdldEFsbFByb2plY3RzKCkpO1xuXG4gIHJlYnVpbGRVSSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQWRkVG9EbyhlLCBsaXN0KSB7XG4gIGNvbnN0IMSBzLfMlHLMtM2QzIHFpcy3zYpozLbMmcyKdsy4zI3NhuG6o8y4zZhkzLfMjsyEcsy0zITNgnLMuMyAzJBfzLbMhc2d4bqHzLjMkWHMtcyszI7Imcy0zINfzLTMhMySaMy1zL3MkMipzLTMkcWVzLXMhMOrzLbMgcyVID0gZGlzcGxheVRvRG9Gb3JtKGxpc3QpO1xuICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKMSBzLfMlHLMtM2QzIHFpcy3zYpozLbMmcyKdsy4zI3NhuG6o8y4zZhkzLfMjsyEcsy0zITNgnLMuMyAzJBfzLbMhc2d4bqHzLjMkWHMtcyszI7Imcy0zINfzLTMhMySaMy1zL3MkMipzLTMkcWVzLXMhMOrzLbMgcyVKTtcbn1cblxuLy8gRXZlbnQgTGlzdGVuZXJzOlxucHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQWRkUHJvamVjdCk7XG5cbi8vICgpID0+IHtcbi8vICAgYWRkUHJvamVjdEZvcm0gPSBkaXNwbGF5UHJvamVjdE1vZGFsKCk7XG4vLyAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pO1xuXG4vLyAgIGhhbmRsZUZvcm1JbnB1dChhZGRQcm9qZWN0Rm9ybSk7XG4vLyB9KTtcblxuLypcbi8vIENyZWF0ZSBkZWZhdWx0IHByb2plY3Qgb24gbG9hZDpcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJkZWZhdWx0XCIsIDEpO1xuXG5jb25zdCBteUxpc3QgPSBuZXcgTGlzdChcImZpcnN0IGxpc3RcIik7XG5cbmNvbnN0IHRvRG9JdGVtID0gbmV3IFRvRG8oXCJ3YXRlciB0aGUgbGF3blwiLCAzLCBmYWxzZSwgbmV3IERhdGUoMjAyMiwgOCwgMTcpKTtcblxuY29uc3QgdG9kbzIgPSBuZXcgVG9EbyhcIkVhdCBhIHdhdGVybWVsb25cIiwgMiwgdHJ1ZSwgbmV3IERhdGUoMjAyMiwgMTEsIDMwKSk7XG5cbm15TGlzdC5hcHBlbmRJdGVtVG9MaXN0QXJyYXkodG9Eb0l0ZW0pO1xubXlMaXN0LmFwcGVuZEl0ZW1Ub0xpc3RBcnJheSh0b2RvMik7XG5cbmRlZmF1bHRQcm9qZWN0LmFwcGVuZExpc3QobXlMaXN0KTtcblxuTGlicmFyaWFuLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuXG5jb25zdCB0b2RheSA9IGxvYWRZZWFyKExpYnJhcmlhbi5nZXRBbGxQcm9qZWN0cygpKTtcbmNvbnNvbGUubG9nKHRvZGF5KTtcblxuY29uc3QgYnVpbGREZWZhdWx0ID0gZGVmYXVsdFByb2plY3QuYnVpbGRWaXJ0dWFsQm9pKCk7XG5jb25zb2xlLmxvZyhidWlsZERlZmF1bHQpO1xuY29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RheS5idWlsZEVsZW1lbnQoKSk7XG5cbiovXG5cbmNvbnNvbGUubG9nKExpYnJhcmlhbik7XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHtcbiAgc3RhcnRPZlRvZGF5LFxuICBzdGFydE9mV2VlayxcbiAgZW5kT2ZXZWVrLFxuICBlbmRPZlRvZGF5LFxuICBzdGFydE9mTW9udGgsXG4gIGVuZE9mTW9udGgsXG4gIHN0YXJ0T2ZZZWFyLFxuICBlbmRPZlllYXIsXG59IGZyb20gXCJkYXRlLWZuc1wiO1xuXG4vLyBSZXR1cm5zIGEgYnVpbHQgZWxlbWVudCBiYXNlZCBvbiBpbnRlcnZhbCBhbmQgcHJvamVjdHNBcnJheVtdOlxuZnVuY3Rpb24gYnVpbGRUYWIocHJvamVjdHNBcnJheSwgaW50ZXJ2YWwpIHtcbiAgY29uc3QgaW50ZXJ2YWxUb0RvcyA9IHByb2plY3RzQXJyYXkuZmxhdE1hcCgocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LmdldEFsbFRhc2tzSW5JbnRlcnZhbChpbnRlcnZhbClcbiAgKTtcblxuICBjb25zdCBpbnRlcnZhbFRvRG9zVUkgPSBpbnRlcnZhbFRvRG9zLnJlZHVjZShcbiAgICAodmlydHVhbFVsLCB0b0RvKSA9PiB2aXJ0dWFsVWwuYWRkQ2hpbGQodG9Eby5idWlsZFZpcnR1YWxCb2koKSksXG4gICAgbmV3IEVsZW1lbnQoXCJ1bFwiKS5zZXRBdHRyaWJ1dGVzKHsgaWQ6IFwidG9kYXlcIiB9KVxuICApO1xuXG4gIHJldHVybiBuZXcgRWxlbWVudChcImRpdlwiKVxuICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBcImRhdGUtdGFiXCIsXG4gICAgICBpZDogXCJ0b2RheS10YWJcIixcbiAgICB9KVxuICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgxXCIpLnNldFRleHRDb250ZW50KFwiVG9kYXlcIikpXG4gICAgLmFkZENoaWxkKGludGVydmFsVG9Eb3NVSSk7XG59XG5cbi8vIENyZWF0ZXMgaW50ZXJ2YWwgb2YgcmFuZ2Ugd2l0aGluIHRvZGF5IHRvIGJlIHVzZWQgYnkgYnVpbGRUYWIoKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFRvZGF5KHByb2plY3RzQXJyYXkpIHtcbiAgY29uc3QgaW50ZXJ2YWwgPSB7XG4gICAgc3RhcnQ6IHN0YXJ0T2ZUb2RheSgpLFxuICAgIGVuZDogZW5kT2ZUb2RheSgpLFxuICB9O1xuXG4gIHJldHVybiBidWlsZFRhYihwcm9qZWN0c0FycmF5LCBpbnRlcnZhbCk7XG59XG5cbi8vIENyZWF0ZXMgaW50ZXJ2YWwgb2YgcmFuZ2Ugd2l0aGluIHRoZSBuZXh0IHdlZWsgdG8gYmUgdXNlZCBpbiBidWlsZFRhYigpXG5leHBvcnQgZnVuY3Rpb24gbG9hZFdlZWsocHJvamVjdHNBcnJheSkge1xuICBjb25zdCByaWdodEpvaW4gPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IGludGVydmFsID0ge1xuICAgIHN0YXJ0OiBzdGFydE9mV2VlayhyaWdodEpvaW4pLFxuICAgIGVuZDogZW5kT2ZXZWVrKHJpZ2h0Sm9pbiksXG4gIH07XG5cbiAgcmV0dXJuIGJ1aWxkVGFiKHByb2plY3RzQXJyYXksIGludGVydmFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb250aChwcm9qZWN0c0FycmF5KSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgaW50ZXJ2YWwgPSB7IHN0YXJ0OiBzdGFydE9mTW9udGgobm93KSwgZW5kOiBlbmRPZk1vbnRoKG5vdykgfTtcbiAgcmV0dXJuIGJ1aWxkVGFiKHByb2plY3RzQXJyYXksIGludGVydmFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRZZWFyKHByb2plY3RzQXJyYXkpIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgaW50ZXJ2YWwgPSB7IHN0YXJ0OiBzdGFydE9mWWVhcihub3cpLCBlbmQ6IGVuZE9mWWVhcihub3cpIH07XG5cbiAgcmV0dXJuIGJ1aWxkVGFiKHByb2plY3RzQXJyYXksIGludGVydmFsKTtcbn1cblxuLy9Ub2RheSBIVE1MOlxuLypcbi5jb250ZW50XG5wYW5lbCBkaXZcbj4gdG9kYXkgZGl2XG4+IGgxOiBcbj4+Pj4+PmxpIGR1ZSB0b2RheVxuKi9cbiIsImltcG9ydCB7IExpYnJhcmlhbiB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmxldCBjb250ZW50RGl2O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21BcnJheShpdGVtLCBhcnJheSkge1xuICBsZXQgaW5kZXhUb1JlbW92ZSA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gIGFycmF5LnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbn1cblxuLy8gcmVidWlsZCBVSVxuZXhwb3J0IGZ1bmN0aW9uIHJlYnVpbGRVSSgpIHtcbiAgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgcHJvamVjdHNBcnJheSA9IExpYnJhcmlhbi5nZXRBbGxQcm9qZWN0cygpO1xuXG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0c0FycmF5KSB7XG4gICAgY29uc3QgdmlydHVhbFByb2plY3QgPSBwcm9qZWN0LmJ1aWxkVmlydHVhbEJvaSgpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh2aXJ0dWFsUHJvamVjdC5idWlsZEVsZW1lbnQoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1EaXYoaWQsIG5hbWUsIGNoZWNrZWQpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KFwiZGl2XCIpXG4gICAgLmFkZENoaWxkKFxuICAgICAgbmV3IEVsZW1lbnQoXCJpbnB1dFwiKS5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgIH0pXG4gICAgKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwibGFiZWxcIikuc2V0QXR0cmlidXRlcyh7IGZvcjogaWQgfSkuc2V0VGV4dENvbnRlbnQoaWQpXG4gICAgKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=