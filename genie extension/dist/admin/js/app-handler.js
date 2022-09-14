/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 855:
/***/ (() => {

var _window$getGenie$conf;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @overview the redux store with its properties, actions and selectors are defined here.
 * the actions are used in several components with combined by ComposeComponents
 */
var _wp$data = wp.data,
    createReduxStore = _wp$data.createReduxStore,
    register = _wp$data.register;
var DEFAULT_STATE = {
  inputs: {},
  sidebar: {
    currentPostContent: '',
    statisticsScreen: {
      triggered: false,
      loading: false
    },
    statisticsData: '',
    currentTemplate: '',
    analyzedContent: {},
    toolbarWriting: false,

    /** to identify whether toolbar writing mode is on or off */
    globalTemplateMode: false,
    component: '',
    open: false,

    /** toggle sidebar */
    analyzeKeyword: {
      open: false
    },
    analyzingSearchVolume: false,

    /** loading variable for search volume */
    analyzingRelatedKeyword: false,

    /** loading variable for related keyword */
    generatedOutlines: {
      open: false,
      loading: false
    },
    insertTextCallback: function insertTextCallback() {
      return '';
    },
    insertTextField: null,
    imageUrl: "".concat(window.getGenie.config.assetsUrl, "dist/admin/images")
  },
  templates: {
    list: Object.values(((_window$getGenie$conf = window.getGenie.config) === null || _window$getGenie$conf === void 0 ? void 0 : _window$getGenie$conf.templateList) || {})
  },
  limitUsage: {
    sites: [],
    subscriptions: []
  }
};
var actions = {
  setSidebar: function setSidebar(value) {
    return {
      type: 'SET_SIDEBAR',
      value: value
    };
  },
  setCurrentTemplate: function setCurrentTemplate(value) {
    return {
      type: 'SET_CURRENT_TEMPLATE',
      value: value
    };
  },
  setInput: function setInput(name, value) {
    return {
      type: 'SET_INPUT',
      name: name,
      value: value
    };
  },
  setTemplates: function setTemplates(value) {
    return {
      type: 'SET_TEMPLATES',
      value: value
    };
  },
  setLimitUsage: function setLimitUsage(value) {
    return {
      type: 'SET_LIMIT_USAGE',
      value: value
    };
  },
  resetSidebar: function resetSidebar(value) {
    return {
      type: 'RESET_SIDEBAR',
      value: value
    };
  },
  resetTemplateInputs: function resetTemplateInputs(value) {
    return {
      type: 'RESET_TEMPLATE_INPUTS',
      value: value
    };
  }
};
var store = createReduxStore('getgenie', {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SET_SIDEBAR':
        return _objectSpread(_objectSpread({}, state), {}, {
          sidebar: _objectSpread(_objectSpread({}, state.sidebar), action.value)
        });

      case 'SET_CURRENT_TEMPLATE':
        return _objectSpread(_objectSpread({}, state), {}, {
          currentTemplate: action.value
        });

      case 'SET_INPUT':
        return _objectSpread(_objectSpread({}, state), {}, {
          inputs: _objectSpread(_objectSpread({}, state.inputs), {}, _defineProperty({}, state.sidebar.currentTemplate, _objectSpread(_objectSpread({}, state.inputs[state.sidebar.currentTemplate] || {}), {}, _defineProperty({}, action.name, action.value))))
        });

      case 'SET_TEMPLATES':
        return _objectSpread(_objectSpread({}, state), {}, {
          templates: _objectSpread(_objectSpread({}, state.templates), action.value)
        });

      case 'SET_LIMIT_USAGE':
        return _objectSpread(_objectSpread({}, state), {}, {
          limitUsage: _objectSpread(_objectSpread({}, state.limitUsage), action.value)
        });

      case 'RESET_SIDEBAR':
        return _objectSpread(_objectSpread({}, state), {}, {
          sidebar: DEFAULT_STATE.sidebar
        });

      case 'RESET_TEMPLATE_INPUTS':
        var inputs = _objectSpread({}, state.inputs);

        delete inputs[action.value];
        return _objectSpread(_objectSpread({}, state), {}, {
          inputs: inputs
        });
    }

    return state;
  },
  actions: actions,
  selectors: {
    sidebar: function sidebar(state) {
      return state.sidebar;
    },
    getCurrentTemplate: function getCurrentTemplate(state) {
      return state.currentTemplate;
    },
    getInputs: function getInputs(state) {
      return state.inputs[state.sidebar.currentTemplate] || {};
    },
    getTemplateInputs: function getTemplateInputs(state) {
      return state.inputs;
    },
    templates: function templates(state) {
      return state.templates;
    },
    limitUsage: function limitUsage(state) {
      return state.limitUsage;
    }
  }
});
register(store);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// NAMESPACE OBJECT: ./assets/src/admin/js/RequestManager/EndPoints.js
var EndPoints_namespaceObject = {};
__webpack_require__.r(EndPoints_namespaceObject);
__webpack_require__.d(EndPoints_namespaceObject, {
  "competitorData": () => (competitorData),
  "contentFeedback": () => (contentFeedback),
  "continueWriting": () => (continueWriting),
  "countryList": () => (countryList),
  "createHistoryUrl": () => (createHistoryUrl),
  "expandOutline": () => (expandOutline),
  "getLicenseToken": () => (getLicenseToken),
  "historyData": () => (historyData),
  "keywordsData": () => (keywordsData),
  "limitUsage": () => (limitUsage),
  "outlines": () => (outlines),
  "removeLicenseToken": () => (removeLicenseToken),
  "storeApiUrl": () => (storeApiUrl),
  "userList": () => (userList),
  "writeIntro": () => (writeIntro),
  "writeTemplates": () => (writeTemplates),
  "writeTitle": () => (writeTitle)
});

