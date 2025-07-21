import { createStyles, makeStyles } from '@material-ui/core/styles';
import { RupertTheme } from '@rupertong-ui/core-theme';

import { UnderlinedTextFieldStyleProps } from './types';

const useStyles = makeStyles<RupertTheme, UnderlinedTextFieldStyleProps>(
  ({ palette, typography, spacing }) =>
    createStyles({
      body2: {
        ...typography.body2,
      },
      h3: {
        ...typography.h3M,
      },
      root: ({ disableEmptyValueBackground }) => ({
        maxWidth: '100%',
        '& > div:first-child': {
          margin: 0,
        },
        '&[data-character-count="0"] > div:first-child': {
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          background: !disableEmptyValueBackground
            ? palette.action.disabledBackground
            : 'transparent',
        },
      }),
      adornmentWrapper: {
        display: 'contents',
        '& > [class*="MuiInputAdornment-positionStart"]': {
          marginTop: `0 !important`,
        },
      },
      inputWithStartAdornment: {
        paddingLeft: `${spacing(0.5)}px !important`,
      },
      autoGrow: {
        display: 'inline-block',
        verticalAlign: 'top',
      },
      input: {
        padding: `0 !important`,
        backgroundColor: `transparent !important`,
      },
      // Important overrides exist for incorporation with autocomplete
      inputRoot: {
        background: 'transparent',
        minHeight: 31,
        paddingTop: `${spacing(0.75)}px !important`,
        paddingBottom: `${spacing(0.75)}px !important`,
        paddingLeft: `${spacing(1.5)}px !important`,
        paddingRight: `${spacing(1.5)}px !important`,
      },
      inputRootDisabled: {
        backgroundColor: 'transparent !important',
      },
      hiddenWrapper: {
        position: 'relative',
      },
      hidden: {
        position: 'absolute',
        display: 'table',
        transform: 'scaleY(0)',
        padding: spacing(0, 1.7),
      },
      helperText: {
        padding: 0,
        whiteSpace: 'nowrap',
        '& > span': {
          padding: spacing(0, 1.5),
        },
      },
      helperTextRightAlign: {
        textAlign: 'right',
      },
      preWrap: {
        whiteSpace: 'pre-wrap',
      },
    })
);

export default useStyles;
