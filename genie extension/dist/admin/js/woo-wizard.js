/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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

// NAMESPACE OBJECT: ./assets/src/admin/js/WooWizard/Utilities/index.js
var Utilities_namespaceObject = {};
__webpack_require__.r(Utilities_namespaceObject);
__webpack_require__.d(Utilities_namespaceObject, {
  "WooCommerceTopButtons": () => (Utilities_WooCommerceTopButtons)
});

;// CONCATENATED MODULE: ./assets/src/admin/js/WooWizard/Utilities/Callbacks.js
var Libs = window.getGenie.Components.Common.Libs;

var showAlert = function showAlert() {
  Libs.ErrorModal({
    title: 'Insertion Failed!',
    content: 'No insertion place found!'
  });
};

var Callbacks = {
  insert: {
    wooLongDesc: function wooLongDesc(value) {
      /** Selecting the long description Iframe and its content  */
      var iLongDesc = document.querySelector('.woocommerce-feature-enabled-activity-panels #content_ifr');
      var iLongDescWindow = iLongDesc.contentWindow;
      var iLongDescDoc = iLongDescWindow.document;
      /** Selecting the p tag inside long description iFrame to insert long description */

      var wooProductLongDesc = iLongDescDoc.querySelector('body p');

      if (!wooProductLongDesc) {
        showAlert();
        return;
      }
      /** inserting the generated text inside the  long description text editor */


      wooProductLongDesc.innerText = value;
    },
    wooShortDesc: function wooShortDesc(value) {
      /** Selecting the short description Iframe and its content  */
      var iShortDesc = document.querySelector('.woocommerce-feature-enabled-activity-panels #excerpt_ifr');
      var iShortDescWindow = iShortDesc.contentWindow;
      var iShortDescDoc = iShortDescWindow.document;
      /** Selecting the p tag inside short description iFrame to insert short description */

      var wooProductShortDesc = iShortDescDoc.querySelector('body p');

      if (!wooProductShortDesc) {
        showAlert();
        return;
      }
      /** inserting the generated text inside the short description text editor */


      wooProductShortDesc.innerText = value;
    },
    wooProductTitle: function wooProductTitle(value) {
      var wooProductName = document.querySelector(".woocommerce-feature-enabled-activity-panels #titlewrap #title");
      var wooProductNameLabel = document.querySelector('.woocommerce-feature-enabled-activity-panels #titlewrap #title-prompt-text');

      if (!wooProductName) {
        showAlert();
        return;
      }
      /** inserting the generated product name inside the product name input field */


      wooProductName.value = value;
      /** removing the label while there is a value in the product name input field */

      if (wooProductName.value !== '') {
        wooProductNameLabel.classList.add('screen-reader-text');
      } else {
        wooProductNameLabel.classList.remove('screen-reader-text');
      }
    }
  }
};
/* harmony default export */ const Utilities_Callbacks = (Callbacks);
;// CONCATENATED MODULE: ./assets/src/admin/js/WooWizard/Navbar.js
var Radio = window.antd.Radio;
var ComposeComponents = window.getGenie.Components.Common.ReduxManager.ComposeComponents;

var useEffect = wp.element.useEffect;
/**
 * @function Navbar
 * @type {React.FC<Navbar>}
 * @param {function} ComposeComponents - access properties from redux store. this function maps redux action list with component
 * @see {@link ComposeComponents} 
 * @description this is a woo wizard header contains the tabs- 
 * this navbar used to navigate between screens of woo wizard
 * @see {@link UI}
 */

