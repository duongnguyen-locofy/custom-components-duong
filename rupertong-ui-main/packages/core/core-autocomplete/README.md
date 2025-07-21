# Autocomplete

> The autocomplete is a normal text input enhanced by a panel of suggested options.

Specifying an `options` prop with a `label` and `description` key value pair will automatically create an options
dropdown list with the label and description. To override this property, define a custom `renderOption` method.

## Usage

```tsx
import { Autocomplete, AutocompleteProps } from '@rupertong-ui-core-autocomplete';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
];

const handleChange: AutocompleteProps['onChange'] = (event, value) => {
  console.log(value);
};

<Autocomplete
  getOptionLabel={(option) => option.label}
  onChange={handleChange}
  options={top100Films}
  value={top100Films[4]}
/>;
```

## Properties

Props extend [Autocomplete](https://v4.mui.com/api/autocomplete/)

- `textFieldVariant`: Set textfield variant to `'outlined'` or `'underlined'`. Defaults to `'outlined'`
- `textFieldProps`: Additional props to add to text field based on `textFieldVariant` selection
- `forcePopupIcon`: Whether to display expand/collapse icon. Defaults to `false`.

| propName         | type                                               | default      | isRequired |
| :--------------- | :------------------------------------------------- | :----------- | :--------- |
| textFieldVariant | `'outlined'` or `'underlined'`                     | `'outlined'` | No         |
| textFieldProps   | `'TextFieldProps'` or `'UnderlinedTextFieldProps'` | `undefined`  | No         |
| forcePopupIcon   | `boolean` or `'auto'`                              | `false`      | No         |
