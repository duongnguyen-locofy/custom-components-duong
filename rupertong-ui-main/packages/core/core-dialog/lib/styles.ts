import { createStyles, makeStyles } from '@material-ui/core/styles';
import { RupertTheme } from '@rupertong-ui/core-theme';

const useStyles = makeStyles(({ shadows, spacing }: RupertTheme) =>
  createStyles({
    dialogContent: {
      padding: '0 1.5rem 1rem',
    },
    shadow: {
      boxShadow: shadows[4],
    },
    spacing: {
      padding: '1rem 1.5rem',

      '& > :not(:first-child)': {
        marginLeft: spacing(2),
      },
    },
    content: {
      marginBottom: 'unset',
    },
    titleShadow: {
      boxShadow: shadows[4],
      zIndex: 0,
    },
  })
);

export default useStyles;
