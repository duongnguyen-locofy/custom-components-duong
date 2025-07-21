import { ReactElement, type Ref, useRef, useState } from 'react';

import { useForkRef } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MuiTextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import { Button } from '@rupertong-ui/core-button';
import { clsx } from 'clsx';

import useStyles from './styles';
import { TextFieldProps } from './types';

/** TextFields allow users to enter text into a UI. They typically appear in forms and dialogs.
 *
 * Additional Props are as provided under [TextField Props (Material UI)](https://material-ui.com/api/text-field/#props)
 */
export const TextField = ({
  id,
  label,
  labelPosition,
  select,
  margin,
  classes,
  className,
  startAdornment,
  endAdornment,
  required,
  error,
  disabled,
  color,
  onBlur,
  onChange,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  InputProps,
  inputProps,
  SelectProps,
  InputLabelProps,
  FormHelperTextProps,
  helperText,
  inputRef: propsInputRef,
  clearable = false,
  preventMenuOverlap = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultValue = '', // TODO use defaultValue prop
  ...props
}: TextFieldProps): ReactElement => {
  const baseClasses = useStyles();
  const density = margin === 'super-dense' ? 'dense' : margin;
  const inputLabel = margin === 'super-dense' ? undefined : label;
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element | undefined | null>(
    undefined
  );
  const textFieldRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const forkedInputRef = useForkRef(inputRef, propsInputRef as Ref<unknown>);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { multiline, value } = props; // TODO use multiline prop

  if (select && endAdornment) {
    throw new Error('Select component cannot have end adornment');
  }

  if (labelPosition && margin !== 'super-dense') {
    throw new Error(
      'Label position can only be used with "super-dense" margin'
    );
  }

  const onFocusEvent = (focusIn: boolean): boolean => {
    setFocused(focusIn && !disabled);

    return true;
  };

  const onHoverEvent = (hover: boolean): boolean => {
    setHovered(hover && !disabled);

    return true;
  };

  const getHelperTextWithCounter = () => {
    return (
      <>
        {helperText && (helperText as string).length > 0 && (
          <span className={baseClasses.helperText}>{helperText}</span>
        )}
        <span className={baseClasses.counterText}>
          {`${(value as string).length}/${inputProps?.maxLength || 1}`}
        </span>
      </>
    );
  };

  return (
    <div className={baseClasses.root}>
      {margin === 'super-dense' && labelPosition !== 'none' && label && (
        <InputLabel
          id={id && `${id}-label`}
          htmlFor={id}
          required={required}
          color={color}
          error={error}
          disabled={disabled}
          focused={focused}
          {...InputLabelProps}
          className={clsx(
            baseClasses.label,
            baseClasses.labelSuperDense,
            labelPosition === 'left'
              ? baseClasses.leftLabel
              : baseClasses.topLabel,
            hovered && baseClasses.labelHover
          )}
        >
          {label}
        </InputLabel>
      )}
      <MuiTextField
        id={id}
        ref={textFieldRef}
        inputRef={forkedInputRef}
        label={inputLabel}
        variant="outlined"
        select={select}
        margin={density}
        required={required}
        color={color}
        error={error}
        disabled={disabled}
        onBlur={(e) => onFocusEvent(false) && onBlur && onBlur(e)}
        onChange={(e) => onHoverEvent(false) && onChange && onChange(e)}
        onFocus={(e) => onFocusEvent(true) && onFocus && onFocus(e)}
        onMouseEnter={(e) =>
          onHoverEvent(true) && onMouseEnter && onMouseEnter(e)
        }
        onMouseLeave={(e) =>
          onHoverEvent(false) && onMouseLeave && onMouseLeave(e)
        }
        InputProps={{
          startAdornment,
          endAdornment:
            clearable && !disabled ? (
              <>
                <Button
                  variant="icon"
                  aria-label="clear"
                  color="secondary"
                  onClick={() => {
                    if (onChange) {
                      onChange({
                        target: {
                          value:
                            select && SelectProps?.multiple
                              ? []
                              : typeof value === 'number'
                              ? 0
                              : '',
                        },
                      } as Parameters<typeof onChange>[0]);
                    }
                    if (!select && inputRef.current) {
                      inputRef.current.focus();
                    }
                  }}
                  className={clsx(baseClasses.clearButton, {
                    [baseClasses.showClearButton]:
                      value && (!Array.isArray(value) || value.length > 0),
                    [baseClasses.clearButtonForSelect]: select,
                  })}
                >
                  <ClearIcon />
                </Button>
                {endAdornment}
              </>
            ) : (
              endAdornment
            ),
          classes: {
            root: clsx(
              baseClasses.outlinedInput,
              margin === 'super-dense' && baseClasses.outlinedInputSuperDense
            ),
            input: baseClasses.input,
            inputMarginDense:
              margin === 'super-dense'
                ? baseClasses.inputMarginSuperDense
                : baseClasses.inputMarginDense,
            adornedStart: clsx(
              baseClasses.adorned,
              margin === 'super-dense' && baseClasses.adornedSuperDense,
              margin === 'super-dense' && baseClasses.adornedStartSuperDense
            ),
            adornedEnd: clsx(
              baseClasses.adorned,
              margin === 'super-dense' && baseClasses.adornedSuperDense,
              margin === 'super-dense' && baseClasses.adornedEndSuperDense
            ),
            inputAdornedStart: baseClasses.inputAdornedStart,
            inputAdornedEnd: baseClasses.inputAdornedEnd,
          },
          inputProps: {
            ...inputProps,
          },
          ...InputProps,
        }}
        FormHelperTextProps={{
          className: clsx(
            baseClasses.helperTextContainer,
            inputProps?.maxLength &&
              (helperText as string)?.length > 0 &&
              baseClasses.charCountWithHelpText
          ),
          ...FormHelperTextProps,
        }}
        InputLabelProps={{
          classes: { root: baseClasses.label },
          ...InputLabelProps,
        }}
        SelectProps={{
          startAdornment,
          onOpen: () => {
            setAnchorEl(textFieldRef.current);
          },
          ...SelectProps,
          MenuProps: {
            anchorOrigin: {
              vertical:
                anchorEl &&
                preventMenuOverlap &&
                anchorEl.getBoundingClientRect().bottom >=
                  window.innerHeight * 0.78
                  ? 'top'
                  : 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical:
                anchorEl &&
                preventMenuOverlap &&
                anchorEl.getBoundingClientRect().bottom >=
                  window.innerHeight * 0.78
                  ? 'bottom'
                  : 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
            anchorEl,
            ...SelectProps?.MenuProps,
            PaperProps: {
              ...(anchorEl
                ? {
                    style: {
                      ...(startAdornment
                        ? {
                            minWidth: `${anchorEl.clientWidth}px`,
                          }
                        : {}),
                      ...(preventMenuOverlap
                        ? {
                            maxHeight:
                              anchorEl.getBoundingClientRect().bottom <=
                              window.innerHeight * 0.78
                                ? `calc(97vh - ${
                                    anchorEl.getBoundingClientRect().bottom
                                  }px)`
                                : `calc(${
                                    anchorEl.getBoundingClientRect().top
                                  }px - 3vh)`,
                            transform:
                              anchorEl.getBoundingClientRect().bottom >=
                              window.innerHeight * 0.78
                                ? 'translateY(-1vh)'
                                : undefined,
                          }
                        : {}),
                    },
                  }
                : undefined),
              ...SelectProps?.MenuProps?.PaperProps,
            },
          },
        }}
        className={clsx(
          margin === 'super-dense' && baseClasses.superDense,
          classes && classes.root,
          className,
          'evergreen-input'
        )}
        helperText={
          inputProps?.maxLength ? getHelperTextWithCounter() : helperText
        }
        {...props}
      />
    </div>
  );
};

export * from './types';
