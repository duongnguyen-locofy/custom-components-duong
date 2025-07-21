'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var MuiButton = require('@material-ui/core/Button');
var IconButton = require('@material-ui/core/IconButton');
var coreTypography = require('@rupertong-ui/core-typography');
var clsx = require('clsx');
var styles = require('@material-ui/core/styles');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MuiButton__default = /*#__PURE__*/_interopDefaultLegacy(MuiButton);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);

var useStyles = styles.makeStyles(function (_a) {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70;
  var palette = _a.palette,
    typography = _a.typography,
    shadows = _a.shadows,
    transitions = _a.transitions;
  return styles.createStyles({
    root: {
      minWidth: '88px'
    },
    label: tslib.__assign({
      fontFamily: typography.fontFamily,
      fontStyle: 'normal'
    }, typography.button),
    focused: {},
    disabled: {},
    pressed: {},
    contained: {
      backgroundColor: (_c = (_b = palette.button) === null || _b === void 0 ? void 0 : _b.contained) === null || _c === void 0 ? void 0 : _c.enabledBackground,
      color: (_e = (_d = palette.button) === null || _d === void 0 ? void 0 : _d.contained) === null || _e === void 0 ? void 0 : _e.enabled,
      boxShadow: shadows[2],
      '&:hover': {
        backgroundColor: (_g = (_f = palette.button) === null || _f === void 0 ? void 0 : _f.contained) === null || _g === void 0 ? void 0 : _g.hoverBackground,
        color: (_j = (_h = palette.button) === null || _h === void 0 ? void 0 : _h.contained) === null || _j === void 0 ? void 0 : _j.hover,
        boxShadow: shadows[4]
      },
      '&:link': {
        color: (_l = (_k = palette.button) === null || _k === void 0 ? void 0 : _k.contained) === null || _l === void 0 ? void 0 : _l.enabled,
        textDecoration: 'none'
      },
      '&:visited': {
        color: (_o = (_m = palette.button) === null || _m === void 0 ? void 0 : _m.contained) === null || _o === void 0 ? void 0 : _o.enabled,
        textDecoration: 'none'
      },
      '&:disabled': {
        color: (_q = (_p = palette.button) === null || _p === void 0 ? void 0 : _p.contained) === null || _q === void 0 ? void 0 : _q.disabled,
        backgroundColor: (_s = (_r = palette.button) === null || _r === void 0 ? void 0 : _r.contained) === null || _s === void 0 ? void 0 : _s.disabledBackground,
        boxShadow: 'none'
      },
      '&:focus': {
        color: (_u = (_t = palette.button) === null || _t === void 0 ? void 0 : _t.contained) === null || _u === void 0 ? void 0 : _u.focus,
        backgroundColor: (_w = (_v = palette.button) === null || _v === void 0 ? void 0 : _v.contained) === null || _w === void 0 ? void 0 : _w.focusBackground,
        boxShadow: shadows[4]
      },
      '&$pressed': {
        color: (_y = (_x = palette.button) === null || _x === void 0 ? void 0 : _x.contained) === null || _y === void 0 ? void 0 : _y.active,
        backgroundColor: (_0 = (_z = palette.button) === null || _z === void 0 ? void 0 : _z.contained) === null || _0 === void 0 ? void 0 : _0.activeBackground,
        boxShadow: shadows[8]
      }
    },
    icon: {
      backgroundColor: (_2 = (_1 = palette.button) === null || _1 === void 0 ? void 0 : _1.icon) === null || _2 === void 0 ? void 0 : _2.enabledBackground,
      color: (_4 = (_3 = palette.button) === null || _3 === void 0 ? void 0 : _3.icon) === null || _4 === void 0 ? void 0 : _4.enabled,
      transition: "color ".concat(transitions.duration["short"], "ms ").concat(transitions.easing.easeInOut, ", background-color ").concat(transitions.duration["short"], "ms ").concat(transitions.easing.easeInOut),
      '&:hover': {
        backgroundColor: (_6 = (_5 = palette.button) === null || _5 === void 0 ? void 0 : _5.icon) === null || _6 === void 0 ? void 0 : _6.hoverBackground,
        color: (_8 = (_7 = palette.button) === null || _7 === void 0 ? void 0 : _7.icon) === null || _8 === void 0 ? void 0 : _8.hover
      },
      '&:disabled': {
        color: (_10 = (_9 = palette.button) === null || _9 === void 0 ? void 0 : _9.icon) === null || _10 === void 0 ? void 0 : _10.disabled,
        backgroundColor: (_12 = (_11 = palette.button) === null || _11 === void 0 ? void 0 : _11.icon) === null || _12 === void 0 ? void 0 : _12.disabledBackground
      },
      '&:focus': {
        backgroundColor: (_14 = (_13 = palette.button) === null || _13 === void 0 ? void 0 : _13.icon) === null || _14 === void 0 ? void 0 : _14.focusBackground,
        color: (_16 = (_15 = palette.button) === null || _15 === void 0 ? void 0 : _15.icon) === null || _16 === void 0 ? void 0 : _16.focus
      },
      '&$pressed': {
        backgroundColor: (_18 = (_17 = palette.button) === null || _17 === void 0 ? void 0 : _17.icon) === null || _18 === void 0 ? void 0 : _18.activeBackground,
        color: (_20 = (_19 = palette.button) === null || _19 === void 0 ? void 0 : _19.icon) === null || _20 === void 0 ? void 0 : _20.active
      }
    },
    text: {
      padding: '10px 16px',
      color: (_22 = (_21 = palette.button) === null || _21 === void 0 ? void 0 : _21.text) === null || _22 === void 0 ? void 0 : _22.enabled,
      '&:hover': {
        backgroundColor: (_24 = (_23 = palette.button) === null || _23 === void 0 ? void 0 : _23.text) === null || _24 === void 0 ? void 0 : _24.hoverBackground,
        color: (_26 = (_25 = palette.button) === null || _25 === void 0 ? void 0 : _25.text) === null || _26 === void 0 ? void 0 : _26.hover
      },
      '&:link': {
        color: (_28 = (_27 = palette.button) === null || _27 === void 0 ? void 0 : _27.text) === null || _28 === void 0 ? void 0 : _28.enabled,
        textDecoration: 'none'
      },
      '&:visited': {
        color: (_30 = (_29 = palette.button) === null || _29 === void 0 ? void 0 : _29.text) === null || _30 === void 0 ? void 0 : _30.enabled,
        textDecoration: 'none'
      },
      '&$disabled': {
        color: (_32 = (_31 = palette.button) === null || _31 === void 0 ? void 0 : _31.text) === null || _32 === void 0 ? void 0 : _32.disabled,
        backgroundColor: (_34 = (_33 = palette.button) === null || _33 === void 0 ? void 0 : _33.text) === null || _34 === void 0 ? void 0 : _34.disabledBackground
      },
      '&$focused': {
        color: (_36 = (_35 = palette.button) === null || _35 === void 0 ? void 0 : _35.text) === null || _36 === void 0 ? void 0 : _36.focus,
        backgroundColor: (_38 = (_37 = palette.button) === null || _37 === void 0 ? void 0 : _37.text) === null || _38 === void 0 ? void 0 : _38.focusBackground
      },
      '&$pressed': {
        color: (_40 = (_39 = palette.button) === null || _39 === void 0 ? void 0 : _39.text) === null || _40 === void 0 ? void 0 : _40.active,
        backgroundColor: (_42 = (_41 = palette.button) === null || _41 === void 0 ? void 0 : _41.text) === null || _42 === void 0 ? void 0 : _42.activeBackground
      }
    },
    outlined: {
      backgroundColor: (_44 = (_43 = palette.button) === null || _43 === void 0 ? void 0 : _43.outlined) === null || _44 === void 0 ? void 0 : _44.enabledBackground,
      color: (_46 = (_45 = palette.button) === null || _45 === void 0 ? void 0 : _45.outlined) === null || _46 === void 0 ? void 0 : _46.enabled,
      borderColor: (_47 = palette.border) === null || _47 === void 0 ? void 0 : _47.enabled,
      '&:hover': {
        backgroundColor: (_49 = (_48 = palette.button) === null || _48 === void 0 ? void 0 : _48.outlined) === null || _49 === void 0 ? void 0 : _49.hoverBackground,
        color: (_51 = (_50 = palette.button) === null || _50 === void 0 ? void 0 : _50.outlined) === null || _51 === void 0 ? void 0 : _51.hover,
        borderColor: (_52 = palette.border) === null || _52 === void 0 ? void 0 : _52.hover
      },
      '&:link': {
        color: (_54 = (_53 = palette.button) === null || _53 === void 0 ? void 0 : _53.outlined) === null || _54 === void 0 ? void 0 : _54.enabled,
        textDecoration: 'none'
      },
      '&:visited': {
        color: (_56 = (_55 = palette.button) === null || _55 === void 0 ? void 0 : _55.outlined) === null || _56 === void 0 ? void 0 : _56.enabled,
        textDecoration: 'none'
      },
      '&$disabled': {
        color: (_58 = (_57 = palette.button) === null || _57 === void 0 ? void 0 : _57.outlined) === null || _58 === void 0 ? void 0 : _58.disabled,
        backgroundColor: (_60 = (_59 = palette.button) === null || _59 === void 0 ? void 0 : _59.outlined) === null || _60 === void 0 ? void 0 : _60.disabledBackground
      },
      '&$focused': {
        color: (_62 = (_61 = palette.button) === null || _61 === void 0 ? void 0 : _61.outlined) === null || _62 === void 0 ? void 0 : _62.focus,
        backgroundColor: (_64 = (_63 = palette.button) === null || _63 === void 0 ? void 0 : _63.outlined) === null || _64 === void 0 ? void 0 : _64.focusBackground,
        borderColor: (_65 = palette.border) === null || _65 === void 0 ? void 0 : _65.focus
      },
      '&$pressed': {
        color: (_67 = (_66 = palette.button) === null || _66 === void 0 ? void 0 : _66.outlined) === null || _67 === void 0 ? void 0 : _67.active,
        backgroundColor: (_69 = (_68 = palette.button) === null || _68 === void 0 ? void 0 : _68.outlined) === null || _69 === void 0 ? void 0 : _69.activeBackground,
        borderColor: (_70 = palette.border) === null || _70 === void 0 ? void 0 : _70.focus
      }
    },
    sizeSmall: {
      fontSize: typography.button.fontSize,
      height: '24px',
      padding: '4px 16px'
    },
    sizeLarge: {
      height: '36px',
      padding: '10px 16px'
    },
    textSizeSmall: {
      padding: '4px 8px'
    },
    textSizeLarge: {
      padding: '10px 8px'
    }
  });
});

