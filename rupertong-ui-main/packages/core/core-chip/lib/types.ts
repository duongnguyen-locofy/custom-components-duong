import { ChipProps as MUIChipProps } from '@material-ui/core/Chip';

enum ChipType {
  Filter = 'filter',
  Action = 'action',
  // Input = 'input',
}

type ChipProps = {
  /** Type of Chip */
  type?: ChipType;
  /** Toggle for selected state */
  selected?: boolean;
  /** Value of the Chip */
  value?: string | number;
  /** Callback for when a chip is selected or unselected */
  onSelect?: (value: string | number | undefined, selected: boolean) => void;
  /** Used if you want to avoid having Chip keep track of the selected value internally */
  maintainInternalSelectedState?: boolean;
} & MUIChipProps;

export type { ChipProps };
export { ChipType };