var Navbar = ComposeComponents(function (_ref) {
  var _ref$navigation = _ref.navigation,
      navigation = _ref$navigation === void 0 ? 'title' : _ref$navigation,
      setSidebar = _ref.setSidebar;
  var navs = {
    title: {
      title: "Title",
      screen: "wooProductTitle"
    },
    longDesc: {
      title: "Long Desc",
      screen: "wooLongDesc"
    },
    shortDesc: {
      title: "Short Desc",
      screen: "wooShortDesc"
    }
  };

  var handleChange = function handleChange(e) {
    var target = e.target,
        screen = target.screen;
    setSidebar({
      component: screen,
      insertTextCallback: Utilities_Callbacks.insert[screen]
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "genie-nav-container"
  }, /*#__PURE__*/React.createElement(Radio.Group, {
    onChange: handleChange,
    value: navigation
  }, Object.keys(navs).map(function (key) {
    var nav = navs[key];
    return /*#__PURE__*/React.createElement(Radio.Button, {
      value: key,
      screen: nav.screen
    }, nav.title);
  })));
}, ['setSidebar']);
/* harmony default export */ const WooWizard_Navbar = (Navbar);
;// CONCATENATED MODULE: ./assets/src/admin/js/WooWizard/LongDesc/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _window$antd = window.antd,
    Alert = _window$antd.Alert,
    Divider = _window$antd.Divider,
    Form = _window$antd.Form,
    Tooltip = _window$antd.Tooltip;
var _window$getGenie$Comp = window.getGenie.Components.Common,
    LongDesc_Libs = _window$getGenie$Comp.Libs,
    ContentFeedback = _window$getGenie$Comp.ContentFeedback,
    Utilities = _window$getGenie$Comp.Utilities;

var _window$getGenie$Comp2 = window.getGenie.Components.Common.RequestManager,
    HandleFetch = _window$getGenie$Comp2.HandleFetch,
    HandleResponse = _window$getGenie$Comp2.HandleResponse,
    EndPoints = _window$getGenie$Comp2.EndPoints;
var LongDesc_ComposeComponents = window.getGenie.Components.Common.ReduxManager.ComposeComponents;
var useState = wp.element.useState;
var wooLongDesc = LongDesc_ComposeComponents(function (_ref) {
  var getInputs = _ref.getInputs,
      setInput = _ref.setInput,
      sidebar = _ref.sidebar,
      setSidebar = _ref.setSidebar;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      showTooltip = _useState4[0],
      setShowTooltip = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      visibleAlert = _useState6[0],
      setVisibleAlert = _useState6[1];

  var list = getInputs['generatedLongDesc'] || [];

  var generateContent = function generateContent() {
    setLoading(true);
    /**
     * @var data
     * @type {object}
     * @description data to be send to server
     * @property {string} title selected title from title screen
     * @property {number} creativity current creativity at input slider
     * @property {number} numberOfResult maximum number of contents to be generated
     */

    var data = {
      input: {
        productName: getInputs['wooProductName'],
        keywords: getInputs['wooBrief']
      },
      templateSlug: "woocommerce-product-long-description",
      creativity: getInputs['wooLongCreativityLevel'],
      resultCount: getInputs['wooLongResultLimit']
    };
    /** clearing previous data */

    setInput('generatedLongDesc', []);
    HandleFetch(function (res) {
      setLoading(false);
      HandleResponse(res, function () {
        var _window$getGenie$conf;

        var result = res.data.map(function (item) {
          /** adding extra attributes for feedback feature */
          return {
            title: item,
            like: false,
            dislike: false
          };
        });
        setInput('generatedLongDesc', result);
        setVisibleAlert(true);
        setTimeout(function () {
          return setVisibleAlert(false);
        }, 4000);
        /** for temporary purpose, later update the mechanism */

        var historyData = data;
        historyData === null || historyData === void 0 ? true : delete historyData.resultCount;
        historyData.output = res.data;
        historyData.templateType = 'writer-default';
        fetch(EndPoints.createHistoryUrl, {
          method: 'POST',
          body: JSON.stringify(historyData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'X-WP-Nonce': ((_window$getGenie$conf = window.getGenie.config) === null || _window$getGenie$conf === void 0 ? void 0 : _window$getGenie$conf.restNonce) || ''
          }
        });
      });
    }, 'writeTemplates', data);
  };
  /**
   * @function handleClick
   * @param {event} e value  event properties of clicked item
   * @param {object} item value of the clicked item
   */


  var handleClick = function handleClick(e, item) {
    var copyAbleText = item.title.replace(/<br\/>/g, "");
    /** copy the clicked item text to clipboard */

    Utilities.GenieHelpers.copyToClipboard(copyAbleText).then(function () {
      setShowTooltip(item.title);
      setTimeout(function () {
        setShowTooltip(null);
      }, 2000);
    })["catch"](function () {
      return console.log('error');
    });
  };

  var insertContent = function insertContent(e, value) {
    e.stopPropagation();
    /** replace all br tag with new line to work properly as string */

    var text = value.replace(/<br\s*[\/]?>/g, "\n");
    sidebar.insertTextCallback(text);
    setSidebar({
      open: false
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LongDesc_Libs.DrawerHeader, null), /*#__PURE__*/React.createElement(WooWizard_Navbar, {
    navigation: "longDesc"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-title-form"
  }, /*#__PURE__*/React.createElement(Form, {
    layout: "vertical",
    onFinish: generateContent
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-screen-content title"
  }, /*#__PURE__*/React.createElement(LongDesc_Libs.Input, {
    name: "wooProductName",
    type: "text",
    label: /*#__PURE__*/React.createElement("span", null, "Product Name ", /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        color: 'red'
      }
    }, "*")),
    placeholder: "Enter Your Keyword here",
    required: true,
    errorMessage: "Please enter the title here"
  }), /*#__PURE__*/React.createElement(LongDesc_Libs.Textarea, {
    label: /*#__PURE__*/React.createElement("span", null, "Product Brief/ Comma separated keywords ", /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        color: 'red'
      }
    }, "*")),
    name: "wooBrief",
    rows: 4,
    placeholder: "Enter a context for the keyword"
  }), /*#__PURE__*/React.createElement(LongDesc_Libs.Slider, {
    name: "wooLongCreativityLevel",
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Creativity Level", /*#__PURE__*/React.createElement(LongDesc_Libs.Tooltip, {
      title: "How much creative you want genie to be",
      placement: "top"
    })),
    message: false,
    defaultValue: 4
  }), /*#__PURE__*/React.createElement(LongDesc_Libs.NumberInput, {
    name: "wooLongResultLimit",
    type: "text",
    defaultValue: 2,
    max: 4,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Set Result Limit ", /*#__PURE__*/React.createElement(LongDesc_Libs.Tooltip, {
      title: "Maximum content you want to generate",
      placement: "top"
    })),
    required: true
  }), /*#__PURE__*/React.createElement(LongDesc_Libs.Button, {
    htmlType: "submit",
    className: "submit-btn",
    type: "primary",
    loading: loading,
    disabled: !(getInputs['wooProductName'] && getInputs['wooBrief'])
  }, /*#__PURE__*/React.createElement("span", {
    className: "getgenie-icon-edit"
  }), "Generate long desc")), /*#__PURE__*/React.createElement(LongDesc_Libs.TitleMsg, {
    list: list,
    loading: loading,
    title: "product name"
  }), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-card-container editor",
    style: {
      backgroundColor: list.length === 0 && "transparent"
    }
  }, /*#__PURE__*/React.createElement(LongDesc_Libs.Card, {
    list: list,
    handleClick: handleClick,
    column: 1,
    skeleton: loading ? function () {
      return /*#__PURE__*/React.createElement(LongDesc_Libs.SkeletonSingle, {
        count: 10
      });
    } : ''
  }, function (item) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
      placement: "right",
      title: showTooltip === item.title && "Copied",
      visible: showTooltip === item.title && sidebar.open,
      zIndex: 999999
    }, /*#__PURE__*/React.createElement("h5", {
      className: "generated-content"
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: item.title
      }
    }))), /*#__PURE__*/React.createElement(ContentFeedback, {
      content: item,
      input: getInputs['wooProductName'] + ' ' + getInputs['wooBrief'],
      creativityLevel: getInputs['wooLongCreativityLevel'],
      listName: "generatedLongDesc"
    }), /*#__PURE__*/React.createElement(Tooltip, {
      title: "Insert this content",
      placement: "topLeft"
    }, /*#__PURE__*/React.createElement("span", {
      className: "getgenie-insert-content",
      onClick: function onClick(e) {
        return insertContent(e, item.title);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: sidebar.imageUrl + '/plus.png'
    }))));
  }), visibleAlert && /*#__PURE__*/React.createElement(Alert, {
    className: "template-screen-alert",
    message: "Click on the text to copy",
    closeText: "Okay",
    closable: true
  }))), /*#__PURE__*/React.createElement(LongDesc_Libs.DrawerFooter, {
    prevScreen: "wooProductTitle",
    enableNextBtn: true,
    nextScreen: "wooShortDesc"
  })));
}, ['getInputs', 'setInput', 'sidebar', 'setSidebar']);
/* harmony default export */ const LongDesc = (wooLongDesc);
;// CONCATENATED MODULE: ./assets/src/admin/js/WooWizard/ShortDesc/index.js
function ShortDesc_slicedToArray(arr, i) { return ShortDesc_arrayWithHoles(arr) || ShortDesc_iterableToArrayLimit(arr, i) || ShortDesc_unsupportedIterableToArray(arr, i) || ShortDesc_nonIterableRest(); }

