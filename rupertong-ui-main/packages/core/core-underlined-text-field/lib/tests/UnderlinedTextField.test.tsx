import { MenuItem } from '@material-ui/core';
import {
  render,
  screen,
  waitFor,
  within,
} from '@rupertong-ui/utils-ui-testing';
import userEvent from '@testing-library/user-event';

import { UnderlinedTextField, UnderlinedTextFieldProps } from '..';

describe('<UnderlinedTextField />', () => {
  const onChangeMock = jest.fn();
  const inputRefMock = jest.fn();
  const renderComponent = (props?: UnderlinedTextFieldProps) => {
    return render(
      <UnderlinedTextField
        {...props}
        onChange={onChangeMock}
        inputRef={inputRefMock}
        data-testid="field1"
      />
    );
  };

  afterEach(() => jest.clearAllMocks());
  afterAll(() => jest.restoreAllMocks());

  it('renders the textbox and its value prop', () => {
    renderComponent({ value: 'test' });
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('test');
    expect(screen.getByTestId('field1')).toBeInTheDocument();
    expect(inputRefMock).toHaveBeenCalledWith(expect.any(HTMLElement));
  });

  it('invokes the onChange prop on change', () => {
    renderComponent();
    const NEW_VALUE = 'new-value';

    userEvent.type(screen.getByRole('textbox'), NEW_VALUE);

    expect(onChangeMock).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: NEW_VALUE,
        }),
      })
    );
  });

  it('renders placeholder correctly', () => {
    renderComponent({ placeholder: 'test placeholder text' });
    expect(
      screen.getByPlaceholderText('test placeholder text')
    ).toBeInTheDocument();
  });

  it('renders helperText', () => {
    renderComponent({ helperText: 'test helper text' });
    expect(screen.getByText('test helper text')).toBeInTheDocument();
  });

  it('limits character count when inputProps.maxLength is specified', () => {
    renderComponent({ inputProps: { maxLength: 10 } });
    const input = screen.getByRole('textbox');
    const NEW_VALUE = 'a very long string';

    expect(input).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), NEW_VALUE);

    expect(input).toHaveValue(NEW_VALUE.substring(0, 10));
    expect(screen.getByText('10 / 10')).toBeInTheDocument();
    expect(onChangeMock).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: NEW_VALUE.substring(0, 10),
        }),
      })
    );
  });

  it('marks an input as aria-invalid when error is true and helperText overrides maxLength message', () => {
    renderComponent({
      error: true,
      inputProps: { maxLength: 10 },
      helperText: 'error found',
    });
    expect(screen.getByText('error found')).toBeInTheDocument();
    expect(screen.queryByText('0 / 10')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders start and endAdornments', () => {
    renderComponent({
      InputProps: {
        startAdornment: '$',
        endAdornment: 'kg',
      },
    });

    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('kg')).toBeInTheDocument();
  });

  it('renders select options', async () => {
    const options = [
      { label: 'Value 1', value: 'value 1' },
      { label: 'Value 2', value: 'value 2' },
    ];
    renderComponent({
      select: true,
      value: options[0].value,
      children: options.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      )),
    });

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(options[0].label);

    userEvent.click(button);
    const listbox = await screen.findByRole('listbox');

    const listItems = within(listbox).getAllByRole('option');
    listItems.forEach((listItem, index) => {
      expect(listItem).toHaveTextContent(options[index].label);
    });

    userEvent.click(listItems[1]);

    expect(onChangeMock).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: options[1].value,
        }),
      })
    );
  });

  it('displays inline when autoGrow is true', async () => {
    const { container } = renderComponent({ autoGrow: true });
    await waitFor(() =>
      expect(container.firstChild).toHaveStyle({
        display: 'inline-block',
      })
    );
  });

  it('sets minWidth correctly', async () => {
    const { container } = renderComponent({ style: { minWidth: 20 } });
    await waitFor(() =>
      expect(container.firstChild).toHaveStyle({
        minWidth: '20px',
      })
    );
  });

  it('renders a transparent background when value is empty when disableEmptyValueBackground is true', async () => {
    renderComponent({
      disableEmptyValueBackground: true,
    });
    await waitFor(() =>
      expect(screen.getByTestId('field1')).toHaveStyle({
        background: 'transparent',
      })
    );
  });
});
