'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@material-ui/core/styles');
var tslib = require('tslib');

var _a;
var defaultTheme = styles.createTheme();
var mixins = tslib.__assign(tslib.__assign({}, defaultTheme.mixins), {
  toolbar: tslib.__assign(tslib.__assign({}, defaultTheme.mixins.toolbar), (_a = {}, _a["@media(min-width:".concat(defaultTheme.breakpoints.values.sm, "px)")] = {
    minHeight: 48
  }, _a))
});

var muiTheme$1 = styles.createTheme();
var color$1 = {
  white: {
    op_40: 'rgba(255, 255, 255, 0.4)',
    op_88: 'rgba(255, 255, 255, 0.88)',
    op_100: 'rgba(255, 255, 255, 1)'
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
    op_100: 'rgba(0, 0, 0, 1)'
  },
  primary: {
    main: {
      op_04: 'rgba(151, 204, 4, 0.04)',
      op_12: 'rgba(151, 204, 4, 0.12)',
      op_16: 'rgba(151, 204, 4, 0.16)',
      op_100: 'rgba(151, 204, 4, 1)'
    },
    light: {
      op_50: 'rgba(206, 230, 150, 0.5)',
      op_60: 'rgba(206, 230, 150, 0.6)',
      op_70: 'rgba(206, 230, 150, 0.7)',
      op_100: 'rgba(206, 230, 150, 1)'
    }
  }
};
var primary$1 = {
  main: color$1.primary.main.op_100,
  dark: 'rgba(44, 115, 0, 1)',
  light: color$1.primary.light.op_100
};
var warning$1 = {
  main: 'rgba(255, 160, 0, 1)'
};
var error$1 = {
  main: 'rgba(176, 0, 32, 1)'
};
var surface$1 = {
  base: color$1.white.op_100,
  dark: 'rgba(245, 245, 245, 1)',
  scrim: color$1.black.op_50
};
var tabs$1 = {
  "default": color$1.white.op_100,
  selected: color$1.primary.main.op_12,
  hover: color$1.primary.main.op_04,
  pressed: color$1.primary.main.op_16
};
var tooltip$1 = {
  background: 'rgba(66, 66, 66, 1)',
  color: surface$1.base,
  opacity: 0.8
};
var background$1 = {
  "default": surface$1.dark
};
var progressIndicator$1 = {
  bar: primary$1.main,
  progress: primary$1.light
};
var chart$1 = {
  categoricalPalette: ['rgba(158, 189, 224, 1)', 'rgba(243, 211, 95, 1)', 'rgba(244, 129, 68, 1)', 'rgba(151, 114, 177, 1)', 'rgba(82, 192, 182, 1)', 'rgba(224, 121, 175, 1)'],
  sequentialBluePalette: ['rgba(158, 189, 224, 1)', 'rgba(104, 150, 207, 1)', 'rgba(60, 123, 200, 1)', 'rgba(57, 102, 157, 1)', 'rgba(38, 68, 105, 1)', 'rgba(25, 46, 71, 1)'],
  emphasisPalette: {
    positive: 'rgba(170, 211, 161, 1)',
    negative: 'rgba(217, 82, 84, 1)'
  },
  barBackground: surface$1.base,
  altBarBackground: 'rgba(242, 242, 242, 1)',
  goalLineColor: color$1.black.op_100,
  projectedLineColor: 'rgba(211, 211, 211, 1)',
  barBorderColor: 'rgba(0, 160, 175, 1)'
};
var text$1 = {
  dark: primary$1.dark,
  black: {
    highEmphasis: color$1.black.op_88,
    medEmphasis: color$1.black.op_64,
    disabled: color$1.black.op_40
  },
  white: {
    highEmphasis: surface$1.base,
    medEmphasis: color$1.white.op_88,
    disabled: color$1.white.op_40
  }
};
var border$1 = {
  disabled: color$1.black.op_12,
  enabled: color$1.black.op_12,
  focus: color$1.black.op_24,
  hover: color$1.black.op_24,
  selected: color$1.black.op_12,
  button: {
    enabled: color$1.black.op_12,
    focused: color$1.black.op_24
  },
  textField: {
    resting: color$1.black.op_42,
    hover: color$1.black.op_88,
    disabled: color$1.black.op_16,
    error: error$1.main,
    focused: primary$1.main
  },
  chip: {
    resting: color$1.black.op_32,
    focused: color$1.black.op_32,
    pressed: color$1.black.op_12
  }
};
var action$1 = {
  activeBackground: color$1.primary.light.op_50,
  disabledBackground: color$1.black.op_12,
  dragBackground: color$1.primary.light.op_70,
  focusBackground: color$1.primary.light.op_60,
  hoverBackground: color$1.black.op_04,
  disabled: 'rgba(153, 153, 153, 1)'
};
var containedButton$1 = {
  active: muiTheme$1.palette.common.white,
  disabled: 'rgba(135, 135, 135, 1)',
  enabled: muiTheme$1.palette.common.white,
  focus: muiTheme$1.palette.common.white,
  hover: muiTheme$1.palette.common.white,
  activeBackground: 'rgba(69, 132, 31, 1)',
  disabledBackground: 'rgba(219, 219, 219, 1)',
  enabledBackground: primary$1.dark,
  focusBackground: 'rgba(69, 132, 31, 1)',
  hoverBackground: 'rgba(60, 125, 20, 1)'
};
var outlinedButton$1 = {
  active: primary$1.dark,
  disabled: action$1.disabled,
  enabled: primary$1.dark,
  focus: primary$1.dark,
  hover: primary$1.dark,
  activeBackground: 'rgba(231, 243, 203, 1)',
  disabledBackground: 'transparent',
  enabledBackground: 'transparent',
  focusBackground: action$1.focusBackground,
  hoverBackground: surface$1.dark
};
var iconButton$1 = {
  active: color$1.black.op_88,
  disabled: color$1.black.op_40,
  enabled: color$1.black.op_64,
  focus: color$1.black.op_88,
  hover: color$1.black.op_88,
  activeBackground: action$1.activeBackground,
  disabledBackground: 'transparent',
  enabledBackground: 'transparent',
  focusBackground: action$1.focusBackground,
  hoverBackground: action$1.hoverBackground
};
var textButton$1 = {
  active: primary$1.dark,
  disabled: action$1.disabled,
  enabled: primary$1.dark,
  focus: primary$1.dark,
  hover: primary$1.dark,
  activeBackground: action$1.activeBackground,
  disabledBackground: 'transparent',
  focusBackground: action$1.focusBackground,
  hoverBackground: action$1.hoverBackground
};
var selectionControl$1 = {
  on: {
    hover: color$1.primary.main.op_04,
    focus: color$1.primary.main.op_12,
    pressed: color$1.primary.main.op_16
  },
  off: {
    hover: action$1.hoverBackground,
    focus: color$1.black.op_12,
    pressed: color$1.black.op_16
  }
};
var selectionSwitch$1 = {
  rail: {
    on: {
      enabled: 'rgba(149, 185, 128, 1)',
      disabled: 'rgba(213, 227, 204, 1)'
    },
    off: {
      enabled: 'rgba(173, 173, 173, 1)',
      disabled: 'rgba(224, 224, 224, 1)'
    }
  },
  knob: {
    on: {
      enabled: primary$1.dark,
      disabled: 'rgba(171, 199, 153, 1)'
    },
    off: {
      enabled: surface$1.base,
      disabled: 'rgba(189, 189, 189, 1)'
    }
  }
};
var divider$1 = 'rgba(224, 224, 224, 1)';
var oldPalette = {
  primary: primary$1,
  secondary: primary$1,
  warning: warning$1,
  error: error$1,
  surface: surface$1,
  tabs: tabs$1,
  tooltip: tooltip$1,
  background: background$1,
  progressIndicator: progressIndicator$1,
  chart: chart$1,
  text: text$1,
  border: border$1,
  action: action$1,
  button: {
    contained: containedButton$1,
    icon: iconButton$1,
    outlined: outlinedButton$1,
    text: textButton$1
  },
  selectionControl: selectionControl$1,
  "switch": selectionSwitch$1,
  divider: divider$1
};

