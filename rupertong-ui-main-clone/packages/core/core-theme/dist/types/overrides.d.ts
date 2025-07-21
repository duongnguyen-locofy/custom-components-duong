import { Theme } from '@material-ui/core/styles';
declare const getOverrides: ({ palette, breakpoints, typography, spacing }: Theme) => {
    MuiInputBase: {
        input: {
            '&[type="text"], &[type=text]': {
                border: number;
                '&:hover': {
                    border: number;
                };
                '&:focus': {
                    border: number;
                    boxShadow: string;
                };
            };
            '&:hover': {
                border: number;
            };
            '&:focus': {
                border: number;
                boxShadow: string;
            };
        };
    };
    MuiInputLabel: {
        outlined: {
            '&$shrink': {
                transform: string;
            };
        };
        root: {
            '&$focused': {
                color: string;
            };
        };
    };
    MuiTabs: {
        root: {
            backgroundColor: string;
        };
    };
    MuiTab: {
        root: {
            [x: string]: string | {
                padding: string;
                minWidth: string;
                color?: undefined;
                backgroundColor?: undefined;
            } | {
                color: string;
                padding?: undefined;
                minWidth?: undefined;
                backgroundColor?: undefined;
            } | {
                backgroundColor: string;
                padding?: undefined;
                minWidth?: undefined;
                color?: undefined;
            };
            minWidth: string;
            padding: string;
            backgroundColor: string;
            color: string;
            '&$selected': {
                color: string;
            };
            '&:hover': {
                backgroundColor: string;
            };
            '&:focus': {
                backgroundColor: string;
            };
            '&:pressed': {
                backgroundColor: string;
            };
        };
        textColorPrimary: {
            '&$selected': {
                color: string;
            };
        };
    };
    MuiTableRow: {
        root: {
            '&$hover:hover': {
                cursor: string;
            };
        };
    };
    MuiListItem: {
        root: {
            color: string;
            '&$selected, &$selected:hover': {
                color: string;
                backgroundColor: string;
                '&$focusVisible': {
                    backgroundColor: string;
                };
            };
            '&$focusVisible': {
                backgroundColor: string;
            };
        };
    };
    MuiLink: {
        root: {
            color: string;
        };
    };
    MuiToggleButton: {
        root: {
            '&:hover': {
                border: string;
                zIndex: number;
            };
            '&:active': {
                backgroundColor: string;
                borderColor: string;
                '& [class*="MuiToggleButton-label"]': {
                    color: string;
                };
            };
            '&$selected + &$selected:hover, &$selected + &.Mui-focusVisible': {
                marginLeft: string;
            };
            '&$selected:hover': {
                border: string;
                backgroundColor: string;
            };
            '&$selected': {
                backgroundColor: string;
                borderColor: string;
                '& [class*="MuiToggleButton-label"]': {
                    color: string;
                };
            };
            '&.Mui-focusVisible': {
                backgroundColor: string;
                border: string;
                zIndex: number;
                '& [class*="MuiToggleButton-label"]': {
                    color: string;
                };
                '& [class*="MuiTouchRipple-root"]': {
                    color: string;
                };
            };
            '&:enabled [class*="MuiToggleButton-label"]': {
                color: string;
            };
            '&:disabled': {
                color: string;
            };
            '& [class*="MuiTouchRipple-root"]': {
                color: string;
            };
        };
    };
    PrivateNotchedOutline: {
        root: {
            '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
                top: number;
            };
        };
    };
    MuiTooltip: {
        tooltip: {
            backgroundColor: string;
            color: string;
            opacity: number;
            fontSize: import("csstype").FontSizeProperty<string | number> | undefined;
            listStyleType: string;
            maxWidth: number;
            maxHeight: string;
            overflow: string;
        };
        tooltipPlacementBottom: {
            margin: string;
            "@media screen and (min-width:680px)": {
                margin: string;
            };
        };
        tooltipPlacementLeft: {
            margin: string;
            "@media screen and (min-width:680px)": {
                margin: string;
            };
        };
        tooltipPlacementRight: {
            margin: string;
            "@media screen and (min-width:680px)": {
                margin: string;
            };
        };
        tooltipPlacementTop: {
            margin: string;
            "@media screen and (min-width:680px)": {
                margin: string;
            };
        };
    };
    MuiCheckbox: {
        colorPrimary: {
            color: string;
            '&:hover': {
                backgroundColor: string;
            };
            '&$disabled': {
                color: string;
                '&:hover': {
                    backgroundColor: string;
                };
            };
            '&$checked': {
                color: string;
                '&:hover': {
                    backgroundColor: string;
                };
            };
            '&$indeterminate': {
                color: string;
                '&$disabled': {
                    color: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
            };
        };
        colorSecondary: {
            '&$checked': {
                color: string;
                '&$disabled': {
                    color: string;
                };
            };
            '&$indeterminate': {
                color: string;
            };
        };
    };
    MuiRadio: {
        colorPrimary: {
            color: string;
            '&:hover': {
                backgroundColor: string;
            };
            '&$disabled': {
                color: string;
                '&:hover': {
                    backgroundColor: string;
                };
            };
            '&$checked': {
                color: string;
                '&$disabled': {
                    color: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
            };
        };
        colorSecondary: {
            '&$checked': {
                color: string;
                '&$disabled': {
                    color: string;
                };
            };
        };
    };
    MuiSwitch: {
        colorPrimary: {
            '&:hover': {
                backgroundColor: string;
            };
            '&$checked': {
                color: string;
                '& + $track': {
                    backgroundColor: string;
                    opacity: string;
                };
                '&$disabled': {
                    color: string;
                    '& + $track': {
                        backgroundColor: string;
                        opacity: string;
                    };
                };
                '&:hover': {
                    backgroundColor: string;
                };
            };
            '&$track': {
                backgroundColor: string;
                opacity: string;
            };
        };
    };
};
export default getOverrides;
//# sourceMappingURL=overrides.d.ts.map