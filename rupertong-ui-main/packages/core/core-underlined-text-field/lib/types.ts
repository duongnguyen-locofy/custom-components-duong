import { TextFieldProps } from '@material-ui/core';

export type UnderlinedTextFieldProps = Omit<TextFieldProps, 'variant'> & {
  /** Typography variant to use */
  typographyVariant?: 'body2' | 'h3';
  /** Toggles auto grow input and inline-block display */
  autoGrow?: boolean;
  /** If `autoGrow` is set `true`, this property will set a maximum width in pixels */
  maxWidth?: number;
  /** Flag to disable light grey background on input when input is empty. Defaults to `false`. */
  disableEmptyValueBackground?: boolean;
};

export type UnderlinedTextFieldStyleProps = {
  disableEmptyValueBackground: boolean;
};