function ShortDesc_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ShortDesc_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ShortDesc_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ShortDesc_arrayLikeToArray(o, minLen); }

function ShortDesc_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ShortDesc_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ShortDesc_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ShortDesc_window$antd = window.antd,
    ShortDesc_Alert = ShortDesc_window$antd.Alert,
    ShortDesc_Divider = ShortDesc_window$antd.Divider,
    ShortDesc_Form = ShortDesc_window$antd.Form,
    ShortDesc_Tooltip = ShortDesc_window$antd.Tooltip;
var ShortDesc_window$getGenie$Comp = window.getGenie.Components.Common,
    ShortDesc_Libs = ShortDesc_window$getGenie$Comp.Libs,
    ShortDesc_ContentFeedback = ShortDesc_window$getGenie$Comp.ContentFeedback,
    ShortDesc_Utilities = ShortDesc_window$getGenie$Comp.Utilities;

var ShortDesc_window$getGenie$Comp2 = window.getGenie.Components.Common.RequestManager,
    ShortDesc_HandleFetch = ShortDesc_window$getGenie$Comp2.HandleFetch,
    ShortDesc_HandleResponse = ShortDesc_window$getGenie$Comp2.HandleResponse,
    ShortDesc_EndPoints = ShortDesc_window$getGenie$Comp2.EndPoints;