// NAMESPACE OBJECT: ./assets/src/admin/js/RequestManager/index.js
var RequestManager_namespaceObject = {};
__webpack_require__.r(RequestManager_namespaceObject);
__webpack_require__.d(RequestManager_namespaceObject, {
  "EndPoints": () => (EndPoints_namespaceObject),
  "HandleFetch": () => (HandleFetch),
  "HandleResponse": () => (RequestManager_HandleResponse)
});

;// CONCATENATED MODULE: ./assets/src/admin/js/ReduxManager/StateProps.js
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    namespace = 'getgenie';
/**
* @type {object}
* @description all actions are defined here as object properties, those will be combined with components
*/

var StateProps = {
  sidebar: withSelect(function (select) {
    return {
      sidebar: select(namespace).sidebar()
    };
  }),
  templates: withSelect(function (select) {
    return {
      templates: select(namespace).templates()
    };
  }),
  setTemplates: withDispatch(function (dispatch) {
    return {
      setTemplates: function setTemplates(value) {
        dispatch(namespace).setTemplates(value);
      }
    };
  }),
  limitUsage: withSelect(function (select) {
    return {
      limitUsage: select(namespace).limitUsage()
    };
  }),
  setLimitUsage: withDispatch(function (dispatch) {
    return {
      setLimitUsage: function setLimitUsage(value) {
        dispatch(namespace).setLimitUsage(value);
      }
    };
  }),
  setSidebar: withDispatch(function (dispatch) {
    return {
      setSidebar: function setSidebar(value) {
        dispatch(namespace).setSidebar(value);
      }
    };
  }),
  setCurrentTemplate: withDispatch(function (dispatch) {
    return {
      setCurrentTemplate: function setCurrentTemplate(value) {
        dispatch(namespace).setCurrentTemplate(value);
      }
    };
  }),
  currentTemplate: withSelect(function (select) {
    return {
      currentTemplate: select(namespace).getCurrentTemplate()
    };
  }),
  getTemplateInputs: withSelect(function (select) {
    return {
      getTemplateInputs: select(namespace).getTemplateInputs()
    };
  }),
  getInputs: withSelect(function (select) {
    return {
      getInputs: select(namespace).getInputs()
    };
  }),
  setInput: withDispatch(function (dispatch) {
    return {
      setInput: function setInput(name, value) {
        dispatch(namespace).setInput(name, value);
      }
    };
  }),
  resetSidebar: withDispatch(function (dispatch) {
    return {
      resetSidebar: function resetSidebar(name, value) {
        dispatch(namespace).resetSidebar();
      }
    };
  }),
  resetTemplateInputs: withDispatch(function (dispatch) {
    return {
      resetTemplateInputs: function resetTemplateInputs(value) {
        dispatch(namespace).resetTemplateInputs(value);
      }
    };
  })
};
/* harmony default export */ const ReduxManager_StateProps = (StateProps);
;// CONCATENATED MODULE: ./assets/src/admin/js/ReduxManager/index.js

