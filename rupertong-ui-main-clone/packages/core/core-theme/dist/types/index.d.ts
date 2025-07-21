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
import { ExtendedPalette, ExtendedTypeAction, ExtendedTypeText } from './types';
import { TypographyVariants } from './typography';
import { RecursivePartial } from './utils/typeUtils';
declare module '@material-ui/core/styles/createTypography' {
    interface Typography extends Record<TypographyVariants, TypographyStyle> {
    }
    interface TypographyOptions extends Partial<Record<TypographyVariants, TypographyStyle>> {
    }
}
declare module '@material-ui/core/styles/createPalette' {
    interface TypeAction extends ExtendedTypeAction {
    }
    interface TypeText extends ExtendedTypeText {
    }
    interface Palette extends ExtendedPalette {
    }
    interface PaletteOptions extends RecursivePartial<ExtendedPalette> {
    }
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
declare const theme: import("@material-ui/core/styles").Theme;
declare const oldTheme: import("@material-ui/core/styles").Theme;
export { theme, oldTheme };
//# sourceMappingURL=index.d.ts.map