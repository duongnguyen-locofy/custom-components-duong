(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 49:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14e3ead256ee09e03f5c.png";

/***/ }),

/***/ 104:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 108:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 198:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0aec18fe70f7524809cf.ttf";

/***/ }),

/***/ 201:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0513ec4a5e6d24c7e180.woff";

/***/ }),

/***/ 256:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 296:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(414);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(967);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(310);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(801), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(201), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(198), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face{font-family:"itnicons";src:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype"),url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff"),url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");font-weight:normal;font-style:normal;font-display:block}[class^=itn-icon-],[class*=" itn-icon-"]{font-family:"itnicons" !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.itn-icon-rebates:before{content:""}.itn-icon-zoom-in:before{content:""}.itn-icon-horizontal-view:before{content:""}.itn-icon-vertical-view:before{content:""}.itn-icon-zoom-out:before{content:""}.itn-icon-alpha-sort:before{content:""}.itn-icon-revup-support:before{content:""}.itn-icon-external-vendor:before{content:""}.itn-icon-shopping-list:before{content:""}.itn-icon-classifications:before{content:""}.itn-icon-itrade-price:before{content:""}.itn-icon-card:before{content:""}.itn-icon-telegram:before{content:""}.itn-icon-uploaded-img:before{content:""}.itn-icon-open-link-download:before{content:""}.itn-icon-Close:before{content:"";color:#687576}.itn-icon-Copy:before{content:"";color:#687576}.itn-icon-Send:before{content:"";color:#687576}.itn-icon-Stop:before{content:""}.itn-icon-Sparkles:before{content:"";color:#f1aa48}.itn-icon-invoice-right:before{content:""}.itn-icon-step-backward .path1:before{content:"";color:rgb(236, 236, 236)}.itn-icon-step-backward .path2:before{content:"";margin-left:-1em;color:rgb(68, 83, 84)}.itn-icon-step-backward-disabled .path1:before{content:"";color:rgb(236, 236, 236)}.itn-icon-step-backward-disabled .path2:before{content:"";margin-left:-1em;color:rgb(198, 203, 203)}.itn-icon-step-forward-disabled .path1:before{content:"";color:rgb(236, 236, 236)}.itn-icon-step-forward-disabled .path2:before{content:"";margin-left:-1em;color:rgb(198, 203, 203)}.itn-icon-step-forward .path1:before{content:"";color:rgb(236, 236, 236)}.itn-icon-step-forward .path2:before{content:"";margin-left:-1em;color:rgb(68, 83, 84)}.itn-icon-pickup-filled:before{content:""}.itn-icon-dropoff-filled:before{content:"";color:#0336ff}.itn-icon-rectange-refresh:before{content:""}.itn-icon-export-attachment:before{content:""}.itn-icon-upload-img:before{content:""}.itn-icon-RPC:before{content:""}.itn-icon-RPP:before{content:""}.itn-icon-spend1:before{content:""}.itn-icon-admin-service:before{content:""}.itn-icon-date:before{content:""}.itn-icon-exclusion-inclusion:before{content:""}.itn-icon-freight1:before{content:""}.itn-icon-integration1:before{content:""}.itn-icon-megaphone:before{content:""}.itn-icon-oms:before{content:""}.itn-icon-org-manager:before{content:""}.itn-icon-package:before{content:""}.itn-icon-price-module:before{content:""}.itn-icon-produce-contracts:before{content:""}.itn-icon-retail:before{content:""}.itn-icon-tru-tac:before{content:""}.itn-icon-uil_tag-alt:before{content:""}.itn-icon-date-time:before{content:""}.itn-icon-support:before{content:""}.itn-icon-open-in-new-tab:before{content:""}.itn-icon-activity1:before{content:"";color:#445354}.itn-icon-new-activity-filled .path1:before{content:"";color:rgb(3, 132, 135)}.itn-icon-new-activity-filled .path2:before{content:"";margin-left:-1em;color:rgb(255, 255, 255)}.itn-icon-split:before{content:""}.itn-icon-edit-alt:before{content:""}.itn-icon-new-activity .path1:before{content:"";color:rgb(3, 54, 255)}.itn-icon-new-activity .path2:before{content:"";margin-left:-1em;color:rgb(243, 163, 58)}.itn-icon-order-guide:before{content:""}.itn-icon-archive:before{content:""}.itn-icon-receiving:before{content:""}.itn-icon-create-receipt:before{content:""}.itn-icon-edit-receipt:before{content:""}.itn-icon-dot:before{content:""}.itn-icon-file-late:before{content:""}.itn-icon-file-quality:before{content:""}.itn-icon-item-contracted:before{content:""}.itn-icon-org-type:before{content:""}.itn-icon-repeating:before{content:""}.itn-icon-sync:before{content:""}.itn-icon-vendor:before{content:""}.itn-icon-switch:before{content:""}.itn-icon-rfq:before{content:""}.itn-icon-product-icon:before{content:""}.itn-icon-map-alt:before{content:""}.itn-icon-layers-less:before{content:""}.itn-icon-layers:before{content:""}.itn-icon-grid-regular:before{content:""}.itn-icon-grid-compact:before{content:""}.itn-icon-grid-cards:before{content:""}.itn-icon-file-graph:before{content:""}.itn-icon-defer:before{content:""}.itn-icon-contract:before{content:""}.itn-icon-carma:before{content:""}.itn-icon-buyer:before{content:""}.itn-icon-add-user:before{content:""}.itn-icon-manufactor:before{content:""}.itn-icon-star-half-alt:before{content:""}.itn-icon-map-need-review:before{content:"";color:#2196f3}.itn-icon-comparison:before{content:""}.itn-icon-bp:before{content:""}.itn-icon-dropship:before{content:""}.itn-icon-iTraceFresh:before{content:""}.itn-icon-list-inactive:before{content:""}.itn-icon-beverage:before{content:""}.itn-icon-bread:before{content:""}.itn-icon-corn:before{content:""}.itn-icon-dairy:before{content:""}.itn-icon-delayed-loads:before{content:""}.itn-icon-fruits:before{content:""}.itn-icon-grains:before{content:""}.itn-icon-grow:before{content:""}.itn-icon-in-transit:before{content:""}.itn-icon-leafy-greens:before{content:""}.itn-icon-list-active:before{content:""}.itn-icon-list-all:before{content:""}.itn-icon-list-deleted:before{content:""}.itn-icon-list-draft:before{content:""}.itn-icon-list-soldout:before{content:""}.itn-icon-oils:before{content:""}.itn-icon-Placeholder:before{content:""}.itn-icon-prepared:before{content:""}.itn-icon-proteins:before{content:""}.itn-icon-receiving-wh:before{content:""}.itn-icon-rejected-loads:before{content:""}.itn-icon-seafood:before{content:""}.itn-icon-shipping-wh:before{content:""}.itn-icon-vegetables-frozen:before{content:""}.itn-icon-vegetables-shelfsafe:before{content:""}.itn-icon-grow-alt:before{content:""}.itn-icon-barcode-scan:before{content:""}.itn-icon-bookmark-filled:before{content:""}.itn-icon-check-circle-filled:before{content:""}.itn-icon-globe:before{content:""}.itn-icon-health:before{content:""}.itn-icon-heark-break:before{content:""}.itn-icon-integration-rejections:before{content:""}.itn-icon-label:before{content:""}.itn-icon-label-filled:before{content:""}.itn-icon-microphone:before{content:""}.itn-icon-number:before{content:""}.itn-icon-print:before{content:""}.itn-icon-reply:before{content:""}.itn-icon-save:before{content:""}.itn-icon-send:before{content:""}.itn-icon-android:before{content:""}.itn-icon-android-alt:before{content:""}.itn-icon-apple:before{content:""}.itn-icon-apple-alt:before{content:""}.itn-icon-facebook:before{content:""}.itn-icon-facebook-alt:before{content:""}.itn-icon-instagram:before{content:""}.itn-icon-instagram-alt:before{content:""}.itn-icon-linkedin:before{content:""}.itn-icon-linkedin-alt:before{content:""}.itn-icon-twitter:before{content:""}.itn-icon-twitter-alt:before{content:""}.itn-icon-hospital:before{content:""}.itn-icon-map:before{content:""}.itn-icon-received-short:before{content:""}.itn-icon-shipped-short:before{content:""}.itn-icon-my-product:before{content:""}.itn-icon-favorite-filled:before{content:""}.itn-icon-favorite-half-fill:before{content:""}.itn-icon-file-check:before{content:""}.itn-icon-file-cross:before{content:""}.itn-icon-export:before{content:""}.itn-icon-loads-in-transit:before{content:""}.itn-icon-accounts-payable:before{content:""}.itn-icon-accounts-receiving:before{content:""}.itn-icon-activity:before{content:"";color:#2c3a3a}.itn-icon-add:before{content:""}.itn-icon-add-comment:before{content:""}.itn-icon-add-photo:before{content:""}.itn-icon-alert:before{content:""}.itn-icon-arriving-today:before{content:""}.itn-icon-arriving-tomorrow:before{content:""}.itn-icon-arrow-circle-down:before{content:""}.itn-icon-arrow-circle-left:before{content:""}.itn-icon-arrow-circle-right:before{content:""}.itn-icon-arrow-circle-up:before{content:""}.itn-icon-arrow-down:before{content:""}.itn-icon-arrow-left:before{content:""}.itn-icon-arrow-right:before{content:""}.itn-icon-arrow-up:before{content:""}.itn-icon-asterik:before{content:""}.itn-icon-attachment:before{content:""}.itn-icon-award:before{content:""}.itn-icon-bar-chart:before{content:""}.itn-icon-bar-chart-alt:before{content:""}.itn-icon-base-trace:before{content:""}.itn-icon-bitcoin:before{content:""}.itn-icon-bookmark:before{content:""}.itn-icon-broker:before{content:""}.itn-icon-building:before{content:""}.itn-icon-bullseye:before{content:""}.itn-icon-calculator:before{content:""}.itn-icon-calendar:before{content:""}.itn-icon-calendar-cancel:before{content:""}.itn-icon-calendar-filled:before{content:""}.itn-icon-cancel:before{content:""}.itn-icon-case:before{content:""}.itn-icon-catalog:before{content:""}.itn-icon-charge:before{content:""}.itn-icon-check:before{content:""}.itn-icon-chevron-down:before{content:""}.itn-icon-chevron-left:before{content:""}.itn-icon-chevron-right:before{content:""}.itn-icon-chevron-up:before{content:""}.itn-icon-circle-check:before{content:""}.itn-icon-circle-minus:before{content:""}.itn-icon-clipboard:before{content:""}.itn-icon-clock:before{content:""}.itn-icon-clock-five:before{content:""}.itn-icon-clock-three:before{content:""}.itn-icon-clock-two:before{content:""}.itn-icon-close-x:before{content:""}.itn-icon-cloud:before{content:""}.itn-icon-cloud-sun:before{content:""}.itn-icon-clouds:before{content:""}.itn-icon-code-snippet:before{content:""}.itn-icon-cold:before{content:""}.itn-icon-comment:before{content:""}.itn-icon-completed-loads:before{content:""}.itn-icon-configuration:before{content:""}.itn-icon-contracts:before{content:""}.itn-icon-credit-card:before{content:""}.itn-icon-date-range:before{content:""}.itn-icon-day-end:before{content:""}.itn-icon-day-start:before{content:""}.itn-icon-delete:before{content:""}.itn-icon-desert:before{content:""}.itn-icon-document:before{content:""}.itn-icon-dollar-alt:before{content:""}.itn-icon-down-indicator:before{content:""}.itn-icon-download:before{content:""}.itn-icon-drag:before{content:""}.itn-icon-drizzle:before{content:""}.itn-icon-drop-off:before{content:""}.itn-icon-early-morning:before{content:""}.itn-icon-edit:before{content:""}.itn-icon-enterprise:before{content:""}.itn-icon-entrustment:before{content:""}.itn-icon-euro:before{content:""}.itn-icon-favorite:before{content:""}.itn-icon-file:before{content:""}.itn-icon-file-minus:before{content:""}.itn-icon-file-plus:before{content:""}.itn-icon-filter:before{content:""}.itn-icon-folder:before{content:""}.itn-icon-folder-minus:before{content:""}.itn-icon-folder-plus:before{content:""}.itn-icon-freight:before{content:""}.itn-icon-frozen:before{content:""}.itn-icon-fullscreen:before{content:""}.itn-icon-fullscreen-exit:before{content:""}.itn-icon-grid:before{content:""}.itn-icon-half-moon:before{content:""}.itn-icon-help:before{content:""}.itn-icon-hide:before{content:""}.itn-icon-history:before{content:""}.itn-icon-home:before{content:""}.itn-icon-info:before{content:""}.itn-icon-insights-dashboard:before{content:""}.itn-icon-integration:before{content:""}.itn-icon-invoice:before{content:""}.itn-icon-item:before{content:""}.itn-icon-item-rejected:before{content:""}.itn-icon-late-afternoon:before{content:""}.itn-icon-library:before{content:""}.itn-icon-lighting:before{content:""}.itn-icon-line-chart:before{content:""}.itn-icon-line-chart-alt:before{content:""}.itn-icon-lock:before{content:""}.itn-icon-logout:before{content:""}.itn-icon-mail:before{content:""}.itn-icon-map-complete:before{content:"";color:#67ac5c}.itn-icon-map-error:before{content:"";color:#e25241}.itn-icon-map-marker:before{content:""}.itn-icon-map-needs-review:before{content:"";color:#2196f3}.itn-icon-map-warning:before{content:"";color:#f5b53f}.itn-icon-marketplace:before{content:""}.itn-icon-menu:before{content:""}.itn-icon-mid-day:before{content:""}.itn-icon-minus:before{content:""}.itn-icon-moon:before{content:""}.itn-icon-more-horizontal:before{content:""}.itn-icon-more-vertical:before{content:""}.itn-icon-mountain:before{content:""}.itn-icon-my-invoices:before{content:""}.itn-icon-network-monitor:before{content:""}.itn-icon-new-invoices:before{content:""}.itn-icon-night:before{content:""}.itn-icon-note:before{content:""}.itn-icon-notification:before{content:""}.itn-icon-open-case:before{content:""}.itn-icon-order:before{content:""}.itn-icon-pallet:before{content:""}.itn-icon-password:before{content:""}.itn-icon-percentage:before{content:""}.itn-icon-phone:before{content:""}.itn-icon-photo:before{content:""}.itn-icon-pick-up:before{content:""}.itn-icon-pie-chart:before{content:""}.itn-icon-pie-chart-alt:before{content:""}.itn-icon-plus:before{content:""}.itn-icon-po-confirmation:before{content:""}.itn-icon-po-creation:before{content:""}.itn-icon-po-notification:before{content:""}.itn-icon-pound:before{content:""}.itn-icon-price-maintenance:before{content:""}.itn-icon-processing:before{content:""}.itn-icon-pump:before{content:""}.itn-icon-rain:before{content:""}.itn-icon-rain-sun:before{content:""}.itn-icon-refresh:before{content:""}.itn-icon-remit:before{content:""}.itn-icon-remove:before{content:""}.itn-icon-reports:before{content:""}.itn-icon-rupee:before{content:""}.itn-icon-search:before{content:""}.itn-icon-settings:before{content:""}.itn-icon-share:before{content:""}.itn-icon-shipper-claim:before{content:""}.itn-icon-shipping-today:before{content:""}.itn-icon-shipping-tomorrow:before{content:""}.itn-icon-shopping-cart:before{content:""}.itn-icon-sort:before{content:""}.itn-icon-sorting:before{content:""}.itn-icon-spend:before{content:""}.itn-icon-stopwatch:before{content:""}.itn-icon-stopwatch-slash:before{content:""}.itn-icon-temp:before{content:""}.itn-icon-temp-empty:before{content:""}.itn-icon-temp-half:before{content:""}.itn-icon-temp-three-quarter:before{content:""}.itn-icon-text:before{content:""}.itn-icon-thumb-down:before{content:""}.itn-icon-thumb-up:before{content:""}.itn-icon-thunder:before{content:""}.itn-icon-time-and-date:before{content:""}.itn-icon-tornado:before{content:""}.itn-icon-trees:before{content:""}.itn-icon-truck:before{content:""}.itn-icon-truck-loading:before{content:""}.itn-icon-two-line-chart:before{content:""}.itn-icon-undo:before{content:""}.itn-icon-unlock:before{content:""}.itn-icon-up-indicator:before{content:""}.itn-icon-upload:before{content:""}.itn-icon-user:before{content:""}.itn-icon-users:before{content:""}.itn-icon-view:before{content:""}.itn-icon-wallet:before{content:""}.itn-icon-warning:before{content:""}.itn-icon-water:before{content:""}.itn-icon-water-drops:before{content:""}.itn-icon-weight:before{content:""}.itn-icon-wind:before{content:""}.itn-icon-x-dock:before{content:""}.itn-icon-yen:before{content:""}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 310:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 414:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 607:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(414);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(967);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(310);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(49), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(818), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Baloo+Bhai:wght@400&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Baloo+Bhai:wght@400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face{font-family:"vegan";src:url("https://d3beo87skfz9b9.cloudfront.net/2zx7iiUWaS40DohQvcnpHR1M4sM/md5t4d0gqjmz8n0mrx.ttf") format("truetype");font-weight:normal;font-style:normal}.button,.text{position:relative}.text{flex:1;letter-spacing:.46px;line-height:26px;text-transform:uppercase;font-weight:500;font-family:"vegan"}.button{width:100%;border-radius:var(--br-9xs);background-color:var(--color-orange);overflow:hidden;display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;padding:var(--padding-mini) var(--padding-3xs);box-sizing:border-box;max-width:160px;line-height:normal;letter-spacing:normal;text-align:center;font-size:var(--components-button-large-size);color:var(--studio-darkmode-allwhite-ffffff);font-family:var(--components-button-large)}.city,.from{position:relative}.city{flex:1;letter-spacing:.02em}.from{width:52.5px;font-size:var(--components-input-text-size);letter-spacing:.04em;text-transform:uppercase;text-align:right;display:inline-block;flex-shrink:0}.cityParent{align-self:stretch;display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;gap:37.5px}.price{margin-top:-2px;position:relative;line-height:38px;display:inline-block;min-width:85px;white-space:nowrap}.destinationcard,.priceWrapper{display:flex;justify-content:flex-start;box-sizing:border-box}.priceWrapper{height:36px;flex-direction:row;align-items:flex-start;padding:0 0 0 var(--padding-xl);text-align:right;font-size:38px;font-family:var(--font-baloo-bhai)}.destinationcard{width:100%;position:relative;border-radius:var(--br-3xs);overflow:hidden;flex-direction:column;align-items:flex-end;padding:var(--padding-xs) var(--padding-xs) 109px;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});background-size:cover;background-repeat:no-repeat;background-position:top;min-width:280px;line-height:normal;letter-spacing:normal;text-align:left;font-size:var(--font-size-xl);color:var(--studio-darkmode-allwhite-ffffff);font-family:var(--components-button-large)}.departurecity,.departurecitycode{position:relative;letter-spacing:.04em;text-transform:capitalize;display:inline-block}.departurecitycode{margin:0;font-size:inherit;font-weight:700;font-family:inherit;min-width:42px}.departurecity{font-size:var(--components-input-text-size);min-width:79px}.details{flex:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:var(--gap-5xs);min-width:100px}.point{width:10px;height:10px;border-radius:var(--br-3xs);background-color:var(--studio-darkmode-allwhite-ffffff);border:2px solid var(--color-cornflowerblue-200);box-sizing:border-box;flex-shrink:0;debug_commit:6947a6}.pointWrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;padding:0 0 var(--padding-6xs)}.frameChild{align-self:stretch;height:2px;position:relative;border-top:1px dashed var(--color-lightgray);box-sizing:border-box;flex-shrink:0;debug_commit:6947a6}.flightIconsInner{flex:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;padding:0 0 var(--padding-3xs)}.frameItem,.ionairplaneIcon{position:relative;flex-shrink:0;debug_commit:6947a6}.ionairplaneIcon{height:24px;width:26px;overflow:hidden}.frameItem{align-self:stretch;height:2px;border-top:1px dashed var(--color-lightgray);box-sizing:border-box}.flightIconsChild{flex:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;padding:0 0 var(--padding-3xs)}.point1{width:10px;height:10px;border-radius:var(--br-3xs);background-color:var(--studio-darkmode-allwhite-ffffff);border:2px solid var(--color-cornflowerblue-200);box-sizing:border-box;flex-shrink:0;debug_commit:6947a6}.pointContainer{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;padding:0 0 var(--padding-6xs)}.dateContainer,.flightIcons{display:flex;justify-content:flex-start}.flightIcons{align-self:stretch;overflow:hidden;flex-direction:row;align-items:flex-end}.dateContainer{flex:1;flex-direction:column;align-items:flex-start;padding:15.5px 0 0;box-sizing:border-box;min-width:111px}.destinationcitycode{margin:0;width:51.3px;position:relative;font-size:inherit;letter-spacing:.04em;text-transform:capitalize;font-weight:700;font-family:inherit;display:inline-block;flex-shrink:0}.destinationCity{align-self:stretch;display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-end;padding:0 var(--padding-12xs)}.destinationcity{position:relative;font-size:var(--components-input-text-size);letter-spacing:.04em;text-transform:capitalize;display:inline-block;text-align:left;min-width:96px}.details1{align-self:stretch;overflow:hidden;flex-direction:column;padding:0 0 0 52px;box-sizing:border-box;min-width:100px}.details1,.detailsWrapper,.toAndFrom{display:flex;align-items:flex-start;justify-content:flex-start}.detailsWrapper{flex:1;flex-direction:column;padding:4px 0 0;box-sizing:border-box;min-width:111px;text-align:right}.toAndFrom{align-self:stretch;flex-direction:row;flex-wrap:wrap;gap:.1px}.date,.departOn{position:relative;letter-spacing:.04em;text-transform:capitalize;display:inline-block;min-width:104px}.date{line-height:24px;min-width:110px}.departOnDateLabel,.departOnDateLabelWrapper{display:flex;flex-direction:row;align-items:flex-start}.departOnDateLabel{justify-content:flex-start;padding:0 var(--padding-xl);gap:var(--gap-6xs)}.departOnDateLabelWrapper{align-self:stretch;justify-content:center;font-size:var(--font-size-xl);color:var(--color-black)}.flightmaincontainer{width:100%;position:relative;border-radius:8px;border:1px solid var(--color-whitesmoke);box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--padding-lg) var(--padding-lgi);gap:var(--gap-2xl);line-height:normal;letter-spacing:normal;text-align:left;font-size:var(--font-size-5xl);color:var(--color-cornflowerblue-200);font-family:var(--components-button-large)}@media screen and (max-width: 450px){.departurecitycode,.destinationcitycode{font-size:var(--font-size-lgi)}.date,.departOn{font-size:var(--components-input-text-size)}}.logowhiteIcon{width:180px;height:35px;position:relative;object-fit:contain}.fickleFlightIs{align-self:stretch;position:relative;line-height:27px}.facebookIcon{height:30px;width:30px;position:relative;object-fit:contain}.socialMediaLink{display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;padding:var(--padding-3xs)}.instagramIcon{height:30px;width:30px;position:relative;object-fit:contain}.socialMediaLink1{display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;padding:var(--padding-3xs)}.twitterIcon{height:30px;width:30px;position:relative;object-fit:contain}.socialMediaLink2{flex-direction:row;padding:var(--padding-3xs)}.fickleflightBio,.socialMediaLink2,.socialMediaLinksContainer{display:flex;align-items:flex-start;justify-content:flex-start}.socialMediaLinksContainer{overflow:hidden;flex-direction:row}.fickleflightBio{flex:1;flex-direction:column;padding:0 var(--padding-xl) 0 0;box-sizing:border-box;gap:var(--gap-sm);min-width:280px;max-width:100%;font-size:var(--font-size-lg)}.company{width:174.7px;position:relative;line-height:27px;font-weight:500;display:inline-block}.aboutUs,.careers,.howWeWork,.news{align-self:stretch;position:relative}.containers,.linkContainer{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.linkContainer{align-self:stretch;padding:0 0 12.6px;gap:var(--gap-3xs);font-size:var(--components-input-text-size)}.containers{width:200px;overflow:hidden;flex-shrink:0;padding:0 var(--padding-xl) 0 0;box-sizing:border-box;gap:var(--gap-sm);min-width:200px}.support{width:131.6px;position:relative;line-height:27px;font-weight:500;display:inline-block}.accessibility,.account,.faq,.supportCenter{align-self:stretch;position:relative}.containers1,.linkContainer1{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.linkContainer1{align-self:stretch;gap:var(--gap-3xs);font-size:var(--components-input-text-size)}.containers1{width:200px;overflow:hidden;flex-shrink:0;padding:0 var(--padding-xl) 0 0;box-sizing:border-box;gap:var(--gap-sm);min-width:200px}.more{width:76.7px;position:relative;line-height:27px;font-weight:500;display:inline-block}.airlineFees,.covidAdvisory,.quarantineRules,.tips{align-self:stretch;position:relative}.containers2,.linkContainer2{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.linkContainer2{align-self:stretch;gap:var(--gap-3xs);font-size:var(--components-input-text-size)}.containers2{width:200px;gap:var(--gap-sm);min-width:200px}.fickleflightBioParent,.footer{display:flex;flex-direction:row;box-sizing:border-box}.fickleflightBioParent{flex:1;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;padding:0 var(--padding-xl);gap:44px 42.7px;max-width:1320px;text-align:left;font-size:var(--font-size-xl);color:var(--studio-darkmode-allwhite-ffffff);font-family:var(--components-button-large)}.footer{width:100%;position:relative;background:linear-gradient(91.74deg, #0b5ba8 25.38%, #299bd8);align-items:center;justify-content:center;padding:var(--padding-11xl) 60px;line-height:normal;letter-spacing:normal}@media screen and (max-width: 1325px){.fickleflightBioParent{max-width:100%}}@media screen and (max-width: 800px){.fickleflightBioParent{gap:var(--gap-2xl)}.footer{gap:22px;padding-left:var(--padding-11xl);padding-right:var(--padding-11xl);box-sizing:border-box}}@media screen and (max-width: 450px){.company,.more,.support{font-size:var(--components-input-text-size);line-height:22px}}.logoblueIcon{height:33px;width:174px;position:relative;object-fit:contain}.navigationLink{position:relative;display:inline-block;min-width:47px}.navigationlink{display:flex;flex-direction:row;align-items:center;justify-content:center;color:var(--color-cornflowerblue-100)}.text{position:relative;font-size:var(--font-size-sm);font-family:var(--components-button-large);color:var(--color-darkslategray-100);text-align:center;display:inline-block;min-width:43px}.navigationlink1{cursor:pointer;border:0;padding:0;background-color:transparent;display:flex;flex-direction:row;align-items:center;justify-content:center}.text1{position:relative;display:inline-block;min-width:41px}.navigationlink2{display:flex;flex-direction:row;align-items:center;justify-content:center}.text2{position:relative;display:inline-block;min-width:39px}.navigationMenu,.navigationlink3{display:flex;flex-direction:row;align-items:center;justify-content:center}.navigationMenu{flex:1;justify-content:space-between;padding:0 var(--padding-12xs);gap:var(--gap-xl)}.hamburgerMenuIcon{position:relative;display:none}.hamburgerMenuIcon,.icon{height:24px;width:24px;overflow:hidden;flex-shrink:0;object-fit:contain}.avatarIcon{height:36px;width:36px;border-radius:38px;object-fit:cover}.accountSection{justify-content:center;gap:var(--gap-xs)}.accountSection,.headerContainer,.navigationRight{display:flex;flex-direction:row;align-items:center}.navigationRight{width:370px;justify-content:flex-end;gap:36px;max-width:370px}.headerContainer{flex:1;justify-content:space-between;max-width:100%;gap:var(--gap-xl)}.header,.headerParent{display:flex;box-sizing:border-box}.header{align-self:stretch;background-color:var(--studio-darkmode-allwhite-ffffff);flex-direction:row;align-items:center;justify-content:center;padding:22px var(--padding-xl);max-width:100%;text-align:center;font-size:var(--font-size-sm);color:var(--color-darkslategray-100);font-family:var(--components-button-large)}.headerParent{width:100%;position:relative;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--padding-3xs);line-height:normal;letter-spacing:normal}@media screen and (max-width: 544px){.navigationMenu{display:none}.navigationRight{width:108px}}@media screen and (max-width: 370px){.navigationRight{gap:18px}}.city,.id,.imageIcon{align-self:stretch;position:relative}.imageIcon{border-radius:var(--br-3xs) var(--br-3xs) 0 0;max-width:100%;overflow:hidden;max-height:100%;object-fit:cover}.city,.id{letter-spacing:.02em}.city{font-weight:500}.id{font-size:var(--components-input-text-size);color:#999}.container{flex:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:0 var(--padding-xl);gap:3px}.price{width:112px;position:relative;font-size:32px;line-height:34px;font-family:var(--font-baloo-bhai);color:var(--color-cornflowerblue-100);text-align:right;display:inline-block;white-space:nowrap;flex-shrink:0;box-sizing:border-box;padding-left:var(--padding-xl);padding-right:var(--padding-xl)}.holidayDetails,.holidaycard{display:flex;align-items:center}.holidayDetails{align-self:stretch;border-radius:0 0 var(--br-3xs) var(--br-3xs);background-color:var(--studio-darkmode-allwhite-ffffff);border:1px solid var(--color-whitesmoke);flex-direction:row;justify-content:center;padding:var(--padding-lg) var(--padding-lgi);gap:var(--gap-xs);text-align:left;font-size:var(--font-size-xl);color:var(--color-darkslategray-100);font-family:var(--components-button-large)}.holidaycard{width:100%;position:relative;flex-direction:column;justify-content:flex-start;min-width:280px;line-height:normal;letter-spacing:normal}.imageIcon{border-radius:var(--br-3xs);max-width:100%;overflow:hidden;max-height:100%;object-fit:cover}.hotelname,.hoteltype,.imageIcon,.price{align-self:stretch;position:relative}.hoteltype{letter-spacing:.02em;color:var(--color-gray-100)}.hotelname,.price{letter-spacing:.04em}.hotelname{margin:0;font-size:22px;text-transform:capitalize;font-weight:700;font-family:inherit}.price{font-size:var(--font-size-lg)}.stayDetailsRows{flex:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:6px}.videoIcon{height:25px;width:25px;position:relative;overflow:hidden;flex-shrink:0}.stayDetails{align-self:stretch;display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;gap:11px}.vectorIcon{height:17.2px;width:15.7px;position:relative}.rating1{position:relative;letter-spacing:.04em;font-weight:500;display:inline-block;min-width:25px}.vectorParent{overflow:hidden;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:2px}.reviews{flex:1;position:relative;letter-spacing:.04em;color:var(--color-cornflowerblue-100)}.button,.rating{align-self:stretch}.rating{overflow:hidden;display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;gap:var(--gap-5xs)}.button{position:relative;letter-spacing:.46px;line-height:26px;text-transform:uppercase;font-weight:500}.hotelcard,.moreDetailsButton{display:flex;flex-direction:column}.moreDetailsButton{align-self:stretch;border-radius:var(--br-9xs);border:1px solid #cdddec;overflow:hidden;align-items:center;justify-content:center;padding:8px 0;white-space:nowrap;text-align:center;font-size:var(--components-button-large-size);color:var(--color-cornflowerblue-100)}.hotelcard{width:100%;position:relative;border-radius:var(--br-3xs);background-color:var(--studio-darkmode-allwhite-ffffff);border:1px solid var(--color-whitesmoke);box-sizing:border-box;align-items:flex-start;justify-content:flex-start;padding:13px var(--padding-xs);gap:23px;min-width:280px;line-height:normal;letter-spacing:normal;text-align:left;font-size:var(--components-input-text-size);color:var(--color-darkslategray-200);font-family:var(--components-button-large)}.hotelcard:hover{background-color:rgba(226, 226, 226, 0.1)}.formTitle,.formTitleSubtext{align-self:stretch;position:relative}.formTitleSubtext{letter-spacing:.04em;text-transform:uppercase}.formTitle{margin:0;font-size:30px;font-weight:700;font-family:inherit;color:#434343}.formHeader{align-self:stretch;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:var(--gap-6xs)}.fillInYour,.yourName{font-family:var(--components-button-large);position:relative;text-align:left}.fillInYour{align-self:stretch;font-size:var(--font-size-lg);line-height:34px;color:#576074}.yourName{width:100%;border:0;outline:0;font-size:var(--components-input-text-size);background-color:transparent;height:24px;letter-spacing:.15px;line-height:24px;color:var(--text-secondary);align-items:center;flex-shrink:0;min-width:250px;padding:0}.emailAddress,.nameInput,.yourName{align-self:stretch;display:flex}.nameInput{border-radius:var(--br-9xs);border:1px solid var(--other-outlined-border);flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--padding-sm) var(--padding-2xs)}.emailAddress{width:100%;border:0;outline:0;font-family:var(--components-button-large);font-size:var(--components-input-text-size);background-color:transparent;height:24px;position:relative;letter-spacing:.15px;line-height:24px;color:var(--text-secondary);text-align:left;align-items:center;flex-shrink:0;min-width:250px;padding:0}.emailInput,.formFields{align-self:stretch;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.emailInput{border-radius:var(--br-9xs);border:1px solid var(--other-outlined-border);padding:var(--padding-sm) var(--padding-2xs)}.formFields{gap:var(--gap-3xs)}.buttonInst{align-self:stretch;position:relative;font-size:var(--components-button-large-size);letter-spacing:.46px;line-height:26px;text-transform:uppercase;font-weight:500;font-family:var(--components-button-large);color:var(--studio-darkmode-allwhite-ffffff);text-align:center}.button,.form{display:flex;flex-direction:column}.button{cursor:pointer;border:0;padding:var(--padding-mini) var(--padding-3xs);background-color:var(--color-orange);width:100%;border-radius:var(--br-9xs);overflow:hidden;align-items:center;justify-content:center;box-sizing:border-box;max-width:160px}.button:hover{background-color:#c76600}.form{margin:0;align-self:stretch;border-radius:12px;background-color:var(--studio-darkmode-allwhite-ffffff);box-shadow:0 0 24px rgba(0, 0, 0, 0.03);border:1px solid var(--color-whitesmoke);align-items:flex-start;justify-content:flex-start;padding:28px 29px;gap:17px}.formContainer,.subscribesection{display:flex;flex-direction:column;align-items:center;box-sizing:border-box}.formContainer{width:550px;justify-content:center;padding:var(--padding-xl) 0;gap:30px;max-width:550px}.subscribesection{width:100%;position:relative;overflow:hidden;justify-content:flex-start;padding:45px var(--padding-xl);background-image:url(${___CSS_LOADER_URL_REPLACEMENT_1___});background-size:cover;background-repeat:no-repeat;background-position:top;line-height:normal;letter-spacing:normal;text-align:center;font-size:var(--font-size-lg);color:var(--color-cornflowerblue-200);font-family:var(--components-button-large)}@media screen and (max-width: 750px){.formTitle{font-size:var(--font-size-5xl)}}@media screen and (max-width: 675px){.formContainer{max-width:100%}}@media screen and (max-width: 450px){.formTitle{font-size:var(--font-size-lg)}}.icon{height:65px;width:65px;position:relative;object-fit:cover}.iconWrapper{display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;padding:0 var(--padding-xs)}.text,.tripitem{position:relative}.text{align-self:stretch;letter-spacing:.04em}.tripitem{width:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:var(--gap-5xs);line-height:normal;letter-spacing:normal;text-align:center;font-size:var(--components-button-large-size);color:var(--color-gray-100);font-family:var(--components-button-large)}@font-face{font-family:"itnicons";src:url("https://d3beo87skfz9b9.cloudfront.net/2zx7iiUWaS40DohQvcnpHR1M4sM/md5t4d1dtuidvsmvgnl.ttf") format("truetype"),url("https://d3beo87skfz9b9.cloudfront.net/2zx7iiUWaS40DohQvcnpHR1M4sM/md5t4d1ep4idv7d8lzn.woff") format("woff"),url("https://d3beo87skfz9b9.cloudfront.net/2zx7iiUWaS40DohQvcnpHR1M4sM/md5t4d1f7bxg225gkq3.ttf") format("truetype");font-weight:normal;font-style:normal;font-display:block}[class^=itn-icon-],[class*=" itn-icon-"]{font-family:"itnicons" !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.itn-icon-rebates:before{content:""}.itn-icon-zoom-in:before{content:""}.itn-icon-horizontal-view:before{content:""}.itn-icon-vertical-view:before{content:""}.itn-icon-zoom-out:before{content:""}.itn-icon-alpha-sort:before{content:""}.itn-icon-revup-support:before{content:""}.itn-icon-external-vendor:before{content:""}.itn-icon-shopping-list:before{content:""}.itn-icon-classifications:before{content:""}.itn-icon-itrade-price:before{content:""}.itn-icon-card:before{content:""}.itn-icon-telegram:before{content:""}.itn-icon-uploaded-img:before{content:""}.itn-icon-open-link-download:before{content:""}.itn-icon-Close:before{content:"";color:#687576}.itn-icon-Copy:before{content:"";color:#687576}.itn-icon-Send:before{content:"";color:#687576}.itn-icon-Stop:before{content:""}.itn-icon-Sparkles:before{content:"";color:#f1aa48}.itn-icon-invoice-right:before{content:""}.itn-icon-step-backward .path1:before{content:"";color:rgb(236, 236, 236)}.itn-icon-step-backward .path2:before{content:"";margin-left:-1em;color:rgb(68, 83, 84)}.itn-icon-step-backward-disabled .path1:before{content:"";color:rgb(236, 236, 236)}.itn-icon-step-backward-disabled .path2:before{content:"";margin-left:-1em;color:rgb(198, 203, 203)}.itn-icon-step-forward-disabled .path1:before{content:"";color:rgb(236, 236, 236)}.itn-icon-step-forward-disabled .path2:before{content:"";margin-left:-1em;color:rgb(198, 203, 203)}.itn-icon-step-forward .path1:before{content:"";color:rgb(236, 236, 236)}.itn-icon-step-forward .path2:before{content:"";margin-left:-1em;color:rgb(68, 83, 84)}.itn-icon-pickup-filled:before{content:""}.itn-icon-dropoff-filled:before{content:"";color:#0336ff}.itn-icon-rectange-refresh:before{content:""}.itn-icon-export-attachment:before{content:""}.itn-icon-upload-img:before{content:""}.itn-icon-RPC:before{content:""}.itn-icon-RPP:before{content:""}.itn-icon-spend1:before{content:""}.itn-icon-admin-service:before{content:""}.itn-icon-date:before{content:""}.itn-icon-exclusion-inclusion:before{content:""}.itn-icon-freight1:before{content:""}.itn-icon-integration1:before{content:""}.itn-icon-megaphone:before{content:""}.itn-icon-oms:before{content:""}.itn-icon-org-manager:before{content:""}.itn-icon-package:before{content:""}.itn-icon-price-module:before{content:""}.itn-icon-produce-contracts:before{content:""}.itn-icon-retail:before{content:""}.itn-icon-tru-tac:before{content:""}.itn-icon-uil_tag-alt:before{content:""}.itn-icon-date-time:before{content:""}.itn-icon-support:before{content:""}.itn-icon-open-in-new-tab:before{content:""}.itn-icon-activity1:before{content:"";color:#445354}.itn-icon-new-activity-filled .path1:before{content:"";color:rgb(3, 132, 135)}.itn-icon-new-activity-filled .path2:before{content:"";margin-left:-1em;color:rgb(255, 255, 255)}.itn-icon-split:before{content:""}.itn-icon-edit-alt:before{content:""}.itn-icon-new-activity .path1:before{content:"";color:rgb(3, 54, 255)}.itn-icon-new-activity .path2:before{content:"";margin-left:-1em;color:rgb(243, 163, 58)}.itn-icon-order-guide:before{content:""}.itn-icon-archive:before{content:""}.itn-icon-receiving:before{content:""}.itn-icon-create-receipt:before{content:""}.itn-icon-edit-receipt:before{content:""}.itn-icon-dot:before{content:""}.itn-icon-file-late:before{content:""}.itn-icon-file-quality:before{content:""}.itn-icon-item-contracted:before{content:""}.itn-icon-org-type:before{content:""}.itn-icon-repeating:before{content:""}.itn-icon-sync:before{content:""}.itn-icon-vendor:before{content:""}.itn-icon-switch:before{content:""}.itn-icon-rfq:before{content:""}.itn-icon-product-icon:before{content:""}.itn-icon-map-alt:before{content:""}.itn-icon-layers-less:before{content:""}.itn-icon-layers:before{content:""}.itn-icon-grid-regular:before{content:""}.itn-icon-grid-compact:before{content:""}.itn-icon-grid-cards:before{content:""}.itn-icon-file-graph:before{content:""}.itn-icon-defer:before{content:""}.itn-icon-contract:before{content:""}.itn-icon-carma:before{content:""}.itn-icon-buyer:before{content:""}.itn-icon-add-user:before{content:""}.itn-icon-manufactor:before{content:""}.itn-icon-star-half-alt:before{content:""}.itn-icon-map-need-review:before{content:"";color:#2196f3}.itn-icon-comparison:before{content:""}.itn-icon-bp:before{content:""}.itn-icon-dropship:before{content:""}.itn-icon-iTraceFresh:before{content:""}.itn-icon-list-inactive:before{content:""}.itn-icon-beverage:before{content:""}.itn-icon-bread:before{content:""}.itn-icon-corn:before{content:""}.itn-icon-dairy:before{content:""}.itn-icon-delayed-loads:before{content:""}.itn-icon-fruits:before{content:""}.itn-icon-grains:before{content:""}.itn-icon-grow:before{content:""}.itn-icon-in-transit:before{content:""}.itn-icon-leafy-greens:before{content:""}.itn-icon-list-active:before{content:""}.itn-icon-list-all:before{content:""}.itn-icon-list-deleted:before{content:""}.itn-icon-list-draft:before{content:""}.itn-icon-list-soldout:before{content:""}.itn-icon-oils:before{content:""}.itn-icon-Placeholder:before{content:""}.itn-icon-prepared:before{content:""}.itn-icon-proteins:before{content:""}.itn-icon-receiving-wh:before{content:""}.itn-icon-rejected-loads:before{content:""}.itn-icon-seafood:before{content:""}.itn-icon-shipping-wh:before{content:""}.itn-icon-vegetables-frozen:before{content:""}.itn-icon-vegetables-shelfsafe:before{content:""}.itn-icon-grow-alt:before{content:""}.itn-icon-barcode-scan:before{content:""}.itn-icon-bookmark-filled:before{content:""}.itn-icon-check-circle-filled:before{content:""}.itn-icon-globe:before{content:""}.itn-icon-health:before{content:""}.itn-icon-heark-break:before{content:""}.itn-icon-integration-rejections:before{content:""}.itn-icon-label:before{content:""}.itn-icon-label-filled:before{content:""}.itn-icon-microphone:before{content:""}.itn-icon-number:before{content:""}.itn-icon-print:before{content:""}.itn-icon-reply:before{content:""}.itn-icon-save:before{content:""}.itn-icon-send:before{content:""}.itn-icon-android:before{content:""}.itn-icon-android-alt:before{content:""}.itn-icon-apple:before{content:""}.itn-icon-apple-alt:before{content:""}.itn-icon-facebook:before{content:""}.itn-icon-facebook-alt:before{content:""}.itn-icon-instagram:before{content:""}.itn-icon-instagram-alt:before{content:""}.itn-icon-linkedin:before{content:""}.itn-icon-linkedin-alt:before{content:""}.itn-icon-twitter:before{content:""}.itn-icon-twitter-alt:before{content:""}.itn-icon-hospital:before{content:""}.itn-icon-map:before{content:""}.itn-icon-received-short:before{content:""}.itn-icon-shipped-short:before{content:""}.itn-icon-my-product:before{content:""}.itn-icon-favorite-filled:before{content:""}.itn-icon-favorite-half-fill:before{content:""}.itn-icon-file-check:before{content:""}.itn-icon-file-cross:before{content:""}.itn-icon-export:before{content:""}.itn-icon-loads-in-transit:before{content:""}.itn-icon-accounts-payable:before{content:""}.itn-icon-accounts-receiving:before{content:""}.itn-icon-activity:before{content:"";color:#2c3a3a}.itn-icon-add:before{content:""}.itn-icon-add-comment:before{content:""}.itn-icon-add-photo:before{content:""}.itn-icon-alert:before{content:""}.itn-icon-arriving-today:before{content:""}.itn-icon-arriving-tomorrow:before{content:""}.itn-icon-arrow-circle-down:before{content:""}.itn-icon-arrow-circle-left:before{content:""}.itn-icon-arrow-circle-right:before{content:""}.itn-icon-arrow-circle-up:before{content:""}.itn-icon-arrow-down:before{content:""}.itn-icon-arrow-left:before{content:""}.itn-icon-arrow-right:before{content:""}.itn-icon-arrow-up:before{content:""}.itn-icon-asterik:before{content:""}.itn-icon-attachment:before{content:""}.itn-icon-award:before{content:""}.itn-icon-bar-chart:before{content:""}.itn-icon-bar-chart-alt:before{content:""}.itn-icon-base-trace:before{content:""}.itn-icon-bitcoin:before{content:""}.itn-icon-bookmark:before{content:""}.itn-icon-broker:before{content:""}.itn-icon-building:before{content:""}.itn-icon-bullseye:before{content:""}.itn-icon-calculator:before{content:""}.itn-icon-calendar:before{content:""}.itn-icon-calendar-cancel:before{content:""}.itn-icon-calendar-filled:before{content:""}.itn-icon-cancel:before{content:""}.itn-icon-case:before{content:""}.itn-icon-catalog:before{content:""}.itn-icon-charge:before{content:""}.itn-icon-check:before{content:""}.itn-icon-chevron-down:before{content:""}.itn-icon-chevron-left:before{content:""}.itn-icon-chevron-right:before{content:""}.itn-icon-chevron-up:before{content:""}.itn-icon-circle-check:before{content:""}.itn-icon-circle-minus:before{content:""}.itn-icon-clipboard:before{content:""}.itn-icon-clock:before{content:""}.itn-icon-clock-five:before{content:""}.itn-icon-clock-three:before{content:""}.itn-icon-clock-two:before{content:""}.itn-icon-close-x:before{content:""}.itn-icon-cloud:before{content:""}.itn-icon-cloud-sun:before{content:""}.itn-icon-clouds:before{content:""}.itn-icon-code-snippet:before{content:""}.itn-icon-cold:before{content:""}.itn-icon-comment:before{content:""}.itn-icon-completed-loads:before{content:""}.itn-icon-configuration:before{content:""}.itn-icon-contracts:before{content:""}.itn-icon-credit-card:before{content:""}.itn-icon-date-range:before{content:""}.itn-icon-day-end:before{content:""}.itn-icon-day-start:before{content:""}.itn-icon-delete:before{content:""}.itn-icon-desert:before{content:""}.itn-icon-document:before{content:""}.itn-icon-dollar-alt:before{content:""}.itn-icon-down-indicator:before{content:""}.itn-icon-download:before{content:""}.itn-icon-drag:before{content:""}.itn-icon-drizzle:before{content:""}.itn-icon-drop-off:before{content:""}.itn-icon-early-morning:before{content:""}.itn-icon-edit:before{content:""}.itn-icon-enterprise:before{content:""}.itn-icon-entrustment:before{content:""}.itn-icon-euro:before{content:""}.itn-icon-favorite:before{content:""}.itn-icon-file:before{content:""}.itn-icon-file-minus:before{content:""}.itn-icon-file-plus:before{content:""}.itn-icon-filter:before{content:""}.itn-icon-folder:before{content:""}.itn-icon-folder-minus:before{content:""}.itn-icon-folder-plus:before{content:""}.itn-icon-freight:before{content:""}.itn-icon-frozen:before{content:""}.itn-icon-fullscreen:before{content:""}.itn-icon-fullscreen-exit:before{content:""}.itn-icon-grid:before{content:""}.itn-icon-half-moon:before{content:""}.itn-icon-help:before{content:""}.itn-icon-hide:before{content:""}.itn-icon-history:before{content:""}.itn-icon-home:before{content:""}.itn-icon-info:before{content:""}.itn-icon-insights-dashboard:before{content:""}.itn-icon-integration:before{content:""}.itn-icon-invoice:before{content:""}.itn-icon-item:before{content:""}.itn-icon-item-rejected:before{content:""}.itn-icon-late-afternoon:before{content:""}.itn-icon-library:before{content:""}.itn-icon-lighting:before{content:""}.itn-icon-line-chart:before{content:""}.itn-icon-line-chart-alt:before{content:""}.itn-icon-lock:before{content:""}.itn-icon-logout:before{content:""}.itn-icon-mail:before{content:""}.itn-icon-map-complete:before{content:"";color:#67ac5c}.itn-icon-map-error:before{content:"";color:#e25241}.itn-icon-map-marker:before{content:""}.itn-icon-map-needs-review:before{content:"";color:#2196f3}.itn-icon-map-warning:before{content:"";color:#f5b53f}.itn-icon-marketplace:before{content:""}.itn-icon-menu:before{content:""}.itn-icon-mid-day:before{content:""}.itn-icon-minus:before{content:""}.itn-icon-moon:before{content:""}.itn-icon-more-horizontal:before{content:""}.itn-icon-more-vertical:before{content:""}.itn-icon-mountain:before{content:""}.itn-icon-my-invoices:before{content:""}.itn-icon-network-monitor:before{content:""}.itn-icon-new-invoices:before{content:""}.itn-icon-night:before{content:""}.itn-icon-note:before{content:""}.itn-icon-notification:before{content:""}.itn-icon-open-case:before{content:""}.itn-icon-order:before{content:""}.itn-icon-pallet:before{content:""}.itn-icon-password:before{content:""}.itn-icon-percentage:before{content:""}.itn-icon-phone:before{content:""}.itn-icon-photo:before{content:""}.itn-icon-pick-up:before{content:""}.itn-icon-pie-chart:before{content:""}.itn-icon-pie-chart-alt:before{content:""}.itn-icon-plus:before{content:""}.itn-icon-po-confirmation:before{content:""}.itn-icon-po-creation:before{content:""}.itn-icon-po-notification:before{content:""}.itn-icon-pound:before{content:""}.itn-icon-price-maintenance:before{content:""}.itn-icon-processing:before{content:""}.itn-icon-pump:before{content:""}.itn-icon-rain:before{content:""}.itn-icon-rain-sun:before{content:""}.itn-icon-refresh:before{content:""}.itn-icon-remit:before{content:""}.itn-icon-remove:before{content:""}.itn-icon-reports:before{content:""}.itn-icon-rupee:before{content:""}.itn-icon-search:before{content:""}.itn-icon-settings:before{content:""}.itn-icon-share:before{content:""}.itn-icon-shipper-claim:before{content:""}.itn-icon-shipping-today:before{content:""}.itn-icon-shipping-tomorrow:before{content:""}.itn-icon-shopping-cart:before{content:""}.itn-icon-sort:before{content:""}.itn-icon-sorting:before{content:""}.itn-icon-spend:before{content:""}.itn-icon-stopwatch:before{content:""}.itn-icon-stopwatch-slash:before{content:""}.itn-icon-temp:before{content:""}.itn-icon-temp-empty:before{content:""}.itn-icon-temp-half:before{content:""}.itn-icon-temp-three-quarter:before{content:""}.itn-icon-text:before{content:""}.itn-icon-thumb-down:before{content:""}.itn-icon-thumb-up:before{content:""}.itn-icon-thunder:before{content:""}.itn-icon-time-and-date:before{content:""}.itn-icon-tornado:before{content:""}.itn-icon-trees:before{content:""}.itn-icon-truck:before{content:""}.itn-icon-truck-loading:before{content:""}.itn-icon-two-line-chart:before{content:""}.itn-icon-undo:before{content:""}.itn-icon-unlock:before{content:""}.itn-icon-up-indicator:before{content:""}.itn-icon-upload:before{content:""}.itn-icon-user:before{content:""}.itn-icon-users:before{content:""}.itn-icon-view:before{content:""}.itn-icon-wallet:before{content:""}.itn-icon-warning:before{content:""}.itn-icon-water:before{content:""}.itn-icon-water-drops:before{content:""}.itn-icon-weight:before{content:""}.itn-icon-wind:before{content:""}.itn-icon-x-dock:before{content:""}.itn-icon-yen:before{content:""}body{margin:0;line-height:normal}:root{--components-button-large: Roboto;--font-baloo-bhai: "Baloo Bhai";--font-size-xl: 20px;--components-input-text-size: 16px;--font-size-5xl: 24px;--font-size-lgi: 19px;--components-button-large-size: 15px;--font-size-lg: 18px;--font-size-sm: 14px;--color-whitesmoke: #eaeaea;--color-black: #000;--color-cornflowerblue-100: #1262af;--color-cornflowerblue-200: #1262ae;--studio-darkmode-allwhite-ffffff: #fff;--color-lightgray: #ccc;--color-gray-100: #8e8e94;--text-secondary: rgba(0, 0, 0, 0.6);--other-outlined-border: rgba(0, 0, 0, 0.23);--color-darkslategray-100: #424242;--color-darkslategray-200: #303030;--color-orange: #f99a0e;--gap-2xl: 21px;--gap-6xs: 7px;--gap-5xs: 8px;--gap-xs: 12px;--gap-xl: 20px;--gap-sm: 14px;--gap-3xs: 10px;--padding-lg: 18px;--padding-lgi: 19px;--padding-xl: 20px;--padding-12xs: 1px;--padding-6xs: 7px;--padding-3xs: 10px;--padding-xs: 12px;--padding-11xl: 30px;--padding-mini: 15px;--padding-sm: 14px;--padding-2xs: 11px;--br-3xs: 10px;--br-9xs: 4px}:root{--components-button-large: Roboto;--font-baloo-bhai: "Baloo Bhai";--font-size-xl: 20px;--components-input-text-size: 16px;--font-size-5xl: 24px;--font-size-lgi: 19px;--components-button-large-size: 15px;--font-size-lg: 18px;--font-size-sm: 14px;--color-whitesmoke: #eaeaea;--color-black: #000;--color-cornflowerblue-100: #1262af;--color-cornflowerblue-200: #1262ae;--studio-darkmode-allwhite-ffffff: #fff;--color-lightgray: #ccc;--color-gray-100: #8e8e94;--text-secondary: rgba(0, 0, 0, 0.6);--other-outlined-border: rgba(0, 0, 0, 0.23);--color-darkslategray-100: #424242;--color-darkslategray-200: #303030;--color-orange: #f99a0e;--gap-2xl: 21px;--gap-6xs: 7px;--gap-5xs: 8px;--gap-xs: 12px;--gap-xl: 20px;--gap-sm: 14px;--gap-3xs: 10px;--padding-lg: 18px;--padding-lgi: 19px;--padding-xl: 20px;--padding-12xs: 1px;--padding-6xs: 7px;--padding-3xs: 10px;--padding-xs: 12px;--padding-11xl: 30px;--padding-mini: 15px;--padding-sm: 14px;--padding-2xs: 11px;--br-3xs: 10px;--br-9xs: 4px}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 723:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 801:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45e4844519b7dd30ba17.ttf";

