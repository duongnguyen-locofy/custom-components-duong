/* eslint-disable react/display-name */
import { forwardRef, FunctionComponentElement } from 'react';

import Box from '@material-ui/core/Box';
import { Variant } from '@material-ui/core/styles/createTypography';
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import { clsx } from 'clsx';
import upperFirst from 'lodash/upperFirst';

import useStyles from './styles';
import { TypographyProps } from './types';

/**
 * Typography is used to apply rupertong-ui formats to displayed text.
 *
 * Additional props are as provided under [Typography Props (Material UI)](https://material-ui.com/api/typography/#props)
 */
export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant,
      className,
      classes,
      children,
      fullWidth = false,
      color,
      ...props
    }: TypographyProps,
    ref
  ): FunctionComponentElement<TypographyProps> => {
    const baseClasses = useStyles({ fullWidth });
    const variantMatch = variant && variant.match(/(\w+)\.(\w+)/);
    const variantOverride: Variant = ((variantMatch && variantMatch[1]) ||
      variant) as Variant;
    const fontWeight =
      variantMatch &&
      `fontWeight${variantMatch[2]
        .charAt(0)
        .toUpperCase()}${variantMatch[2].slice(1)}`;

    const isThemeColor =
      color &&
      Object.prototype.hasOwnProperty.call(
        baseClasses,
        `color${upperFirst(color)}`
      );

    return (
      <MuiTypography
        variant={variantOverride}
        className={clsx(
          baseClasses.root,
          isThemeColor && baseClasses[`color${upperFirst(color)}`],
          classes && classes.root,
          className,
          'rupertong-typography'
        )}
        {...(color && !isThemeColor
          ? { color: color as MuiTypographyProps['color'] }
          : {})}
        {...props}
        ref={ref}
      >
        <Box component="span" fontWeight={fontWeight}>
          {children}
        </Box>
      </MuiTypography>
    );
  }
);

export default Typography;
export * from './types';
