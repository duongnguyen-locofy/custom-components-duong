import { Button } from '@rupertong-ui/core-button';
import { Meta, Story } from '@storybook/react';

import { Dialog, DialogContentText, DialogProps } from '..';
import dialogReadMe from '../../README.md';

export default {
  title: 'core/Dialog',
  component: Dialog,
  parameters: {
    readme: {
      sidebar: dialogReadMe,
    },
  },
  argTypes: {
    title: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
    onClose: { action: 'escapeKeyDown or backdropClick' },
    contentDividers: {
      control: 'boolean',
    },
  },
} as Meta;

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam metus nisl, vehicula eu rutrum pellentesque, rhoncus ut orci. Sed mattis felis eget tortor porttitor egestas. Sed tincidunt nibh metus, id tristique justo suscipit in. Nam vulputate mi ac quam commodo, sit amet viverra arcu blandit. Mauris interdum viverra pellentesque. Proin at quam vel quam aliquam pretium. Vestibulum ac urna et est fringilla dapibus eget quis lacus. Etiam viverra est et auctor congue. Quisque pellentesque magna ex, nec facilisis ipsum facilisis in. Praesent condimentum lorem sit amet justo aliquam fermentum. Proin ut dignissim mi. Quisque lacinia a eros vitae feugiat. Aliquam erat volutpat. Ut hendrerit nibh eget arcu feugiat maximus. Aliquam euismod venenatis elit vel tempor.';

const renderContent = () => {
  return (
    <>
      <DialogContentText>Optional Dialog Content Text</DialogContentText>
      {content}
    </>
  );
};

const renderActions = () => {
  return (
    <>
      <Button
        label="Save"
        onClick={() => {
          // Do nothing
        }}
        size="large"
        variant="contained"
      />
      <Button
        label="Cancel"
        onClick={() => {
          // Do nothing
        }}
        size="large"
        variant="outlined"
      />
    </>
  );
};

const title = 'Title';

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  actions: renderActions(),
  content: renderContent(),
};

export const SimpleOptionalProps = Template.bind({});
SimpleOptionalProps.args = {
  ...Default.args,
  title: title,
};

export const ComplexOptionalProps = Template.bind({});
ComplexOptionalProps.args = {
  open: true,
  actions: renderActions(),
  content: renderContent(),
  title: title,
  contentDividers: true,
};
