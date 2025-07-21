import {
  forwardRef,
  FunctionComponentElement,
  MouseEvent,
  MutableRefObject,
  ReactElement,
  Ref,
  useRef,
  useState,
} from 'react';

import MuiButton from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@rupertong-ui/core-typography';
import { clsx } from 'clsx';

import useStyles from './styles';
import {
  ButtonProps,
  ButtonVariants,
  IconButtonPropsClasses,
  RegularButtonPropsClasses,
} from './types';

const ButtonComponent = <T extends ButtonVariants>(
  {
    label = 'test',
    disabled,
    onClick,
    variant = 'text',
    size = 'large',
    className,
    classes,
    children,
    component = 'button',
    ...props
  }: ButtonProps<T>,
  ref: Ref<HTMLButtonElement>
): FunctionComponentElement<ButtonProps<T>> => {
  const baseClasses = useStyles();

  const [pressed, setPressed] = useState(false);
  const { onMouseUp, onMouseLeave, onMouseDown } = props;

  const onMouseEvent = (down: boolean): boolean => {
    setPressed(down && !disabled);
    return true;
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
    const tempRef = (ref || buttonRef) as MutableRefObject<HTMLButtonElement>;
    if (tempRef && tempRef.current) {
      tempRef.current.blur();
    }
  };

  const sharedProps = {
    className: clsx(className, 'evergreen-btn'),
    color: 'primary',
    disabled,
    disableFocusRipple: true,
    disableRipple: true,
    disableTouchRipple: true,
    onClick: handleClick,
    onMouseUp: (e: MouseEvent<HTMLButtonElement>) =>
      onMouseEvent(false) && onMouseUp && onMouseUp(e),
    onMouseLeave: (e: MouseEvent<HTMLButtonElement>) =>
      onMouseEvent(false) && onMouseLeave && onMouseLeave(e),
    onMouseDown: (e: MouseEvent<HTMLButtonElement>) =>
      onMouseEvent(true) && onMouseDown && onMouseDown(e),
    ref: ref || buttonRef,
    component,
  };

  const buttonClasses = classes as RegularButtonPropsClasses;

  if (variant === 'icon') {
    const iconButtonClasses = classes as IconButtonPropsClasses;

    return (
      <IconButton
        {...sharedProps}
        classes={{
          root: clsx(
            baseClasses.icon,
            pressed && baseClasses.pressed,
            iconButtonClasses && iconButtonClasses.root
          ),
          disabled: clsx(
            baseClasses.disabled,
            iconButtonClasses && iconButtonClasses.disabled
          ),
          label: clsx(
            baseClasses.label,
            iconButtonClasses && iconButtonClasses.label
          ),
          sizeSmall: clsx(iconButtonClasses && iconButtonClasses.sizeSmall),
          edgeStart: clsx(iconButtonClasses && iconButtonClasses.edgeStart),
          edgeEnd: clsx(iconButtonClasses && iconButtonClasses.edgeEnd),
        }}
        size={size !== 'large' ? size : 'medium'}
        {...props}
      >
        {children}
      </IconButton>
    );
  }

  return (
    <MuiButton
      {...sharedProps}
      variant={variant}
      size={size}
      classes={{
        root: clsx(
          baseClasses.root,
          pressed && baseClasses.pressed,
          buttonClasses && buttonClasses.root
        ),
        label: clsx(baseClasses.label, buttonClasses && buttonClasses.label),
        contained: clsx(
          baseClasses.contained,
          buttonClasses && buttonClasses.contained
        ),
        outlined: clsx(
          baseClasses.outlined,
          buttonClasses && buttonClasses.outlined
        ),
        focusVisible: clsx(
          baseClasses.focused,
          buttonClasses && buttonClasses.focusVisible
        ),
        disabled: clsx(
          baseClasses.disabled,
          buttonClasses && buttonClasses.disabled
        ),
        text: clsx(baseClasses.text, buttonClasses && buttonClasses.text),
        sizeSmall: clsx(
          baseClasses.sizeSmall,
          buttonClasses && buttonClasses.sizeSmall
        ),
        sizeLarge: clsx(
          baseClasses.sizeLarge,
          buttonClasses && buttonClasses.sizeLarge
        ),
        textSizeSmall: clsx(
          baseClasses.textSizeSmall,
          buttonClasses && buttonClasses.textSizeSmall
        ),
        textSizeLarge: clsx(
          baseClasses.textSizeLarge,
          buttonClasses && buttonClasses.textSizeLarge
        ),
      }}
      {...props}
    >
      <Typography variant="button">{children || label}</Typography>
    </MuiButton>
  );
};

/**
 * Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

 For text based buttons (`text` | `contained` | `outlined`), you can use the `label` or `children` prop for the button's display.

 For icon based buttons, you must specify a `children` prop.
 */
export const Button = forwardRef<HTMLButtonElement>(ButtonComponent) as <
  T extends ButtonVariants
>(
  props: ButtonProps<T> & { ref?: Ref<HTMLButtonElement> }
) => ReactElement;

export default Button;


