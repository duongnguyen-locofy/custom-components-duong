import Avatar from '@material-ui/core/Avatar';
import { render, screen } from '@rupertong-ui/utils-ui-testing';
import userEvent from '@testing-library/user-event';

import { Chip, ChipProps, ChipType } from '..';

describe('<Chip />', () => {
  const renderFilterChip = (props: ChipProps) => {
    return render(<Chip {...props} />);
  };

  it('FilterChip renders correctly with label', () => {
    renderFilterChip({
      label: 'TestChip',
      variant: 'outlined',
      size: 'small',
      selected: true,
    });
    const chip = screen.getByText('TestChip');
    expect(chip).toBeInTheDocument();
    expect(chip.className).toMatch('makeStyles-label');
  });

  it('Clicking a chip sets the state to selected and triggers the callback fn', () => {
    const onSelect = jest.fn();
    renderFilterChip({
      label: 'TestChip',
      variant: 'default',
      onSelect,
      type: ChipType.Filter,
    });
    const chip = screen.getByRole('button') as HTMLDivElement;
    userEvent.click(chip);
    expect(onSelect).toHaveBeenCalled();
    expect(chip.className).toMatch('makeStyles-selectedBg');
  });

  it('Clicking on a selected chip sets the state to unselected', () => {
    const onSelect = jest.fn();
    renderFilterChip({
      label: 'TestChip',
      variant: 'default',
      onSelect,
      type: ChipType.Filter,
    });
    const chip = screen.getByRole('button') as HTMLDivElement;
    userEvent.click(chip);
    userEvent.click(chip);
    expect(onSelect).toHaveBeenCalledTimes(2);
    const label = screen.getByText('TestChip');
    expect(label.className).toMatch('makeStyles-label');
  });

  it('For a chip with avatar, the selected state has a checkmark', () => {
    const { container } = renderFilterChip({
      label: 'TestChip',
      variant: 'default',
      avatar: <Avatar>Q</Avatar>,
      type: ChipType.Filter,
    });

    const chip = screen.getByRole('button') as HTMLDivElement;
    userEvent.click(chip);
    const icon = container.querySelector('svg.MuiSvgIcon-root');
    expect(icon?.classList[1]).toMatch('makeStyles-checkIcon');
  });

  it('Action Chip renders corectly', () => {
    const onClick = jest.fn();
    renderFilterChip({
      label: 'TestChip',
      variant: 'default',
      onClick,
      type: ChipType.Action,
    });
    const chip = screen.getByRole('button') as HTMLDivElement;
    expect(chip).toBeInTheDocument();
    userEvent.click(chip);
    expect(onClick).toHaveBeenCalled();
  });

  it('should not maintain the selected state', () => {
    renderFilterChip({
      label: 'TestChip',
      variant: 'default',
      size: 'small',
      maintainInternalSelectedState: false,
      selected: true,
    });

    const chip = screen.getByRole('button') as HTMLDivElement;
    expect(chip).toBeInTheDocument();
    userEvent.click(chip);
  });
});