var ButtonComponent = function ButtonComponent(_a, ref) {
  var _b = _a.label,
    label = _b === void 0 ? undefined : _b,
    disabled = _a.disabled,
    onClick = _a.onClick,
    _c = _a.variant,
    variant = _c === void 0 ? 'text' : _c,
    _d = _a.size,
    size = _d === void 0 ? 'large' : _d,
    className = _a.className,
    classes = _a.classes,
    children = _a.children,
    _e = _a.component,
    component = _e === void 0 ? 'button' : _e,
    props = tslib.__rest(_a, ["label", "disabled", "onClick", "variant", "size", "className", "classes", "children", "component"]);
  var baseClasses = useStyles();
  var _f = react.useState(false),
    pressed = _f[0],
    setPressed = _f[1];
  var _onMouseUp = props.onMouseUp,
    _onMouseLeave = props.onMouseLeave,
    _onMouseDown = props.onMouseDown;
  var onMouseEvent = function onMouseEvent(down) {
    setPressed(down && !disabled);
    return true;
  };
  var buttonRef = react.useRef(null);
  var handleClick = function handleClick(event) {
    if (onClick) {
      onClick(event);
    }
    var tempRef = ref || buttonRef;
    if (tempRef && tempRef.current) {
      tempRef.current.blur();
    }
  };
  var sharedProps = {
    className: clsx.clsx(className, 'evergreen-btn'),
    color: 'primary',
    disabled: disabled,
    disableFocusRipple: true,
    disableRipple: true,
    disableTouchRipple: true,
    onClick: handleClick,
    onMouseUp: function onMouseUp(e) {
      return onMouseEvent(false) && _onMouseUp && _onMouseUp(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return onMouseEvent(false) && _onMouseLeave && _onMouseLeave(e);
    },
    onMouseDown: function onMouseDown(e) {
      return onMouseEvent(true) && _onMouseDown && _onMouseDown(e);
    },
    ref: ref || buttonRef,
    component: component
  };
  var buttonClasses = classes;
  if (variant === 'icon') {
    var iconButtonClasses = classes;
    return jsxRuntime.jsx(IconButton__default["default"], tslib.__assign({}, sharedProps, {
      classes: {
        root: clsx.clsx(baseClasses.icon, pressed && baseClasses.pressed, iconButtonClasses && iconButtonClasses.root),
        disabled: clsx.clsx(baseClasses.disabled, iconButtonClasses && iconButtonClasses.disabled),
        label: clsx.clsx(baseClasses.label, iconButtonClasses && iconButtonClasses.label),
        sizeSmall: clsx.clsx(iconButtonClasses && iconButtonClasses.sizeSmall),
        edgeStart: clsx.clsx(iconButtonClasses && iconButtonClasses.edgeStart),
        edgeEnd: clsx.clsx(iconButtonClasses && iconButtonClasses.edgeEnd)
      },
      size: size !== 'large' ? size : 'medium'
    }, props, {
      children: children
    }));
  }
  return jsxRuntime.jsx(MuiButton__default["default"], tslib.__assign({}, sharedProps, {
    variant: variant,
    size: size,
    classes: {
      root: clsx.clsx(baseClasses.root, pressed && baseClasses.pressed, buttonClasses && buttonClasses.root),
      label: clsx.clsx(baseClasses.label, buttonClasses && buttonClasses.label),
      contained: clsx.clsx(baseClasses.contained, buttonClasses && buttonClasses.contained),
      outlined: clsx.clsx(baseClasses.outlined, buttonClasses && buttonClasses.outlined),
      focusVisible: clsx.clsx(baseClasses.focused, buttonClasses && buttonClasses.focusVisible),
      disabled: clsx.clsx(baseClasses.disabled, buttonClasses && buttonClasses.disabled),
      text: clsx.clsx(baseClasses.text, buttonClasses && buttonClasses.text),
      sizeSmall: clsx.clsx(baseClasses.sizeSmall, buttonClasses && buttonClasses.sizeSmall),
      sizeLarge: clsx.clsx(baseClasses.sizeLarge, buttonClasses && buttonClasses.sizeLarge),
      textSizeSmall: clsx.clsx(baseClasses.textSizeSmall, buttonClasses && buttonClasses.textSizeSmall),
      textSizeLarge: clsx.clsx(baseClasses.textSizeLarge, buttonClasses && buttonClasses.textSizeLarge)
    }
  }, props, {
    children: jsxRuntime.jsx(coreTypography.Typography, tslib.__assign({
      variant: "button"
    }, {
      children: children || label
    }))
  }));
};
/**
 * Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

 For text based buttons (`text` | `contained` | `outlined`), you can use the `label` or `children` prop for the button's display.

 For icon based buttons, you must specify a `children` prop.
 */
var Button = /*#__PURE__*/react.forwardRef(ButtonComponent);

exports.Button = Button;
exports["default"] = Button;
