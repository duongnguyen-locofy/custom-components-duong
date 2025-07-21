interface ExtendedTypeText {
  primary: string;
  secondary: string;
  disabled: string;
  dark: string;
  black: {
    highEmphasis: string;
    medEmphasis: string;
    disabled: string;
  };
  white: {
    highEmphasis: string;
    medEmphasis: string;
    disabled: string;
  };
}

interface ButtonTypePaletteProps {
  active: string;
  disabled: string;
  enabled: string;
  focus: string;
  hover: string;
  activeBackground: string;
  disabledBackground: string;
  enabledBackground: string;
  focusBackground: string;
  hoverBackground: string;
}

interface ExtendedPalette {
  primary: {
    main: string;
    dark: string;
    light: string;
  };
  secondary: {
    main: string;
    dark: string;
    light: string;
  };
  success?: {
    main: string;
  };
  warning: {
    main: string;
  };
  error: {
    main: string;
  };
  surface: {
    base: string;
    dark: string;
    scrim: string;
  };
  tabs: {
    default: string;
    selected: string;
    hover: string;
    pressed: string;
  };
  tooltip: {
    background: string;
    color: string;
    opacity: number;
  };
  background: {
    default: string;
  };
  progressIndicator: {
    bar: string;
    progress: string;
  };
  chart: {
    sequentialBluePalette: string[];
    categoricalPalette: string[];
    emphasisPalette: {
      negative: string;
      positive: string;
    };
    barBackground: string;
    altBarBackground: string;
    goalLineColor: string;
    projectedLineColor: string;
    barBorderColor: string;
  };
  text: {
    dark: string;
    black: {
      highEmphasis: string;
      medEmphasis: string;
      disabled: string;
    };
    white: {
      highEmphasis: string;
      medEmphasis: string;
      disabled: string;
    };
  };
  border: {
    disabled: string;
    enabled: string;
    focus: string;
    hover: string;
    selected: string;
    button: {
      enabled: string;
      focused: string;
    };
    textField: {
      resting: string;
      hover: string;
      disabled: string;
      error: string;
      focused: string;
    };
    chip: {
      focused: string;
      resting: string;
      pressed: string;
    };
  };
  action: {
    disabled: string;
    activeBackground: string;
    disabledBackground: string;
    dragBackground: string;
    focusBackground: string;
    hoverBackground: string;
  };
  button: {
    contained: ButtonTypePaletteProps;
    icon: ButtonTypePaletteProps;
    outlined: ButtonTypePaletteProps;
    text: Omit<ButtonTypePaletteProps, 'enabledBackground'>;
  };
  selectionControl: {
    on: {
      hover: string;
      focus: string;
      pressed: string;
    };
    off: {
      hover: string;
      focus: string;
      pressed: string;
    };
  };
  switch: {
    rail: {
      on: {
        enabled: string;
        disabled: string;
      };
      off: {
        enabled: string;
        disabled: string;
      };
    };
    knob: {
      on: {
        enabled: string;
        disabled: string;
      };
      off: {
        enabled: string;
        disabled: string;
      };
    };
  };
  divider: string;
}

interface ExtendedTypeAction {
  activeBackground: string;
  dragBackground: string;
  focusBackground: string;
  hoverBackground: string;
}

export type {
  ExtendedPalette,
  ExtendedTypeAction,
  ExtendedTypeText,
  ButtonTypePaletteProps,
};
