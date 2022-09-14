/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./assets/src/admin/js/TemplateWizard/WriteTemplatesScreen.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _window$getGenie$Comp = window.getGenie.Components.Common,
    Libs = _window$getGenie$Comp.Libs,
    ContentFeedback = _window$getGenie$Comp.ContentFeedback,
    Utilities = _window$getGenie$Comp.Utilities;
var _window$antd = window.antd,
    Alert = _window$antd.Alert,
    Form = _window$antd.Form,
    Tooltip = _window$antd.Tooltip;
var _window$getGenie$Comp2 = window.getGenie.Components.Common.RequestManager,
    HandleFetch = _window$getGenie$Comp2.HandleFetch,
    HandleResponse = _window$getGenie$Comp2.HandleResponse,
    EndPoints = _window$getGenie$Comp2.EndPoints;
var ComposeComponents = window.getGenie.Components.Common.ReduxManager.ComposeComponents;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
/** default context field for templates */

var defaultField = [{
  "name": "templateContext",
  "label": "Context",
  "type": "textarea",
  "placeholder": "Enter your text here",
  "required": true
}];
/**
 * @function WriteTemplatesScreen
 * @type {React.FC<WriteTemplatesScreen>}
 * @description for template writing, this is used in editor and admin page. also works with backslash in wp post editor
 * @see {@link https://ibb.co/D4bQKsD UI}
 */