var getOverrides = function getOverrides(_a) {
  var _b, _c, _d, _e, _f;
  var palette = _a.palette,
    breakpoints = _a.breakpoints,
    typography = _a.typography,
    spacing = _a.spacing;
  return {
    MuiInputBase: {
      input: {
        '&[type="text"], &[type=text]': {
          border: 0,
          '&:hover': {
            border: 0
          },
          '&:focus': {
            border: 0,
            boxShadow: 'none'
          }
        },
        '&:hover': {
          border: 0
        },
        '&:focus': {
          border: 0,
          boxShadow: 'none'
        }
      }
    },
    MuiInputLabel: {
      outlined: {
        '&$shrink': {
          transform: 'translate(16px, -6px) scale(0.75)'
        }
      },
      root: {
        '&$focused': {
          color: palette.primary.dark
        }
      }
    },
    MuiTabs: {
      root: {
        backgroundColor: palette.background.paper
      }
    },
    MuiTab: {
      root: (_b = {
        minWidth: 'unset',
        padding: '1rem',
        backgroundColor: palette.tabs["default"]
      }, _b[breakpoints.up('sm')] = {
        padding: '1rem 1.5rem',
        minWidth: 'unset'
      }, _b.color = palette.text.black.medEmphasis, _b['&$selected'] = {
        color: palette.primary.dark
      }, _b['&:hover'] = {
        backgroundColor: palette.tabs.hover
      }, _b['&:focus'] = {
        backgroundColor: palette.tabs.selected
      }, _b['&:pressed'] = {
        backgroundColor: palette.tabs.pressed
      }, _b),
      textColorPrimary: {
        '&$selected': {
          color: palette.primary.dark
        }
      }
    },
    MuiTableRow: {
      root: {
        '&$hover:hover': {
          cursor: 'pointer'
        }
      }
    },
    MuiListItem: {
      root: {
        color: palette.text.black.medEmphasis,
        '&$selected, &$selected:hover': {
          color: palette.primary.dark,
          backgroundColor: palette.action.activeBackground,
          '&$focusVisible': {
            backgroundColor: palette.action.focusBackground
          }
        },
        '&$focusVisible': {
          backgroundColor: palette.action.focusBackground
        }
      }
    },
    MuiLink: {
      root: {
        color: palette.primary.dark
      }
    },
    MuiToggleButton: {
      root: {
        '&:hover': {
          border: "1px solid ".concat(palette.border.hover, " !important"),
          zIndex: 1
        },
        '&:active': {
          backgroundColor: 'transparent',
          borderColor: "".concat(palette.border.focus),
          '& [class*="MuiToggleButton-label"]': {
            color: palette.primary.dark
          }
        },
        '&$selected + &$selected:hover, &$selected + &.Mui-focusVisible': {
          marginLeft: "-1px !important"
        },
        '&$selected:hover': {
          border: "1px solid ".concat(palette.border.hover, " !important"),
          backgroundColor: "".concat(palette.button.outlined.activeBackground, " !important")
        },
        '&$selected': {
          backgroundColor: "".concat(palette.button.outlined.activeBackground, " !important"),
          borderColor: "".concat(palette.border.selected, " !important"),
          '& [class*="MuiToggleButton-label"]': {
            color: palette.primary.dark
          }
        },
        '&.Mui-focusVisible': {
          backgroundColor: "".concat(palette.button.outlined.focusBackground, " !important"),
          border: "1px solid ".concat(palette.border.focus, " !important"),
          zIndex: 1,
          '& [class*="MuiToggleButton-label"]': {
            color: palette.text.black.medEmphasis
          },
          '& [class*="MuiTouchRipple-root"]': {
            color: 'transparent'
          }
        },
        '&:enabled [class*="MuiToggleButton-label"]': {
          color: palette.text.black.medEmphasis
        },
        '&:disabled': {
          color: palette.text.black.disabled
        },
        '& [class*="MuiTouchRipple-root"]': {
          color: palette.primary.main
        }
      }
    },
    // fix for uneven padding/margin in IE11 text fields
    PrivateNotchedOutline: {
      root: {
        '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
          top: 0
        }
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: palette.tooltip.background,
        color: palette.tooltip.color,
        opacity: palette.tooltip.opacity,
        fontSize: typography.caption.fontSize,
        listStyleType: 'none',
        maxWidth: 600,
        maxHeight: '90vh',
        overflow: 'hidden'
      },
      tooltipPlacementBottom: (_c = {
        margin: "".concat(spacing(0.5, 5, 5), " !important")
      }, _c['@media screen and (min-width:680px)'] = {
        margin: "".concat(spacing(0.5, 0), " !important")
      }, _c),
      tooltipPlacementLeft: (_d = {
        margin: "".concat(spacing(0, 0.5, 5), " !important")
      }, _d['@media screen and (min-width:680px)'] = {
        margin: "".concat(spacing(0, 0.5), " !important")
      }, _d),
      tooltipPlacementRight: (_e = {
        margin: "".concat(spacing(0, 0.5, 5), " !important")
      }, _e['@media screen and (min-width:680px)'] = {
        margin: "".concat(spacing(0, 0.5), " !important")
      }, _e),
      tooltipPlacementTop: (_f = {
        margin: "".concat(spacing(0.5, 5), " !important")
      }, _f['@media screen and (min-width:680px)'] = {
        margin: "".concat(spacing(0.5, 0), " !important")
      }, _f)
    },
    MuiCheckbox: {
      colorPrimary: {
        color: palette.text.black.medEmphasis,
        '&:hover': {
          backgroundColor: palette.button.icon.enabledBackground
        },
        '&$disabled': {
          color: palette.text.black.disabled,
          '&:hover': {
            backgroundColor: palette.button.icon.disabledBackground
          }
        },
        '&$checked': {
          color: palette.primary.dark,
          '&:hover': {
            backgroundColor: palette.button.icon.enabledBackground
          }
        },
        '&$indeterminate': {
          color: palette.primary.dark,
          '&$disabled': {
            color: palette.text.black.disabled,
            '&:hover': {
              backgroundColor: palette.button.icon.disabledBackground
            }
          }
        }
      },
      colorSecondary: {
        '&$checked': {
          color: palette.primary.dark,
          '&$disabled': {
            color: palette.text.black.disabled
          }
        },
        '&$indeterminate': {
          color: palette.primary.dark
        }
      }
    },
    MuiRadio: {
      colorPrimary: {
        color: palette.text.black.medEmphasis,
        '&:hover': {
          backgroundColor: palette.button.icon.enabledBackground
        },
        '&$disabled': {
          color: palette.text.black.disabled,
          '&:hover': {
            backgroundColor: palette.button.icon.disabledBackground
          }
        },
        '&$checked': {
          color: palette.primary.dark,
          '&$disabled': {
            color: palette.text.black.disabled,
            '&:hover': {
              backgroundColor: palette.button.icon.disabledBackground
            }
          }
        }
      },
      colorSecondary: {
        '&$checked': {
          color: palette.primary.dark,
          '&$disabled': {
            color: palette.text.black.disabled
          }
        }
      }
    },
    MuiSwitch: {
      colorPrimary: {
        '&:hover': {
          backgroundColor: palette.button.icon.enabledBackground
        },
        '&$checked': {
          color: palette["switch"].knob.on.enabled,
          '& + $track': {
            backgroundColor: palette["switch"].rail.on.enabled,
            opacity: '1'
          },
          '&$disabled': {
            color: palette["switch"].knob.on.disabled,
            '& + $track': {
              backgroundColor: palette["switch"].rail.on.disabled,
              opacity: '1'
            }
          },
          '&:hover': {
            backgroundColor: palette.button.icon.disabledBackground
          }
        },
        '&$track': {
          backgroundColor: palette["switch"].rail.off.enabled,
          opacity: '1'
        }
      }
    }
  };
};

