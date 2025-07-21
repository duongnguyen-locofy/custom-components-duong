import { createStyles, makeStyles } from '@material-ui/core/styles';
import { RupertTheme } from '@rupertong-ui/core-theme';

const useStyles = makeStyles(({ palette, spacing }: RupertTheme) =>
  createStyles({
    optionDescription: {
      color: palette.text.black?.medEmphasis,
      marginLeft: spacing(1),
      textAlign: 'right',
      textOverflow: 'clip',
    },
    optionLabel: {
      textOverflow: 'clip',
      flexShrink: 0,
    },
  })
);

export default useStyles;
