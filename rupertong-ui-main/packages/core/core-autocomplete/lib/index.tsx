import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';

import { Chip, ChipType } from '@rupertong-ui/core-chip';
import { TextField } from '@rupertong-ui/core-text-field';
import {
  UnderlinedTextField,
  UnderlinedTextFieldProps,
} from '@rupertong-ui/core-underlined-text-field';
import { Checkbox } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {
  Autocomplete as MuiAutoComplete,
  AutocompleteProps as MuiAutoCompleteProps,
} from '@material-ui/lab';
import { clsx } from 'clsx';

import InputOption, { OptionProp } from './components/InputOption';
import { CustomPopper } from './constants';
import useStyles from './styles';
import { AutocompleteProps } from './types';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

/**
 * MUI Autocomplete integrated with Evergreen TextField or UnderlineTextField depending
 * on textFieldVariant prop value
 */
export const Autocomplete = <T,>({
  textFieldProps = {},
  textFieldVariant = 'outlined',
  multiple,
  ...rest
}: AutocompleteProps<T>): ReactElement => {
  const classes = useStyles();
  const [autoHighlight, setAutoHighlight] = useState(true);
  const [placeholderState, setPlaceholderState] = useState<string | undefined>(
    textFieldProps?.placeholder
  );

  const setPlaceholderValueForMultipleSelection = useCallback(
    (value: AutocompleteProps<T>['value']) => {
      if (multiple) {
        setPlaceholderState(
          Array.isArray(value) && value.length > 0
            ? ''
            : textFieldProps?.placeholder
        );
      }
    },
    [multiple, textFieldProps?.placeholder]
  );

  useEffect(() => {
    setPlaceholderValueForMultipleSelection(rest.value);
  }, [rest.value, setPlaceholderValueForMultipleSelection]);

  const isOptionObject = useCallback(
    (o: T | OptionProp): o is OptionProp =>
      (o as OptionProp).label !== undefined,
    []
  );

  const autoCompleteClasses = useMemo(
    () => ({
      root: clsx(
        textFieldVariant === 'underlined' &&
          !!(textFieldProps as UnderlinedTextFieldProps)?.autoGrow &&
          classes.autoCompleteInlineBlock,
        rest.classes?.root
      ),
      option: clsx(classes.autoCompleteOption, rest.classes?.option),
      paper: clsx(classes.autoCompletePaper, rest.classes?.paper),
      endAdornment: clsx(
        classes.autoCompleteEndAdornment,
        rest.classes?.endAdornment
      ),
      clearIndicator: clsx(
        textFieldVariant === 'underlined' && classes.hiddenClearIndicator,
        rest.classes?.clearIndicator
      ),
      inputRoot: clsx(
        textFieldVariant === 'outlined' &&
          (multiple
            ? classes.outlinedTextFieldMultipleSelectionInputRoot
            : classes.outlinedTextFieldInputRoot),
        rest.classes?.inputRoot
      ),
      input: clsx(
        multiple &&
          (textFieldVariant === 'outlined'
            ? classes.outlinedMultipleSelectionInput
            : classes.underlinedMultipleSelectionInput),
        rest.classes?.input
      ),
      tag: clsx(classes.tag, rest.classes?.tag),
      ...rest.classes,
    }),
    [textFieldVariant, textFieldProps, classes, rest.classes, multiple]
  );

  const getRenderOptionMethod = (): MuiAutoCompleteProps<
    T,
    typeof multiple,
    typeof rest.disableClearable,
    typeof rest.freeSolo
  >['renderOption'] => {
    if (multiple) {
      // eslint-disable-next-line react/display-name
      return (option, { selected }) => (
        <>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            checked={selected}
            size="small"
            className={classes.checkbox}
          />
          {rest?.getOptionLabel ? rest.getOptionLabel(option) : <></>}
        </>
      );
    } else if (
      Array.isArray(rest.options) &&
      rest.options.length > 0 &&
      isOptionObject(rest.options[0])
    ) {
      // eslint-disable-next-line react/display-name
      return (option: T) => (
        <InputOption option={option as unknown as OptionProp} />
      );
    }

    return undefined;
  };

  return (
    <MuiAutoComplete
      autoHighlight={autoHighlight}
      disableCloseOnSelect={multiple}
      onInputChange={(_, value, reason) => {
        setAutoHighlight(value !== '' || reason === 'clear');
      }}
      renderOption={getRenderOptionMethod()}
      multiple={multiple}
      renderTags={
        multiple
          ? (tagValue, getTagProps) => {
              return tagValue.map((option, index) => {
                const label = rest?.getOptionLabel
                  ? rest.getOptionLabel(option)
                  : '';
                return (
                  <Chip
                    {...getTagProps({ index })}
                    key={String(label)}
                    clickable={false}
                    variant="outlined"
                    size="small"
                    type={ChipType.Action}
                    label={label}
                  />
                );
              });
            }
          : undefined
      }
      forcePopupIcon={false}
      {...rest}
      classes={autoCompleteClasses}
      openOnFocus
      size="medium"
      onChange={(event, value, reason, details) => {
        if (rest.onChange) {
          rest.onChange(event, value, reason, details);
        }
        setPlaceholderValueForMultipleSelection(value);
      }}
      renderInput={(params) => {
        const startAdornment =
          textFieldProps.InputProps?.startAdornment ||
          params.InputProps?.startAdornment ? (
            <>
              {textFieldProps.InputProps?.startAdornment}
              {params.InputProps?.startAdornment}
            </>
          ) : undefined;
        const endAdornment =
          textFieldProps.InputProps?.endAdornment ||
          params.InputProps?.endAdornment ? (
            <>
              {textFieldProps.InputProps?.endAdornment}
              {params.InputProps?.endAdornment}
            </>
          ) : undefined;
        const commonProps = {
          ...params,
          InputProps: {
            ...params.InputProps,
            ...textFieldProps.InputProps,
            startAdornment,
            endAdornment,
          },
          inputProps: {
            ...params.inputProps,
            ...textFieldProps.inputProps,
          },
          value: rest.value,
          placeholder: placeholderState,
          classes: {},
        };

        return textFieldVariant === 'outlined' ? (
          <TextField
            {...textFieldProps}
            {...commonProps}
            className={
              multiple ? classes.outlinedMultipleSelectionInputLabel : ''
            }
          />
        ) : (
          <UnderlinedTextField
            {...(textFieldProps as UnderlinedTextFieldProps)}
            disableEmptyValueBackground={placeholderState === ''}
            {...commonProps}
          />
        );
      }}
      PopperComponent={CustomPopper}
    />
  );
};

export type { AutocompleteProps };
