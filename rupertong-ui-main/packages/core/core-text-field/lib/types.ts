import {
  InputBaseProps,
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core';

type TextFieldPropBase = Omit<MuiTextFieldProps, 'size' | 'margin' | 'variant'>;

export type TextFieldProps = TextFieldPropBase & {
  labelPosition?: 'none' | 'left' | 'top' | false;
  margin?: 'super-dense' | MuiTextFieldProps['margin'];
  startAdornment?: InputBaseProps['startAdornment'];
  endAdornment?: InputBaseProps['startAdornment'];
  clearable?: boolean;
  preventMenuOverlap?: boolean;
};