var ShortDesc_ComposeComponents = window.getGenie.Components.Common.ReduxManager.ComposeComponents;
var ShortDesc_useState = wp.element.useState;
var wooShortDesc = ShortDesc_ComposeComponents(function (_ref) {
  var getInputs = _ref.getInputs,
      setInput = _ref.setInput,
      sidebar = _ref.sidebar,
      setSidebar = _ref.setSidebar;

  var _useState = ShortDesc_useState(false),
      _useState2 = ShortDesc_slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = ShortDesc_useState(''),
      _useState4 = ShortDesc_slicedToArray(_useState3, 2),
      showTooltip = _useState4[0],
      setShowTooltip = _useState4[1];

  var _useState5 = ShortDesc_useState(false),
      _useState6 = ShortDesc_slicedToArray(_useState5, 2),
      visibleAlert = _useState6[0],
      setVisibleAlert = _useState6[1];

  var list = getInputs['generatedShortDesc'] || [];

  var generateContent = function generateContent() {
    setLoading(true);
    /**
     * @var data
     * @type {object}
     * @description data to be send to server
     * @property {string} title selected title from title screen
     * @property {number} creativity current creativity at input slider
     * @property {number} numberOfResult maximum number of contents to be generated
     */

    var data = {
      input: {
        productName: getInputs['wooProductName'],
        keywords: getInputs['wooBrief']
      },
      templateSlug: "woocommerce-product-short-description",
      creativity: getInputs['wooShortCreativityLevel'],
      resultCount: getInputs['wooShortResultLimit']
    };
    /** clearing previous data */

    setInput('generatedShortDesc', []);
    ShortDesc_HandleFetch(function (res) {
      setLoading(false);
      ShortDesc_HandleResponse(res, function () {
        var _window$getGenie$conf;

        var result = res.data.map(function (item) {
          /** adding extra attributes for feedback feature */
          return {
            title: item,
            like: false,
            dislike: false
          };
        });
        setInput('generatedShortDesc', result);
        setVisibleAlert(true);
        setTimeout(function () {
          return setVisibleAlert(false);
        }, 4000);
        /** for temporary purpose, later update the mechanism */

        var historyData = data;
        historyData === null || historyData === void 0 ? true : delete historyData.resultCount;
        historyData.output = res.data;
        historyData.templateType = 'writer-default';
        fetch(ShortDesc_EndPoints.createHistoryUrl, {
          method: 'POST',
          body: JSON.stringify(historyData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'X-WP-Nonce': ((_window$getGenie$conf = window.getGenie.config) === null || _window$getGenie$conf === void 0 ? void 0 : _window$getGenie$conf.restNonce) || ''
          }
        });
      });
    }, 'writeTemplates', data);
  };
  /**
   * @function handleClick
   * @param {event} e value  event properties of clicked item
   * @param {object} item value of the clicked item
   */


  var handleClick = function handleClick(e, item) {
    var copyAbleText = item.title.replace(/<br\/>/g, "");
    /** copy the clicked item text to clipboard */

    GenieHelpers.copyToClipboard(copyAbleText).then(function () {
      setShowTooltip(item.title);
      setTimeout(function () {
        setShowTooltip(null);
      }, 2000);
    })["catch"](function () {
      return console.log('error');
    });
  };

  var insertContent = function insertContent(e, value) {
    e.stopPropagation();
    /** replace all br tag with new line to work properly as string */

    var text = value.replace(/<br\s*[\/]?>/g, "\n");
    sidebar.insertTextCallback(text);
    setSidebar({
      open: false
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ShortDesc_Libs.DrawerHeader, null), /*#__PURE__*/React.createElement(WooWizard_Navbar, {
    navigation: "shortDesc"
  }), /*#__PURE__*/React.createElement(ShortDesc_Divider, null), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-title-form"
  }, /*#__PURE__*/React.createElement(ShortDesc_Form, {
    layout: "vertical",
    onFinish: generateContent
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-screen-content title"
  }, /*#__PURE__*/React.createElement(ShortDesc_Libs.Input, {
    name: "wooProductName",
    type: "text",
    label: /*#__PURE__*/React.createElement("span", null, "Product Name ", /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        color: 'red'
      }
    }, "*")),
    placeholder: "Enter Your Keyword here",
    required: true,
    errorMessage: "Please enter the title here"
  }), /*#__PURE__*/React.createElement(ShortDesc_Libs.Textarea, {
    label: /*#__PURE__*/React.createElement("span", null, "Product Brief/ Comma separated keywords ", /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        color: 'red'
      }
    }, "*")),
    name: "wooBrief",
    rows: 4,
    placeholder: "Enter a context for the keyword"
  }), /*#__PURE__*/React.createElement(ShortDesc_Libs.Slider, {
    name: "wooShortCreativityLevel",
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Creativity Level", /*#__PURE__*/React.createElement(ShortDesc_Libs.Tooltip, {
      title: "How much creative you want genie to be",
      placement: "top"
    })),
    message: false,
    defaultValue: 4
  }), /*#__PURE__*/React.createElement(ShortDesc_Libs.NumberInput, {
    name: "wooShortResultLimit",
    type: "text",
    defaultValue: 2,
    max: 4,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Set Result Limit ", /*#__PURE__*/React.createElement(ShortDesc_Libs.Tooltip, {
      title: "Maximum content you want to generate",
      placement: "top"
    })),
    required: true
  }), /*#__PURE__*/React.createElement(ShortDesc_Libs.Button, {
    htmlType: "submit",
    className: "submit-btn",
    type: "primary",
    loading: loading,
    disabled: !(getInputs['wooProductName'] && getInputs['wooBrief'])
  }, /*#__PURE__*/React.createElement("span", {
    className: "getgenie-icon-edit"
  }), "Generate short desc")), /*#__PURE__*/React.createElement(ShortDesc_Libs.TitleMsg, {
    list: list,
    loading: loading,
    title: "product name"
  }), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-card-container editor",
    style: {
      backgroundColor: list.length === 0 && "transparent"
    }
  }, /*#__PURE__*/React.createElement(ShortDesc_Libs.Card, {
    list: list,
    handleClick: handleClick,
    column: 1,
    skeleton: loading ? function () {
      return /*#__PURE__*/React.createElement(ShortDesc_Libs.SkeletonSingle, {
        count: 10
      });
    } : ''
  }, function (item) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ShortDesc_Tooltip, {
      placement: "right",
      title: showTooltip === item.title && "Copied",
      visible: showTooltip === item.title && sidebar.open,
      zIndex: 999999
    }, /*#__PURE__*/React.createElement("h5", {
      className: "generated-content"
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: item.title
      }
    }))), /*#__PURE__*/React.createElement(ShortDesc_ContentFeedback, {
      content: item,
      input: getInputs['wooProductName'] + ' ' + getInputs['wooBrief'],
      creativityLevel: getInputs['wooShortCreativityLevel'],
      listName: "generatedShortDesc"
    }), /*#__PURE__*/React.createElement(ShortDesc_Tooltip, {
      title: "Insert this content",
      placement: "topLeft"
    }, /*#__PURE__*/React.createElement("span", {
      className: "getgenie-insert-content",
      onClick: function onClick(e) {
        return insertContent(e, item.title);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: sidebar.imageUrl + '/plus.png'
    }))));
  }), visibleAlert && /*#__PURE__*/React.createElement(ShortDesc_Alert, {
    className: "template-screen-alert",
    message: "Click on the text to copy",
    closeText: "Okay",
    closable: true
  }))), /*#__PURE__*/React.createElement(ShortDesc_Libs.DrawerFooter, {
    prevScreen: "wooLongDesc"
  })));
}, ['getInputs', 'setInput', 'sidebar', 'setSidebar']);
/* harmony default export */ const ShortDesc = (wooShortDesc);
;// CONCATENATED MODULE: ./assets/src/admin/js/WooWizard/ProductTitle/index.js
function ProductTitle_slicedToArray(arr, i) { return ProductTitle_arrayWithHoles(arr) || ProductTitle_iterableToArrayLimit(arr, i) || ProductTitle_unsupportedIterableToArray(arr, i) || ProductTitle_nonIterableRest(); }

