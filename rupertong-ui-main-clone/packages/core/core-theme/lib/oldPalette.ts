import { createTheme } from '@material-ui/core/styles';

import { ExtendedPalette } from './types';

const muiTheme = createTheme();

const color = {
  white: {
    op_40: 'rgba(255, 255, 255, 0.4)',
    op_88: 'rgba(255, 255, 255, 0.88)',
    op_100: 'rgba(255, 255, 255, 1)',
  },
  black: {
    op_04: 'rgba(0, 0, 0, 0.04)',
    op_12: 'rgba(0, 0, 0, 0.12)',
    op_16: 'rgba(0, 0, 0, 0.16)',
    op_24: 'rgba(0, 0, 0, 0.24)',
    op_32: 'rgba(0, 0, 0, 0.32)',
    op_40: 'rgba(0, 0, 0, 0.4)',
    op_42: 'rgba(0, 0, 0, 0.42)',
    op_50: 'rgba(0, 0, 0, 0.5)',
    op_64: 'rgba(0, 0, 0, 0.64)',
    op_88: 'rgba(0, 0, 0, 0.88)',
    op_100: 'rgba(0, 0, 0, 1)',
  },
  primary: {
    main: {
      op_04: 'rgba(151, 204, 4, 0.04)',
      op_12: 'rgba(151, 204, 4, 0.12)',
      op_16: 'rgba(151, 204, 4, 0.16)',
      op_100: 'rgba(151, 204, 4, 1)',
    },
    light: {
      op_50: 'rgba(206, 230, 150, 0.5)',
      op_60: 'rgba(206, 230, 150, 0.6)',
      op_70: 'rgba(206, 230, 150, 0.7)',
      op_100: 'rgba(206, 230, 150, 1)',
    },
  },
};

const primary = {
  main: color.primary.main.op_100,
  dark: 'rgba(44, 115, 0, 1)',
  light: color.primary.light.op_100,
};

const warning = {
  main: 'rgba(255, 160, 0, 1)',
};

const error = {
  main: 'rgba(176, 0, 32, 1)',
};

const surface = {
  base: color.white.op_100,
  dark: 'rgba(245, 245, 245, 1)',
  scrim: color.black.op_50,
};

const tabs = {
  default: color.white.op_100,
  selected: color.primary.main.op_12,
  hover: color.primary.main.op_04,
  pressed: color.primary.main.op_16,
};

const tooltip = {
  background: 'rgba(66, 66, 66, 1)',
  color: surface.base,
  opacity: 0.8,
};

const background = {
  default: surface.dark,
};

const progressIndicator = {
  bar: primary.main,
  progress: primary.light,
};

const chart = {
  categoricalPalette: [
    'rgba(158, 189, 224, 1)',
    'rgba(243, 211, 95, 1)',
    'rgba(244, 129, 68, 1)',
    'rgba(151, 114, 177, 1)',
    'rgba(82, 192, 182, 1)',
    'rgba(224, 121, 175, 1)',
  ],
  sequentialBluePalette: [
    'rgba(158, 189, 224, 1)',
    'rgba(104, 150, 207, 1)',
    'rgba(60, 123, 200, 1)',
    'rgba(57, 102, 157, 1)',
    'rgba(38, 68, 105, 1)',
    'rgba(25, 46, 71, 1)',
  ],
  emphasisPalette: {
    positive: 'rgba(170, 211, 161, 1)',
    negative: 'rgba(217, 82, 84, 1)',
  },
  barBackground: surface.base,
  altBarBackground: 'rgba(242, 242, 242, 1)',
  goalLineColor: color.black.op_100,
  projectedLineColor: 'rgba(211, 211, 211, 1)',
  barBorderColor: 'rgba(0, 160, 175, 1)',
};

const text = {
  dark: primary.dark,
  black: {
    highEmphasis: color.black.op_88,
    medEmphasis: color.black.op_64,
    disabled: color.black.op_40,
  },
  white: {
    highEmphasis: surface.base,
    medEmphasis: color.white.op_88,
    disabled: color.white.op_40,
  },
};

