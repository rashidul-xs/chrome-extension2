/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 150:
/***/ (() => {

// /**
//  * @fileoverview This page will be available in the GetGenie admin menu. 
//  * this is on progress
//  */
//  import {Libs} from '../../Common';
// const { Button, Col, Input, Popconfirm, Row, Table, Typography } = window.antd;
// import React, { useState } from 'react';
// const SettingsAdminPage = () => {
//     const [dataSource, setDataSource] = useState([
//         {
//             key: '0',
//             user: 'admin',
//             // words: <Input name="words" defaultValue={5000} />,
//             // serp: <Input name="serp" defaultValue={50} />,
//             // lookup: <Input name="lookup" defaultValue={100} />,
//         }
//     ]);
//     const [count, setCount] = useState(2);
//     const handleDelete = (key) => {
//         console.log('delete key', key);
//         const newData = dataSource.filter((item) => item.key !== key);
//         setDataSource(newData);
//     };
//     const defaultColumns = [
//         {
//             title: 'User',
//             dataIndex: 'user',
//         },
//         {
//             title: 'Limit',
//             children: [
//                 {
//                     title: 'Words',
//                     dataIndex: 'words',
//                     key: 'words',
//                     width: 200,
//                     editable: true,
//                     render: (text, record) => {
//                         return <Input name="words"  onChange={(e)=>console.log(e.target.value, text, record)} />
//                     }
//                 },
//                 {
//                     title: 'Serp',
//                     dataIndex: 'serp',
//                     key: 'serp',
//                     width: 200,
//                     render: (text, record) => {
//                         return <Input name="serp" defaultValue={50} />
//                     }
//                 },
//                 {
//                     title: 'Lookup',
//                     dataIndex: 'lookup',
//                     key: 'lookup',
//                     width: 200,
//                     render: (text, record, e) => {
//                         return <Input  name="lookup" defaultValue={100} />
//                     }
//                 }
//             ]
//         },
//         {
//             title: 'Action',
//             dataIndex: 'action',
//             width: 200,
//             render: (_, record) =>
//                 dataSource.length >= 1 ? (
//                     <Row justify="space-between">
//                         <Col span={10}>
//                             <Button type="primary" onClick={(e) => console.log('save record',record.key)}>
//                                 Save</Button>
//                         </Col>
//                         <Col span={10}>
//                             <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
//                                 <Button type="primary" danger >
//                                     Delete</Button>
//                             </Popconfirm>
//                         </Col>
//                     </Row>
//                 ) : null,
//         },
//     ];
//     const handleAdd = () => {
//         const newData = {
//             key: Date.now(),
//             user: 'admin 3',
//             words: <Input name="words1" defaultValue={5000} />,
//             serp: <Input name="serp1" defaultValue={50} />,
//             lookup: <Input name="lookup1" defaultValue={100} />,
//         };
//         setDataSource([newData, ...dataSource]);
//         setCount(count + 1);
//     };
//     const handleSave = (row) => {
//         const newData = [...dataSource];
//         const index = newData.findIndex((item) => row.key === item.key);
//         const item = newData[index];
//         console.log(item, row);
//         newData.splice(index, 1, { ...item, ...row });
//         setDataSource(newData);
//     };
//     const columns = defaultColumns.map((col) => {
//         return {
//           ...col,
//           onCell: (record) => {
//             console.log("oncell", record);
//             return {
//               record,
//               editable: col.editable,
//               dataIndex: col.dataIndex,
//               title: col.title,
//               handleSave,
//             };
//           },
//         };
//     });
//     return (
//         <div className="getgenie-info-wrapper">
//             <div className="getgenie-history">
//                 <Typography.Title level={2}>User Settings</Typography.Title>
//                 <Row>
//                     <Col className="gutter-row" span={4}>
//                         <Libs.Select label="Select Templates" name="selectedUser"
//                             options={
//                                 [{
//                                     "value": 1,
//                                     "label": "admin 1"
//                                 },
//                                 {
//                                     "value": 2,
//                                     "label": "admin 2"
//                                 },
//                                 {
//                                     "value": 3,
//                                     "label": "admin 3"
//                                 }]
//                             }
//                             placeholder="Select an user"
//                         />
//                     </Col>
//                     <Button
//                         onClick={handleAdd}
//                         type="primary"
//                         style={{
//                             marginBottom: 16,
//                         }}
//                     >
//                         Add new
//                     </Button>
//                 </Row>
//                 <Table
//                     bordered
//                     dataSource={dataSource}
//                     columns={columns}
//                 />
//             </div>
//         </div>
//     );
// };
// export default SettingsAdminPage;

/***/ }),

/***/ 184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}
;// CONCATENATED MODULE: external "React"
const external_React_namespaceObject = React;
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CopyOutlined.js
// This icon file is generated automatically.
var CopyOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, "name": "copy", "theme": "outlined" };
/* harmony default export */ const asn_CopyOutlined = (CopyOutlined);

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/Context.js

var IconContext = /*#__PURE__*/(0,external_React_namespaceObject.createContext)({});
/* harmony default export */ const Context = (IconContext);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@ctrl/tinycolor/dist/module/util.js
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function util_bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function util_pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

;// CONCATENATED MODULE: ./node_modules/@ctrl/tinycolor/dist/module/conversion.js

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: util_bound01(r, 255) * 255,
        g: util_bound01(g, 255) * 255,
        b: util_bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = util_bound01(h, 360);
    s = util_bound01(s, 100);
    l = util_bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = util_bound01(r, 255);
    g = util_bound01(g, 255);
    b = util_bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = util_bound01(h, 360) * 6;
    s = util_bound01(s, 100);
    v = util_bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        util_pad2(Math.round(r).toString(16)),
        util_pad2(Math.round(g).toString(16)),
        util_pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
        pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}

;// CONCATENATED MODULE: ./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

;// CONCATENATED MODULE: ./node_modules/@ctrl/tinycolor/dist/module/format-input.js



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

;// CONCATENATED MODULE: ./node_modules/@ant-design/colors/dist/index.esm.js


var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;



;// CONCATENATED MODULE: ./node_modules/rc-util/es/warning.js
/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if (false) {}
}
function note(valid, message) {
  // Support uglify
  if (false) {}
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ const es_warning = (warningOnce);
/* eslint-enable */
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js

var MARK_KEY = "rc-util-key";

function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      mark = _ref.mark;

  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }

  return MARK_KEY;
}

function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }

  var head = document.querySelector('head');
  return head || document.body;
}

