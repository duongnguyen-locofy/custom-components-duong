import { makeStyles, createStyles } from '@material-ui/core/styles';

var useStyles = makeStyles(function (theme) {
  return createStyles({
    root: {
      maxWidth: function maxWidth(_a) {
        var fullWidth = _a.fullWidth;
        return fullWidth ? '100%' : 500;
      }
    },
    colorTextDark: {
      color: theme.palette.text.dark
    },
    colorTextBlackHighEmphasis: {
      color: theme.palette.text.black.highEmphasis
    },
    colorTextBlackMedEmphasis: {
      color: theme.palette.text.black.medEmphasis
    },
    colorTextBlackDisabled: {
      color: theme.palette.text.black.disabled
    },
    colorTextWhiteHighEmphasis: {
      color: theme.palette.text.white.highEmphasis
    },
    colorTextWhiteMedEmphasis: {
      color: theme.palette.text.white.medEmphasis
    },
    colorTextWhiteDisabled: {
      color: theme.palette.text.white.disabled
    }
  });
});

export { useStyles as default };
//# sourceMappingURL=styles.js.map
