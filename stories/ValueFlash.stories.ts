// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ValueFlashComponent } from 'projects/value-flash/src/public-api';

export default {
  title: 'Components/Value Flash',
  component: ValueFlashComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [ValueFlashComponent],
      imports: [],
    }),
  ],
} as Meta;

// Note: This will copy lifecycle hooks as well as props. That's why we have to exclude them.
const Template: Story<ValueFlashComponent> = (args: ValueFlashComponent) => {
  console.log(args);
  const { value, upColor, downColor, stylePrefix, timeout, transitionLength, formatter, formatterFn } = args;
  return {
    props: { value, upColor, downColor, stylePrefix, timeout, transitionLength, formatter, formatterFn },
  };
};

export const Default = Template.bind({});
Default.args = {
  value: 42,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  value: 42,
  upColor: '#73eb73',
  downColor: '#ff8b8b',
};

export const PercentageFormatter = Template.bind({});
PercentageFormatter.args = {
  value: 42,
  formatter: 'percentage'
};

export const CurrencyFormatter = Template.bind({});
CurrencyFormatter.args = {
  value: 42,
  formatter: 'currency'
};

export const NumberFormatter = Template.bind({});
NumberFormatter.args = {
  value: 42,
  formatter: 'currency'
};