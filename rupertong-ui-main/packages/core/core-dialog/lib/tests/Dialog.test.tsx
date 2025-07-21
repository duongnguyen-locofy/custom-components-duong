import { Button } from '@rupertong-ui/core-button';
import { render, screen } from '@rupertong-ui/utils-ui-testing';

import { Dialog, DialogContentText, DialogProps } from '..';

const onClick = jest.fn();

const actions = (
  <Button
    color="primary"
    label="Ok"
    onClick={onClick}
    size="small"
    variant="contained"
  />
);
describe('<Dialog />', () => {
  const defaultProps: DialogProps = {
    actions,
    content: 'Hello! Sample Content!',
    open: true,
    title: 'Test',
  };
  const renderDialog = (props: DialogProps) => {
    render(<Dialog {...props} />);
  };

  it('renders Dialog', () => {
    renderDialog(defaultProps);

    const content = screen.queryByText(/Hello! Sample Content!/);
    expect(content).toBeInTheDocument();

    const title = screen.queryByText(/Test/);
    expect(title).toBeInTheDocument();

    const dialog = screen.queryByRole('dialog');
    expect(dialog).toBeInTheDocument();

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('exports DialogContentText and renders it within Dialog content', () => {
    const props = {
      ...defaultProps,
      content: (
        <DialogContentText data-testid="dialog-content-text">
          Text inside DialogContentText component!
        </DialogContentText>
      ),
    };

    renderDialog(props);

    const contentTextElement = screen.getByTestId('dialog-content-text');
    expect(contentTextElement).toBeInTheDocument();

    const content = screen.getByText(
      'Text inside DialogContentText component!'
    );
    expect(content).toBeInTheDocument();

    const title = screen.getByText('Test');
    expect(title).toBeInTheDocument();

    const dialog = screen.queryByRole('dialog');
    expect(dialog).toBeInTheDocument();

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Should be close when open is false', () => {
    renderDialog({ ...defaultProps, open: false });
    const dialog = screen.queryByRole('dialog');
    expect(dialog).not.toBeInTheDocument();
  });

  it('should render the dividers regardless of the view', () => {
    renderDialog({
      ...defaultProps,
      contentDividers: true,
    });
    const containerDiv = screen.getByTestId('content');
    expect(containerDiv).toHaveClass('MuiDialogContent-dividers');
  });

  it('should not render the dividers for non-scrollable content', () => {
    renderDialog({
      ...defaultProps,
      contentDividers: false,
    });
    const containerDiv = screen.getByTestId('content');
    expect(containerDiv).not.toHaveClass('MuiDialogContent-dividers');
  });

  it('does not include title when prop is omitted', () => {
    renderDialog({
      ...defaultProps,
      title: undefined,
    });

    expect(screen.queryByTestId('dialog-title')).not.toBeInTheDocument();
  });

  it('does not include actions when prop is omitted', () => {
    renderDialog({
      ...defaultProps,
      actions: undefined,
    });

    expect(screen.queryByTestId('dialog-actions')).not.toBeInTheDocument();
  });
});