var muiTheme = styles.createTheme();
var color = {
  white: {
    op_40: 'rgba(255, 255, 255, 0.4)',
    op_88: 'rgba(255, 255, 255, 0.88)',
    op_100: 'rgba(255, 255, 255, 1)'
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
    op_100: 'rgba(0, 0, 0, 1)'
  },
  primary: {
    main: {
      op_04: 'rgba(0, 160, 175, 0.04)',
      op_12: 'rgba(0, 160, 175, 0.12)',
      op_16: 'rgba(0, 160, 175, 0.16)',
      op_100: 'rgba(0, 160, 175, 1)'
    },
    light: {
      op_50: 'rgba(179, 227, 231, 0.5)',
      op_60: 'rgba(179, 227, 231, 0.6)',
      op_70: 'rgba(179, 227, 231, 0.7)',
      op_100: 'rgba(179, 227, 231, 1)'
    }
  }
};
var primary = {
  main: color.primary.main.op_100,
  dark: 'rgba(5, 87, 111, 1)',
  light: color.primary.light.op_100
};
var success = {
  main: 'rgba(102, 163, 1, 1)'
};
var warning = {
  main: 'rgba(245, 154, 0, 1)'
};
var error = {
  main: 'rgba(214, 0, 39, 1)'
};
var surface = {
  base: color.white.op_100,
  dark: 'rgba(245, 245, 245, 1)',
  scrim: color.black.op_50
};
var tabs = {
  "default": color.white.op_100,
  selected: color.primary.main.op_12,
  hover: color.primary.main.op_04,
  pressed: color.primary.main.op_16
};
var tooltip = {
  background: 'rgba(66, 66, 66, 1)',
  color: surface.base,
  opacity: 0.8
};
var background = {
  "default": surface.dark
};
var progressIndicator = {
  bar: primary.main,
  progress: primary.light
};
var chart = {
  categoricalPalette: ['rgba(158, 189, 224, 1)', 'rgba(243, 211, 95, 1)', 'rgba(244, 129, 68, 1)', 'rgba(151, 114, 177, 1)', 'rgba(82, 192, 182, 1)', 'rgba(224, 121, 175, 1)'],
  sequentialBluePalette: ['rgba(158, 189, 224, 1)', 'rgba(104, 150, 207, 1)', 'rgba(60, 123, 200, 1)', 'rgba(57, 102, 157, 1)', 'rgba(38, 68, 105, 1)', 'rgba(25, 46, 71, 1)'],
  emphasisPalette: {
    positive: 'rgba(170, 211, 161, 1)',
    negative: 'rgba(217, 82, 84, 1)'
  },
  barBackground: surface.base,
  altBarBackground: 'rgba(242, 242, 242, 1)',
  goalLineColor: color.black.op_100,
  projectedLineColor: 'rgba(211, 211, 211, 1)',
  barBorderColor: 'rgba(0, 160, 175, 1)'
};
var text = {
  dark: primary.dark,
  black: {
    highEmphasis: color.black.op_88,
    medEmphasis: color.black.op_64,
    disabled: color.black.op_40
  },
  white: {
    highEmphasis: surface.base,
    medEmphasis: color.white.op_88,
    disabled: color.white.op_40
  }
};
var border = {
  disabled: color.black.op_12,
  enabled: color.black.op_12,
  focus: color.black.op_24,
  hover: color.black.op_24,
  selected: color.black.op_12,
  button: {
    enabled: color.black.op_12,
    focused: color.black.op_24
  },
  textField: {
    resting: color.black.op_42,
    hover: color.black.op_88,
    disabled: color.black.op_16,
    error: error.main,
    focused: primary.main
  },
  chip: {
    resting: color.black.op_32,
    focused: color.black.op_32,
    pressed: color.black.op_12
  }
};
var action = {
  activeBackground: color.primary.light.op_50,
  disabledBackground: color.black.op_12,
  dragBackground: color.primary.light.op_70,
  focusBackground: color.primary.light.op_60,
  hoverBackground: color.black.op_04,
  disabled: 'rgba(153, 153, 153, 1)'
};
var containedButton = {
  active: muiTheme.palette.common.white,
  disabled: 'rgba(135, 135, 135, 1)',
  enabled: muiTheme.palette.common.white,
  focus: muiTheme.palette.common.white,
  hover: muiTheme.palette.common.white,
  activeBackground: 'rgba(35, 107, 128, 1)',
  disabledBackground: 'rgba(219, 219, 219, 1)',
  enabledBackground: primary.dark,
  focusBackground: 'rgba(35, 107, 128, 1)',
  hoverBackground: 'rgba(23, 99, 121, 1)'
};
var outlinedButton = {
  active: primary.dark,
  disabled: action.disabled,
  enabled: primary.dark,
  focus: primary.dark,
  hover: primary.dark,
  activeBackground: 'rgba(201, 235, 238, 1)',
  disabledBackground: 'transparent',
  enabledBackground: 'transparent',
  focusBackground: action.focusBackground,
  hoverBackground: surface.dark
};
var iconButton = {
  active: color.black.op_88,
  disabled: color.black.op_40,
  enabled: color.black.op_64,
  focus: color.black.op_88,
  hover: color.black.op_88,
  activeBackground: action.activeBackground,
  disabledBackground: 'transparent',
  enabledBackground: 'transparent',
  focusBackground: action.focusBackground,
  hoverBackground: action.hoverBackground
};
var textButton = {
  active: primary.dark,
  disabled: action.disabled,
  enabled: primary.dark,
  focus: primary.dark,
  hover: primary.dark,
  activeBackground: action.activeBackground,
  disabledBackground: 'transparent',
  focusBackground: action.focusBackground,
  hoverBackground: action.hoverBackground
};
var selectionControl = {
  on: {
    hover: color.primary.main.op_04,
    focus: color.primary.main.op_12,
    pressed: color.primary.main.op_16
  },
  off: {
    hover: action.hoverBackground,
    focus: color.black.op_12,
    pressed: color.black.op_16
  }
};
var selectionSwitch = {
  rail: {
    on: {
      enabled: 'rgba(128, 181, 190, 1)',
      disabled: 'rgba(204, 227, 231, 1)'
    },
    off: {
      enabled: 'rgba(173, 173, 173, 1)',
      disabled: 'rgba(224, 224, 224, 1)'
    }
  },
  knob: {
    on: {
      enabled: primary.dark,
      disabled: 'rgba(157, 200, 207, 1)'
    },
    off: {
      enabled: surface.base,
      disabled: 'rgba(189, 189, 189, 1)'
    }
  }
};
var divider = 'rgba(224, 224, 224, 1)';
var palette = {
  primary: primary,
  secondary: primary,
  success: success,
  warning: warning,
  error: error,
  surface: surface,
  tabs: tabs,
  tooltip: tooltip,
  background: background,
  progressIndicator: progressIndicator,
  chart: chart,
  text: text,
  border: border,
  action: action,
  button: {
    contained: containedButton,
    icon: iconButton,
    outlined: outlinedButton,
    text: textButton
  },
  selectionControl: selectionControl,
  "switch": selectionSwitch,
  divider: divider
};

