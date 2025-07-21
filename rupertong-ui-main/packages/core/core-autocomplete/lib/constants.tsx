import { ReactElement } from 'react';

import { Popper, PopperProps } from '@material-ui/core';

import useStyles from './styles';

export const CustomPopper = (props: PopperProps): ReactElement => {
  const classes = useStyles();
  return (
    <Popper {...props} className={classes.popper} placement="bottom-start" />
  );
};
