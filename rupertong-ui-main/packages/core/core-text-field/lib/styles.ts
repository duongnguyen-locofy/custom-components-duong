import { createStyles, makeStyles } from '@material-ui/core/styles';
import { RupertTheme } from '@rupertong-ui/core-theme';

export default makeStyles(({ palette, typography, spacing }: RupertTheme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    outlinedInput: {
      color: palette.text?.black?.highEmphasis,
      ...typography.body1,
      '&:hover': {
        borderColor: palette.text?.black?.highEmphasis,

        '& $showClearButton': {
          visibility: 'visible',
        },
      },
      '&:focus, &:focus-within': {
        '& $showClearButton': {
          visibility: 'visible',
        },
      },
      '&.Mui-disabled': {
        color: palette.text?.black?.disabled,
        borderColor: palette.border.textField.disabled,
      },
      '&.Mui-error input': { caretColor: palette.error.main },
      '&[class*="MuiOutlinedInput-adornedEnd"]': { paddingRight: 0 },
      '&[class*="MuiOutlinedInput-adornedStart"]': {
        paddingLeft: spacing(0.5),
      },
      '&.Mui-error:not(.Mui-disabled)': {
        borderWidth: '2px',
      },
      '& [class*="MuiSelect-select"]:focus': { backgroundColor: 'transparent' },
      '&.Mui-error:not(.Mui-disabled) svg[class*="MuiSelect-iconOutlined"]': {
        color: palette.error.main,
      },
      '& [class*="MuiOutlinedInput-notchedOutline"]': {
        borderWidth: '1px',
        borderColor: palette.border.textField.resting,
        padding: spacing(0, 1.5),
        '& legend > span': {
          paddingLeft: '4px',
          paddingRight: '4px',
        },
      },
      '&.Mui-error:not(.Mui-disabled) [class*="MuiOutlinedInput-notchedOutline"]':
        {
          borderWidth: '2px',
          borderColor: palette.error.main,
        },
      '& > [class*="MuiFormHelperText-root"]': { marginTop: spacing(0.5) },
      '&[class*="MuiOutlinedInput-multiline"]': {
        padding: spacing(2, 1.5, 2, 2),
        '&[class*="MuiOutlinedInput-marginDense"]': {
          padding: spacing(1, 1.5, 1, 2),
        },
        '&$outlinedInputSuperDense': {
          padding: spacing(0.25, 1),
        },
      },
    },
    outlinedInputSuperDense: {
      '&[class*="MuiOutlinedInput-adornedStart"]': { paddingLeft: spacing(1) },
      '& svg[class*="MuiSelect-iconOutlined"]': { right: '1px' },
    },
    counterText: {
      display: 'block',
      textAlign: 'right',
    },
    helperText: {
      overflow: 'hidden',
      marginRight: spacing(1.5),
    },
    helperTextContainer: {
      '&.Mui-disabled': { color: palette.text?.black?.disabled },
      marginRight: spacing(2),
      marginLeft: spacing(2),
    },
    charCountWithHelpText: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    superDense: {
      marginTop: spacing(0.5),
      '& > [class*="MuiFormHelperText-root"]': {
        marginLeft: spacing(1),
      },
    },
    input: {
      caretColor: palette.primary.dark,
      height: spacing(3),
      lineHeight: `${spacing(3)}px`,
      padding: `${spacing(2, 1.5, 2, 2)} !important`,
      '&[class*="MuiOutlinedInput-inputAdornedStart"]': {
        paddingLeft: spacing(0.5),
      },
      '&[class*="MuiOutlinedInput-inputAdornedEnd"]': {
        paddingRight: spacing(0.5),
      },
      '&[class*="MuiOutlinedInput-inputMultiline"]': {
        padding: `${spacing(0)} !important`,
      },
    },
    inputMarginDense: {
      paddingTop: `${spacing(1)}px !important`,
      paddingBottom: `${spacing(1)}px !important`,
    },
    inputMarginSuperDense: {
      ...typography.body2,
      height: spacing(2.5),
      padding: `${spacing(0.25, 1)} !important`,
      lineHeight: `${spacing(2.5)}px`,
      '&[class*="MuiSelect-selectMenu"]': {
        height: spacing(2.5),
      },
    },
    inputAdornedStart: {},
    inputAdornedEnd: {},
    adorned: {
      '&:not(.Mui-disabled) > button, &:not(.Mui-disabled) > [class*="MuiInputAdornment-root"]':
        {
          color: palette.text?.black?.medEmphasis,
        },
      '& > button, & > [class*="MuiInputAdornment-root"]': {
        padding: spacing(1),
      },
      '&.Mui-error:not(.Mui-disabled) > button, &.Mui-error:not(.Mui-disabled) > [class*="MuiInputAdornment-root"]':
        {
          color: palette.error.main,
        },
      '&[class*="MuiOutlinedInput-adornedStart"]': {
        '& > [class*="MuiInputAdornment-root"]': {
          marginRight: 0,
          padding: spacing(1),
        },
      },
      '&[class*="MuiOutlinedInput-adornedEnd"]': {
        '& > [class*="MuiInputAdornment-root"]': {
          marginLeft: 0,
          padding: spacing(1),
        },
      },
    },
    adornedSuperDense: {
      '&[class*="MuiOutlinedInput-adornedStart"]': {
        '& > button': { padding: spacing(0, 1, 0, 0) },
        '& > [class*="MuiInputAdornment-root"]': {
          padding: spacing(0, 1, 0, 0),
        },
      },
      '&[class*="MuiOutlinedInput-adornedEnd"]': {
        '& > button': { padding: spacing(0, 1) },
        '& > [class*="MuiInputAdornment-root"]': {
          padding: spacing(1),
        },
      },
      '& > button, & [class*="MuiInputAdornment-root"]': {
        '& svg': {
          height: spacing(2.5),
          width: spacing(2.5),
        },
      },
    },
    adornedStartSuperDense: { paddingLeft: spacing(0.5) },
    adornedEndSuperDense: { paddingRight: spacing(0.5) },
    label: {
      '&.Mui-disabled': { color: palette.text?.black?.disabled },
      '&.Mui-error:not(.Mui-disabled)': { color: palette.error.main },
      '&.Mui-focused:not(.Mui-error)': {
        color: palette.primary.dark,
      },
    },
    labelHover: { color: palette.text?.black?.highEmphasis },
    labelSuperDense: {
      ...typography.body2,
      marginTop: spacing(1),
      marginBottom: spacing(0.5),
    },
    topLabel: {
      padding: 0,
      marginBottom: spacing(-0.5),
    },
    leftLabel: {
      display: 'inline-block',
      padding: spacing(0.25, 0),
      margin: spacing(0.5, 1, 1, 0),
    },
    clearButton: {
      visibility: 'hidden',
    },
    showClearButton: {
      // Placeholder className so that it can be hooked into by '$showClearButton' above
    },
    clearButtonForSelect: {
      // Prevent clear button from overlapping with Select expander icon
      position: 'absolute',
      right: spacing(4),
    },
  })
);
