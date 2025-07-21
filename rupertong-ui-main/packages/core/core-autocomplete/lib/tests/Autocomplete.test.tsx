/* eslint-disable jest/no-conditional-expect */
import { CircularProgress, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { UnderlinedTextFieldProps } from '@rupertong-ui/core-underlined-text-field';
import { render, screen } from '@rupertong-ui/utils-ui-testing';
import userEvent from '@testing-library/user-event';

import { Autocomplete } from '..';
import { AutocompleteProps } from '../types';

import { countries, CountryType } from './test.data';

describe('<Autocomplete />', () => {
  const onChangeMock = jest.fn();
  const renderComponent = (props?: Partial<AutocompleteProps<CountryType>>) =>
    render(
      <Autocomplete
        options={countries}
        getOptionLabel={(option) => option.label}
        onChange={onChangeMock}
        {...props}
      />
    );

  const selectAutocompleteValueByIndex = async (
    input: HTMLElement,
    index = 0
  ) => {
    if (!screen.queryByRole('listbox')) {
      userEvent.click(input);
      await screen.findByRole('listbox');
    }
    const options = screen.getAllByRole('option');

    userEvent.click(options[index]);
  };

  it('renders all options in list on input click and triggers onChange method on selection', async () => {
    renderComponent();
    const input = screen.getByRole('textbox');
    await selectAutocompleteValueByIndex(input);

    userEvent.click(input);
    await screen.findByRole('listbox');
    const options = screen.getAllByRole('option');

    options.forEach((item, index) => {
      expect(item).toHaveTextContent(countries[index].label);
      expect(item).toHaveAttribute(
        'aria-selected',
        index === 0 ? 'true' : 'false'
      );
    });

    expect(input).toHaveValue(countries[0].label);
    expect(onChangeMock).toHaveBeenCalledWith(
      expect.any(Object),
      countries[0],
      expect.any(String),
      expect.any(Object)
    );
  });

  it('renders option list with label and description when options props is defined with label and description keys', async () => {
    renderComponent({
      options: countries.map(({ label, phone, ...rest }) => ({
        label,
        description: phone,
        phone,
        ...rest,
      })),
    });
    const input = screen.getByRole('textbox');
    userEvent.click(input);

    await screen.findByRole('listbox');
    const options = screen.getAllByRole('option');

    options.forEach((item, index) => {
      expect(item).toHaveTextContent(
        `${countries[index].label}${countries[index].phone}`
      );
    });
  });

  it.each`
    textFieldVariant | expectedClass
    ${'outlined'}    | ${'MuiOutlinedInput-input'}
    ${'underlined'}  | ${'MuiFilledInput-input'}
  `(
    'renders $textFieldVariant text field variant correctly',
    async ({ textFieldVariant, expectedClass }) => {
      renderComponent({ textFieldVariant, value: countries[0] });
      expect(screen.getByRole('textbox')).toHaveClass(expectedClass);
    }
  );

  it('applies custom classes to correct elements', async () => {
    const classes = {
      clearIndicator: 'clearIndicatorClass',
      endAdornment: 'endAdornmentClass',
      inputRoot: 'inputRootClass',
      option: 'optionClass',
      paper: 'paperClass',
      root: 'rootClass',
    };
    renderComponent({ classes });
    const root = screen.getByRole('combobox');
    const input = screen.getByRole('textbox');

    userEvent.hover(root);
    const clearButton = screen.getByLabelText(/clear/i);

    expect(root).toHaveClass(classes.root);
    expect(clearButton).toHaveClass(classes.clearIndicator);
    expect(clearButton.parentNode).toHaveClass(classes.endAdornment);
    expect(input.parentNode).toHaveClass(classes.inputRoot);

    userEvent.click(input);
    const presentation = await screen.findByRole('presentation');

    expect(presentation.children[0]).toHaveClass(classes.paper);
    screen
      .getAllByRole('option')
      .forEach((item) => expect(item).toHaveClass(classes.option));
  });

  it('sends correct payload to onChange and updates UI when multiple is true and multiple selections are made', async () => {
    const placeholder = 'select an item';
    renderComponent({
      multiple: true,
      textFieldVariant: 'underlined',
      textFieldProps: {
        'data-testid': 'field-1',
        placeholder,
      } as UnderlinedTextFieldProps,
    });

    const input = screen.getByRole('textbox');
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    await selectAutocompleteValueByIndex(input);
    await selectAutocompleteValueByIndex(input, 1);
    userEvent.click(document.body);

    // Ensure an extra focus/blur does not clear values or display (autoSelect is false when multiple)
    await userEvent.click(input);
    await userEvent.click(document.body);

    const chips = screen.getAllByRole('button');
    chips.forEach((chip, index) => {
      expect(chip).toHaveTextContent(countries[index].label);
    });

    expect(screen.getByTestId('field-1').firstChild).toHaveStyle({
      background: 'transparent',
    });

    expect(screen.queryByPlaceholderText(placeholder)).not.toBeInTheDocument();

    expect(onChangeMock).toHaveBeenCalledWith(
      expect.any(Object),
      [countries[0], countries[1]],
      expect.any(String),
      expect.any(Object)
    );
  });

  it('when forcePopupIcon is true then display expander', () => {
    renderComponent({
      forcePopupIcon: true,
    });

    expect(screen.getByLabelText(/open/i)).toBeVisible();
  });

  it('when custom start and end adornments then compose them with default adornments', () => {
    renderComponent({
      forcePopupIcon: true,
      textFieldProps: {
        margin: 'dense',
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">
              <Search data-testid="search-icon" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <CircularProgress size={20} />
            </InputAdornment>
          ),
        },
      },
    });

    expect(screen.getByTestId('search-icon')).toBeVisible();
    expect(screen.getByRole('progressbar')).toBeVisible();
    expect(screen.getByLabelText(/clear/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open/i)).toBeVisible();
  });
});