const border = {
  disabled: color.black.op_12,
  enabled: color.black.op_12,
  focus: color.black.op_24,
  hover: color.black.op_24,
  selected: color.black.op_12,
  button: {
    enabled: color.black.op_12,
    focused: color.black.op_24,
  },
  textField: {
    resting: color.black.op_42,
    hover: color.black.op_88,
    disabled: color.black.op_16,
    error: error.main,
    focused: primary.main,
  },
  chip: {
    resting: color.black.op_32,
    focused: color.black.op_32,
    pressed: color.black.op_12,
  },
};

const action = {
  activeBackground: color.primary.light.op_50,
  disabledBackground: color.black.op_12,
  dragBackground: color.primary.light.op_70,
  focusBackground: color.primary.light.op_60,
  hoverBackground: color.black.op_04,
  disabled: 'rgba(153, 153, 153, 1)',
};

const containedButton = {
  active: muiTheme.palette.common.white,
  disabled: 'rgba(135, 135, 135, 1)',
  enabled: muiTheme.palette.common.white,
  focus: muiTheme.palette.common.white,
  hover: muiTheme.palette.common.white,
  activeBackground: 'rgba(69, 132, 31, 1)',
  disabledBackground: 'rgba(219, 219, 219, 1)',
  enabledBackground: primary.dark,
  focusBackground: 'rgba(69, 132, 31, 1)',
  hoverBackground: 'rgba(60, 125, 20, 1)',
};

const outlinedButton = {
  active: primary.dark,
  disabled: action.disabled,
  enabled: primary.dark,
  focus: primary.dark,
  hover: primary.dark,
  activeBackground: 'rgba(231, 243, 203, 1)',
  disabledBackground: 'transparent',
  enabledBackground: 'transparent',
  focusBackground: action.focusBackground,
  hoverBackground: surface.dark,
};

const iconButton = {
  active: color.black.op_88,
  disabled: color.black.op_40,
  enabled: color.black.op_64,
  focus: color.black.op_88,
  hover: color.black.op_88,
  activeBackground: action.activeBackground,
  disabledBackground: 'transparent',
  enabledBackground: 'transparent',
  focusBackground: action.focusBackground,
  hoverBackground: action.hoverBackground,
};

const textButton = {
  active: primary.dark,
  disabled: action.disabled,
  enabled: primary.dark,
  focus: primary.dark,
  hover: primary.dark,
  activeBackground: action.activeBackground,
  disabledBackground: 'transparent',
  focusBackground: action.focusBackground,
  hoverBackground: action.hoverBackground,
};

const selectionControl = {
  on: {
    hover: color.primary.main.op_04,
    focus: color.primary.main.op_12,
    pressed: color.primary.main.op_16,
  },
  off: {
    hover: action.hoverBackground,
    focus: color.black.op_12,
    pressed: color.black.op_16,
  },
};

const selectionSwitch = {
  rail: {
    on: {
      enabled: 'rgba(149, 185, 128, 1)',
      disabled: 'rgba(213, 227, 204, 1)',
    },
    off: {
      enabled: 'rgba(173, 173, 173, 1)',
      disabled: 'rgba(224, 224, 224, 1)',
    },
  },
  knob: {
    on: {
      enabled: primary.dark,
      disabled: 'rgba(171, 199, 153, 1)',
    },
    off: {
      enabled: surface.base,
      disabled: 'rgba(189, 189, 189, 1)',
    },
  },
};

const divider = 'rgba(224, 224, 224, 1)';

const oldPalette: ExtendedPalette = {
  primary,
  secondary: primary,
  warning,
  error,
  surface,
  tabs,
  tooltip,
  background,
  progressIndicator,
  chart,
  text,
  border,
  action,
  button: {
    contained: containedButton,
    icon: iconButton,
    outlined: outlinedButton,
    text: textButton,
  },
  selectionControl,
  switch: selectionSwitch,
  divider,
};

export default oldPalette;
