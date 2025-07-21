/* eslint-disable react/prop-types */
import { useState } from 'react';

import { InputAdornment, MenuItem } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import CalendarIcon from '@material-ui/icons/Today';
import { Button } from '@rupertong-ui/core-button';
import { Meta, Story } from '@storybook/react';

import { TextField } from '..';
import readMe from '../../README.md';
import { TextFieldProps } from '../types';

export default {
  title: 'core/TextField',
  component: TextField,
  argTypes: {
    labelPosition: {
      control: 'inline-radio',
      options: ['left', 'top', 'none'],
      description: 'Only valid when `margin` is `super-dense`',
    },
    margin: {
      control: 'select',
      options: ['normal', 'dense', 'super-dense'],
    },
    rows: {
      control: 'number',
    },
    rowsMax: {
      control: 'number',
    },
    select: {
      description:
        'Convert TextField to a select dropdown. Must include `<MenuItem value="x">X</MenuItem>` children',
    },
    clearable: {
      control: 'boolean',
    },
  },
  parameters: {
    readme: {
      sidebar: readMe,
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = ({
  margin,
  labelPosition,
  ...rest
}) => {
  const [value, setValue] = useState('');
  return (
    <TextField
      margin={margin}
      labelPosition={margin === 'super-dense' ? labelPosition : undefined}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...rest}
    />
  );
};

const MaxLengthTemplate: Story<TextFieldProps> = ({
  margin,
  labelPosition,
  ...rest
}) => {
  const [value, setValue] = useState('');
  return (
    <TextField
      margin={margin}
      labelPosition={margin === 'super-dense' ? labelPosition : undefined}
      {...rest}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const SelectTemplate: Story<TextFieldProps> = (args) => {
  const [value, setValue] = useState('');
  return (
    <TextField
      {...Default.args}
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <MenuItem>
        <em>None</em>
      </MenuItem>
      <MenuItem key="value1" value="value1">
        Value 1
      </MenuItem>
      <MenuItem key="value2" value="value2">
        Value 2
      </MenuItem>
      <MenuItem key="value3" value="value3">
        Value 3
      </MenuItem>
    </TextField>
  );
};

const MultiSelectTemplate: Story<TextFieldProps> = ({
  margin,
  labelPosition,
  ...rest
}) => {
  const [value, setValue] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      {...Default.args}
      {...rest}
      margin={margin}
      labelPosition={margin === 'super-dense' ? labelPosition : undefined}
      value={value}
      onChange={handleChange}
    >
      <MenuItem disabled value="">
        <em>None</em>
      </MenuItem>
      <MenuItem key="value1" value="value1">
        Value 1
      </MenuItem>
      <MenuItem key="value2" value="value2">
        Value 2
      </MenuItem>
      <MenuItem key="value3" value="value3">
        Value 3
      </MenuItem>
    </TextField>
  );
};
export const Default = Template.bind({});
Default.args = {
  disabled: false,
  error: false,
  helperText: '',
  label: 'Name',
  margin: 'normal',
  multiline: false,
  required: false,
};

export const MaxLength = MaxLengthTemplate.bind({});
MaxLength.args = {
  ...Default.args,
  inputProps: { maxLength: 12 },
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  ...Default.args,
  startAdornment: (
    <InputAdornment position="start">
      <CalendarIcon />
    </InputAdornment>
  ),
};

export const ButtonBefore = Template.bind({});
ButtonBefore.args = {
  ...Default.args,
  startAdornment: (
    <Button variant="icon" aria-label="calendar icon" color="inherit">
      <CalendarIcon />
    </Button>
  ),
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  ...Default.args,
  endAdornment: (
    <InputAdornment position="end">
      <MailIcon />
    </InputAdornment>
  ),
};

export const ButtonAfter = Template.bind({});
ButtonAfter.args = {
  ...Default.args,
  endAdornment: (
    <Button variant="icon" aria-label="mail icon" color="inherit">
      <MailIcon />
    </Button>
  ),
};

export const Select = SelectTemplate.bind({});
Select.args = {
  ...Default.args,
  fullWidth: true,
  select: true,
};

export const SelectWithIconBefore = SelectTemplate.bind({});
SelectWithIconBefore.args = {
  ...Select.args,
  startAdornment: (
    <Button variant="icon" aria-label="calendar icon" color="inherit">
      <CalendarIcon />
    </Button>
  ),
};

export const MultiSelect = MultiSelectTemplate.bind({});
MultiSelect.args = {
  ...Select.args,
  SelectProps: {
    multiple: true,
    displayEmpty: true,
    renderValue: (selected: unknown = []) => (selected as []).join(', '),
  },
  startAdornment: (
    <Button variant="icon" aria-label="calendar icon" color="inherit">
      <CalendarIcon />
    </Button>
  ),
};

export const Multiline = MaxLengthTemplate.bind({});
Multiline.args = {
  ...Default.args,
  rows: 3,
  multiline: true,
  rowsMax: 5,
  inputProps: { maxLength: 150 },
};
