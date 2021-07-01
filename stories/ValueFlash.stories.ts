/* eslint-disable @typescript-eslint/naming-convention */
/* Disabled because storybook variable names are not follow convention */

// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { ValueFlashComponent } from 'projects/value-flash/src/public-api';

export default {
  title: 'Components/Value Flash',
  component: ValueFlashComponent,
  argTypes: {
    value: { control: { type: 'number' } },
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
  const {
    value,
    upColor,
    downColor,
    stylePrefix,
    timeout,
    transitionLength,
    transition,
    formatter,
    formatterFn,
  } = args;
  return {
    props: {
      value,
      upColor,
      downColor,
      stylePrefix,
      timeout,
      transitionLength,
      transition,
      formatter,
      formatterFn,
    },
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
  formatter: 'percentage',
};

export const CurrencyFormatter = Template.bind({});
CurrencyFormatter.args = {
  value: 42,
  formatter: 'currency',
};

export const NumberFormatter = Template.bind({});
NumberFormatter.args = {
  value: 42,
  formatter: 'currency',
};

export const CustomTransition = Template.bind({});
CustomTransition.args = {
  value: 42,
  transition: 'background-color 2s linear',
};

export const MakeItNice = Template.bind({});
MakeItNice.decorators = [
  componentWrapperDecorator((story) => {
    return `<div class="make-it-nice">
      ${story}
    </div>`;
  }),
];

export const PositiveNegativeIndication = Template.bind({});
PositiveNegativeIndication.decorators = [
  componentWrapperDecorator((story) => {
    return `<div class="positive-negative-indication">
      <p>In this demo, the bottom border indicates a positive or negative number, and the number color flashes to indicate the value change direction.</p>
      ${story}
    </div>`;
  }),
];
PositiveNegativeIndication.args = {
  value: 5,
  upColor: 'transparent',
  downColor: 'transparent'
};