function injectCSS(css) {
  var _option$csp;

  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!canUseDom()) {
    return null;
  }

  var styleNode = document.createElement('style');

  if ((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) {
    var _option$csp2;

    styleNode.nonce = (_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce;
  }

  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;

  if (option.prepend && container.prepend) {
    // Use `prepend` first
    container.prepend(styleNode);
  } else if (option.prepend && firstChild) {
    // Fallback to `insertBefore` like IE not support `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }

  return styleNode;
}
var containerCache = new Map();

function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return Array.from(containerCache.get(container).children).find(function (node) {
    return node.tagName === 'STYLE' && node.getAttribute(getMark(option)) === key;
  });
}

function removeCSS(key) {
  var _existNode$parentNode;

  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  existNode === null || existNode === void 0 ? void 0 : (_existNode$parentNode = existNode.parentNode) === null || _existNode$parentNode === void 0 ? void 0 : _existNode$parentNode.removeChild(existNode);
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option); // Get real parent

  if (!containerCache.has(container)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }

  var existNode = findExistNode(key, option);

  if (existNode) {
    var _option$csp3, _option$csp4;

    if (((_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce) && existNode.nonce !== ((_option$csp4 = option.csp) === null || _option$csp4 === void 0 ? void 0 : _option$csp4.nonce)) {
      var _option$csp5;

      existNode.nonce = (_option$csp5 = option.csp) === null || _option$csp5 === void 0 ? void 0 : _option$csp5.nonce;
    }

    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }

    return existNode;
  }

  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/utils.js







function utils_warning(valid, message) {
  es_warning(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function utils_generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/external_React_default().createElement(node.tag, _objectSpread2({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return utils_generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return /*#__PURE__*/external_React_default().createElement(node.tag, _objectSpread2(_objectSpread2({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return utils_generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4

var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;

  var _useContext = (0,external_React_namespaceObject.useContext)(Context),
      csp = _useContext.csp;

  (0,external_React_namespaceObject.useEffect)(function () {
    updateCSS(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/IconBase.js


var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];

var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
      className = props.className,
      onClick = props.onClick,
      style = props.style,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      restProps = _objectWithoutProperties(props, _excluded);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  useInsertStyles();
  utils_warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return utils_generate(target.icon, "svg-".concat(target.name), _objectSpread2({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
/* harmony default export */ const components_IconBase = (IconBase);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js



function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return components_IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = components_IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js




var AntdIcon_excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];





 // Initial setting
// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/external_React_namespaceObject.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      icon = props.icon,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      twoToneColor = props.twoToneColor,
      restProps = _objectWithoutProperties(props, AntdIcon_excluded);

  var _React$useContext = external_React_namespaceObject.useContext(Context),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames_default()(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/external_React_namespaceObject.createElement("span", _objectSpread2(_objectSpread2({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/external_React_namespaceObject.createElement(components_IconBase, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
/* harmony default export */ const AntdIcon = (Icon);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CopyOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CopyOutlined_CopyOutlined = function CopyOutlined(props, ref) {
  return /*#__PURE__*/external_React_namespaceObject.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: asn_CopyOutlined
  }));
};

CopyOutlined_CopyOutlined.displayName = 'CopyOutlined';
/* harmony default export */ const icons_CopyOutlined = (/*#__PURE__*/external_React_namespaceObject.forwardRef(CopyOutlined_CopyOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/WechatOutlined.js
// This icon file is generated automatically.
var WechatOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z" } }] }, "name": "wechat", "theme": "outlined" };
/* harmony default export */ const asn_WechatOutlined = (WechatOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/WechatOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var WechatOutlined_WechatOutlined = function WechatOutlined(props, ref) {
  return /*#__PURE__*/external_React_namespaceObject.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: asn_WechatOutlined
  }));
};

WechatOutlined_WechatOutlined.displayName = 'WechatOutlined';
/* harmony default export */ const icons_WechatOutlined = (/*#__PURE__*/external_React_namespaceObject.forwardRef(WechatOutlined_WechatOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
// This icon file is generated automatically.
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
/* harmony default export */ const asn_DownOutlined = (DownOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DownOutlined_DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/external_React_namespaceObject.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: asn_DownOutlined
  }));
};

DownOutlined_DownOutlined.displayName = 'DownOutlined';
/* harmony default export */ const icons_DownOutlined = (/*#__PURE__*/external_React_namespaceObject.forwardRef(DownOutlined_DownOutlined));
;// CONCATENATED MODULE: ./assets/src/admin/js/AdminPages/Partials/index.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Partials_slicedToArray(arr, i) { return Partials_arrayWithHoles(arr) || Partials_iterableToArrayLimit(arr, i) || Partials_unsupportedIterableToArray(arr, i) || Partials_nonIterableRest(); }

function Partials_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Partials_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Partials_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Partials_arrayLikeToArray(o, minLen); }

function Partials_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Partials_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Partials_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @fileoverview This page header is used in GetGenie admin pages
 * pages: write for me, license, history...
 */
var useState = wp.element.useState;

var _window$antd = window.antd,
    Affix = _window$antd.Affix,
    Row = _window$antd.Row,
    Col = _window$antd.Col,
    Popover = _window$antd.Popover,
    Button = _window$antd.Button;
var rowLayout = {
  gutter: 32
};

function HeaderAdminPage() {
  var _useState = useState(false),
      _useState2 = Partials_slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var text = /*#__PURE__*/React.createElement("span", null, "Title");
  var content = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://getgenie.ai/docs/"
  }, /*#__PURE__*/React.createElement(icons_CopyOutlined, null), " Documentation")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://getgenie.ai/support-ticket/"
  }, /*#__PURE__*/React.createElement(icons_WechatOutlined, null), " Help&Support")));
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(Affix, {
    offsetTop: 32,
    className: "getgenie-plugin-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-dashboard-header"
  }, /*#__PURE__*/React.createElement(Row, _extends({
    className: "getgenie-header-row"
  }, rowLayout), /*#__PURE__*/React.createElement(Col, {
    sm: 10,
    xs: 24
  }, /*#__PURE__*/React.createElement("span", {
    className: "getgenie-dashboard-header-tooltip"
  }, 'V' + window.getGenie.config.version || 0), /*#__PURE__*/React.createElement("img", {
    className: "getgenie-dashboard-header-image",
    src: "".concat(window.getGenie.config.assetsUrl, "/dist/admin/images/Genie_logo_black.svg"),
    alt: "Genie AI"
  })), /*#__PURE__*/React.createElement(Col, {
    sm: 10,
    xs: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-dashboard-header-dropdown"
  }, /*#__PURE__*/React.createElement(Popover, {
    placement: "bottom",
    content: content,
    overlayClassName: "getgenie-dashboard-header-dropdown-content",
    trigger: "click"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "getgenie-dashboard-header-dropdown-button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "getgenie-dashboard-header-dropdown-button-svg"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "19",
    viewBox: "0 0 20 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 15.4h3.6l4.005 2.664a.897.897 0 0 0 1.395-.747V15.4c2.7 0 4.5-1.8 4.5-4.5V5.5C19 2.8 17.2 1 14.5 1h-9C2.8 1 1 2.8 1 5.5v5.4c0 2.7 1.8 4.5 4.5 4.5Z",
    stroke: "#595A62",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.923 5.85a2.077 2.077 0 0 1 4.036.692c0 1.384-2.077 2.076-2.077 2.076",
    stroke: "#595A62",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.938 11.388h.007",
    stroke: "#595A62",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), " Help/Resources ", /*#__PURE__*/React.createElement(icons_DownOutlined, null)))))))));
}


;// CONCATENATED MODULE: ./assets/src/admin/js/AdminPages/HelpAdminPage/index.js
/**
 * @fileoverview This page is available in the GetGenie admin menu. 
 * Necessary links with support section is available here, 
 * Other plugin list with short desc
 * @see https://ibb.co/8Mrcb20
 */

function HelpAdminPage() {
  var imageUrl = "".concat(window.getGenie.config.assetsUrl, "dist/admin/images");
  var data = [{
    label: 'Support Center',
    desc: 'Our experienced support team is ready to resolve your issues any time.',
    image: "".concat(imageUrl, "/support.png"),
    url: "https://getgenie.ai/support-ticket/"
  }, {
    label: 'Join The Community',
    desc: 'Follow us and stay connected for all the latest news and updates of GetGenie AI.',
    image: "".concat(imageUrl, "/community.png"),
    url: "https://www.facebook.com/groups/792474565423684"
  }, {
    label: 'Video Tutorials',
    desc: 'Learn the step by step process for developing your site easily from video tutorials.',
    image: "".concat(imageUrl, "/videos.png"),
    url: "https://www.youtube.com/channel/UCzPzYrqhFgvyvmm0uoLG6Jw"
  }, {
    label: 'Request A Feature',
    desc: 'Have any special feature in mind? Let us know through the feature request.',
    image: "".concat(imageUrl, "/request.png"),
    url: "https://getgenie.ai/roadmap/"
  }, {
    label: 'Documentation',
    desc: 'Detailed documentation to help you understand the functionality of each feature.',
    image: "".concat(imageUrl, "/documentation.png"),
    url: "https://getgenie.ai/docs/"
  }, {
    label: 'Public Roadmap',
    desc: 'Check our upcoming new features, detailed development stories and tasks',
    image: "".concat(imageUrl, "/roadmaps.png"),
    url: "https://getgenie.ai/roadmap/"
  }];
  var products = [{
    label: 'ElementsKit',
    desc: 'All-in-One drag and drop Addons for Elementor',
    image: "".concat(imageUrl, "/elementskit.svg"),
    url: 'https://wpmet.com/plugin/elementskit/'
  }, {
    label: 'MetForm',
    desc: 'Most flexible drag-and-drop form builder',
    image: "".concat(imageUrl, "/metform-logo.svg"),
    url: 'https://wpmet.com/plugin/metform/'
  }, {
    label: 'ShopEngine',
    desc: 'All-in-one WooCommerce builder addon for Elementor',
    image: "".concat(imageUrl, "/shopengine.svg"),
    url: 'https://wpmet.com/plugin/shopengine/'
  }, {
    label: 'WP Social',
    desc: 'Integrate all your social media to your website',
    image: "".concat(imageUrl, "/wp-social-logo.svg"),
    url: 'https://wpmet.com/plugin/wp-social/'
  }, {
    label: 'Ultimate Review',
    desc: 'Integrate various styled review system in your website',
    image: "".concat(imageUrl, "/untimate-review.svg"),
    url: 'https://products.wpmet.com/review/?ref=wpmet'
  }, {
    label: "Fundraising & Donation Platform",
    desc: 'Enable donation system in your website',
    image: "".concat(imageUrl, "/fundraising.svg"),
    url: 'https://products.wpmet.com/crowdfunding/?ref=wpmet'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderAdminPage, {
    headerRightVisible: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-get-help-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-helpful-links"
  }, data.map(function (item, index) {
    return /*#__PURE__*/React.createElement("a", {
      key: index,
      className: "getgenie-help-card",
      href: item.url,
      target: "_blank"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: item.label
    }), /*#__PURE__*/React.createElement("label", null, item.label), /*#__PURE__*/React.createElement("span", null, item.desc));
  })), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-products"
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-products__header"
  }, /*#__PURE__*/React.createElement("h1", null, "Take your website to the next level"), /*#__PURE__*/React.createElement("p", null, "We have some plugins you can install to get most from Wordpress.", /*#__PURE__*/React.createElement("br", null), " These are absolute FREE to use.")), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-products__content"
  }, products.map(function (item, index) {
    return /*#__PURE__*/React.createElement("a", {
      key: index,
      className: "getgenie-help-card",
      href: item.url,
      target: "_blank"
    }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: item.label
    }), " ", item.label), /*#__PURE__*/React.createElement("span", null, item.desc));
  })))));
}
;// CONCATENATED MODULE: ./assets/src/admin/js/AdminPages/HistoryAdminPage/index.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || HistoryAdminPage_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return HistoryAdminPage_arrayLikeToArray(arr); }