var WriteTemplatesScreen = ComposeComponents(function (_ref) {
  var setSidebar = _ref.setSidebar,
      templates = _ref.templates,
      sidebar = _ref.sidebar,
      getInputs = _ref.getInputs,
      setInput = _ref.setInput;
  var list = getInputs['generatedTemplateContents'] || [];
  list = _toConsumableArray(new Set(list));

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      templateList = _useState2[0],
      setTemplateList = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      showTooltip = _useState4[0],
      setShowTooltip = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      visibleAlert = _useState6[0],
      setVisibleAlert = _useState6[1];

  var _useState7 = useState(defaultField),
      _useState8 = _slicedToArray(_useState7, 2),
      inputFields = _useState8[0],
      setInputFields = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      writeLoading = _useState10[0],
      setWriteLoading = _useState10[1];

  useEffect(function () {
    /** creating an array of templates for showing them in select field */
    var data = templates.list.map(function (item) {
      return {
        value: item.templateSlug,
        label: item.title,
        inputFields: (item === null || item === void 0 ? void 0 : item.inputFields) || []
        /** check later */

      };
    });
    setTemplateList(data);
    setSidebar({
      analyzeKeyword: {
        open: false
      },
      generatedOutlines: _objectSpread(_objectSpread({}, sidebar.generatedOutlines), {}, {
        open: false
      })
    });
  }, []);
  useEffect(function () {
    var _templates$list$find, _fields$, _wp$data, _wp$data$select, _selectedBlock$attrib;

    if (!sidebar.open) {
      return;
    }
    /** set multi input fields array */


    var fields = (_templates$list$find = templates.list.find(function (item) {
      return item.templateSlug === sidebar.currentTemplate;
    })) === null || _templates$list$find === void 0 ? void 0 : _templates$list$find.inputFields;

    if (!fields || fields.length === 0) {
      fields = defaultField;
    }

    var inputName = (_fields$ = fields[0]) === null || _fields$ === void 0 ? void 0 : _fields$.name;
    setInputFields(fields);
    /** check if current page is from dashboard */

    if (!((_wp$data = wp.data) !== null && _wp$data !== void 0 && (_wp$data$select = _wp$data.select("core/editor")) !== null && _wp$data$select !== void 0 && _wp$data$select.getSelectedBlock())) {
      return;
    }
    /** 
     * @todo recheck if the includes is necessary. update it later 
     */


    if (["paragraph-rewriter", "sentence-rewriter"].includes(sidebar.currentTemplate)) {
      setInput(inputName, getInputs['templateContext']);
    }
    /** select the current wp post block */


    var selectedBlock = wp.data.select("core/editor").getSelectedBlock();
    var content = (selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$attrib = selectedBlock.attributes) === null || _selectedBlock$attrib === void 0 ? void 0 : _selectedBlock$attrib.content) || '';

    if (sidebar.currentTemplate === "next-paragraph") {
      content = content.replace(/<br\s*[\/]?>/g, "");

      if (content.length > 1000) {
        content = content.substring(0, 1000);
      }

      setInput(inputName, content);
    } else if (sidebar.currentTemplate === "next-sentence") {
      /**
       * @todo recheck this mechanism and minimize later
       */
      var selection = document.getSelection(),
          currentParagraph = selection.focusNode.data || '';
      var currentSentence = currentParagraph.substring(0, selection.focusOffset);
      currentSentence = currentSentence.substring(0, currentSentence.lastIndexOf('.'));
      currentSentence = currentSentence.substring(currentSentence.lastIndexOf('.') + 1);

      if (currentSentence.length === '') {
        currentSentence = currentParagraph.substring(0, currentSentence.indexOf('.'));
      }

      if (currentSentence.length === '') {
        currentSentence = currentParagraph.substring(0, selection.focusOffset);
      }

      setInput(inputName, currentSentence);
    }
  }, [sidebar.currentTemplate, sidebar.open]);

  var handleWrite = function handleWrite(values) {
    var input = {};

    var _iterator = _createForOfIteratorHelper(inputFields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        input[item.name] = getInputs[item.name] || '';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var data = {
      input: input,
      templateSlug: sidebar.currentTemplate,
      creativity: getInputs['templateCreativityLevel'],
      resultCount: getInputs['templateResultLimit']
    };
    /** remove default properties and use form values only */

    delete data.templateCreativityLevel;
    delete data.templateResultLimit;
    setWriteLoading(true);
    HandleFetch(function (res) {
      setWriteLoading(false);
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
        setInput('generatedTemplateContents', result);
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

  useEffect(function () {
    /** hide tooltip based on sidebar appearance */
    if (!sidebar.open) {
      document.querySelectorAll('.ant-tooltip.generated-content-copied-text').forEach(function (item) {
        return item.style.visibility = 'hidden';
      });
    }
  }, [sidebar.open]);

  var handleActiveList = function handleActiveList(e, value) {
    document.querySelectorAll('.ant-tooltip.generated-content-copied-text').forEach(function (item) {
      return item.style.visibility = 'visible';
    });
    var copyAbleText = value.title.replace(/<br\/>/g, "");
    /** copy the clicked item text to clipboard */

    Utilities.GenieHelpers.copyToClipboard(copyAbleText).then(function () {
      setShowTooltip(value.title);
      setTimeout(function () {
        setShowTooltip(null);
      }, 2000);
    })["catch"](function () {
      return console.log('error');
    });
  };

  var insertContent = function insertContent(e, value) {
    e.stopPropagation();

    if (sidebar.insertTextCallback) {
      sidebar.insertTextCallback(value, sidebar.insertTextField);
    }
  };
  /** update current template value in redux store */


  var handleTemplateChange = function handleTemplateChange(value) {
    setSidebar({
      currentTemplate: value
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Libs.DrawerHeader, null), /*#__PURE__*/React.createElement(Form, {
    layout: "vertical",
    className: "getgenie-sidebar-writing-form",
    onFinish: handleWrite
  }, /*#__PURE__*/React.createElement("div", {
    className: "getgenie-sidebar-writing"
  }, /*#__PURE__*/React.createElement(Libs.Select, {
    handleOnChange: handleTemplateChange,
    className: "getgenie-select",
    defaultValue: sidebar.currentTemplate,
    label: "Select Templates",
    options: templateList
  }), inputFields.map(function (item) {
    return /*#__PURE__*/React.createElement(Libs.Textarea, {
      label: /*#__PURE__*/React.createElement("span", null, (item === null || item === void 0 ? void 0 : item.label) || '', " ", item !== null && item !== void 0 && item.required ? /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-block',
          color: 'red'
        }
      }, "*") : '(Optional)'),
      name: item === null || item === void 0 ? void 0 : item.name,
      rows: 4,
      placeholder: item === null || item === void 0 ? void 0 : item.placeholder,
      required: item === null || item === void 0 ? void 0 : item.required
    });
  }), /*#__PURE__*/React.createElement(Libs.Slider, {
    name: "templateCreativityLevel",
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Creativity Level ", /*#__PURE__*/React.createElement(Libs.Tooltip, {
      title: "How much creative you want genie to be",
      placement: "top"
    }, "i")),
    message: false,
    defaultValue: 4
  }), /*#__PURE__*/React.createElement(Libs.NumberInput, {
    name: "templateResultLimit",
    max: 4,
    type: "text",
    defaultValue: 2,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Set Result Limit ", /*#__PURE__*/React.createElement(Libs.Tooltip, {
      title: "Maximum content you want to generate",
      placement: "top"
    }, "i")),
    required: true,
    errorMessage: "Please choose valid limit"
  }), /*#__PURE__*/React.createElement(Libs.Button, {
    htmlType: "submit",
    type: "primary",
    loading: writeLoading
  }, "Write")), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-card-container editor",
    style: {
      backgroundColor: list.length === 0 && "transparent"
    }
  }, /*#__PURE__*/React.createElement(Libs.Card, {
    list: list,
    handleClick: handleActiveList,
    column: 1,
    skeleton: writeLoading ? function () {
      return /*#__PURE__*/React.createElement(Libs.SkeletonSingle, {
        count: 5
      });
    } : ''
  }, function (item) {
    var _inputFields$;

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
      overlayClassName: "generated-content-copied-text",
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
      input: getInputs[(_inputFields$ = inputFields[0]) === null || _inputFields$ === void 0 ? void 0 : _inputFields$.name] || '',
      creativityLevel: getInputs['templateCreativityLevel'],
      listName: "generatedTemplateContents"
    }), window.getGenie.config.wizardScreen && /*#__PURE__*/React.createElement(Tooltip, {
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
  }))), sidebar.toolbarWriting || window.location.hash === '#write-for-me' ? '' : /*#__PURE__*/React.createElement(Libs.DrawerFooter, {
    prevScreen: "TemplateListScreen"
  }));
}, ['setSidebar', 'templates', 'sidebar', 'getInputs', 'setInput']);
/* harmony default export */ const TemplateWizard_WriteTemplatesScreen = (WriteTemplatesScreen);
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
;// CONCATENATED MODULE: ./assets/src/admin/js/TemplateWizard/TemplateListScreen/index.js
function TemplateListScreen_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function TemplateListScreen_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TemplateListScreen_ownKeys(Object(source), !0).forEach(function (key) { TemplateListScreen_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TemplateListScreen_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function TemplateListScreen_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TemplateListScreen_toConsumableArray(arr) { return TemplateListScreen_arrayWithoutHoles(arr) || TemplateListScreen_iterableToArray(arr) || TemplateListScreen_unsupportedIterableToArray(arr) || TemplateListScreen_nonIterableSpread(); }

function TemplateListScreen_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TemplateListScreen_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function TemplateListScreen_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return TemplateListScreen_arrayLikeToArray(arr); }

function TemplateListScreen_slicedToArray(arr, i) { return TemplateListScreen_arrayWithHoles(arr) || TemplateListScreen_iterableToArrayLimit(arr, i) || TemplateListScreen_unsupportedIterableToArray(arr, i) || TemplateListScreen_nonIterableRest(); }

function TemplateListScreen_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TemplateListScreen_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TemplateListScreen_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TemplateListScreen_arrayLikeToArray(o, minLen); }

