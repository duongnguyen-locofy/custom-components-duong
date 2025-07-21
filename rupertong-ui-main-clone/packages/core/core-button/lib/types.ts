import { ElementType, ReactNode } from 'react';

import {
  ButtonProps as MuiButtonProps,
  IconButtonProps as MuiIconButtonProps,
} from '@material-ui/core';

export type TextButtonVariants = MuiButtonProps['variant'];

export type ButtonVariants = TextButtonVariants | 'icon';

type RegularButtonProps<T extends TextButtonVariants> = {
  label?: ReactNode;
  edge?: never;
  size?: 'large' | 'small';
  variant?: T;
  component?: ElementType;
};

type IconButtonProps = {
  variant: 'icon';
  label?: never;
  children: ReactNode;
  component?: ElementType;
};

export type ButtonProps<T extends ButtonVariants> = T extends TextButtonVariants
  ? RegularButtonProps<T> & Omit<MuiButtonProps, 'checkedLink' | 'valueLink'>
  : IconButtonProps & Omit<MuiIconButtonProps, 'checkedLink' | 'valueLink'>;

export type RegularButtonPropsClasses = MuiButtonProps['classes'];

export type IconButtonPropsClasses = MuiIconButtonProps['classes'];