function ProductTitle_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProductTitle_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProductTitle_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProductTitle_arrayLikeToArray(o, minLen); }

function ProductTitle_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ProductTitle_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ProductTitle_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductTitle_window$antd = window.antd,
    ProductTitle_Alert = ProductTitle_window$antd.Alert,
    ProductTitle_Divider = ProductTitle_window$antd.Divider,
    ProductTitle_Form = ProductTitle_window$antd.Form,
    ProductTitle_Tooltip = ProductTitle_window$antd.Tooltip;
var ProductTitle_window$getGenie$Comp = window.getGenie.Components.Common,
    ProductTitle_Libs = ProductTitle_window$getGenie$Comp.Libs,
    ProductTitle_ContentFeedback = ProductTitle_window$getGenie$Comp.ContentFeedback,
    ProductTitle_Utilities = ProductTitle_window$getGenie$Comp.Utilities;

var ProductTitle_window$getGenie$Comp2 = window.getGenie.Components.Common.RequestManager,
    ProductTitle_HandleFetch = ProductTitle_window$getGenie$Comp2.HandleFetch,
    ProductTitle_HandleResponse = ProductTitle_window$getGenie$Comp2.HandleResponse,
    ProductTitle_EndPoints = ProductTitle_window$getGenie$Comp2.EndPoints;
