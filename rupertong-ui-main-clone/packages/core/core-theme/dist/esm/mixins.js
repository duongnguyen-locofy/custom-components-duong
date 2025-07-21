import { __assign } from 'tslib';
import { createTheme } from '@material-ui/core/styles';

var _a;
var defaultTheme = createTheme();
var mixins = __assign(__assign({}, defaultTheme.mixins), {
  toolbar: __assign(__assign({}, defaultTheme.mixins.toolbar), (_a = {}, _a["@media(min-width:".concat(defaultTheme.breakpoints.values.sm, "px)")] = {
    minHeight: 48
  }, _a))
});

export { mixins as default };
//# sourceMappingURL=mixins.js.map
