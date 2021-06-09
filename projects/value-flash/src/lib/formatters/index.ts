export type Formatter = (value: number) => string;
export type FormatterType = 'currency' | 'percentage' | 'number' | 'default';
export type BasicFormatters = { [k in FormatterType]: Formatter };

const numberFormatter = (value: number) => Intl.NumberFormat('en').format(value);

const currencyFormatter = (value: number) =>
  Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(value);

const percentageFormatter = (value: number) =>
  Intl.NumberFormat('en', {
    style: 'percent',
    // See: https://github.com/microsoft/TypeScript/issues/36533
    // @ts-ignore
    signDisplay: 'exceptZero',
  }).format(value);

const defaultFormatter = (value: number) => `${value}`;

export const formatters: BasicFormatters = {
  default: defaultFormatter,
  // eslint-disable-next-line id-blacklist
  number: numberFormatter,
  currency: currencyFormatter,
  percentage: percentageFormatter,
};