/***/ }),

/***/ 818:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12fcd81ad371eb129529.png";

/***/ }),

/***/ 855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(414);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(967);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(310);
/* harmony import */ var _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(198), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _locofy_cli_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_locofy_cli_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _locofy_cli_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'vegan';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

.n0FfLGk6v1NkoPEbY4hs,
.qPSzuTdKQ08TtN3CryJM {
  position: relative;
}
.qPSzuTdKQ08TtN3CryJM {
  flex: 1;
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'vegan';
}
.n0FfLGk6v1NkoPEbY4hs {
  width: 100%;
  border-radius: var(--br-9xs);
  background-color: var(--color-orange);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mini) var(--padding-3xs);
  box-sizing: border-box;
  max-width: 160px;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--components-button-large-size);
  color: var(--studio-darkmode-allwhite-ffffff);
  font-family: var(--components-button-large);
}
`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"button": `n0FfLGk6v1NkoPEbY4hs`,
	"text": `qPSzuTdKQ08TtN3CryJM`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 967:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Button: () => (/* reexport */ components_Button)
});

// EXTERNAL MODULE: ../../locofy-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(607);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../locofy-cli/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(108);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../locofy-cli/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(256);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../locofy-cli/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(855);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../locofy-cli/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(723);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../locofy-cli/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(104);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../locofy-cli/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../locofy-cli/node_modules/postcss-loader/dist/cjs.js!../../locofy-cli/node_modules/sass-loader/dist/cjs.js!./.locofy/global.css
var global = __webpack_require__(716);
;// ./.locofy/global.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(global/* default */.A, options);




       /* harmony default export */ const _locofy_global = (global/* default */.A && global/* default */.A.locals ? global/* default */.A.locals : undefined);

// EXTERNAL MODULE: ../../locofy-cli/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../locofy-cli/node_modules/postcss-loader/dist/cjs.js!../../locofy-cli/node_modules/sass-loader/dist/cjs.js!./src/components/icons.css
var icons = __webpack_require__(296);
;// ./src/components/icons.css

      
      
      
      
      
      
      
      
      

var icons_options = {};

icons_options.styleTagTransform = (styleTagTransform_default());
icons_options.setAttributes = (setAttributesWithoutAttributes_default());
icons_options.insert = insertBySelector_default().bind(null, "head");
icons_options.domAPI = (styleDomAPI_default());
icons_options.insertStyleElement = (insertStyleElement_default());

var icons_update = injectStylesIntoStyleTag_default()(icons/* default */.A, icons_options);




       /* harmony default export */ const components_icons = (icons/* default */.A && icons/* default */.A.locals ? icons/* default */.A.locals : undefined);

// EXTERNAL MODULE: ../../locofy-cli/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/Button.module.css
var Button_module = __webpack_require__(944);
;// ./src/components/Button.module.css

      
      
      
      
      
      
      
      
      

var Button_module_options = {};

Button_module_options.styleTagTransform = (styleTagTransform_default());
Button_module_options.setAttributes = (setAttributesWithoutAttributes_default());
Button_module_options.insert = insertBySelector_default().bind(null, "head");
Button_module_options.domAPI = (styleDomAPI_default());
Button_module_options.insertStyleElement = (insertStyleElement_default());

var Button_module_update = injectStylesIntoStyleTag_default()(Button_module/* default */.A, Button_module_options);




       /* harmony default export */ const components_Button_module = (Button_module/* default */.A && Button_module/* default */.A.locals ? Button_module/* default */.A.locals : undefined);

;// ./src/components/itnicons.svg
const itnicons_namespaceObject = __webpack_require__.p + "59a593cef2f703ff8d31.svg";
;// ./src/components/Button.tsx



const Button = () => {
  debugger;
  return /*#__PURE__*/React.createElement("div", {
    className: components_Button_module.button
  }, /*#__PURE__*/React.createElement("div", {
    className: components_Button_module.text
  }, "Search"), /*#__PURE__*/React.createElement("img", {
    src: itnicons_namespaceObject,
    width: 30,
    height: 30,
    alt: "icon"
  }));
};
/* harmony default export */ const components_Button = (Button);
;// ./.locofy/components.js



/******/ 	return __webpack_exports__;
/******/ })()
;
});