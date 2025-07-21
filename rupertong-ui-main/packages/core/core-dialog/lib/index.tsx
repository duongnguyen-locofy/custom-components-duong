import { useEffect, useRef, useState } from 'react';

import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { Typography } from '@rupertong-ui/core-typography';
import { clsx } from 'clsx';

import useStyles from './styles';
import { DialogProps } from './types';

export const Dialog = ({
  actions,
  content,
  isFullWidth = true,
  isResponsive = true,
  isShadow = true,
  open = false,
  responsiveBreakpoint = 'xs',
  title,
  contentPadding,
  contentDividers = false,
  ...props
}: DialogProps) => {
  const classes = useStyles();

  const divRef = useRef<HTMLDivElement>(null);

  const [scrolling, setScrolling] = useState(false);
  const [dividers, setDividers] = useState(contentDividers);

  const theme = useTheme();
  const isBelowResponsiveBreakpoint = useMediaQuery(
    theme.breakpoints.down(responsiveBreakpoint)
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (contentDividers) {
      setDividers(contentDividers);
    } else if (divRef?.current) {
      const hasDividers =
        divRef.current?.clientHeight < divRef.current?.scrollHeight;
      setDividers(hasDividers);
    }
  });

  const handleScroll = () => {
    if (divRef.current?.scrollTop === 0) {
      setScrolling(false);
    }
    if (!scrolling) {
      setScrolling(true);
    }
  };

  return (
    <MuiDialog
      className={classes.spacing}
      fullScreen={isResponsive && isBelowResponsiveBreakpoint}
      fullWidth={isFullWidth}
      open={open}
      {...props}
    >
      {title && (
        <DialogTitle
          data-testid="dialog-title"
          className={clsx(classes.spacing, {
            [classes.titleShadow]: scrolling && isShadow,
          })}
          disableTypography
        >
          <Typography variant="h3.medium" fullWidth>
            {title}
          </Typography>
        </DialogTitle>
      )}
      <DialogContent
        style={{ padding: contentPadding }}
        className={clsx(classes.dialogContent, {
          [classes.spacing]: dividers && !contentPadding,
        })}
        data-testid="content"
        dividers={dividers}
        onScroll={handleScroll}
        ref={divRef}
      >
        <div className={classes.content}>{content}</div>
      </DialogContent>
      {actions && (
        <DialogActions
          data-testid="dialog-actions"
          className={clsx(classes.spacing, {
            [classes.shadow]: scrolling && isShadow,
          })}
        >
          {actions}
        </DialogActions>
      )}
    </MuiDialog>
  );
};

export default Dialog;

export type { DialogProps };

export { DialogContentText };
