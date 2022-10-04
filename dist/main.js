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
/* harmony export */   "displayListForm": () => (/* binding */ displayListForm)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


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

function displayListForm() {
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
            .appendEventListener("click", _index__WEBPACK_IMPORTED_MODULE_0__.handleAddList)
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
      new Element("ul").setAttributes({
        id: this.name,
      })
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
      realBoi.setAttribute(attribute, this.attributes[attribute]);
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
/* harmony export */   "handleAddList": () => (/* binding */ handleAddList)
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
  const newList = new _classes__WEBPACK_IMPORTED_MODULE_1__.List(projectFormInput.value);
  newProject.appendList(newList);
  const toDo1 = new _classes__WEBPACK_IMPORTED_MODULE_1__.ToDo("bake a cake", 2, false);
  newList.appendItemToListArray(toDo1);

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

function handleAddList() {
  const newListForm = (0,_UIhandlers__WEBPACK_IMPORTED_MODULE_2__.displayListForm)();
  contentDiv.appendChild(newListForm);
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
  const now = new Date();

  const interval = {
    start: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(now),
    end: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(now),
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
    console.log(virtualProject);
    contentDiv.appendChild(virtualProject.buildElement());
  }
  console.log(_classes__WEBPACK_IMPORTED_MODULE_0__.Librarian.projectsArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUN6QjtBQUNBOztBQUVBO0FBQ2U7QUFDZjtBQUNBLFdBQVcsb0RBQVk7QUFDdkIsU0FBUyxvREFBVTtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDs7QUFFQTtBQUNBLFdBQVcsb0RBQVc7QUFDdEIsU0FBUyxvREFBUztBQUNsQjs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEscUJBQXFCLE9BQU8sb0RBQVksWUFBWSxvREFBVTtBQUM5RDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxxQkFBcUIsT0FBTyxvREFBVyxZQUFZLG9EQUFTOztBQUU1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VzQzs7QUFFdEM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUEsd0JBQXdCLDhEQUF3Qjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkRBQXVCO0FBQ3JDOzs7Ozs7O1VDdEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1dpdGhpbkludGVydmFsL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvVUloYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL2xvYWRUYWJzLmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZW5kT2ZEYXkgZnJvbSBcIi4uL2VuZE9mRGF5L2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgdG9kYXkuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgdG9kYXkuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZUb2RheSgpXG4gKiAvLz0+IE1vbiBPY3QgNiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mVG9kYXkoKSB7XG4gIHJldHVybiBlbmRPZkRheShEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGVuZE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTYXQgU2VwIDA2IDIwMTQgMjM6NTk6NTkuOTk5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBlbmQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gLTcgOiAwKSArIDYgLSAoZGF5IC0gd2Vla1N0YXJ0c09uKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgRGVjIDMxIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDApO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1dpdGhpbkludGVydmFsXG4gKiBAY2F0ZWdvcnkgSW50ZXJ2YWwgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/IChJbmNsdWRpbmcgc3RhcnQgYW5kIGVuZC4pXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0ludGVydmFsfSBpbnRlcnZhbCAtIHRoZSBpbnRlcnZhbCB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHdpdGhpbiB0aGUgaW50ZXJ2YWxcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IFRoZSBzdGFydCBvZiBhbiBpbnRlcnZhbCBjYW5ub3QgYmUgYWZ0ZXIgaXRzIGVuZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gRGF0ZSBpbiBpbnRlcnZhbCBjYW5ub3QgYmUgYEludmFsaWQgRGF0ZWBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDMpLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwge1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMSksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIHN0YXJ0OlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0LCBlbmQ6IGRhdGUgfSkgLy8gPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgZGF0ZSBlcXVhbCB0byBpbnRlcnZhbCBlbmQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQ6IGRhdGUsIGVuZCB9KSAvLyA9PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzV2l0aGluSW50ZXJ2YWwoZGlydHlEYXRlLCBpbnRlcnZhbCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWUgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBzdGFydFRpbWUgPSB0b0RhdGUoaW50ZXJ2YWwuc3RhcnQpLmdldFRpbWUoKTtcbiAgdmFyIGVuZFRpbWUgPSB0b0RhdGUoaW50ZXJ2YWwuZW5kKS5nZXRUaW1lKCk7IC8vIFRocm93IGFuIGV4Y2VwdGlvbiBpZiBzdGFydCBkYXRlIGlzIGFmdGVyIGVuZCBkYXRlIG9yIGlmIGFueSBkYXRlIGlzIGBJbnZhbGlkIERhdGVgXG5cbiAgaWYgKCEoc3RhcnRUaW1lIDw9IGVuZFRpbWUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgaW50ZXJ2YWwnKTtcbiAgfVxuXG4gIHJldHVybiB0aW1lID49IHN0YXJ0VGltZSAmJiB0aW1lIDw9IGVuZFRpbWU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXREYXRlKDEpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiB0b2RheS5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIHRvZGF5LlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlRvZGF5KClcbiAqIC8vPT4gTW9uIE9jdCA2IDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVG9kYXkoKSB7XG4gIHJldHVybiBzdGFydE9mRGF5KERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mWWVhclxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBjbGVhbkRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdE1vZGFsKCkge1xuICByZXR1cm4gbmV3IEVsZW1lbnQoXCJmb3JtXCIpXG4gICAgLnNldEF0dHJpYnV0ZXMoeyBjbGFzczogXCJmb3JtXCIsIGlkOiBcImFkZC1wcm9qZWN0LWZvcm1cIiB9KVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwiaW5wdXRcIikuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBjbGFzczogXCJmb3JtLWlucHV0XCIsXG4gICAgICAgIGlkOiBcInByb2plY3QtbmFtZVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJOYW1lIHlvdXIgcHJvamVjdFwiLFxuICAgICAgICByZXF1aXJlZDogXCJyZXF1aXJlZFwiLFxuICAgICAgfSlcbiAgICApXG4gICAgLmFkZENoaWxkKFxuICAgICAgbmV3IEVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgY2xhc3M6IFwiZm9ybS1idG5cIixcbiAgICAgICAgICBpZDogXCJwcm9qZWN0LWZvcm0tYnRuXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC5zZXRUZXh0Q29udGVudChcIlN1Ym1pdFwiKVxuICAgIClcbiAgICAuYnVpbGRFbGVtZW50KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TGlzdEZvcm0oKSB7XG4gIHJldHVybiBuZXcgRWxlbWVudChcImZvcm1cIilcbiAgICAuc2V0QXR0cmlidXRlcyh7IGNsYXNzOiBcImZvcm1cIiwgaWQ6IFwiYWRkLWxpc3QtZm9ybVwiIH0pXG4gICAgLmFkZENoaWxkKFxuICAgICAgbmV3IEVsZW1lbnQoXCJpbnB1dFwiKS5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGNsYXNzOiBcImZvcm0taW5wdXRcIixcbiAgICAgICAgaWQ6IFwibGlzdC1uYW1lXCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIk5hbWUgeW91ciBsaXN0XCIsXG4gICAgICAgIHJlcXVpcmVkOiBcInJlcXVpcmVkXCIsXG4gICAgICB9KVxuICAgIClcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBjbGFzczogXCJmb3JtLWJ0blwiLFxuICAgICAgICAgIGlkOiBcImxpc3QtZm9ybS1idG5cIixcbiAgICAgICAgfSlcbiAgICAgICAgLnNldFRleHRDb250ZW50KFwiU3VibWl0XCIpXG4gICAgKVxuICAgIC5idWlsZEVsZW1lbnQoKTtcbn1cbiIsImltcG9ydCB7IGhhbmRsZUFkZExpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgcmVtb3ZlSXRlbUZyb21BcnJheSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgaXNXaXRoaW5JbnRlcnZhbCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5saXN0cyA9IFtdO1xuICAgIC8vIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBhcHBlbmRMaXN0KGxpc3QpIHtcbiAgICB0aGlzLmxpc3RzLnB1c2gobGlzdCk7XG4gIH1cblxuICByZW1vdmVMaXN0KGxpc3QpIHtcbiAgICByZW1vdmVJdGVtRnJvbUFycmF5KGxpc3QsIHRoaXMubGlzdHMpO1xuICB9XG5cbiAgZWRpdERldGFpbHMoZGV0YWlsVHlwZSkge1xuICAgIGVkaXRJdGVtRGV0YWlsKHRoaXMsIGRldGFpbFR5cGUpO1xuICB9XG5cbiAgYnVpbGRWaXJ0dWFsQm9pKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RzLnJlZHVjZShcbiAgICAgICh2aXJ0dWFsUHJvamVjdCwgbGlzdCkgPT4gdmlydHVhbFByb2plY3QuYWRkQ2hpbGQobGlzdC5idWlsZFZpcnR1YWxCb2koKSksXG4gICAgICBuZXcgRWxlbWVudChcImRpdlwiKVxuICAgICAgICAuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgY2xhc3M6IFwicHJvamVjdFwiLFxuICAgICAgICAgIGlkOiBgUHJvamVjdC0ke3RoaXMuaWR9YCxcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgIG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgICAgICAuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBcImFkZC1saXN0LWJ0blwiLFxuICAgICAgICAgICAgICBpZDogYCR7dGhpcy5uYW1lfS1hZGQtbGlzdC1idG5gLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hcHBlbmRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQWRkTGlzdClcbiAgICAgICAgICAgIC5zZXRUZXh0Q29udGVudChcIkFkZCBsaXN0XCIpXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0QWxsVGFza3NJbkludGVydmFsKGludGVydmFsKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdHMuZmxhdE1hcCgobGlzdCkgPT4gbGlzdC5nZXRBbGxUb0Rvc0luSW50ZXJ2YWwoaW50ZXJ2YWwpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxpc3ROYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbGlzdE5hbWU7XG4gICAgdGhpcy5saXN0SXRlbXMgPSBbXTtcbiAgICB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgYnVpbGRWaXJ0dWFsQm9pKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RJdGVtcy5yZWR1Y2UoXG4gICAgICAodmlydHVhbFVsLCB0b0RvKSA9PiB2aXJ0dWFsVWwuYWRkQ2hpbGQodG9Eby5idWlsZFZpcnR1YWxCb2koKSksXG4gICAgICBuZXcgRWxlbWVudChcInVsXCIpLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICBpZDogdGhpcy5uYW1lLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYXBwZW5kSXRlbVRvTGlzdEFycmF5KGl0ZW0pIHtcbiAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlSXRlbUZyb21MaXN0QXJyYXkoaXRlbSkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG5cbiAgZ2V0QWxsVG9Eb3NJbkludGVydmFsKGludGVydmFsKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLmZpbHRlcihcbiAgICAgICh0b0RvKSA9PiAhdG9Eby5kYXRlIHx8IGlzV2l0aGluSW50ZXJ2YWwodG9Eby5kYXRlLCBpbnRlcnZhbClcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkLCBkYXRlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIH1cblxuICBidWlsZFZpcnR1YWxCb2koKSB7XG4gICAgY29uc3QgdmlydHVhbEJvaSA9IG5ldyBFbGVtZW50KFwibGlcIik7XG4gICAgdmlydHVhbEJvaVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDFcIikuc2V0VGV4dENvbnRlbnQodGhpcy5uYW1lKSlcbiAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgyXCIpLnNldFRleHRDb250ZW50KGBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWApKVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpLnNldFRleHRDb250ZW50KFwiU2V0IFByaW9yaXR5XCIpKVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpLnNldFRleHRDb250ZW50KFwiTWFyayBEb25lXCIpKTtcblxuICAgIHJldHVybiB2aXJ0dWFsQm9pO1xuICB9XG5cbiAgZWRpdER1ZURhdGUoKSB7fVxuICAvLyBlZGl0OiBuYW1lLCBwcmlvcml0eSwgY29tcGxldGVkLCBkYXRlXG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudFR5cGUpIHtcbiAgICB0aGlzLmVsZW1lbnRUeXBlID0gZWxlbWVudFR5cGU7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIGJ1aWxkRWxlbWVudCgpIHtcbiAgICAvLyBDcmVhdGUgZWxlbWVudCBpbiBET01cbiAgICBjb25zdCByZWFsQm9pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmVsZW1lbnRUeXBlKTtcblxuICAgIC8vIEFkZCBhdHRyaWJ1dGVzIHRvIGVsZW1lbnRcbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgIHJlYWxCb2kuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgIH1cblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnM6XG4gICAgZm9yIChjb25zdCBldiBpbiB0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2XS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICByZWFsQm9pLmFkZEV2ZW50TGlzdGVuZXIoZXYsIGNiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFwcGVuZCBjaGlsZHJlbj8gQXBwZW5kIHRleHQ/XG4gICAgaWYgKHRoaXMudGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IHZpcnR1YWxCb2kgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICByZWFsQm9pLmFwcGVuZENoaWxkKHZpcnR1YWxCb2kuYnVpbGRFbGVtZW50KCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMudGV4dCk7XG4gICAgICByZWFsQm9pLmFwcGVuZENoaWxkKHJlYWxUZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWxCb2k7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGVzKG9iamVjdCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5hdHRyaWJ1dGVzLCBvYmplY3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ2hpbGQoZWxlbWVudCkge1xuICAgIHRoaXMudGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goZWxlbWVudCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFRleHRDb250ZW50KHN0cmluZykge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnRleHQgPSBzdHJpbmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhcHBlbmRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW2NhbGxiYWNrXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpYnJhcmlhbiB7XG4gIHN0YXRpYyBwcm9qZWN0c0FycmF5ID0gW107XG5cbiAgc3RhdGljIGdldEFsbFByb2plY3RzKCkge1xuICAgIHJldHVybiBMaWJyYXJpYW4ucHJvamVjdHNBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBMaWJyYXJpYW4ucHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQge1xuICBkZWZhdWx0IGFzIGxvYWRUb2RheSxcbiAgbG9hZFdlZWssXG4gIGxvYWRNb250aCxcbiAgbG9hZFllYXIsXG59IGZyb20gXCIuL2xvYWRUYWJzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IExpYnJhcmlhbiB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCBkaXNwbGF5UHJvamVjdE1vZGFsIGZyb20gXCIuL1VJaGFuZGxlcnNcIjtcbmltcG9ydCB7IGRpc3BsYXlMaXN0Rm9ybSB9IGZyb20gXCIuL1VJaGFuZGxlcnNcIjtcbmltcG9ydCB7IHJlYnVpbGRVSSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG4vLyBHbG9iYWxzOlxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWJ0blwiKTtcbmxldCBhZGRQcm9qZWN0Rm9ybTtcblxuLy9Mb2FkIERlZmF1bHQgVUlcbi8vIGxvYWRUb2RheSgpO1xuXG4vLyBGdW5jdGlvbnM6XG5mdW5jdGlvbiBoYW5kbGVOZXdQcm9qZWN0U3VibWl0KCkge1xuICBsZXQgcHJvamVjdEZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xuXG4gIC8vIE1ha2UgcHJvamVjdCBhbmQgZ2l2ZSB0byBMaWJyYXJpYW5cbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RGb3JtSW5wdXQudmFsdWUpO1xuICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QocHJvamVjdEZvcm1JbnB1dC52YWx1ZSk7XG4gIG5ld1Byb2plY3QuYXBwZW5kTGlzdChuZXdMaXN0KTtcbiAgY29uc3QgdG9EbzEgPSBuZXcgVG9EbyhcImJha2UgYSBjYWtlXCIsIDIsIGZhbHNlKTtcbiAgbmV3TGlzdC5hcHBlbmRJdGVtVG9MaXN0QXJyYXkodG9EbzEpO1xuXG4gIExpYnJhcmlhbi5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG4gIC8vIFJlYnVpbGQgVUlcbiAgcmVidWlsZFVJKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFByb2plY3QoKSB7XG4gIGFkZFByb2plY3RGb3JtID0gZGlzcGxheVByb2plY3RNb2RhbCgpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKTtcblxuICBjb25zdCBwcm9qZWN0U3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm0tYnRuXCIpO1xuXG4gIHByb2plY3RTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBoYW5kbGVOZXdQcm9qZWN0U3VibWl0KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQWRkTGlzdCgpIHtcbiAgY29uc3QgbmV3TGlzdEZvcm0gPSBkaXNwbGF5TGlzdEZvcm0oKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuZXdMaXN0Rm9ybSk7XG59XG5cbi8vIEV2ZW50IExpc3RlbmVyczpcbnByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUFkZFByb2plY3QpO1xuXG4vLyAoKSA9PiB7XG4vLyAgIGFkZFByb2plY3RGb3JtID0gZGlzcGxheVByb2plY3RNb2RhbCgpO1xuLy8gICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKTtcblxuLy8gICBoYW5kbGVGb3JtSW5wdXQoYWRkUHJvamVjdEZvcm0pO1xuLy8gfSk7XG5cbi8qXG4vLyBDcmVhdGUgZGVmYXVsdCBwcm9qZWN0IG9uIGxvYWQ6XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiZGVmYXVsdFwiLCAxKTtcblxuY29uc3QgbXlMaXN0ID0gbmV3IExpc3QoXCJmaXJzdCBsaXN0XCIpO1xuXG5jb25zdCB0b0RvSXRlbSA9IG5ldyBUb0RvKFwid2F0ZXIgdGhlIGxhd25cIiwgMywgZmFsc2UsIG5ldyBEYXRlKDIwMjIsIDgsIDE3KSk7XG5cbmNvbnN0IHRvZG8yID0gbmV3IFRvRG8oXCJFYXQgYSB3YXRlcm1lbG9uXCIsIDIsIHRydWUsIG5ldyBEYXRlKDIwMjIsIDExLCAzMCkpO1xuXG5teUxpc3QuYXBwZW5kSXRlbVRvTGlzdEFycmF5KHRvRG9JdGVtKTtcbm15TGlzdC5hcHBlbmRJdGVtVG9MaXN0QXJyYXkodG9kbzIpO1xuXG5kZWZhdWx0UHJvamVjdC5hcHBlbmRMaXN0KG15TGlzdCk7XG5cbkxpYnJhcmlhbi5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcblxuY29uc3QgdG9kYXkgPSBsb2FkWWVhcihMaWJyYXJpYW4uZ2V0QWxsUHJvamVjdHMoKSk7XG5jb25zb2xlLmxvZyh0b2RheSk7XG5cbmNvbnN0IGJ1aWxkRGVmYXVsdCA9IGRlZmF1bHRQcm9qZWN0LmJ1aWxkVmlydHVhbEJvaSgpO1xuY29uc29sZS5sb2coYnVpbGREZWZhdWx0KTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9kYXkuYnVpbGRFbGVtZW50KCkpO1xuXG4qL1xuXG5jb25zb2xlLmxvZyhMaWJyYXJpYW4pO1xuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7XG4gIHN0YXJ0T2ZUb2RheSxcbiAgc3RhcnRPZldlZWssXG4gIGVuZE9mV2VlayxcbiAgZW5kT2ZUb2RheSxcbiAgc3RhcnRPZk1vbnRoLFxuICBlbmRPZk1vbnRoLFxuICBzdGFydE9mWWVhcixcbiAgZW5kT2ZZZWFyLFxufSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuLy8gUmV0dXJucyBhIGJ1aWx0IGVsZW1lbnQgYmFzZWQgb24gaW50ZXJ2YWwgYW5kIHByb2plY3RzQXJyYXlbXTpcbmZ1bmN0aW9uIGJ1aWxkVGFiKHByb2plY3RzQXJyYXksIGludGVydmFsKSB7XG4gIGNvbnN0IGludGVydmFsVG9Eb3MgPSBwcm9qZWN0c0FycmF5LmZsYXRNYXAoKHByb2plY3QpID0+XG4gICAgcHJvamVjdC5nZXRBbGxUYXNrc0luSW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICk7XG5cbiAgY29uc3QgaW50ZXJ2YWxUb0Rvc1VJID0gaW50ZXJ2YWxUb0Rvcy5yZWR1Y2UoXG4gICAgKHZpcnR1YWxVbCwgdG9EbykgPT4gdmlydHVhbFVsLmFkZENoaWxkKHRvRG8uYnVpbGRWaXJ0dWFsQm9pKCkpLFxuICAgIG5ldyBFbGVtZW50KFwidWxcIikuc2V0QXR0cmlidXRlcyh7IGlkOiBcInRvZGF5XCIgfSlcbiAgKTtcblxuICByZXR1cm4gbmV3IEVsZW1lbnQoXCJkaXZcIilcbiAgICAuc2V0QXR0cmlidXRlcyh7XG4gICAgICBjbGFzczogXCJkYXRlLXRhYlwiLFxuICAgICAgaWQ6IFwidG9kYXktdGFiXCIsXG4gICAgfSlcbiAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJoMVwiKS5zZXRUZXh0Q29udGVudChcIlRvZGF5XCIpKVxuICAgIC5hZGRDaGlsZChpbnRlcnZhbFRvRG9zVUkpO1xufVxuXG4vLyBDcmVhdGVzIGludGVydmFsIG9mIHJhbmdlIHdpdGhpbiB0b2RheSB0byBiZSB1c2VkIGJ5IGJ1aWxkVGFiKClcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUb2RheShwcm9qZWN0c0FycmF5KSB7XG4gIGNvbnN0IGludGVydmFsID0ge1xuICAgIHN0YXJ0OiBzdGFydE9mVG9kYXkoKSxcbiAgICBlbmQ6IGVuZE9mVG9kYXkoKSxcbiAgfTtcblxuICByZXR1cm4gYnVpbGRUYWIocHJvamVjdHNBcnJheSwgaW50ZXJ2YWwpO1xufVxuXG4vLyBDcmVhdGVzIGludGVydmFsIG9mIHJhbmdlIHdpdGhpbiB0aGUgbmV4dCB3ZWVrIHRvIGJlIHVzZWQgaW4gYnVpbGRUYWIoKVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRXZWVrKHByb2plY3RzQXJyYXkpIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICBjb25zdCBpbnRlcnZhbCA9IHtcbiAgICBzdGFydDogc3RhcnRPZldlZWsobm93KSxcbiAgICBlbmQ6IGVuZE9mV2Vlayhub3cpLFxuICB9O1xuXG4gIHJldHVybiBidWlsZFRhYihwcm9qZWN0c0FycmF5LCBpbnRlcnZhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTW9udGgocHJvamVjdHNBcnJheSkge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IGludGVydmFsID0geyBzdGFydDogc3RhcnRPZk1vbnRoKG5vdyksIGVuZDogZW5kT2ZNb250aChub3cpIH07XG4gIHJldHVybiBidWlsZFRhYihwcm9qZWN0c0FycmF5LCBpbnRlcnZhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkWWVhcihwcm9qZWN0c0FycmF5KSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGludGVydmFsID0geyBzdGFydDogc3RhcnRPZlllYXIobm93KSwgZW5kOiBlbmRPZlllYXIobm93KSB9O1xuXG4gIHJldHVybiBidWlsZFRhYihwcm9qZWN0c0FycmF5LCBpbnRlcnZhbCk7XG59XG5cbi8vVG9kYXkgSFRNTDpcbi8qXG4uY29udGVudFxucGFuZWwgZGl2XG4+IHRvZGF5IGRpdlxuPiBoMTogXG4+Pj4+Pj5saSBkdWUgdG9kYXlcbiovXG4iLCJpbXBvcnQgeyBMaWJyYXJpYW4gfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmxldCBjb250ZW50RGl2O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21BcnJheShpdGVtLCBhcnJheSkge1xuICBsZXQgaW5kZXhUb1JlbW92ZSA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gIGFycmF5LnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbn1cblxuLy8gcmVidWlsZCBVSVxuZXhwb3J0IGZ1bmN0aW9uIHJlYnVpbGRVSSgpIHtcbiAgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29udGVudERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgcHJvamVjdHNBcnJheSA9IExpYnJhcmlhbi5nZXRBbGxQcm9qZWN0cygpO1xuXG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0c0FycmF5KSB7XG4gICAgY29uc3QgdmlydHVhbFByb2plY3QgPSBwcm9qZWN0LmJ1aWxkVmlydHVhbEJvaSgpO1xuICAgIGNvbnNvbGUubG9nKHZpcnR1YWxQcm9qZWN0KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHZpcnR1YWxQcm9qZWN0LmJ1aWxkRWxlbWVudCgpKTtcbiAgfVxuICBjb25zb2xlLmxvZyhMaWJyYXJpYW4ucHJvamVjdHNBcnJheSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9