var compose = wp.compose.compose;
/**
 * @function ComposeComponents
 * @description this function is used to map redux action lists with a component,
 * each component and actions like- (setSidebar, templates, getInputs) is passed in this function and this returns the component with combined given action lists
 * for that the redux store property/method is accessible in any component
 */

var ComposeComponents = function ComposeComponents(Component) {
  var action_list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!action_list.length) {
    return Component;
  }

  var combineAction = [];
  action_list.forEach(function (key) {
    var ac = ReduxManager_StateProps[key];

    if (ac) {
      combineAction.push(ac);
    }
  });
  return compose(combineAction)(Component);
};


// EXTERNAL MODULE: ./assets/src/admin/js/ReduxManager/RegisterStore.js
var RegisterStore = __webpack_require__(855);
;// CONCATENATED MODULE: ./assets/src/admin/js/RequestManager/EndPoints.js
var _window$getGenie$blog;

/** user and country list endpoints for temporary use */
var userList = 'https://raw.githubusercontent.com/xs-salekin/data-store/main/user_list.json';
var countryList = 'https://raw.githubusercontent.com/xs-salekin/data-store/main/countries.json';
/** domain address located in getgenie.php */

var allUrls = window.getGenie.config;
var parserApiUrl = allUrls.parserApi;
var licenseApiUrl = allUrls.licenseApi;
var historyData = allUrls.historyApi + 'list';
var createHistoryUrl = allUrls.historyApi + 'create';
var writeTemplates = parserApiUrl + 'writer-default/generate-templates-content';
var writeIntro = parserApiUrl + 'writer-wizard/generate-intro';
var writeTitle = parserApiUrl + 'writer-wizard/generate-title';
var outlines = parserApiUrl + 'writer-wizard/generate-outline';
var keywordsData = parserApiUrl + 'writer-wizard/keyword-doctor';
var competitorData = parserApiUrl + 'writer-wizard/serp-data';
var continueWriting = parserApiUrl + 'advanced-writing/continue-writing';
var expandOutline = parserApiUrl + 'advanced-writing/outline-expand';
var contentFeedback = allUrls.feedbackApi;
var storeApiUrl = allUrls.storeApi + ((_window$getGenie$blog = window.getGenie.blogWizardData) === null || _window$getGenie$blog === void 0 ? void 0 : _window$getGenie$blog.post_id);
var getLicenseToken = licenseApiUrl + 'get-token';
var removeLicenseToken = licenseApiUrl + 'remove-token';
var limitUsage = allUrls.usageLimitStatsApi;
;// CONCATENATED MODULE: ./assets/src/admin/js/Common/Libs/ShowNotification.js
var notification = window.antd.notification;

var ShowNotification = function ShowNotification(type, title) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var placement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'top';
  notification[type]({
    message: title,
    description: message,
    placement: placement,
    getContainer: function getContainer() {
      return document.querySelector('.getgenie-main-container');
    },
    duration: 5
  });
};

