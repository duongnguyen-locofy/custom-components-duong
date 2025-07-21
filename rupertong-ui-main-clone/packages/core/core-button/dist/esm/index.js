import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useRef } from 'react';
import MuiButton from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@rupertong-ui/core-typography';
import { clsx } from 'clsx';
import useStyles from './styles.js';

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
    props = __rest(_a, ["label", "disabled", "onClick", "variant", "size", "className", "classes", "children", "component"]);
  var baseClasses = useStyles();
  var _f = useState(false),
    pressed = _f[0],
    setPressed = _f[1];
  var _onMouseUp = props.onMouseUp,
    _onMouseLeave = props.onMouseLeave,
    _onMouseDown = props.onMouseDown;
  var onMouseEvent = function onMouseEvent(down) {
    setPressed(down && !disabled);
    return true;
  };
  var buttonRef = useRef(null);
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
    className: clsx(className, 'evergreen-btn'),
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
    return jsx(IconButton, __assign({}, sharedProps, {
      classes: {
        root: clsx(baseClasses.icon, pressed && baseClasses.pressed, iconButtonClasses && iconButtonClasses.root),
        disabled: clsx(baseClasses.disabled, iconButtonClasses && iconButtonClasses.disabled),
        label: clsx(baseClasses.label, iconButtonClasses && iconButtonClasses.label),
        sizeSmall: clsx(iconButtonClasses && iconButtonClasses.sizeSmall),
        edgeStart: clsx(iconButtonClasses && iconButtonClasses.edgeStart),
        edgeEnd: clsx(iconButtonClasses && iconButtonClasses.edgeEnd)
      },
      size: size !== 'large' ? size : 'medium'
    }, props, {
      children: children
    }));
  }
  return jsx(MuiButton, __assign({}, sharedProps, {
    variant: variant,
    size: size,
    classes: {
      root: clsx(baseClasses.root, pressed && baseClasses.pressed, buttonClasses && buttonClasses.root),
      label: clsx(baseClasses.label, buttonClasses && buttonClasses.label),
      contained: clsx(baseClasses.contained, buttonClasses && buttonClasses.contained),
      outlined: clsx(baseClasses.outlined, buttonClasses && buttonClasses.outlined),
      focusVisible: clsx(baseClasses.focused, buttonClasses && buttonClasses.focusVisible),
      disabled: clsx(baseClasses.disabled, buttonClasses && buttonClasses.disabled),
      text: clsx(baseClasses.text, buttonClasses && buttonClasses.text),
      sizeSmall: clsx(baseClasses.sizeSmall, buttonClasses && buttonClasses.sizeSmall),
      sizeLarge: clsx(baseClasses.sizeLarge, buttonClasses && buttonClasses.sizeLarge),
      textSizeSmall: clsx(baseClasses.textSizeSmall, buttonClasses && buttonClasses.textSizeSmall),
      textSizeLarge: clsx(baseClasses.textSizeLarge, buttonClasses && buttonClasses.textSizeLarge)
    }
  }, props, {
    children: jsx(Typography, __assign({
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
var Button = /*#__PURE__*/forwardRef(ButtonComponent);

export { Button, Button as default };
//# sourceMappingURL=index.js.map
