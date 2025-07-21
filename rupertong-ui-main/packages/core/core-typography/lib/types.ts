import { ElementType, ReactNode } from 'react';

import { TypographyProps as MuiTypographyProps } from '@material-ui/core';

export type TypographyVariant =
  | 'h2.light'
  | 'h3.medium'
  | 'h4.medium'
  | 'caption.medium'
  | MuiTypographyProps['variant'];

export type TypographyColor =
  | 'textDark'
  | 'textBlackHighEmphasis'
  | 'textBlackMedEmphasis'
  | 'textBlackDisabled'
  | 'textWhiteHighEmphasis'
  | 'textWhiteMedEmphasis'
  | 'textWhiteDisabled'
  | MuiTypographyProps['color'];

export type TypographyProps = {
  /** Applies the theme typography styles */
  variant?: TypographyVariant;
  /** The content of the component. */
  children?: ReactNode;
  /** The color of the component. It supports those theme colors that make sense for this component. */
  color?: TypographyColor;
  /** Controls the display type */
  display?: MuiTypographyProps['display'];
  /**  If `true`, the text will have a bottom margin. */
  gutterBottom?: MuiTypographyProps['gutterBottom'];
  /** If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
     Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow). */
  noWrap?: MuiTypographyProps['noWrap'];
  /** If `true`, the text will have a bottom margin. */
  paragraph?: MuiTypographyProps['paragraph'];
  className?: MuiTypographyProps['className'];
  /** Override or extend the styles applied to the component.  */
  classes?: MuiTypographyProps['classes'];
  style?: MuiTypographyProps['style'];
  /** The component used for the root node. Either a string to use a HTML element or a component. Overrides the behavior of the `variantMapping` prop. */
  component?: ElementType;
  /** If `true`, the text will have 100% width. */
  fullWidth?: boolean;
};