function HistoryAdminPage_slicedToArray(arr, i) { return HistoryAdminPage_arrayWithHoles(arr) || HistoryAdminPage_iterableToArrayLimit(arr, i) || HistoryAdminPage_unsupportedIterableToArray(arr, i) || HistoryAdminPage_nonIterableRest(); }

function HistoryAdminPage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function HistoryAdminPage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return HistoryAdminPage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return HistoryAdminPage_arrayLikeToArray(o, minLen); }

function HistoryAdminPage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function HistoryAdminPage_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function HistoryAdminPage_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @fileoverview This page is available in the GetGenie admin menu. 
 * Previous records of user for generating templates, 
 * onclick a table row will show detailed info about the specific template generation
 * @see https://ibb.co/w6pVNn4
 */
var HistoryAdminPage_window$antd = window.antd,
    Form = HistoryAdminPage_window$antd.Form,
    Tooltip = HistoryAdminPage_window$antd.Tooltip,
    Typography = HistoryAdminPage_window$antd.Typography;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    HistoryAdminPage_useState = _wp$element.useState;
var _window$getGenie$Comp = window.getGenie.Components.Common.RequestManager,
    HandleFetch = _window$getGenie$Comp.HandleFetch,
    HandleResponse = _window$getGenie$Comp.HandleResponse;
var _window$getGenie$Comp2 = window.getGenie.Components.Common,
    Libs = _window$getGenie$Comp2.Libs,
    Utilities = _window$getGenie$Comp2.Utilities;
var ComposeComponents = window.getGenie.Components.Common.ReduxManager.ComposeComponents;

