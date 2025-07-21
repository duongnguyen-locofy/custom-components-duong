import { createTheme } from '@material-ui/core/styles';
import mixins from './mixins.js';
import oldPalette from './oldPalette.js';
import getOverrides from './overrides.js';
import palette from './palette.js';
import typography from './typography.js';

/* eslint-disable @typescript-eslint/no-empty-interface */
var overrides = getOverrides(createTheme({
  palette: palette,
  typography: typography
}));
var oldOverrides = getOverrides(createTheme({
  palette: oldPalette,
  typography: typography
}));
var theme = createTheme({
  palette: palette,
  typography: typography,
  overrides: overrides,
  mixins: mixins
});
var oldTheme = createTheme({
  palette: oldPalette,
  typography: typography,
  overrides: oldOverrides,
  mixins: mixins
});

export { oldTheme, theme };
//# sourceMappingURL=index.js.map
