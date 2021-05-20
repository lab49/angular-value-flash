// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ValueFlashComponent } from 'projects/value-flash/src/public-api';

export default {
  title: 'Components/Value Flash',
  component: ValueFlashComponent,
  argTypes: {
  },
} as Meta;

const Template: Story<ValueFlashComponent> = (args: ValueFlashComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

export const Large = Template.bind({});
Large.args = {
};

export const Small = Template.bind({});
Small.args = {
};
