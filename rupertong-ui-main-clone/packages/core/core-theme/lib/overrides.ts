import { Theme } from '@material-ui/core/styles';

const getOverrides = ({ palette, breakpoints, typography, spacing }: Theme) => {
  return {
    MuiInputBase: {
      input: {
        '&[type="text"], &[type=text]': {
          border: 0,
          '&:hover': {
            border: 0,
          },
          '&:focus': {
            border: 0,
            boxShadow: 'none',
          },
        },
        '&:hover': {
          border: 0,
        },
        '&:focus': {
          border: 0,
          boxShadow: 'none',
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        '&$shrink': {
          transform: 'translate(16px, -6px) scale(0.75)',
        },
      },
      root: {
        '&$focused': {
          color: palette.primary.dark,
        },
      },
    },
    MuiTabs: {
      root: {
        backgroundColor: palette.background.paper,
      },
    },
    MuiTab: {
      root: {
        minWidth: 'unset',
        padding: '1rem',
        backgroundColor: palette.tabs.default,
        [breakpoints.up('sm')]: {
          padding: '1rem 1.5rem',
          minWidth: 'unset',
        },
        color: palette.text.black.medEmphasis,
        '&$selected': {
          color: palette.primary.dark,
        },
        '&:hover': {
          backgroundColor: palette.tabs.hover,
        },
        '&:focus': {
          backgroundColor: palette.tabs.selected,
        },
        '&:pressed': {
          backgroundColor: palette.tabs.pressed,
        },
      },
      textColorPrimary: {
        '&$selected': {
          color: palette.primary.dark,
        },
      },
    },
    MuiTableRow: {
      root: {
        '&$hover:hover': {
          cursor: 'pointer',
        },
      },
    },
    MuiListItem: {
      root: {
        color: palette.text.black.medEmphasis,
        '&$selected, &$selected:hover': {
          color: palette.primary.dark,
          backgroundColor: palette.action.activeBackground,

          '&$focusVisible': {
            backgroundColor: palette.action.focusBackground,
          },
        },
        '&$focusVisible': {
          backgroundColor: palette.action.focusBackground,
        },
      },
    },
    MuiLink: {
      root: {
        color: palette.primary.dark,
      },
    },
    MuiToggleButton: {
      root: {
        '&:hover': {
          border: `1px solid ${palette.border.hover} !important`,
          zIndex: 1,
        },
        '&:active': {
          backgroundColor: 'transparent',
          borderColor: `${palette.border.focus}`,
          '& [class*="MuiToggleButton-label"]': {
            color: palette.primary.dark,
          },
        },
        '&$selected + &$selected:hover, &$selected + &.Mui-focusVisible': {
          marginLeft: `-1px !important`,
        },
        '&$selected:hover': {
          border: `1px solid ${palette.border.hover} !important`,
          backgroundColor: `${palette.button.outlined.activeBackground} !important`,
        },
        '&$selected': {
          backgroundColor: `${palette.button.outlined.activeBackground} !important`,
          borderColor: `${palette.border.selected} !important`,
          '& [class*="MuiToggleButton-label"]': {
            color: palette.primary.dark,
          },
        },
        '&.Mui-focusVisible': {
          backgroundColor: `${palette.button.outlined.focusBackground} !important`,
          border: `1px solid ${palette.border.focus} !important`,
          zIndex: 1,
          '& [class*="MuiToggleButton-label"]': {
            color: palette.text.black.medEmphasis,
          },
          '& [class*="MuiTouchRipple-root"]': {
            color: 'transparent',
          },
        },
        '&:enabled [class*="MuiToggleButton-label"]': {
          color: palette.text.black.medEmphasis,
        },
        '&:disabled': {
          color: palette.text.black.disabled,
        },
        '& [class*="MuiTouchRipple-root"]': {
          color: palette.primary.main,
        },
      },
    },
    // fix for uneven padding/margin in IE11 text fields
    PrivateNotchedOutline: {
      root: {
        '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)':
          {
            top: 0,
          },
      },
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
        overflow: 'hidden',
      },
      tooltipPlacementBottom: {
        margin: `${spacing(0.5, 5, 5)} !important`,
        ['@media screen and (min-width:680px)']: {
          margin: `${spacing(0.5, 0)} !important`,
        },
      },
      tooltipPlacementLeft: {
        margin: `${spacing(0, 0.5, 5)} !important`,
        ['@media screen and (min-width:680px)']: {
          margin: `${spacing(0, 0.5)} !important`,
        },
      },
      tooltipPlacementRight: {
        margin: `${spacing(0, 0.5, 5)} !important`,
        ['@media screen and (min-width:680px)']: {
          margin: `${spacing(0, 0.5)} !important`,
        },
      },
      tooltipPlacementTop: {
        margin: `${spacing(0.5, 5)} !important`,
        ['@media screen and (min-width:680px)']: {
          margin: `${spacing(0.5, 0)} !important`,
        },
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        color: palette.text.black.medEmphasis,
        '&:hover': {
          backgroundColor: palette.button.icon.enabledBackground,
        },
        '&$disabled': {
          color: palette.text.black.disabled,
          '&:hover': {
            backgroundColor: palette.button.icon.disabledBackground,
          },
        },
        '&$checked': {
          color: palette.primary.dark,
          '&:hover': {
            backgroundColor: palette.button.icon.enabledBackground,
          },
        },
        '&$indeterminate': {
          color: palette.primary.dark,
          '&$disabled': {
            color: palette.text.black.disabled,
            '&:hover': {
              backgroundColor: palette.button.icon.disabledBackground,
            },
          },
        },
      },
      colorSecondary: {
        '&$checked': {
          color: palette.primary.dark,
          '&$disabled': {
            color: palette.text.black.disabled,
          },
        },
        '&$indeterminate': {
          color: palette.primary.dark,
        },
      },
    },
    MuiRadio: {
      colorPrimary: {
        color: palette.text.black.medEmphasis,
        '&:hover': {
          backgroundColor: palette.button.icon.enabledBackground,
        },
        '&$disabled': {
          color: palette.text.black.disabled,
          '&:hover': {
            backgroundColor: palette.button.icon.disabledBackground,
          },
        },
        '&$checked': {
          color: palette.primary.dark,
          '&$disabled': {
            color: palette.text.black.disabled,
            '&:hover': {
              backgroundColor: palette.button.icon.disabledBackground,
            },
          },
        },
      },
      colorSecondary: {
        '&$checked': {
          color: palette.primary.dark,
          '&$disabled': {
            color: palette.text.black.disabled,
          },
        },
      },
    },
    MuiSwitch: {
      colorPrimary: {
        '&:hover': {
          backgroundColor: palette.button.icon.enabledBackground,
        },
        '&$checked': {
          color: palette.switch.knob.on.enabled,
          '& + $track': {
            backgroundColor: palette.switch.rail.on.enabled,
            opacity: '1',
          },
          '&$disabled': {
            color: palette.switch.knob.on.disabled,
            '& + $track': {
              backgroundColor: palette.switch.rail.on.disabled,
              opacity: '1',
            },
          },
          '&:hover': {
            backgroundColor: palette.button.icon.disabledBackground,
          },
        },
        '&$track': {
          backgroundColor: palette.switch.rail.off.enabled,
          opacity: '1',
        },
      },
    },
  };
};

export default getOverrides;