var HistoryAdminPage = ComposeComponents(function (_ref) {
  var setInput = _ref.setInput,
      getInputs = _ref.getInputs;

  var _useState = HistoryAdminPage_useState({}),
      _useState2 = HistoryAdminPage_slicedToArray(_useState, 2),
      clickedRow = _useState2[0],
      setClickedRow = _useState2[1];

  var _useState3 = HistoryAdminPage_useState([]),
      _useState4 = HistoryAdminPage_slicedToArray(_useState3, 2),
      historyDataList = _useState4[0],
      setHistoryDataList = _useState4[1];

  var _useState5 = HistoryAdminPage_useState(1),
      _useState6 = HistoryAdminPage_slicedToArray(_useState5, 2),
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var _useState7 = HistoryAdminPage_useState(false),
      _useState8 = HistoryAdminPage_slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = HistoryAdminPage_useState(false),
      _useState10 = HistoryAdminPage_slicedToArray(_useState9, 2),
      isModalVisible = _useState10[0],
      setIsModalVisible = _useState10[1];

  var _useState11 = HistoryAdminPage_useState(false),
      _useState12 = HistoryAdminPage_slicedToArray(_useState11, 2),
      showRowData = _useState12[0],
      setShowRowData = _useState12[1];

  var _useState13 = HistoryAdminPage_useState([]),
      _useState14 = HistoryAdminPage_slicedToArray(_useState13, 2),
      users = _useState14[0],
      setUsers = _useState14[1];

  var _useState15 = HistoryAdminPage_useState(false),
      _useState16 = HistoryAdminPage_slicedToArray(_useState15, 2),
      showClearBtn = _useState16[0],
      setShowClearBtn = _useState16[1];

  var _useState17 = HistoryAdminPage_useState(null),
      _useState18 = HistoryAdminPage_slicedToArray(_useState17, 2),
      showTooltip = _useState18[0],
      setShowTooltip = _useState18[1];

  var getHistoryData = function getHistoryData() {
    HandleFetch(function (res) {
      HandleResponse(res, function () {
        setHistoryDataList(res.data.history);
      });
      setLoading(false);
    }, 'historyData');
  };

  useEffect(function () {
    getHistoryData();
  }, []);
  var columns = [{
    title: "Template Name",
    dataIndex: "templateTitle",
    key: "templateTitle",
    width: '25%'
  }, {
    title: "Input",
    dataIndex: "input",
    key: "input",
    responsive: ['sm'],
    render: function render(data) {
      if (typeof data == 'string') {
        return data;
      }

      var input = '';

      for (var _i2 = 0, _Object$entries = Object.entries(data); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = HistoryAdminPage_slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        var result = key.replace(/([A-Z])/g, " $1");
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        input += "<strong>".concat(finalResult, ":</strong> ").concat(value, "; ");
      }

      return /*#__PURE__*/React.createElement("span", {
        key: "${key}",
        dangerouslySetInnerHTML: {
          __html: input
        }
      });
    }
  }, {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: '20%',
    responsive: ['md']
  }];
  /**
   * 
   * @param {object} r - user clicked row data as object
   * @return an onclick method to update state variables
   */

  var rowData = function rowData(r) {
    return {
      onClick: function onClick() {
        setShowRowData(true);
        setClickedRow(r);
        setIsModalVisible(true);
      }
    };
  };

  var loadMoreData = function loadMoreData() {
    setLoading(true);
    setCurrentPage(currentPage + 1);
    getHistoryData();
  };
  /** load user list using API call */


  var loadOptions = function loadOptions(inputValue) {
    HandleFetch(function (res) {
      HandleResponse(res, function () {
        setUsers([].concat(_toConsumableArray(users), _toConsumableArray(res.data.list)));
      });
    }, 'userList', {
      userId: inputValue
    });
  };
  /** throttling for input change to call api */


  var interval;

  var handleSelectInputChange = function handleSelectInputChange(input) {
    setLoadingUser(true);

    if (interval) {
      clearInterval(interval);
    }

    interval = setTimeout(function () {
      setLoadingUser(false);
      var updatedUsers = [].concat(_toConsumableArray(users), [{
        value: input,
        label: input
      }]);
      updatedUsers = updatedUsers.filter(function (item, index, array) {
        return array.findIndex(function (t) {
          return t.value == item.value && t.label == item.label;
        }) == index;
      });
      setUsers(updatedUsers);
    }, 3000);
  };

  var clearInputs = function clearInputs() {
    setInput('searchInput', '');
    setInput('dateRange', []);
    setInput('selectedUser', '');
    setShowClearBtn(false);
  };

  var onFinish = function onFinish() {
    setLoading(true);
    var data = {};
    data.page = currentPage;
    data.perPage = 20;
    data.searchKeyword = getInputs['searchInput'] || '';
    data.dateRange = (getInputs["dateRange"] || []).join('-');
    data.wpUser = getInputs['selectedUser'] || '';
    setCurrentPage(1);
    HandleFetch(function (res) {
      HandleResponse(res, function () {
        setHistoryData(res.data.list);
      });
    }, 'historyData', {});
    setTimeout(function () {
      setLoading(false);
    }, 2000);
    clearInputs();
    setShowClearBtn(false);
  };

  var copyTextAction = function copyTextAction(value) {
    document.querySelectorAll('.ant-tooltip').forEach(function (item) {
      return item.style.visibility = 'visible';
    });
    var copyAbleText = value.replace(/<br\/>/g, "");
    Utilities.GenieHelpers.copyToClipboard(copyAbleText).then(function () {
      setShowTooltip(value);
      setTimeout(function () {
        setShowTooltip(null);
      }, 2000);
    })["catch"](function () {
      return console.log('Error while copying.');
    });
  };

  var hideTooltip = function hideTooltip() {
    document.querySelectorAll('.ant-tooltip').forEach(function (item) {
      return item.style.visibility = 'hidden';
    });
  };

  useEffect(function () {
    var _getInputs$searchInpu, _getInputs$dateRange;

    if ((_getInputs$searchInpu = getInputs["searchInput"]) !== null && _getInputs$searchInpu !== void 0 && _getInputs$searchInpu.length || (_getInputs$dateRange = getInputs["dateRange"]) !== null && _getInputs$dateRange !== void 0 && _getInputs$dateRange.length || getInputs["selectedUser"]) {
      setShowClearBtn(true);
    } else {
      setShowClearBtn(false);
    }
  }, [getInputs['searchInput'], getInputs['dateRange'], getInputs['selectedUser']]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderAdminPage, null), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-info-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-history"
  }, /*#__PURE__*/React.createElement(Form, {
    layout: "vertical",
    onFinish: onFinish
  }, /*#__PURE__*/React.createElement(Typography.Title, {
    level: 2
  }, "Genie's History"), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-table"
  }, /*#__PURE__*/React.createElement(Libs.Table, {
    rowData: rowData,
    columns: columns,
    dataSource: historyDataList,
    pagination: true
  })), showRowData && /*#__PURE__*/React.createElement(Libs.Modal, {
    className: "getgenie-history-modal",
    closeIcon: /*#__PURE__*/React.createElement("span", {
      className: "getgenie-icon-close"
    }),
    isModalVisible: isModalVisible,
    setIsModalVisible: setIsModalVisible,
    onClose: hideTooltip,
    centered: true,
    footer: null
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-modal-date"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "gg-label"
  }, "Template Name: ", /*#__PURE__*/React.createElement("span", {
    className: "gg-value"
  }, clickedRow === null || clickedRow === void 0 ? void 0 : clickedRow.templateTitle)), /*#__PURE__*/React.createElement("h5", {
    className: "gg-label"
  }, "Creativity Level: ", /*#__PURE__*/React.createElement("span", {
    className: "gg-value"
  }, clickedRow === null || clickedRow === void 0 ? void 0 : clickedRow.creativityLevel)), /*#__PURE__*/React.createElement("h5", {
    className: "gg-label"
  }, "Created at: ", /*#__PURE__*/React.createElement("span", {
    className: "gg-value"
  }, clickedRow === null || clickedRow === void 0 ? void 0 : clickedRow.date))), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-modal-contents"
  }, /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3,
    className: "getgenie-modal-label"
  }, "Keyword Input"), typeof clickedRow.input == 'string' ? /*#__PURE__*/React.createElement("div", {
    className: "getgenie-text genieText"
  }, clickedRow.input) : Object.values(clickedRow.input).map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "getgenie-text genieText"
    }, /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: item
      }
    }), /*#__PURE__*/React.createElement(Tooltip, {
      placement: "right",
      title: showTooltip === item && "Copied",
      visible: showTooltip === item && isModalVisible
    }, /*#__PURE__*/React.createElement("span", {
      className: "getgenie-icon-copy",
      onClick: function onClick() {
        copyTextAction(item);
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-modal-contents"
  }, /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3,
    className: "getgenie-modal-label"
  }, "Generated Content", clickedRow.output.length < 1 ? ': 0' : ''), clickedRow.output.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "getgenie-text genieText"
    }, /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: item
      }
    }), /*#__PURE__*/React.createElement(Tooltip, {
      placement: "right",
      title: showTooltip === item && "Copied",
      visible: showTooltip === item && isModalVisible
    }, /*#__PURE__*/React.createElement("span", {
      className: "getgenie-icon-copy",
      onClick: function onClick() {
        copyTextAction(item);
      }
    })));
  })))))));
}, ["getInputs", "setInput"]);
/* harmony default export */ const AdminPages_HistoryAdminPage = (HistoryAdminPage);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js
// This icon file is generated automatically.
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
/* harmony default export */ const asn_CheckOutlined = (CheckOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CheckOutlined_CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/external_React_namespaceObject.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: asn_CheckOutlined
  }));
};

