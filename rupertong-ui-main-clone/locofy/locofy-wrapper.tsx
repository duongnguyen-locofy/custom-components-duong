/// <reference path="./theme.d.ts" />
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@rupertong-ui/core-theme';

export default function LocofyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
