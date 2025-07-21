import { createStyles, makeStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';
import { RupertTheme } from '@rupertong-ui/core-theme';

const useStyles = makeStyles(({ palette, spacing }: RupertTheme) =>
  createStyles({
    autoCompleteInlineBlock: {
      display: 'inline-block',
      verticalAlign: 'top',
    },
    autoCompleteEndAdornment: {
      right: 0,
    },
    autoCompleteOption: {
      '&:active': {
        backgroundColor: palette.action.activeBackground,
      },
      '&[aria-selected="true"]': {
        backgroundColor: palette.action.focusBackground,
        borderColor: 'transparent',
        color: palette.text.dark,
      },
    },
    autoCompletePaper: {
      fontSize: 14,
    },
    hiddenClearIndicator: {
      display: 'none',
    },
    outlinedTextFieldInputRoot: {
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      paddingLeft: '0 !important',
    },
    outlinedTextFieldMultipleSelectionInputRoot: {
      paddingLeft: `9px !important`,
      paddingTop: `9px !important`,
      paddingBottom: `9px !important`,
    },
    popper: {
      minWidth: 'fit-content !important',
      zIndex: zIndex.modal,
    },
    outlinedMultipleSelectionInput: {
      minWidth: 'unset !important',
      padding: '7.5px 4px 7.5px 5px !important',
      height: '17px !important',
    },
    underlinedMultipleSelectionInput: {
      minWidth: 'unset !important',
    },
    tag: {
      marginTop: '4px !important',
      margin: '4px 2px',
    },
    checkbox: {
      padding: spacing(0, 1, 0, 0),
    },
    inputRoot: {
      padding: '12px 6px',
    },
    outlinedMultipleSelectionInputLabel: {
      '& [class*="MuiInputLabel-outlined"][data-shrink="false"]': {
        transform: 'translate(14px, 17px)',
      },
    },
  })
);

export default useStyles;
