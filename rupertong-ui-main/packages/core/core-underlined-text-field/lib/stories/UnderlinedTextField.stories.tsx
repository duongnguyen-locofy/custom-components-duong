import { InputAdornment, MenuItem, Typography } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';

import { UnderlinedTextField, UnderlinedTextFieldProps } from '..';
import readMe from '../../README.md';

export default {
  title: 'core/UnderlinedTextField',
  component: UnderlinedTextField,
  argTypes: {
    typographyVariant: {
      control: 'inline-radio',
    },
    disabled: {
      control: 'boolean',
    },
  },
  parameters: {
    readme: {
      sidebar: readMe,
    },
  },
} as Meta;

const Template: Story<UnderlinedTextFieldProps> = (args) => (
  <>
    <UnderlinedTextField {...args} />
    <Typography component="span">
      Inline text for illustrative purposes
    </Typography>
  </>
);

export const Default = Template.bind({});
Default.args = {
  typographyVariant: 'body2',
  multiline: false,
  autoGrow: false,
  disabled: false,
  disableEmptyValueBackground: false,
};

export const AutoGrow = Template.bind({});
AutoGrow.args = {
  ...Default.args,
  autoGrow: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
  helperText: 'This is an error',
};

export const Adornment = Template.bind({});
Adornment.args = {
  ...Default.args,
  InputProps: {
    startAdornment: <InputAdornment position="start">$</InputAdornment>,
  },
};

export const Select = Template.bind({});
Select.args = {
  ...Default.args,
  select: true,
  autoGrow: true,
  children: [
    <MenuItem key="cdn" value="cdn">
      Canada
    </MenuItem>,
    <MenuItem key="usa" value="usa">
      United States of America
    </MenuItem>,
  ],
};