var ProductTitle_ComposeComponents = window.getGenie.Components.Common.ReduxManager.ComposeComponents;
var ProductTitle_useState = wp.element.useState;
var wooProductTitle = ProductTitle_ComposeComponents(function (_ref) {
  var getInputs = _ref.getInputs,
      setInput = _ref.setInput,
      sidebar = _ref.sidebar,
      setSidebar = _ref.setSidebar;

  var _useState = ProductTitle_useState(false),
      _useState2 = ProductTitle_slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = ProductTitle_useState(''),
      _useState4 = ProductTitle_slicedToArray(_useState3, 2),
      showTooltip = _useState4[0],
      setShowTooltip = _useState4[1];

  var _useState5 = ProductTitle_useState(false),
      _useState6 = ProductTitle_slicedToArray(_useState5, 2),
      visibleAlert = _useState6[0],
      setVisibleAlert = _useState6[1];

  var list = getInputs['generatedProductNames'] || [];

  var generateContent = function generateContent() {
    setLoading(true);
    /**
     * @var data
     * @type {object}
     * @description data to be send to server
     * @property {string} title selected title from title screen
     * @property {number} creativity current creativity at input slider
     * @property {number} numberOfResult maximum number of contents to be generated
     */

    var data = {
      input: {
        productName: getInputs['wooProductName'],
        keywords: getInputs['wooBrief']
      },
      templateSlug: "woocommerce-product-title",
      creativity: getInputs['wooTitleCreativityLevel'],
      resultCount: getInputs['wooTitleResultLimit']
    };
    /** clearing previous data */

    setInput('generatedProductNames', []);
    ProductTitle_HandleFetch(function (res) {
      setLoading(false);
      ProductTitle_HandleResponse(res, function () {
        var _window$getGenie$conf;

        var result = res.data.map(function (item) {
          /** adding extra attributes for feedback feature */
          return {
            title: item,
            like: false,
            dislike: false
          };
        });
        setInput('generatedProductNames', result);
        setVisibleAlert(true);
        setTimeout(function () {
          return setVisibleAlert(false);
        }, 4000);
        /** for temporary purpose, later update the mechanism */

        var historyData = data;
        historyData === null || historyData === void 0 ? true : delete historyData.resultCount;
        historyData.output = res.data;
        historyData.templateType = 'writer-default';
        fetch(ProductTitle_EndPoints.createHistoryUrl, {
          method: 'POST',
          body: JSON.stringify(historyData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'X-WP-Nonce': ((_window$getGenie$conf = window.getGenie.config) === null || _window$getGenie$conf === void 0 ? void 0 : _window$getGenie$conf.restNonce) || ''
          }
        });
      });
    }, 'writeTemplates', data);
  };
  /**
   * @function handleClick
   * @param {event} e value  event properties of clicked item
   * @param {object} item value of the clicked item
   */


  var handleClick = function handleClick(e, item) {
    var copyAbleText = item.title.replace(/<br\/>/g, "");
    /** copy the clicked item text to clipboard */

    GenieHelpers.copyToClipboard(copyAbleText).then(function () {
      setShowTooltip(item.title);
      setTimeout(function () {
        setShowTooltip(null);
      }, 2000);
    })["catch"](function () {
      return console.log('error');
    });
  };

  var insertContent = function insertContent(e, value) {
    e.stopPropagation();
    /** replace all br tag with new line to work properly as string */

    var text = value.replace(/<br\s*[\/]?>/g, "\n");
    sidebar.insertTextCallback(text);
    setSidebar({
      open: false
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProductTitle_Libs.DrawerHeader, null), /*#__PURE__*/React.createElement(WooWizard_Navbar, {
    navigation: "title"
  }), /*#__PURE__*/React.createElement(ProductTitle_Divider, null), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-title-form"
  }, /*#__PURE__*/React.createElement(ProductTitle_Form, {
    layout: "vertical",
    onFinish: generateContent
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-screen-content title"
  }, /*#__PURE__*/React.createElement(ProductTitle_Libs.Input, {
    name: "wooProductName",
    type: "text",
    label: /*#__PURE__*/React.createElement("span", null, "Product Name ", /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        color: 'red'
      }
    }, "*")),
    placeholder: "Enter Your Keyword here",
    required: true,
    errorMessage: "Please enter the title here"
  }), /*#__PURE__*/React.createElement(ProductTitle_Libs.Textarea, {
    label: /*#__PURE__*/React.createElement("span", null, "Product Brief/ Comma separated keywords ", /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        color: 'red'
      }
    }, "*")),
    name: "wooBrief",
    rows: 4,
    placeholder: "Enter a context for the keyword"
  }), /*#__PURE__*/React.createElement(ProductTitle_Libs.Slider, {
    name: "wooTitleCreativityLevel",
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Creativity Level", /*#__PURE__*/React.createElement(ProductTitle_Libs.Tooltip, {
      title: "How much creative you want genie to be",
      placement: "top"
    })),
    message: false,
    defaultValue: 4
  }), /*#__PURE__*/React.createElement(ProductTitle_Libs.NumberInput, {
    name: "wooTitleResultLimit",
    type: "text",
    defaultValue: 2,
    max: 4,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Set Result Limit ", /*#__PURE__*/React.createElement(ProductTitle_Libs.Tooltip, {
      title: "Maximum content you want to generate",
      placement: "top"
    })),
    required: true
  }), /*#__PURE__*/React.createElement(ProductTitle_Libs.Button, {
    htmlType: "submit",
    className: "submit-btn",
    type: "primary",
    loading: loading,
    disabled: !(getInputs['wooProductName'] && getInputs['wooBrief'])
  }, /*#__PURE__*/React.createElement("span", {
    className: "getgenie-icon-edit"
  }), "Generate product title")), /*#__PURE__*/React.createElement(ProductTitle_Libs.TitleMsg, {
    list: list,
    loading: loading,
    title: "product name"
  }), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-card-container editor",
    style: {
      backgroundColor: list.length === 0 && "transparent"
    }
  }, /*#__PURE__*/React.createElement(ProductTitle_Libs.Card, {
    list: list,
    handleClick: handleClick,
    column: 1,
    skeleton: loading ? function () {
      return /*#__PURE__*/React.createElement(ProductTitle_Libs.SkeletonSingle, {
        count: 10
      });
    } : ''
  }, function (item) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProductTitle_Tooltip, {
      placement: "right",
      title: showTooltip === item.title && "Copied",
      visible: showTooltip === item.title && sidebar.open,
      zIndex: 999999
    }, /*#__PURE__*/React.createElement("h5", {
      className: "generated-content"
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: item.title
      }
    }))), /*#__PURE__*/React.createElement(ProductTitle_ContentFeedback, {
      content: item,
      input: getInputs['wooProductName'] + ' ' + getInputs['wooBrief'],
      creativityLevel: getInputs['wooTitleCreativityLevel'],
      listName: "generatedProductNames"
    }), /*#__PURE__*/React.createElement(ProductTitle_Tooltip, {
      title: "Insert this content",
      placement: "topLeft"
    }, /*#__PURE__*/React.createElement("span", {
      className: "getgenie-insert-content",
      onClick: function onClick(e) {
        return insertContent(e, item.title);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: sidebar.imageUrl + '/plus.png'
    }))));
  }), visibleAlert && /*#__PURE__*/React.createElement(ProductTitle_Alert, {
    className: "template-screen-alert",
    message: "Click on the text to copy",
    closeText: "Okay",
    closable: true
  }))), /*#__PURE__*/React.createElement(ProductTitle_Libs.DrawerFooter, {
    prevScreen: "TemplateListScreen",
    enableNextBtn: true,
    nextScreen: "wooLongDesc"
  })));
}, ['getInputs', 'setInput', 'sidebar', 'setSidebar']);
/* harmony default export */ const ProductTitle = (wooProductTitle);
;// CONCATENATED MODULE: ./assets/src/admin/js/WooWizard/Utilities/WooCommerceTopButtons.js
var Button = window.antd.Button;
var WooCommerceTopButtons_ComposeComponents = window.getGenie.Components.Common.ReduxManager.ComposeComponents;

