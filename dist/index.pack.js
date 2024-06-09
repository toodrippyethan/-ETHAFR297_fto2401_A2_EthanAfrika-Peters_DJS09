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

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LoyaltyUser = exports.Permissions = void 0;\nvar Permissions;\n(function (Permissions) {\n    Permissions[\"ADMIN\"] = \"ADMIN\";\n    Permissions[\"READ_ONLY\"] = \"READ_ONLY\";\n})(Permissions || (exports.Permissions = Permissions = {}));\nvar LoyaltyUser;\n(function (LoyaltyUser) {\n    LoyaltyUser[\"GOLD_USER\"] = \"GOLD_USER\";\n    LoyaltyUser[\"SILVER_USER\"] = \"SILVER_USER\";\n    LoyaltyUser[\"BRONZE_USER\"] = \"BRONZE_USER\";\n})(LoyaltyUser || (exports.LoyaltyUser = LoyaltyUser = {}));\n\n\n//# sourceURL=webpack://project/./src/enums.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// Function Return Types + Void Types mini-challenge\n// Instead of having a long 'review total 3', can you make the line say '3 reviews', or '1 review'\n// if there is only one? Use a function to do this and assign a type to the functions return.\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar enums_1 = __webpack_require__(/*! ./enums */ \"./src/enums.ts\");\nvar propertyContainer = document.querySelector('.properties');\nvar footer = document.querySelector('.footer');\nvar isLoggedIn;\n// Reviews\nvar reviews = [\n    {\n        name: 'Sheia',\n        stars: 5,\n        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,\n        date: '01-04-2021',\n    },\n    {\n        name: 'Andrzej',\n        stars: 3,\n        loyaltyUser: enums_1.LoyaltyUser.BRONZE_USER,\n        date: '28-03-2021',\n    },\n    {\n        name: 'Omar',\n        stars: 4,\n        loyaltyUser: enums_1.LoyaltyUser.SILVER_USER,\n        date: '27-03-2021',\n        description: 'Great hosts, location was a bit further than said.',\n    },\n];\nvar you = {\n    firstName: 'Bobby',\n    lastName: 'Brown',\n    permissions: enums_1.Permissions.ADMIN,\n    isReturning: true,\n    age: 35,\n    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],\n};\n// Array of Properties\nvar properties = [\n    {\n        image: './images/colombia-property.jpg',\n        title: 'Colombian Shack',\n        price: 45,\n        location: {\n            firstLine: 'shack 37',\n            city: 'Bogota',\n            code: 45632,\n            country: 'Colombia',\n        },\n        contact: [+112343823978921, 'marywinkle@gmail.com'],\n        isAvailable: true,\n    },\n    {\n        image: './images/poland-property.jpg',\n        title: 'Polish Cottage',\n        price: 34,\n        location: {\n            firstLine: 'no 23',\n            city: 'Gdansk',\n            code: 343903,\n            country: 'Poland',\n        },\n        contact: [+1298239028490830, 'garydavis@hotmail.com'],\n        isAvailable: false,\n    },\n    {\n        image: './images/london-property.jpg',\n        title: 'London Flat',\n        price: 23,\n        location: {\n            firstLine: 'flat 15',\n            city: 'London',\n            code: 35433,\n            country: 'United Kingdom',\n        },\n        contact: [+34829374892553, 'andyluger@aol.com'],\n        isAvailable: true,\n    },\n];\n// Functions\n(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);\n(0, utils_1.populateUser)(you.isReturning, you.firstName);\n// Add the properties\nfor (var i = 0; i < properties.length; i++) {\n    var card = document.createElement('div');\n    card.classList.add('card');\n    card.innerHTML = properties[i].title;\n    var image = document.createElement('img');\n    image.setAttribute('src', properties[i].image);\n    card.appendChild(image);\n    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);\n    propertyContainer.appendChild(card);\n}\nvar currentLocation = ['London', '11.03', 17];\nfooter.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';\n\n\n//# sourceURL=webpack://project/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.makeMultiple = exports.showDetails = exports.populateUser = exports.showReviewTotal = void 0;\nvar reviewTotalDisplay = document.querySelector('#reviews');\nvar returningUserDisplay = document.querySelector('#returning-user');\nvar userNameDisplay = document.querySelector('#user');\nvar enums_1 = __webpack_require__(/*! ./enums */ \"./src/enums.ts\");\nfunction showReviewTotal(value, reviewer, isLoyalty) {\n    var iconDisplay = enums_1.LoyaltyUser.GOLD_USER ? '⭐' : '';\n    reviewTotalDisplay.innerHTML =\n        value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay;\n}\nexports.showReviewTotal = showReviewTotal;\nfunction populateUser(isReturning, userName) {\n    if (isReturning) {\n        returningUserDisplay.innerHTML = 'back';\n    }\n    userNameDisplay.innerHTML = userName;\n}\nexports.populateUser = populateUser;\nfunction showDetails(value, element, price) {\n    if (value) {\n        var priceDisplay = document.createElement('div');\n        priceDisplay.innerHTML = price.toString() + '/night';\n        element.appendChild(priceDisplay);\n    }\n}\nexports.showDetails = showDetails;\nfunction makeMultiple(value) {\n    if (value > 1 || value == 0) {\n        return 's';\n    }\n    else\n        return '';\n}\nexports.makeMultiple = makeMultiple;\n\n\n//# sourceURL=webpack://project/./src/utils.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;