/* harmony default export */ const Libs_ShowNotification = (ShowNotification);
;// CONCATENATED MODULE: ./assets/src/admin/js/RequestManager/HandleResponse.js
/**
 * @overview added condition based on api status before executing any operations dependent on api response
 * it helps to detect success or fail response then handle the execution and the operations those are not dependent on response data
 */
var Modal = window.antd.Modal;


var HandleResponse = function HandleResponse(res, callback) {
  var message = (res === null || res === void 0 ? void 0 : res.message) || [];

  if (res !== null && res !== void 0 && res.networkErr) {
    Libs_ShowNotification('error', 'Something went wrong!', message.join(' '), 'topRight');
  } else {
    if ((res === null || res === void 0 ? void 0 : res.status) === 'success') {
      callback();
    } else {
      var _window$getGenie$conf;

      if (!((_window$getGenie$conf = window.getGenie.config) !== null && _window$getGenie$conf !== void 0 && _window$getGenie$conf.siteToken) || message.join('').toLowerCase().includes('access denied')) {
        wp.data.dispatch('getgenie').setSidebar({
          open: false
        });
        Modal.error({
          title: 'Failed!',
          content: message.join(' '),
          className: 'getgenie-confirm-modal',
          getContainer: function getContainer() {
            return document.querySelector('.getgenie-main-container');
          }
        });
      } else {
        Libs_ShowNotification('error', 'Failed!', message.join(' '), 'topRight');
      }
    }
  }
};

/* harmony default export */ const RequestManager_HandleResponse = (HandleResponse);
;// CONCATENATED MODULE: ./assets/src/admin/js/RequestManager/index.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * @function callApi
 * @param {string} url endpoint for the API call
 * @param {callback} result a callback passed from source which will be served with API response as parameter to proceed execution inside callback
 * @param {object|array} data optional parameter to be send in request body
 */

var callApi = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, result) {
    var data,
        config,
        params,
        response,
        res,
        err,
        _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
            config = window.getGenie.config;

            if (!(!(config !== null && config !== void 0 && config.authToken) || (config === null || config === void 0 ? void 0 : config.authToken) === 'access_denied')) {
              _context.next = 5;
              break;
            }

            result({
              message: ['Access Denied!']
            });
            return _context.abrupt("return");

          case 5:
            params = {
              method: 'POST',
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Site-Token': (config === null || config === void 0 ? void 0 : config.siteToken) || '',
                'Auth-Token': (config === null || config === void 0 ? void 0 : config.authToken) || '',
                'X-WP-Nonce': (config === null || config === void 0 ? void 0 : config.restNonce) || ''
              }
            };

            if (data) {
              params.body = JSON.stringify(data);
            }

            _context.next = 9;
            return fetch(url, params)["catch"](function (err) {
              return result({
                networkErr: true,
                message: [err === null || err === void 0 ? void 0 : err.message] || 0
              });
            });

          case 9:
            response = _context.sent;

            if (response) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return");

          case 12:
            if (!response.ok) {
              _context.next = 25;
              break;
            }

            _context.prev = 13;
            _context.next = 16;
            return response.json();

          case 16:
            res = _context.sent;
            result(res);
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](13);
            console.log('Something went wrong.', _context.t0);

          case 23:
            _context.next = 29;
            break;

          case 25:
            _context.next = 27;
            return response.text();

          case 27:
            err = _context.sent;
            result({
              networkErr: true,
              error: err
            });

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[13, 20]]);
  }));

  return function callApi(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var HandleFetch = function HandleFetch(callback, urlKey, params, context) {
  callApi(EndPoints_namespaceObject[urlKey], function (result) {
    callback(result);
  }, params);
};


;// CONCATENATED MODULE: ./assets/src/admin/js/app-handler.js




window.getGenie.Components = {
  Common: {
    ReduxManager: {
      ComposeComponents: ComposeComponents
    },
    RequestManager: RequestManager_namespaceObject
  }
};
})();

/******/ })()
;