CheckOutlined_CheckOutlined.displayName = 'CheckOutlined';
/* harmony default export */ const icons_CheckOutlined = (/*#__PURE__*/external_React_namespaceObject.forwardRef(CheckOutlined_CheckOutlined));
;// CONCATENATED MODULE: ./assets/src/admin/js/AdminPages/LicenseAdminPage/index.js
function LicenseAdminPage_slicedToArray(arr, i) { return LicenseAdminPage_arrayWithHoles(arr) || LicenseAdminPage_iterableToArrayLimit(arr, i) || LicenseAdminPage_unsupportedIterableToArray(arr, i) || LicenseAdminPage_nonIterableRest(); }

function LicenseAdminPage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function LicenseAdminPage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LicenseAdminPage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LicenseAdminPage_arrayLikeToArray(o, minLen); }

function LicenseAdminPage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function LicenseAdminPage_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function LicenseAdminPage_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @fileoverview This page is available in the GetGenie admin menu. 
 * activation/remove license is maintained from here, 
 * user stats table is available with subscription and current site limit, usage
 * @see https://ibb.co/Nywr6qf
 */
var LicenseAdminPage_wp$element = wp.element,
    LicenseAdminPage_useState = LicenseAdminPage_wp$element.useState,
    LicenseAdminPage_useEffect = LicenseAdminPage_wp$element.useEffect;
var LicenseAdminPage_window$antd = window.antd,
    LicenseAdminPage_Button = LicenseAdminPage_window$antd.Button,
    Divider = LicenseAdminPage_window$antd.Divider,
    LicenseAdminPage_Form = LicenseAdminPage_window$antd.Form,
    Spin = LicenseAdminPage_window$antd.Spin,
    LicenseAdminPage_Typography = LicenseAdminPage_window$antd.Typography;


var LicenseAdminPage_window$getGenie$Comp = window.getGenie.Components.Common.RequestManager,
    LicenseAdminPage_HandleFetch = LicenseAdminPage_window$getGenie$Comp.HandleFetch,
    LicenseAdminPage_HandleResponse = LicenseAdminPage_window$getGenie$Comp.HandleResponse;
