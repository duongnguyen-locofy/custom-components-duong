import { MenuItem } from '@material-ui/core';
import { render, screen } from '@rupertong-ui/utils-ui-testing';
import userEvent from '@testing-library/user-event';

import { TextField } from '..';
import { TextFieldProps } from '../types';

describe('<TextField />', () => {
  let label: HTMLElement | null;

  const renderComponent = (props?: TextFieldProps) => {
    render(
      <TextField
        label="Evergreen Input"
        data-testid="field1"
        id="field1-id"
        {...props}
      />
    );

    label = screen.queryByText((content, element) => {
      return (
        !!element &&
        element.tagName.toLowerCase() === 'label' &&
        content === 'Evergreen Input'
      );
    });
    expect(screen.getByTestId('field1')).toBeInTheDocument();
  };

  it('render text field by default', () => {
    renderComponent();
    expect(screen.getByLabelText(/Evergreen Input/i)).toBeInTheDocument();
    expect(label).not.toBeNull();
    expect(label).toBeInTheDocument();
  });

  it('renders select input with children', async () => {
    renderComponent({
      select: true,
      value: 'value1',
      SelectProps: { native: true },
      children: [
        <option key="value1" value="value1">
          Value 1
        </option>,
        <option key="value2" value="value2">
          Value 2
        </option>,
      ],
    });
    expect(screen.getByLabelText(/Evergreen Input/i)).toBeInTheDocument();
    expect(label).not.toBeNull();
    expect(label).toBeInTheDocument();
    const menuItems = await screen.findAllByText(/Value \d/);
    expect(menuItems).toHaveLength(2);
    menuItems.forEach((menuItem) => expect(menuItem).toBeInTheDocument());
  });

  it('renders no label when super-dense with none label', () => {
    renderComponent({
      margin: 'super-dense',
      labelPosition: 'none',
    });

    expect(label).not.toBeInTheDocument();
  });

  it('renders label when super-dense with top or left label', () => {
    renderComponent({
      margin: 'super-dense',
      labelPosition: 'top',
    });

    expect(screen.getByLabelText(/Evergreen Input/i)).toBeInTheDocument();
    expect(label).not.toBeNull();
    expect(label).toBeInTheDocument();
  });

  it('renders as a multiline textfield with counter text', () => {
    renderComponent({
      value: 'hello',
      rows: 3,
      rowsMax: 5,
      multiline: true,
      inputProps: {
        maxLength: 200,
      },
    });

    expect(screen.getByText('5/200')).toBeInTheDocument();
  });

  it('renders with placeholder text', () => {
    const helperText = 'Test placeholder text';
    renderComponent({
      value: '',
      rows: 3,
      rowsMax: 5,
      helperText,
      inputProps: {
        maxLength: 200,
      },
    });

    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it.each`
    textFieldProps        | expectedValue
    ${{ value: 'hello' }} | ${''}
    ${{
  value: 1,
  select: true,
  children: [<MenuItem key={1} value={1} />],
}} | ${0}
    ${{
  value: 'id1',
  select: true,
  children: [<MenuItem key="id1" value="id1" />],
}} | ${''}
    ${{
  value: [1, 2],
  select: true,
  SelectProps: { multiple: true },
  children: [<MenuItem key={1} value={1} />, <MenuItem key={2} value={2} />],
}} | ${[]}
    ${{
  value: ['id1', 'id2'],
  select: true,
  SelectProps: { multiple: true },
  children: [<MenuItem key="id1" value="id1" />, <MenuItem key="id2" value="id2" />],
}} | ${[]}
  `(
    'given clearable=true and non-empty value when click clear button then clear value',
    ({ textFieldProps, expectedValue }) => {
      const onChange = jest.fn();
      renderComponent({
        ...textFieldProps,
        clearable: true,
        onChange,
      });
      const clearButton = screen.getByLabelText('clear');
      userEvent.click(clearButton);
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ target: { value: expectedValue } })
      );
    }
  );

  it.each`
    textFieldProps
    ${{ value: undefined }}
    ${{ value: null }}
    ${{ value: '' }}
    ${{ value: 0, select: true }}
    ${{ value: '', select: true }}
    ${{ value: [], select: true, SelectProps: { multiple: true } }}
  `(
    'given clearable=true and empty value then should not show clear button',
    ({ textFieldProps }) => {
      renderComponent({
        ...textFieldProps,
        clearable: true,
      });
      const clearButton = screen.getByLabelText('clear');
      expect(clearButton).not.toBeVisible();
    }
  );

  it('given clearable=true and non-empty value and disabled=true then should not show clear button', () => {
    renderComponent({
      value: 'hello',
      clearable: true,
      disabled: true,
    });
    expect(screen.queryByLabelText('clear')).not.toBeInTheDocument();
  });
});
