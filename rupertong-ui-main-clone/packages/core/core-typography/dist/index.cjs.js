'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var Box = require('@material-ui/core/Box');
var MuiTypography = require('@material-ui/core/Typography');
var clsx = require('clsx');
var upperFirst = require('lodash/upperFirst');
var styles = require('@material-ui/core/styles');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var MuiTypography__default = /*#__PURE__*/_interopDefaultLegacy(MuiTypography);
var upperFirst__default = /*#__PURE__*/_interopDefaultLegacy(upperFirst);

var useStyles = styles.makeStyles(function (theme) {
  return styles.createStyles({
    root: {
      maxWidth: function maxWidth(_a) {
        var fullWidth = _a.fullWidth;
        return fullWidth ? '100%' : 500;
      }
    },
    colorTextDark: {
      color: theme.palette.text.dark
    },
    colorTextBlackHighEmphasis: {
      color: theme.palette.text.black.highEmphasis
    },
    colorTextBlackMedEmphasis: {
      color: theme.palette.text.black.medEmphasis
    },
    colorTextBlackDisabled: {
      color: theme.palette.text.black.disabled
    },
    colorTextWhiteHighEmphasis: {
      color: theme.palette.text.white.highEmphasis
    },
    colorTextWhiteMedEmphasis: {
      color: theme.palette.text.white.medEmphasis
    },
    colorTextWhiteDisabled: {
      color: theme.palette.text.white.disabled
    }
  });
});

/**
 * Typography is used to apply rupertong-ui formats to displayed text.
 *
 * Additional props are as provided under [Typography Props (Material UI)](https://material-ui.com/api/typography/#props)
 */
var Typography = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var variant = _a.variant,
    className = _a.className,
    classes = _a.classes,
    children = _a.children,
    _b = _a.fullWidth,
    fullWidth = _b === void 0 ? false : _b,
    color = _a.color,
    props = tslib.__rest(_a, ["variant", "className", "classes", "children", "fullWidth", "color"]);
  var baseClasses = useStyles({
    fullWidth: fullWidth
  });
  var variantMatch = variant && variant.match(/(\w+)\.(\w+)/);
  var variantOverride = variantMatch && variantMatch[1] || variant;
  var fontWeight = variantMatch && "fontWeight".concat(variantMatch[2].charAt(0).toUpperCase()).concat(variantMatch[2].slice(1));
  var isThemeColor = color && Object.prototype.hasOwnProperty.call(baseClasses, "color".concat(upperFirst__default["default"](color)));
  return jsxRuntime.jsx(MuiTypography__default["default"], tslib.__assign({
    variant: variantOverride,
    className: clsx.clsx(baseClasses.root, isThemeColor && baseClasses["color".concat(upperFirst__default["default"](color))], classes && classes.root, className, 'rupertong-typography')
  }, color && !isThemeColor ? {
    color: color
  } : {}, props, {
    ref: ref
  }, {
    children: jsxRuntime.jsx(Box__default["default"], tslib.__assign({
      component: "span",
      fontWeight: fontWeight
    }, {
      children: children
    }))
  }));
});

exports.Typography = Typography;
exports["default"] = Typography;
