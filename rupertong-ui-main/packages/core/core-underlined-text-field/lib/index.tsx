import {
  ChangeEvent,
  MutableRefObject,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { FormHelperText, TextField } from '@material-ui/core';
import { clsx } from 'clsx';

import { SELECT_MARGIN, X_PADDING } from './constants';
import useStyles from './styles';
import { UnderlinedTextFieldProps } from './types';
import { getTotalOuterWidthOfChildElements } from './utils/utils';

/**
 * TextField component with fill styling and an ability to auto grow based on its content. Primarily
 * used for human readable input forms.
 */
export const UnderlinedTextField = ({
  typographyVariant = 'body2',
  autoGrow = false,
  disableEmptyValueBackground = false,
  helperText,
  inputProps = {},
  placeholder = '--',
  error,
  select,
  onChange,
  maxWidth,
  ...props
}: UnderlinedTextFieldProps): ReactElement => {
  const classes = useStyles({
    disableEmptyValueBackground,
  });
  const [maxChrCount, setMaxChrCount] = useState(() => {
    const setValue = props.value || inputProps.value || props.defaultValue;
    return setValue ? String(setValue).length : 0;
  });
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hiddenRef = useRef<HTMLDivElement | null>(null);
  const startAdornmentRef = useRef<HTMLDivElement | null>(null);
  const endAdornmentRef = useRef<HTMLDivElement | null>(null);
  const helperTextRef = useRef<HTMLParagraphElement | null>(null);
  const { maxLength } = inputProps;

  const handleInput = useCallback(() => {
    const input =
      rootRef.current?.querySelector('input') ||
      rootRef.current?.querySelector('textarea');
    const textValue =
      select && input?.value
        ? input.previousElementSibling?.textContent || ''
        : input?.value;

    if (hiddenRef.current && rootRef.current && input) {
      hiddenRef.current.textContent = textValue || placeholder || '';
      rootRef.current.dataset.characterCount = String(textValue?.length || 0);
      if (autoGrow) {
        if (startAdornmentRef.current)
          startAdornmentRef.current.style.display = 'block';
        hiddenRef.current.style.paddingLeft = `${
          X_PADDING +
          getTotalOuterWidthOfChildElements(startAdornmentRef?.current)
        }px`;
        hiddenRef.current.style.paddingRight = `${
          X_PADDING +
          (select
            ? SELECT_MARGIN
            : getTotalOuterWidthOfChildElements(endAdornmentRef?.current))
        }px`;

        const widthToUse =
          maxWidth && hiddenRef.current?.offsetWidth > maxWidth
            ? maxWidth
            : hiddenRef.current?.offsetWidth;

        rootRef.current.style.width = `${widthToUse}px`;
        if (startAdornmentRef.current)
          startAdornmentRef.current.style.display = '';
      }
    }
  }, [autoGrow, maxWidth, placeholder, select]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (maxLength) setMaxChrCount(e.target.value.length);
      if (select) requestAnimationFrame(() => handleInput());
      else handleInput();
      if (onChange) {
        e.persist();
        onChange(e);
      }
    },
    [maxLength, onChange, handleInput, select]
  );

  useEffect(() => {
    const internal = requestAnimationFrame(() => {
      let minWidth = '0px';

      if (props.style?.minWidth) {
        minWidth =
          typeof props.style?.minWidth === 'number'
            ? `${props.style?.minWidth}px`
            : props.style?.minWidth;
      }

      if (
        (helperText || maxLength) &&
        helperTextRef?.current &&
        rootRef?.current &&
        helperTextRef?.current?.offsetWidth > parseInt(minWidth || '0', 10)
      ) {
        minWidth = `${helperTextRef.current.offsetWidth}px`;
      }

      if (rootRef.current) rootRef.current.style.minWidth = minWidth;
    });

    return () => cancelAnimationFrame(internal);
  }, [helperText, maxLength, props.style]);

  useEffect(() => {
    handleInput();
  });

  return (
    <div
      className={clsx(
        classes.root,
        autoGrow && classes.autoGrow,
        classes[typographyVariant]
      )}
      ref={rootRef}
    >
      <TextField
        {...props}
        label={undefined}
        select={select}
        variant="filled"
        onChange={handleChange}
        error={error}
        FormHelperTextProps={{
          className: clsx(
            classes.helperText,
            maxLength && !error && classes.helperTextRightAlign
          ),
        }}
        helperText={undefined}
        inputProps={inputProps}
        value={props.value || inputProps.value || props.defaultValue}
        InputProps={{
          ...props.InputProps,
          classes: {
            ...props.InputProps?.classes,
            input: clsx(classes.input, classes[typographyVariant]),
            root: clsx(classes.inputRoot, props.classes?.root),
            disabled: classes.inputRootDisabled,
            adornedStart: props.InputProps?.startAdornment
              ? classes.inputWithStartAdornment
              : undefined,
          },
          startAdornment: (
            <div
              className={clsx(
                classes.adornmentWrapper,
                classes.startAdornmentWrapper
              )}
              ref={startAdornmentRef}
            >
              {props.InputProps?.startAdornment}
            </div>
          ),
          endAdornment: (
            <div className={classes.adornmentWrapper} ref={endAdornmentRef}>
              {props.InputProps?.endAdornment}
            </div>
          ),
        }}
        placeholder={placeholder}
        inputRef={(el) => {
          if (el !== null) {
            if (props.inputRef) {
              if (typeof props.inputRef === 'function') {
                return props.inputRef(el);
              } else {
                (
                  props.inputRef as MutableRefObject<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                ).current = el;
              }
            }
          }
        }}
        fullWidth
      />

      {(helperText || maxLength) && (
        <FormHelperText
          error={error}
          className={clsx(
            classes.helperText,
            maxLength && !error && classes.helperTextRightAlign
          )}
        >
          <span ref={helperTextRef}>
            {maxLength && !error ? `${maxChrCount} / ${maxLength}` : helperText}
          </span>
        </FormHelperText>
      )}
      <div
        className={clsx(
          classes[typographyVariant],
          classes.hidden,
          props.multiline && classes.preWrap
        )}
        ref={hiddenRef}
      />
    </div>
  );
};

export type { UnderlinedTextFieldProps };
