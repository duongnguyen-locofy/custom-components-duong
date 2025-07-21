import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { RupertTheme } from '@rupertong-ui/core-theme';

export type TypographyStyleProps = {
  fullWidth: boolean;
};

export default makeStyles<RupertTheme, TypographyStyleProps>((theme) =>
  createStyles({
    root: {
      maxWidth: ({ fullWidth }) => (fullWidth ? '100%' : 500),
    },
    colorTextDark: {
      color: theme.palette.text.dark,
    },
    colorTextBlackHighEmphasis: {
      color: theme.palette.text.black.highEmphasis,
    },
    colorTextBlackMedEmphasis: {
      color: theme.palette.text.black.medEmphasis,
    },
    colorTextBlackDisabled: {
      color: theme.palette.text.black.disabled,
    },
    colorTextWhiteHighEmphasis: {
      color: theme.palette.text.white.highEmphasis,
    },
    colorTextWhiteMedEmphasis: {
      color: theme.palette.text.white.medEmphasis,
    },
    colorTextWhiteDisabled: {
      color: theme.palette.text.white.disabled,
    },
  })
);