var WooCommerceTopButtons_useEffect = wp.element.useEffect;
/**
 * @function WooCommerceTopButtons
 * @type {React.FC<WooCommerceTopButtons>}
 * @param {function} ComposeComponents - access properties from redux store. this function maps redux action list with component
 * @see {@link ComposeComponents} 
 * @description buttons including Write for me which will open the drawer with template list,
 * and the statistics button will open drawer with current post stats
 * @see {@link UI}
 */

var WooCommerceTopButtons = WooCommerceTopButtons_ComposeComponents(function (_ref) {
  var setSidebar = _ref.setSidebar,
      sidebar = _ref.sidebar;

  var handleClickWrite = function handleClickWrite() {
    /** turn of toolbar writing mode on click write for me */
    setSidebar({
      open: !sidebar.open,
      toolbarWriting: false,
      component: 'wooProductTitle',
      insertTextCallback: Utilities_Callbacks.insert.wooProductTitle
    });
  };

  WooCommerceTopButtons_useEffect(function () {
    if (window.location.hash === '#getgenie-open-wooWizard') {
      handleClickWrite();
    }
  }, []);
  return /*#__PURE__*/React.createElement(Button, {
    onClick: handleClickWrite,
    type: "primary",
    className: "getgenie-toolbar-write-btn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "getgenie-icon-edit"
  }), "Write for me");
}, ['setSidebar', 'sidebar']);
/* harmony default export */ const Utilities_WooCommerceTopButtons = (WooCommerceTopButtons);
;// CONCATENATED MODULE: ./assets/src/admin/js/WooWizard/Utilities/index.js


;// CONCATENATED MODULE: ./assets/src/admin/js/WooWizard/index.js





;// CONCATENATED MODULE: ./assets/src/admin/js/woo-wizard.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





window.getGenie.Components = _objectSpread(_objectSpread({}, window.getGenie.Components), {}, {
  WooWizardUtils: Utilities_namespaceObject,
  Sidebar: _objectSpread(_objectSpread({}, window.getGenie.Components.Sidebar || {}), {}, {
    wooLongDesc: LongDesc,
    wooShortDesc: ShortDesc,
    wooProductTitle: ProductTitle
  })
});
/******/ })()
;