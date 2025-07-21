import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import Box from '@material-ui/core/Box';
import MuiTypography from '@material-ui/core/Typography';
import { clsx } from 'clsx';
import upperFirst from 'lodash/upperFirst';
import useStyles from './styles.js';

/**
 * Typography is used to apply rupertong-ui formats to displayed text.
 *
 * Additional props are as provided under [Typography Props (Material UI)](https://material-ui.com/api/typography/#props)
 */
var Typography = /*#__PURE__*/forwardRef(function (_a, ref) {
  var variant = _a.variant,
    className = _a.className,
    classes = _a.classes,
    children = _a.children,
    _b = _a.fullWidth,
    fullWidth = _b === void 0 ? false : _b,
    color = _a.color,
    props = __rest(_a, ["variant", "className", "classes", "children", "fullWidth", "color"]);
  var baseClasses = useStyles({
    fullWidth: fullWidth
  });
  var variantMatch = variant && variant.match(/(\w+)\.(\w+)/);
  var variantOverride = variantMatch && variantMatch[1] || variant;
  var fontWeight = variantMatch && "fontWeight".concat(variantMatch[2].charAt(0).toUpperCase()).concat(variantMatch[2].slice(1));
  var isThemeColor = color && Object.prototype.hasOwnProperty.call(baseClasses, "color".concat(upperFirst(color)));
  return jsx(MuiTypography, __assign({
    variant: variantOverride,
    className: clsx(baseClasses.root, isThemeColor && baseClasses["color".concat(upperFirst(color))], classes && classes.root, className, 'rupertong-typography')
  }, color && !isThemeColor ? {
    color: color
  } : {}, props, {
    ref: ref
  }, {
    children: jsx(Box, __assign({
      component: "span",
      fontWeight: fontWeight
    }, {
      children: children
    }))
  }));
});

export { Typography, Typography as default };
//# sourceMappingURL=index.js.map