var typography = {
  fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  h1: {
    fontSize: '1.5rem',
    fontWeight: 400,
    letterSpacing: '0.0rem',
    lineHeight: '2rem'
  },
  h2: {
    fontSize: '1.375rem',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '1.75rem'
  },
  h2L: {
    fontSize: '1.375rem',
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: '1.75rem'
  },
  h3M: {
    fontSize: '1.25rem',
    fontWeight: 500,
    letterSpacing: '0.009375rem',
    lineHeight: '1.75rem'
  },
  h3: {
    fontSize: '1.25rem',
    fontWeight: 400,
    letterSpacing: '0.009375rem',
    lineHeight: '1.75rem'
  },
  h4M: {
    fontSize: '1.125rem',
    fontWeight: 500,
    letterSpacing: '0.009375rem',
    lineHeight: '1.5rem'
  },
  h4: {
    fontSize: '1.125rem',
    fontWeight: 400,
    letterSpacing: '0.009375rem',
    lineHeight: '1.5rem'
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '0.009375rem',
    lineHeight: '1.25rem'
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.009375rem',
    lineHeight: '1.5rem'
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.015625rem',
    lineHeight: '1.25rem'
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    letterSpacing: '0.015625rem',
    lineHeight: '1.25rem'
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.078125rem',
    lineHeight: '1rem',
    textTransform: 'uppercase'
  },
  captionM: {
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.025rem',
    lineHeight: '1rem'
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    letterSpacing: '0.025rem',
    lineHeight: '1rem'
  },
  overline: {
    fontSize: '0.625rem',
    fontWeight: 500,
    letterSpacing: '0.125rem',
    lineHeight: '1rem',
    textTransform: 'uppercase'
  }
};

/* eslint-disable @typescript-eslint/no-empty-interface */
var overrides = getOverrides(styles.createTheme({
  palette: palette,
  typography: typography
}));
var oldOverrides = getOverrides(styles.createTheme({
  palette: oldPalette,
  typography: typography
}));
var theme = styles.createTheme({
  palette: palette,
  typography: typography,
  overrides: overrides,
  mixins: mixins
});
var oldTheme = styles.createTheme({
  palette: oldPalette,
  typography: typography,
  overrides: oldOverrides,
  mixins: mixins
});

exports.oldTheme = oldTheme;
exports.theme = theme;