function TemplateListScreen_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TemplateListScreen_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function TemplateListScreen_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TemplateListScreen_window$getGenie$Comp = window.getGenie.Components.Common,
    TemplateListScreen_Libs = TemplateListScreen_window$getGenie$Comp.Libs,
    LicenseNotice = TemplateListScreen_window$getGenie$Comp.LicenseNotice;
var TemplateListScreen_window$antd = window.antd,
    Divider = TemplateListScreen_window$antd.Divider,
    Typography = TemplateListScreen_window$antd.Typography,
    Input = TemplateListScreen_window$antd.Input;
var TemplateListScreen_ComposeComponents = window.getGenie.Components.Common.ReduxManager.ComposeComponents;

var TemplateListScreen_wp$element = wp.element,
    TemplateListScreen_useEffect = TemplateListScreen_wp$element.useEffect,
    TemplateListScreen_useState = TemplateListScreen_wp$element.useState;
/**
 * @function TemplateListScreen
 * @type {React.FC<TemplateListScreen>}
 * @description part of wp editor page for showing full template list including blog wizard
 * this section will render after clicking on write for me button in wp post editor
 * @see {@link https://ibb.co/VwZ8Qgh UI}
 */

var TemplateListScreen = TemplateListScreen_ComposeComponents(function (_ref) {
  var templates = _ref.templates,
      setSidebar = _ref.setSidebar,
      sidebar = _ref.sidebar,
      setInput = _ref.setInput,
      getTemplateInputs = _ref.getTemplateInputs,
      resetTemplateInputs = _ref.resetTemplateInputs;

  var _useState = TemplateListScreen_useState(templates.list),
      _useState2 = TemplateListScreen_slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var updatedList = [].concat(TemplateListScreen_toConsumableArray(TemplateWizard_AdditionalWizards), TemplateListScreen_toConsumableArray(list));
  TemplateListScreen_useEffect(function () {
    setSidebar({
      analyzeKeyword: {
        open: false
      },
      generatedOutlines: TemplateListScreen_objectSpread(TemplateListScreen_objectSpread({}, sidebar.generatedOutlines), {}, {
        open: false
      })
    });
    /** turn off toolbar writing mode initially */

    setSidebar({
      toolbarWriting: false
    });
    setInput('updateContent', '');
  }, []);

  var handleSearchTemplate = function handleSearchTemplate(e) {
    var searchInput = e.target.value.toLowerCase();
    var updatedTemplates = templates.list.filter(function (item) {
      return item.title.toLowerCase().includes(searchInput);
    });
    setList(updatedTemplates);
  };

  var handleActiveList = function handleActiveList(e, item) {
    var _getTemplateInputs$it;

    /**
     * @description by default set the component as WriteTemplate, 
     * if template is blog wizard then open TitleScreen
     */
    var component = 'WriteTemplatesScreen';

    if (item.templateSlug == 'blogWizard') {
      var _window$getGenie$conf;

      component = 'TitleScreen';

      if (((_window$getGenie$conf = window.getGenie.config) === null || _window$getGenie$conf === void 0 ? void 0 : _window$getGenie$conf.wizardScreen) !== 'post') {
        var _window$getGenie$conf2, _window$getGenie$conf3;

        window.open((_window$getGenie$conf2 = window.getGenie.config) === null || _window$getGenie$conf2 === void 0 ? void 0 : (_window$getGenie$conf3 = _window$getGenie$conf2.wizardScreenUrl) === null || _window$getGenie$conf3 === void 0 ? void 0 : _window$getGenie$conf3.post, '_blank');
        return;
      }
    } else if (item.templateSlug == 'wooWizard') {
      var _window$getGenie$conf4, _window$getGenie$conf5;

      if (!((_window$getGenie$conf4 = window.getGenie.config) !== null && _window$getGenie$conf4 !== void 0 && _window$getGenie$conf4.wcActivated)) {
        TemplateListScreen_Libs.ErrorModal({
          title: 'Plugin not found!',
          content: 'WooCommerce is not installed or activated yet.'
        });
        return;
      }

      component = 'wooProductTitle';

      if (((_window$getGenie$conf5 = window.getGenie.config) === null || _window$getGenie$conf5 === void 0 ? void 0 : _window$getGenie$conf5.wizardScreen) !== 'woo_product') {
        var _window$getGenie$conf6, _window$getGenie$conf7;

        window.open((_window$getGenie$conf6 = window.getGenie.config) === null || _window$getGenie$conf6 === void 0 ? void 0 : (_window$getGenie$conf7 = _window$getGenie$conf6.wizardScreenUrl) === null || _window$getGenie$conf7 === void 0 ? void 0 : _window$getGenie$conf7.woo_product, '_blank');
        return;
      }
    }

    var updateScreen = function updateScreen() {
      setSidebar({
        component: component,
        currentTemplate: item.templateSlug
      });
    };
    /** check if current template has any generated data */


    if ((_getTemplateInputs$it = getTemplateInputs[item.templateSlug]) !== null && _getTemplateInputs$it !== void 0 && _getTemplateInputs$it.keyword) {
      TemplateListScreen_Libs.ConfirmModal('This wizard has generated data', 'Do you want to erase that data?', function () {
        resetTemplateInputs(item.templateSlug);
        updateScreen();
      }, updateScreen);
    } else {
      updateScreen();
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TemplateListScreen_Libs.DrawerHeader, null), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-sidebar-template"
  }, /*#__PURE__*/React.createElement(LicenseNotice, null), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "What are we writing ?"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    className: "getgenie-template-list"
  }, /*#__PURE__*/React.createElement(Input, {
    onChange: handleSearchTemplate,
    bordered: false,
    className: "search-container",
    placeholder: "Search...",
    suffix: /*#__PURE__*/React.createElement("span", {
      className: "getgenie-icon-search"
    })
  }), /*#__PURE__*/React.createElement(TemplateListScreen_Libs.Card, {
    list: updatedList,
    handleClick: handleActiveList
  }, function (item) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "card-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-icon"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dashicons dashicons-edit"
    })), /*#__PURE__*/React.createElement("div", {
      className: "card-heading"
    }, /*#__PURE__*/React.createElement("h5", {
      "data-slug": item === null || item === void 0 ? void 0 : item.templateSlug
    }, item === null || item === void 0 ? void 0 : item.title), /*#__PURE__*/React.createElement("p", null, item === null || item === void 0 ? void 0 : item.description))));
  }))));
}, ['setSidebar', 'sidebar', 'templates', 'setInput', 'getInputs', 'resetTemplateInputs', 'getTemplateInputs']);
/* harmony default export */ const TemplateWizard_TemplateListScreen = (TemplateListScreen);
;// CONCATENATED MODULE: ./assets/src/admin/js/TemplateWizard/Callbacks.js
var Callbacks_Libs = window.getGenie.Components.Common.Libs;
var Callbacks = {
  insertTemplateInPostEditor: function insertTemplateInPostEditor(value) {
    var _selectedBlock$attrib;

    var sidebar = wp.data.select('getgenie').sidebar();
    /** selecting current post block */

    var selectedBlock = wp.data.select("core/editor").getSelectedBlock();
    var clientId = selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.clientId;
    var content = selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$attrib = selectedBlock.attributes) === null || _selectedBlock$attrib === void 0 ? void 0 : _selectedBlock$attrib.content;
    var allBlocks = wp.data.select("core/editor").getBlocks();
    /** get the appropriate position where new content will be inserted */

    var index = allBlocks.findIndex(function (item) {
      return item.clientId === clientId;
    });
    /** replace all br tag with new line to work properly as string */

    var text = value.replace(/<br\s*[\/]?>/g, "\n");

    if (sidebar.toolbarWriting && ["sentence-rewriter", "paragraph-rewriter", "paragraph-answer"].includes(sidebar.currentTemplate)) {
      var _wp$data$select$getIn;

      /** if toolbar writing is on then get replacable function from redux store */
      var replace = (_wp$data$select$getIn = wp.data.select('getgenie').getInputs()) === null || _wp$data$select$getIn === void 0 ? void 0 : _wp$data$select$getIn.updateContent;
      replace(text);
    } else if (sidebar.currentTemplate === 'next-paragraph') {
      /** insert content with desired index value */
      wp.data.dispatch("core/editor").insertBlocks(wp.blocks.createBlock("core/paragraph", {
        content: text
      }), index + 1);
    } else {
      if (!clientId) {
        wp.data.dispatch('getgenie').setSidebar({
          open: false
        });
        Callbacks_Libs.ErrorModal({
          title: 'Insertion Failed!',
          content: 'Please select a block in current editor'
        });
        return;
      }

      text = value;

      if (content) {
        text = ' ' + text;
      }

      wp.data.dispatch('core/editor').updateBlock(clientId, {
        attributes: {
          content: content + text
        }
      });
      wp.data.dispatch('getgenie').setSidebar({
        open: false
      });
    }
  }
};
/* harmony default export */ const TemplateWizard_Callbacks = ((/* unused pure expression or super */ null && (Callbacks)));
;// CONCATENATED MODULE: ./assets/src/admin/js/TemplateWizard/index.js



;// CONCATENATED MODULE: ./assets/src/admin/js/templates-scripts.js
function templates_scripts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function templates_scripts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? templates_scripts_ownKeys(Object(source), !0).forEach(function (key) { templates_scripts_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : templates_scripts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function templates_scripts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


window.getGenie.Components = templates_scripts_objectSpread(templates_scripts_objectSpread({}, window.getGenie.Components), {}, {
  Sidebar: templates_scripts_objectSpread(templates_scripts_objectSpread({}, window.getGenie.Components.Sidebar || {}), {}, {
    TemplateListScreen: TemplateWizard_TemplateListScreen,
    WriteTemplatesScreen: TemplateWizard_WriteTemplatesScreen
  })
});
/******/ })()
;