var LicenseAdminPage_Libs = window.getGenie.Components.Common.Libs;
var LicenseAdminPage_ComposeComponents = window.getGenie.Components.Common.ReduxManager.ComposeComponents;
var LicenseAdminPage = LicenseAdminPage_ComposeComponents(function (_ref) {
  var _window$getGenie$conf, _window$getGenie$conf2;

  var getInputs = _ref.getInputs,
      limitUsage = _ref.limitUsage,
      setLimitUsage = _ref.setLimitUsage;
  var allURL = {
    wpmet: 'https://account.wpmet.com/',

    /* Used in license page */
    shopengine: 'https://wpmet.com/plugin/shopengine/',

    /* Used in license page to display shopEngine landing page*/
    support: 'https://wpmet.com/support-ticket-form/',

    /* Used in license page */
    doc: 'https://wpmet.com/knowledgebase/shopengine/',

    /* Used in license page */
    fbGroup: 'https://go.wpmet.com/facebook-group',

    /* Used in header */
    idea: 'https://wpmet.com/plugin/shopengine/roadmaps/#ideas',

    /* Used in header for freature request and share idea */
    roadmap: 'https://wpmet.com/plugin/shopengine/roadmaps/',

    /* Used in header  to show roadmap*/
    videos: 'https://www.youtube.com/playlist?list=PL3t2OjZ6gY8OHctiBYbNj_h0uL70QV8eF'
    /* Youtube video tutorial playlist*/

  };

  var _useState = LicenseAdminPage_useState(false),
      _useState2 = LicenseAdminPage_slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = LicenseAdminPage_useState(false),
      _useState4 = LicenseAdminPage_slicedToArray(_useState3, 2),
      loadingTable = _useState4[0],
      setLoadingTable = _useState4[1];

  var _useState5 = LicenseAdminPage_useState('Current site'),
      _useState6 = LicenseAdminPage_slicedToArray(_useState5, 2),
      currentSite = _useState6[0],
      setCurrentSite = _useState6[1];

  var _useState7 = LicenseAdminPage_useState(limitUsage.sites),
      _useState8 = LicenseAdminPage_slicedToArray(_useState7, 2),
      siteData = _useState8[0],
      setSiteData = _useState8[1];

  var _useState9 = LicenseAdminPage_useState(limitUsage.subscriptions),
      _useState10 = LicenseAdminPage_slicedToArray(_useState9, 2),
      subscriptionData = _useState10[0],
      setSubscriptionData = _useState10[1];

  var _useState11 = LicenseAdminPage_useState(window.getGenie.config.siteToken),
      _useState12 = LicenseAdminPage_slicedToArray(_useState11, 2),
      status = _useState12[0],
      setStatus = _useState12[1];

  var inActiveLicenseText = /*#__PURE__*/React.createElement("p", null, " Still can't find your license key? ", /*#__PURE__*/React.createElement("a", {
    href: allURL.support,
    target: "_blank"
  }, " Knock us here!  "), " ");

  var _useState13 = LicenseAdminPage_useState(inActiveLicenseText),
      _useState14 = LicenseAdminPage_slicedToArray(_useState13, 2),
      statusText = _useState14[0],
      setStatusText = _useState14[1];

  LicenseAdminPage_useEffect(function () {
    if (status) {
      setStatusText("Your License Is Activated");
      getUsage();
    }
  }, []);

  var titleCase = function titleCase(str) {
    var initial = str.replace(/^[_]*(.)/, function (_, _char) {
      return _char.toUpperCase();
    });
    var result = initial.replace(/[_]+(.)/g, function (_, _char2) {
      return ' ' + _char2.toUpperCase();
    });
    return result;
  };

  var prepareUsageData = function prepareUsageData(result) {
    var values = Object.values(result);

    if (values.length === 0) {
      return;
    }

    var limit = (result === null || result === void 0 ? void 0 : result.limits) || {};
    var usage = (result === null || result === void 0 ? void 0 : result.usages) || {};
    var data = Object.keys(limit).map(function (key) {
      var arr = [];
      var limitValue = (limit === null || limit === void 0 ? void 0 : limit[key]) || '~';
      var usageValue = (usage === null || usage === void 0 ? void 0 : usage[key]) || 0;
      arr.push("".concat(titleCase(key), ": ").concat(limitValue));
      arr.push("".concat(titleCase(key), ": ").concat(usageValue));
      /** set 0 if subtraction result is negative */

      arr.push("".concat(titleCase(key), ": ").concat(isNaN(limitValue) ? '~' : Math.max(0, limitValue - usageValue) || 0));
      return arr;
    });
    return data || [];
  };

  var getUsage = function getUsage() {
    if (siteData.length > 0 && subscriptionData.length > 0) {
      return;
    }

    setLoadingTable(true);
    LicenseAdminPage_HandleFetch(function (res) {
      LicenseAdminPage_HandleResponse(res, function () {
        var _res$data, _subscriptionDataResp, _Object$values, _res$data2, _Object$keys, _res$data3;

        var subscriptionDataResponse = Object.values((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.subscriptionUsagesLimit) || {}) || [];
        subscriptionDataResponse = (_subscriptionDataResp = subscriptionDataResponse) === null || _subscriptionDataResp === void 0 ? void 0 : _subscriptionDataResp.find(function (item) {
          return (item === null || item === void 0 ? void 0 : item.type) === 'subscription';
        });
        var subscriptionResult = prepareUsageData(subscriptionDataResponse || {});
        var domainResult = prepareUsageData(((_Object$values = Object.values((res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.siteUsagesLimit) || {})) === null || _Object$values === void 0 ? void 0 : _Object$values[0]) || {});
        setCurrentSite(((_Object$keys = Object.keys((res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.siteUsagesLimit) || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys[0]) || 'Current site');
        setSubscriptionData(subscriptionResult);
        setSiteData(domainResult);
        setLimitUsage({
          sites: domainResult,
          subscriptions: subscriptionResult
        });
      });
      setLoadingTable(false);
    }, 'limitUsage');
  };

  var onSubmitKey = function onSubmitKey() {
    var data = {
      license: getInputs['licenseKey']
    };
    setLoading(true);
    LicenseAdminPage_HandleFetch(function (res) {
      LicenseAdminPage_HandleResponse(res, function () {
        window.location.reload();
      });
      setLoading(false);
    }, 'getLicenseToken', data);
  };
  /*
      On removing license key  
  */


  var removeLicenseKeyProcessor = function removeLicenseKeyProcessor() {
    setLoading(true);
    LicenseAdminPage_HandleFetch(function (res) {
      LicenseAdminPage_HandleResponse(res, function () {
        window.location.reload();
      });
      setLoading(false);
    }, 'removeLicenseToken');
  };
  /** open modal for confirmation */


  var onRemoveKey = function onRemoveKey() {
    LicenseAdminPage_Libs.ConfirmModal('Are you sure to remove license from this site?', '', removeLicenseKeyProcessor);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderAdminPage, null), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-info-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-license-page ".concat(status)
  },
  /** Show heading and instruction when license is not activated */
  !status && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LicenseAdminPage_Typography.Title, {
    level: 2
  }, "License Settings"), /*#__PURE__*/React.createElement(LicenseAdminPage_Typography.Text, {
    strong: true,
    level: 2
  }, "You'll need a license to use both the free and pro version of GetGenie AI.", /*#__PURE__*/React.createElement(LicenseAdminPage_Button, {
    style: {
      boxShadow: 'none'
    },
    ghost: true,
    type: "link",
    href: "https://app.getgenie.ai/license/?product=free-trial",
    target: "_blank"
  }, "Claim your license here \u2192")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("h3", null, "If you have the license key, paste the code below and activate your subscription."), /*#__PURE__*/React.createElement("p", null, "Or, follow the steps below to activate the Genie AI plugin:"), /*#__PURE__*/React.createElement("ul", {
    className: "getgenie-license-page__steps"
  }, /*#__PURE__*/React.createElement("li", null, "Log in to your GetGenie account."), /*#__PURE__*/React.createElement("li", null, "Generate a license key from Product Licenses then Manage Licenses."), /*#__PURE__*/React.createElement("li", null, "Copy the license key text and paste it inside the input box below."))), /*#__PURE__*/React.createElement(LicenseAdminPage_Form, {
    className: "getgenie-license-form",
    layout: "vertical",
    onFinish: onSubmitKey
  },
  /* Show license input box when it's not activated */
  !status && /*#__PURE__*/React.createElement(LicenseAdminPage_Libs.Input, {
    name: "licenseKey",
    required: true,
    maxLength: (_window$getGenie$conf = window.getGenie.config) === null || _window$getGenie$conf === void 0 ? void 0 : _window$getGenie$conf.licenseKeyLength,
    errorMessage: "Your key is empty!",
    label: "Your License Key",
    placeholder: "Please insert your license key here"
  }), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-license-page--status ".concat(status ? 'valid' : 'invalid')
  }, " ", statusText, " "), status && /*#__PURE__*/React.createElement(Spin, {
    tip: "Loading...",
    spinning: loadingTable
  }, /*#__PURE__*/React.createElement(LicenseAdminPage_Typography.Title, {
    level: 4
  }, "Subscription stats:"), /*#__PURE__*/React.createElement("table", {
    className: "user-stats-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Limit"), /*#__PURE__*/React.createElement("th", null, "Usage"), /*#__PURE__*/React.createElement("th", null, "Usage Left"))), /*#__PURE__*/React.createElement("tbody", null, loadingTable ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Word Generate:"), /*#__PURE__*/React.createElement("td", null, "Word Generate:"), /*#__PURE__*/React.createElement("td", null, "Word Generate:")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Serp Analysis:"), /*#__PURE__*/React.createElement("td", null, "Serp Analysis:"), /*#__PURE__*/React.createElement("td", null, "Serp Analysis:")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Keyword Lookup:"), /*#__PURE__*/React.createElement("td", null, "Keyword Lookup:"), /*#__PURE__*/React.createElement("td", null, "Keyword Lookup:"))) : subscriptionData === null || subscriptionData === void 0 ? void 0 : subscriptionData.map(function (item, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: index
    }, /*#__PURE__*/React.createElement("td", null, item[0]), /*#__PURE__*/React.createElement("td", null, item[1]), /*#__PURE__*/React.createElement("td", null, item[2]));
  })))), status && /*#__PURE__*/React.createElement(Spin, {
    tip: "Loading...",
    spinning: loadingTable
  }, /*#__PURE__*/React.createElement(LicenseAdminPage_Typography.Title, {
    level: 4
  }, currentSite, " usage stats:"), /*#__PURE__*/React.createElement("table", {
    className: "user-stats-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Limit"), /*#__PURE__*/React.createElement("th", null, "Usage"), /*#__PURE__*/React.createElement("th", null, "Usage Left"))), /*#__PURE__*/React.createElement("tbody", null, loadingTable ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Word Generate:"), /*#__PURE__*/React.createElement("td", null, "Word Generate:"), /*#__PURE__*/React.createElement("td", null, "Word Generate:")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Serp Analysis:"), /*#__PURE__*/React.createElement("td", null, "Serp Analysis:"), /*#__PURE__*/React.createElement("td", null, "Serp Analysis:")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Keyword Lookup:"), /*#__PURE__*/React.createElement("td", null, "Keyword Lookup:"), /*#__PURE__*/React.createElement("td", null, "Keyword Lookup:"))) : siteData === null || siteData === void 0 ? void 0 : siteData.map(function (item, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: index
    }, /*#__PURE__*/React.createElement("td", null, item[0]), /*#__PURE__*/React.createElement("td", null, item[1]), /*#__PURE__*/React.createElement("td", null, item[2]));
  })))),
  /* Show license button when it's not activated */
  !status && /*#__PURE__*/React.createElement(LicenseAdminPage_Libs.Button, {
    className: "getgenie-license-active",
    loading: loading,
    icon: /*#__PURE__*/React.createElement(icons_CheckOutlined, null),
    type: "primary",
    htmlType: "submit",
    disabled: (getInputs['licenseKey'] || '').length != ((_window$getGenie$conf2 = window.getGenie.config) === null || _window$getGenie$conf2 === void 0 ? void 0 : _window$getGenie$conf2.licenseKeyLength),
    size: "large"
  }, " ACTIVATE NOW")),
  /* Show remove button when it's activated */
  status && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-item-flex"
  }, /*#__PURE__*/React.createElement(LicenseAdminPage_Libs.Button, {
    loading: loading,
    onClick: onRemoveKey,
    type: "danger",
    size: "large"
  }, " Remove license from this domain "), /*#__PURE__*/React.createElement("p", null, " See documentation ", /*#__PURE__*/React.createElement("a", {
    href: "https://getgenie.ai/docs/getting-started/license-settings/",
    target: "_blank"
  }, " here "), " "))))));
}, ["getInputs", "limitUsage", "setLimitUsage"]);
/* harmony default export */ const AdminPages_LicenseAdminPage = (LicenseAdminPage);
// EXTERNAL MODULE: ./assets/src/admin/js/AdminPages/SettingsAdminPage/index.js
var SettingsAdminPage = __webpack_require__(150);
var SettingsAdminPage_default = /*#__PURE__*/__webpack_require__.n(SettingsAdminPage);
;// CONCATENATED MODULE: ./assets/src/admin/js/TemplateWizard/AdditionalWizards.js
/** adding blog wizard to the template list */
var AdditionalWizards = [{
  title: "Blog Wizard",
  templateSlug: "blogWizard",
  description: "Get your blog article SERP-ready — from analyzing the keywords to generating content that ranks",
  categories: {
    general: {
      title: "General",
      slug: "general"
    }
  }
}, {
  title: "WooCommerce Wizard",
  templateSlug: "wooWizard",
  description: "Get conversion-friendly & SEO-optimized content for WooCommerce Product pages",
  categories: {
    general: {
      title: "General",
      slug: "general"
    }
  }
}];
/* harmony default export */ const TemplateWizard_AdditionalWizards = (AdditionalWizards);
;// CONCATENATED MODULE: ./assets/src/admin/js/AdminPages/WriteForMeAdminPage/index.js
function WriteForMeAdminPage_slicedToArray(arr, i) { return WriteForMeAdminPage_arrayWithHoles(arr) || WriteForMeAdminPage_iterableToArrayLimit(arr, i) || WriteForMeAdminPage_unsupportedIterableToArray(arr, i) || WriteForMeAdminPage_nonIterableRest(); }

