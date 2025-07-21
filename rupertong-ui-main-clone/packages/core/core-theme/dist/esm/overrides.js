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

export { getOverrides as default };
//# sourceMappingURL=overrides.js.map
