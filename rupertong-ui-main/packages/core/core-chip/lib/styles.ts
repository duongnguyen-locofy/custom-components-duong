import { createStyles, makeStyles } from '@material-ui/core/styles';
import { RupertTheme } from '@rupertong-ui/core-theme';

const useStyles = makeStyles(({ palette, typography }: RupertTheme) =>
  createStyles({
    checkIcon: {
      color: palette.primary.dark,
      marginLeft: 5,
    },
    smallCheckIcon: {
      height: 16,
      width: 16,
    },
    smallCheckIconOutlined: {
      marginLeft: 4,
    },
    label: {
      ...typography.body2,
      color: palette.text.black.highEmphasis,
    },
    selectedLabel: {
      color: palette.primary.dark,
    },
    labelPaddingAvatar: {
      paddingLeft: 6,
    },
    labelPaddingAvatarSmall: {
      paddingLeft: 5,
    },
    labelPaddingOutlinedSmall: {
      paddingLeft: 4,
    },
    selectedBg: {
      backgroundColor: `${palette.action.focusBackground} !important`,
    },
    outlinedBorder: {
      border: `1px solid ${palette.border.chip.resting} !important`,
    },
    outlinedBorderPressed: {
      border: `1px solid ${palette.border.chip.pressed} !important`,
    },
    outlinedContainer: {
      '&:hover': {
        backgroundColor: `${palette.action.disabledBackground} !important`,
      },
      '&.Mui-focusVisible': {
        backgroundColor: `${palette.border.chip.focused} !important`,
      },
    },
  })
);

export default useStyles;
