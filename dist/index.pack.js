/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\n// Boolean Types mini-challenge\n// if the last reviewer is a loyalty User, can you add a star to the end of their name?\n// please do so in the existing function, and make sure to declare what type of \n// parameters the function takes.\n// : boolean\nvar reviewTotalDisplay = document.querySelector('#reviews');\nvar reviews = [\n    {\n        name: 'Sheia',\n        stars: 5,\n        loyaltyUser: true,\n        date: '01-04-2021'\n    },\n    {\n        name: 'Andrzej',\n        stars: 3,\n        loyaltyUser: false,\n        date: '28-03-2021'\n    },\n    {\n        name: 'Omar',\n        stars: 4,\n        loyaltyUser: true,\n        date: '27-03-2021'\n    },\n];\n// Solution\nfunction showReviewTotal(value, reviewer, isLoyalty) {\n    var iconDisplay = isLoyalty ? '⭐' : '';\n    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;\n}\nshowReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);\n\n\n//# sourceURL=webpack://project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;