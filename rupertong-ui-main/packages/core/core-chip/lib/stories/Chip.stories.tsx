import Avatar from '@material-ui/core/Avatar';
import { Meta, Story } from '@storybook/react';

import { Chip, ChipProps, ChipType } from '..';
import readMe from '../../README.md';

export default {
  title: 'core/Chip',
  component: Chip,
  parameters: {
    readme: {
      sidebar: readMe,
    },
  },
  controls: {
    color: {
      disable: true,
    },
    type: {
      control: 'select',
      options: [ChipType.Action, ChipType.Filter],
    },
  },
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;
export const Default = Template.bind({});
Default.args = {
  avatar: <Avatar>Q</Avatar>,
  color: 'default',
  disabled: false,
  label: 'PointClickCare',
  selected: false,
  size: 'medium',
  type: ChipType.Filter,
  value: 'PointClickCare',
  variant: 'default',
};
Default.parameters = {
  actions: {
    disabled: true,
  },
};
