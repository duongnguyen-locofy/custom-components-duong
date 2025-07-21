import { AutocompleteProps as MuiAutocompleteProps } from '@material-ui/lab/Autocomplete';
import { TextFieldProps } from '@rupertong-ui/core-text-field/lib/types';
import { UnderlinedTextFieldProps } from '@rupertong-ui/core-underlined-text-field';

type CommonAutocompleteProps<T> = Partial<
  MuiAutocompleteProps<T, boolean, boolean, boolean>
> & {
  options: T[];
  afterOnChange?: () => void;
};

type TextFieldVariantAutocompleteProps =
  | {
      /** Variant for TextField, either `outlined` or `underlined`. Defaults to `outlined` for `TextField` component. */
      textFieldVariant?: 'outlined';
      /** TextField Props for the selected variant whose type will either be `TextFieldProps` or `UnderlinedTextFieldProps`  */
      textFieldProps?: Omit<TextFieldProps, 'startAdornment' | 'endAdornment'>;
    }
  | {
      /** Variant for TextField, either `outlined` or `underlined`. Defaults to `outlined` for `TextField` component. */
      textFieldVariant: 'underlined';
      /** TextField Props for the selected variant whose type will either be `TextFieldProps` or `UnderlinedTextFieldProps`  */
      textFieldProps?: UnderlinedTextFieldProps;
    };

export type AutocompleteProps<T> = CommonAutocompleteProps<T> &
  TextFieldVariantAutocompleteProps;
