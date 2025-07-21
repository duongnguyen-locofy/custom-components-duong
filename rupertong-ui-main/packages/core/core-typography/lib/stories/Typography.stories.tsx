import { Meta, Story } from '@storybook/react';

import { Typography } from '..';
import readMe from '../../README.md';

export default {
  title: 'core/Typography',
  component: Typography,
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: [
        undefined,
        'inherit',
        'initial',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error',
        'textDark',
        'textBlackHighEmphasis',
        'textBlackMedEmphasis',
        'textBlackDisabled',
        'textWhiteHighEmphasis',
        'textWhiteMedEmphasis',
        'textWhiteDisabled',
      ],
    },
    component: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span'],
    },
    variant: {
      mapping: {
        undefined: undefined,
      },
    },
    fullWidth: {
      control: 'boolean',
    },
  },
  parameters: {
    readme: {
      sidebar: readMe,
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Typography {...args}>{args.children}</Typography>
);
export const Default = Template.bind({});
Default.args = {
  children: 'Hello world',
};
