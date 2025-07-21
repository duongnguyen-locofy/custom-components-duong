/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from '@material-ui/core/styles';
import { Breakpoints } from '@material-ui/core/styles/createBreakpoints';
import { Mixins } from '@material-ui/core/styles/createMixins';
import { Spacing } from '@material-ui/core/styles/createSpacing';
import { Direction } from '@material-ui/core/styles/createTheme';
import { Typography } from '@material-ui/core/styles/createTypography';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
import { Shadows } from '@material-ui/core/styles/shadows';
import { Shape } from '@material-ui/core/styles/shape';
import { Transitions } from '@material-ui/core/styles/transitions';
import { ZIndex } from '@material-ui/core/styles/zIndex';

import mixins from './mixins';
import oldPalette from './oldPalette';
import getOverrides from './overrides';
import palette from './palette';
import { ExtendedPalette, ExtendedTypeAction, ExtendedTypeText } from './types';
import typography, { TypographyVariants } from './typography';
import { RecursivePartial } from './utils/typeUtils';

declare module '@material-ui/core/styles/createTypography' {
  export interface Typography
    extends Record<TypographyVariants, TypographyStyle> {}
  export interface TypographyOptions
    extends Partial<Record<TypographyVariants, TypographyStyle>> {}
}

declare module '@material-ui/core/styles/createPalette' {
  export interface TypeAction extends ExtendedTypeAction {}
  export interface TypeText extends ExtendedTypeText {}
  export interface Palette extends ExtendedPalette {}
  export interface PaletteOptions extends RecursivePartial<ExtendedPalette> {}
}

export type RupertTypography = Typography & TypographyVariants;

export interface RupertTheme {
  shape: Shape;
  breakpoints: Breakpoints;
  direction: Direction;
  mixins: Mixins;
  overrides?: Overrides;
  palette: ExtendedPalette;
  props?: ComponentsProps;
  shadows: Shadows;
  spacing: Spacing;
  transitions: Transitions;
  typography: RupertTypography;
  zIndex: ZIndex;
  unstable_strictMode?: boolean;
}

const overrides = getOverrides(createTheme({ palette, typography }));
const oldOverrides = getOverrides(
  createTheme({ palette: oldPalette, typography })
);

const theme = createTheme({
  palette,
  typography,
  overrides,
  mixins,
});

const oldTheme = createTheme({
  palette: oldPalette,
  typography,
  overrides: oldOverrides,
  mixins,
});

export { theme, oldTheme };
