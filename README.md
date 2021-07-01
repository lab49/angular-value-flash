# angular-value-flash

![github action status](https://github.com/lab49/angular-value-flash/actions/workflows/github-actions.yml/badge.svg?branch=main)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

`angular-value-flash` will display a flashed value on screen based on some value change. This pattern is extremely common in financial applications, and at Lab49, we're focused on the finance industry.

Incorporate this component into your application and pass along a number. As that number changes, this component will briefly flash a color, letting the user know the number has changed. By default, this component will flash green when the value changes up, or red when the value changes down.

Not only are these colors configurable, but the properties of the flash itself and the formatting of the value are configurable as well.

Furthermore, this component doesn't come with any styles, but does provide plenty of hooks to add your own styles. Even though flash color and transition properties are configurable as props, you can still use the generated classnames (which are also configurable) to add your own unique styles.

<p align="center">
  <img src="https://github.com/lab49/angular-value-flash/blob/e7bfdca7c3de7004f0762e262b1dc6ca2cb12c05/.github/motion.gif">
</p>

This component is perfect for:

- Trading platforms
- Analytics dashboards
- Monitoring dashboards

## Features

- Small, simple, configurable, performant
- Maintained by a team of finance industry professionals
- Includes linting, prettier & unit test validations


## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)
- [TODO](#TODO)

## Demo

Hosted Storybook demo: [https://main--60be66a91843f400393d1747.chromatic.com/](https://main--60be66a91843f400393d1747.chromatic.com/)

You can also run the demo locally.  To get started:

```sh
git clone git@github.com:lab49/angular-value-flash.git
npm install
npm run storybook
```

###### [⇡ Top](#table-of-contents)

## Installation

```sh
npm install angular-value-flash
```

###### [⇡ Top](#table-of-contents)

## Usage

```js
// Include in a module:
import { ValueFlashModule } from 'angular-value-flash';
...
@NgModule({
  imports: [
    ValueFlashModule
  ],
  ...
```

```html
<!-- Use in a component template: -->
<value-flash
  [value]="20000">
</value-flash>
```

There are a number of classnames you can use to add your own styles. This [Storybook example](https://60be66a91843f400393d1747-pyomkpvvzt.chromatic.com/?path=/story/components-value-flash--make-it-nice) demonstrates a potential custom styling.  Find the story source code [here](https://github.com/lab49/angular-value-flash/blob/main/stories/ValueFlash.stories.ts#L86) and the SCSS used [here](https://github.com/lab49/angular-value-flash/blob/main/stories/styles/themes.scss).  Below is a list of all the available classnames, with the default `.rvf_Flash` prefix.

_Note that due to view encapsulation, these styles will need to be included in global CSS/SCSS files, so be sure to properly scope the styles using wrapper `div` elements or by using specific prefixes as input to the `value-flash` component._

| Class | Description |
| --- | --- |
| `.rvf_Flash` | Root DOM node |
| `.rvf_Flash__value` | Rendered value, direct (and only) child of the root node. |
| `.rvf_Flash--flashing` | Applied only when the component is in the flashing state. |
| `.rvf_Flash--flashing-up` | Applied when flashing 'up'. |
| `.rvf_Flash--flashing-down` | Applied when flashing 'down'. |
| `.rvf_Flash--positive` | Applied when the value is positive. |
| `.rvf_Flash--negative` | Applied when the value is negative. |


###### [⇡ Top](#table-of-contents)

## API

### Directives

#### `ValueFlashComponent`

Selector: `value-flash`

Exported As: `ValueFlashComponent`

#### Properties

| Name | Default | Description |
| --- | --- | --- |
| @Input() downColor: string | 'red' | Color value when the component flashes 'down'. |
| @Input() formatter: FormatterType | 'default' | Value display formatter type. Options are: 'currency', 'percentage', 'number', 'default'.  See formatter definititions [here](https://github.com/lab49/angular-value-flash/blob/main/projects/value-flash/src/lib/formatters/index.ts).  |
| @Input() formatterFn: Formatter | | Custom formatter to use.  Overrides `formatter` input. |
| @Input() stylePrefix: string | 'rvf_Flash' | Class for root DOM node and prefix for flashing states, positive/negative states, and value node. |
| @Input() timeout: number | 200 | Amount of time the flashed state is visible for, in milliseconds. |
| @Input() transition: string | | Custom CSS transition property. |
| @Input() transitionLength: number | 100 | Transition length, in milliseconds. |
| @Input() upColor: string | 'green' | Color value when the component flashes 'up'. |
| @Input() value: number | 0 | Value to display. |


## License

MIT @ [Lab49](https://lab49.com)

###### [⇡ Top](#table-of-contents)

## TODO

These items are very high level right now. Further discussion and proper roadmap planning will happen in GitHub issues and projects.

- [ ] Finalize CI process for publishing.
- [ ] Add a code of conduct.
- [ ] Add a contributing guide.
- [ ] Create a feature roadmap.
- [ ] Publish code coverage to codecov.io.
- [ ] Finanlize README.md (logo, coverage/version link info, API documentation).
- [ ] Expand Storybook demos.
- [ ] Expand unit tests.

## Sponsored by Lab49

<a href="https://lab49.com">
  <img src="https://www.lab49.com/wp-content/uploads/2020/06/logo.svg" />
</a>
