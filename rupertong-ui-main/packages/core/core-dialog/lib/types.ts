import { ReactNode } from 'react';

import { DialogProps as MuiDialogProps } from '@material-ui/core';

type DialogProps = Omit<MuiDialogProps, 'title' | 'content'> & {
  isFullWidth?: boolean;
  isResponsive?: boolean;
  isShadow?: boolean;
  open?: boolean;
  responsiveBreakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  title?: ReactNode;
  actions?: ReactNode;
  content: ReactNode;
  contentPadding?: string;
  contentDividers?: boolean;
};

// HOW TO?
// type DialogPropsBase = Omit<DialogProps, 'children'>;

export type { DialogProps };
