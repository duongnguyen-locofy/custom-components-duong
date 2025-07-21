import '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface TypeText {
    black: {
      highEmphasis: string;
      mediumEmphasis: string;
      disabled: string;
    };
  }

  interface PaletteOptions {
    button?: {
      contained?: Partial<{
        enabled: string;
        enabledBackground: string;
        hover: string;
        hoverBackground: string;
        disabled: string;
        disabledBackground: string;
        focus: string;
        focusBackground: string;
        active: string;
        activeBackground: string;
      }>;
      icon?: Partial<{
        enabled: string;
        enabledBackground: string;
        hover: string;
        hoverBackground: string;
        disabled: string;
        disabledBackground: string;
        focus: string;
        focusBackground: string;
        active: string;
        activeBackground: string;
      }>;
      text?: Partial<{
        enabled: string;
        enabledBackground: string;
        hover: string;
        hoverBackground: string;
        disabled: string;
        disabledBackground: string;
        focus: string;
        focusBackground: string;
        active: string;
        activeBackground: string;
      }>;
      outlined?: Partial<{
        enabled: string;
        enabledBackground: string;
        hover: string;
        hoverBackground: string;
        disabled: string;
        disabledBackground: string;
        focus: string;
        focusBackground: string;
        active: string;
        activeBackground: string;
      }>;
    };
    border?: Partial<{
        enabled: string;
        hover: string;
        focus: string;
    }>;
  }

  interface Palette {
    button: {
        contained: {
            enabled: string;
            enabledBackground: string;
            hover: string;
            hoverBackground: string;
            disabled: string;
            disabledBackground: string;
            focus: string;
            focusBackground: string;
            active: string;
            activeBackground: string;
        };
        icon: {
            enabled: string;
            enabledBackground: string;
            hover: string;
            hoverBackground: string;
            disabled: string;
            disabledBackground: string;
            focus: string;
            focusBackground: string;
            active: string;
            activeBackground: string;
        };
        text: {
            enabled: string;
            enabledBackground: string;
            hover: string;
            hoverBackground: string;
            disabled: string;
            disabledBackground: string;
            focus: string;
            focusBackground: string;
            active: string;
            activeBackground: string;
        };
        outlined: {
            enabled: string;
            enabledBackground: string;
            hover: string;
            hoverBackground: string;
            disabled: string;
            disabledBackground: string;
            focus: string;
            focusBackground: string;
            active: string;
            activeBackground: string;
        };
    };
    border: {
        enabled: string;
        hover: string;
        focus: string;
    };
  }
}
