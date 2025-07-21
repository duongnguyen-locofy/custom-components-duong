import { CircularProgress, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Meta, Story } from '@storybook/react';

import { Autocomplete, AutocompleteProps } from '..';
import readMe from '../../README.md';
import { countries, CountryType } from '../tests/test.data';

const countryToFlag = (isoCode: string) => {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
};

export default {
  title: 'core/Autocomplete',
  component: Autocomplete,
  argTypes: { onChange: { action: 'changed' } },
  parameters: {
    readme: {
      sidebar: readMe,
    },
  },
} as Meta;

const Template: Story<AutocompleteProps<CountryType>> = (props) => (
  <Autocomplete
    getOptionLabel={(option) => option.label}
    getOptionSelected={(option, value) => option.label === value.label}
    {...props}
  />
);

export const OutlinedTextFieldVariant = Template.bind({});
OutlinedTextFieldVariant.args = {
  options: countries,
  textFieldVariant: 'outlined',
  textFieldProps: {
    label: 'Countries',
    labelPosition: 'left',
    margin: 'super-dense',
  },
};

export const UnderlinedTextFieldVariant = Template.bind({});
UnderlinedTextFieldVariant.args = {
  ...OutlinedTextFieldVariant.args,
  textFieldProps: { autoGrow: true },
  textFieldVariant: 'underlined',
};

export const UnderlinedTextFieldVariantWithMultipleSelect = Template.bind({});
UnderlinedTextFieldVariantWithMultipleSelect.args = {
  ...UnderlinedTextFieldVariant.args,
  textFieldProps: { autoGrow: true, maxWidth: 750 },
  multiple: true,
};

export const AutomaticLabelAndDescriptionOption = Template.bind({});
AutomaticLabelAndDescriptionOption.args = {
  ...UnderlinedTextFieldVariant.args,
  options: countries.map(({ label, phone, ...rest }) => ({
    label,
    description: phone,
    phone,
    ...rest,
  })),
};

export const RenderOption = Template.bind({});
RenderOption.args = {
  ...UnderlinedTextFieldVariant.args,
  renderOption: (option) => (
    <>
      <span style={{ marginRight: 10 }}>{countryToFlag(option.code)}</span>
      {option.label} ({option.code}) +{option.phone}
    </>
  ),
};

export const OutlinedTextFieldWithLabelAndExpander = Template.bind({});
OutlinedTextFieldWithLabelAndExpander.args = {
  ...OutlinedTextFieldVariant.args,
  forcePopupIcon: true,
  textFieldProps: {
    label: 'Countries',
    margin: 'dense',
  },
};

export const IconBeforeOrAfter = Template.bind({});
IconBeforeOrAfter.args = {
  ...OutlinedTextFieldVariant.args,
  textFieldProps: {
    label: 'Countries',
    margin: 'dense',
    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          <CircularProgress size={20} />
        </InputAdornment>
      ),
    },
  },
};