function WriteForMeAdminPage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function WriteForMeAdminPage_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function WriteForMeAdminPage_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function WriteForMeAdminPage_toConsumableArray(arr) { return WriteForMeAdminPage_arrayWithoutHoles(arr) || WriteForMeAdminPage_iterableToArray(arr) || WriteForMeAdminPage_unsupportedIterableToArray(arr) || WriteForMeAdminPage_nonIterableSpread(); }

function WriteForMeAdminPage_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function WriteForMeAdminPage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return WriteForMeAdminPage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return WriteForMeAdminPage_arrayLikeToArray(o, minLen); }

function WriteForMeAdminPage_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function WriteForMeAdminPage_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return WriteForMeAdminPage_arrayLikeToArray(arr); }

function WriteForMeAdminPage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var WriteForMeAdminPage_Libs = window.getGenie.Components.Common.Libs;
var WriteForMeAdminPage_window$antd = window.antd,
    WriteForMeAdminPage_Col = WriteForMeAdminPage_window$antd.Col,
    Input = WriteForMeAdminPage_window$antd.Input,
    WriteForMeAdminPage_Row = WriteForMeAdminPage_window$antd.Row;
var WriteForMeAdminPage_ComposeComponents = window.getGenie.Components.Common.ReduxManager.ComposeComponents;

var WriteForMeAdminPage_useState = wp.element.useState;

/**
 * @function WriteForMeAdminPage
 * @type {React.FC<WriteForMeAdminPage>}
 * @param {function} ComposeComponents - access properties from redux store. this function maps redux action list with component
 * @see {@link ComposeComponents} 
 * @description This page is available in the GetGenie admin menu. 
 * all templates list is available here and user can write template by clicking on any template.
 * this page is the dashboard of genie admin site
 * @see {@link https://ibb.co/nRqGKFm UI}
 * @returns {React.ReactElement} Outline screen of Blog Wizard
 */

