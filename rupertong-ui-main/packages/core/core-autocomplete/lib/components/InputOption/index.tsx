import { ReactElement } from 'react';

import { Box } from '@material-ui/core';
import { Typography } from '@rupertong-ui/core-typography';

import useStyles from './styles';

export type OptionProp = { label: string; description?: string };

export type InputOptionProps = {
  option: OptionProp;
};

const InputOption = ({ option }: InputOptionProps): ReactElement => {
  const classes = useStyles();

  return (
    <Box
      alignItems="baseline"
      display="flex"
      width="100%"
      justifyContent="space-between"
    >
      <Typography
        variant="inherit"
        noWrap
        display="block"
        className={classes.optionLabel}
      >
        {option.label}
      </Typography>
      {option.description && (
        <Typography
          variant="caption"
          noWrap
          display="block"
          className={classes.optionDescription}
        >
          {option.description}
        </Typography>
      )}
    </Box>
  );
};

export default InputOption;
