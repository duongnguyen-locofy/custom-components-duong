import { createTheme, Theme } from '@material-ui/core/styles';

const defaultTheme = createTheme();

const mixins: Theme['mixins'] = {
  ...defaultTheme.mixins,
  toolbar: {
    ...defaultTheme.mixins.toolbar,
    [`@media(min-width:${defaultTheme.breakpoints.values.sm}px)`]: {
      minHeight: 48,
    },
  },
};

export default mixins;