var WriteForMeAdminPage = WriteForMeAdminPage_ComposeComponents(function (_ref) {
  var setSidebar = _ref.setSidebar,
      sidebar = _ref.sidebar,
      templates = _ref.templates;
  var templateArray = [].concat(WriteForMeAdminPage_toConsumableArray(TemplateWizard_AdditionalWizards), WriteForMeAdminPage_toConsumableArray(templates.list));

  var _useState = WriteForMeAdminPage_useState(templateArray),
      _useState2 = WriteForMeAdminPage_slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];
  /**
   * @function
   * @param {Event} e 
   * @param {Object} item properties of clicked content
   * @desc update the current template
   */


  var handleClick = function handleClick(e, item) {
    if (item.templateSlug == 'blogWizard') {
      var _window$getGenie$conf;

      if (((_window$getGenie$conf = window.getGenie.config) === null || _window$getGenie$conf === void 0 ? void 0 : _window$getGenie$conf.wizardScreen) !== 'post') {
        var _window$getGenie$conf2, _window$getGenie$conf3;

        window.open((_window$getGenie$conf2 = window.getGenie.config) === null || _window$getGenie$conf2 === void 0 ? void 0 : (_window$getGenie$conf3 = _window$getGenie$conf2.wizardScreenUrl) === null || _window$getGenie$conf3 === void 0 ? void 0 : _window$getGenie$conf3.post, '_blank');
        return;
      }
    } else if (item.templateSlug == 'wooWizard') {
      var _window$getGenie$conf4, _window$getGenie$conf5;

      if (!((_window$getGenie$conf4 = window.getGenie.config) !== null && _window$getGenie$conf4 !== void 0 && _window$getGenie$conf4.wcActivated)) {
        WriteForMeAdminPage_Libs.ErrorModal({
          title: 'Plugin not found!',
          content: 'WooCommerce is not installed or activated yet.'
        });
        return;
      }

      if (((_window$getGenie$conf5 = window.getGenie.config) === null || _window$getGenie$conf5 === void 0 ? void 0 : _window$getGenie$conf5.wizardScreen) !== 'woo_product') {
        var _window$getGenie$conf6, _window$getGenie$conf7;

        window.open((_window$getGenie$conf6 = window.getGenie.config) === null || _window$getGenie$conf6 === void 0 ? void 0 : (_window$getGenie$conf7 = _window$getGenie$conf6.wizardScreenUrl) === null || _window$getGenie$conf7 === void 0 ? void 0 : _window$getGenie$conf7.woo_product, '_blank');
        return;
      }
    }

    var component = 'WriteTemplatesScreen';
    setSidebar({
      open: true,
      enableFooter: false,
      component: component,
      currentTemplate: item.templateSlug
    });
  };

  var handleSearchTemplate = function handleSearchTemplate(e) {
    var searchInput = e.target.value.toLowerCase();
    var updatedTemplates = templateArray.filter(function (item) {
      return item.title.toLowerCase().includes(searchInput);
    });
    setList(updatedTemplates);
  }; // useEffect(() => {
  //     const items = document.querySelectorAll('[data-slug="blogWizard"]') || [];
  //     for (const item of items) {
  //         item.closest('.ant-card-bordered').classList.add('getgenie-wizard-card')
  //     }
  // }, [])


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderAdminPage, null), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-info-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-dashboard-templates getgenie-license-page"
  }, /*#__PURE__*/React.createElement(WriteForMeAdminPage_Row, null, /*#__PURE__*/React.createElement(WriteForMeAdminPage_Col, {
    span: 24,
    md: 16
  }, /*#__PURE__*/React.createElement("h5", {
    className: "getgenie-title"
  }, "Write Using Templates")), /*#__PURE__*/React.createElement(WriteForMeAdminPage_Col, {
    span: 24,
    md: 8
  }, /*#__PURE__*/React.createElement(Input, {
    onChange: handleSearchTemplate,
    bordered: false,
    className: "template-search",
    placeholder: "Search...",
    suffix: /*#__PURE__*/React.createElement("span", {
      className: "getgenie-icon-search"
    })
  }))), list.length === 0 ? /*#__PURE__*/React.createElement("h4", {
    className: "getgenie-not-found-title"
  }, "No template found") : /*#__PURE__*/React.createElement(WriteForMeAdminPage_Libs.Card, {
    list: list,
    column: 3,
    handleClick: handleClick
  }, function (item) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h5", {
      "data-slug": item === null || item === void 0 ? void 0 : item.templateSlug,
      className: "template-title"
    }, item.title), /*#__PURE__*/React.createElement("p", {
      className: "template-description"
    }, item === null || item === void 0 ? void 0 : item.description));
  }))));
}, ['setSidebar', 'sidebar', 'templates']);
/* harmony default export */ const AdminPages_WriteForMeAdminPage = (WriteForMeAdminPage);
;// CONCATENATED MODULE: ./assets/src/admin/js/AdminPages/GettingStarted/index.js

var GettingStarted_window$antd = window.antd,
    Card = GettingStarted_window$antd.Card,
    GettingStarted_Row = GettingStarted_window$antd.Row,
    GettingStarted_Col = GettingStarted_window$antd.Col;
function GettingStarted() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderAdminPage, {
    headerRightVisible: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-getting-started"
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-getting-started-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "getgenie-getting-started-header-title"
  }, "Get Started with GetGenie"), /*#__PURE__*/React.createElement("p", {
    className: "getgenie-getting-started-header-description"
  }, "Setting up GetGenie AI takes only a few minutes! Simply go through the \u201CGetting Started\u201D video, click ", /*#__PURE__*/React.createElement("br", null), " the buttons below, and voila \u2014 the AI magic is ready for you!")), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-getting-started-top_video"
  }, /*#__PURE__*/React.createElement("iframe", {
    className: "getgenie-getting-started-top_video-iframe",
    src: "https://www.youtube.com/embed/jFxSqM0R8O4",
    title: "YouTube video player",
    frameBorder: "2",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-getting-started-top_video-button-container"
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    className: "getgenie-getting-started-top_video-button",
    href: "https://app.getgenie.ai/license/?product=free-trial"
  }, "Manage Your License"), /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    className: "getgenie-getting-started-top_video-button",
    href: "https://getgenie.ai/docs/getting-started/getting-started-with-getgenie-ai/"
  }, "Read the Documentation"))), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-getting-started-card-container"
  }, /*#__PURE__*/React.createElement(GettingStarted_Row, {
    gutter: [16, 16]
  }, /*#__PURE__*/React.createElement(GettingStarted_Col, {
    sm: 24,
    lg: 8
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", null, "Write Blog Posts with AI"), /*#__PURE__*/React.createElement("p", null, "Learn how you can generate an entire blog post customized to your needs using the \u201CBlog Writing Assistant\u201D of GetGenie"), /*#__PURE__*/React.createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/5lIwXUS8QHE",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    className: "getgenie-getting-started-card-container-documentation-btn",
    href: "https://getgenie.ai/docs/how-to-tutorials/getgenie-ai-blog-wizard/"
  }, "Read the Documentation"))), /*#__PURE__*/React.createElement(GettingStarted_Col, {
    sm: 24,
    lg: 8
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", null, "SEO Optimize Your Content"), /*#__PURE__*/React.createElement("p", null, "Watch how you can optimize the generated content for SEO on the go using the SEO mode & On-Page Content Score of GetGenie"), /*#__PURE__*/React.createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/yDC6kC3NDUQ",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    className: "getgenie-getting-started-card-container-documentation-btn",
    href: "https://getgenie.ai/docs/seo-assistant/getgenie-seo-features/"
  }, "Read the Documentation"))), /*#__PURE__*/React.createElement(GettingStarted_Col, {
    sm: 24,
    lg: 8
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", null, "Utilize 30+ AI Templates"), /*#__PURE__*/React.createElement("p", null, "Learn how to use 30+ GetGenie templates to generate content & copies (AIDA template has been shown as an example)"), /*#__PURE__*/React.createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/gBrzoRkp6OA",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    className: "getgenie-getting-started-card-container-documentation-btn",
    href: "https://getgenie.ai/docs/getting-started/getgenie-ai-templates-walkthtough/"
  }, "Read the Documentation"))))), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-getting-started-resource"
  }, /*#__PURE__*/React.createElement("h3", null, "More Resources to Check Out"), /*#__PURE__*/React.createElement(GettingStarted_Row, {
    gutter: [8, 16]
  }, /*#__PURE__*/React.createElement(GettingStarted_Col, {
    sm: 24,
    lg: 12,
    offset: 6
  }, /*#__PURE__*/React.createElement(Card, {
    className: "getgenie-getting-started-resource-card"
  }, /*#__PURE__*/React.createElement("h4", null, "Documentation"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://getgenie.ai/docs-category/templates/"
  }, "Templates")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://getgenie.ai/docs/seo-assistant/getgenie-seo-features/"
  }, "GetGenie SEO Features")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://getgenie.ai/docs-category/how-to-tutorials/"
  }, "How to Tutorials")))))))));
}
;// CONCATENATED MODULE: ./assets/src/admin/js/wp-admin-pages.js






window.getGenie.Components.AdminPages = {
  HelpAdminPage: HelpAdminPage,
  HistoryAdminPage: AdminPages_HistoryAdminPage,
  LicenseAdminPage: AdminPages_LicenseAdminPage,
  SettingsAdminPage: (SettingsAdminPage_default()),
  WriteForMeAdminPage: AdminPages_WriteForMeAdminPage,
  GettingStarted: GettingStarted
};
})();

/******/ })()
;