# @lab49/angular-value-flash

`react-value-flash` will display a flashed value on screen based on some value change. This pattern is extremely common in financial applications, and at Lab49, we're focused on the finance industry.

Incorporate this component into your application and pass along a number. As that number changes, this component will briefly flash a color, letting the user know the number has changed. By default, this component will flash green when the value changes up, or red when the value changes down.

Not only are these colors configurable, but the properties of the flash itself and the formatting of the value are configurable as well.

Furthermore, this component doesn't come with any styles, but does provide plenty of hooks to add your own styles. Even though flash color and transition properties are configurable as props, you can still use the generated classnames (which are also configurable) to add your own unique styles.

<p align="center">
  <img src="https://github.com/troy-prince-lab49/angular-value-flash/blob/777e5cbe5f4143122b3ba826db0a955506d0cfc6/.github/motion.gif">
</p>

This component is perfect for:

- Trading platforms
- Analytics dashboards
- Monitoring dashboards

## Features

- Small, simple, configurable, performant
- Maintained by a team of finance industry professionals


## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)
- [TODO](#TODO)

## Demo

Hosted demo: TBD

You can also run the demo locally.  To get started:

```sh
git clone git@github.com:lab49/angular-value-flash.git
npm install
npm run storybook
```

###### [⇡ Top](#table-of-contents)

## Installation

```sh
npm install @lab49/angular-value-flash
```

###### [⇡ Top](#table-of-contents)

## Usage

```js
// Include in an @ngModule:
import { ValueFlashModule } from 'angular-value-flash';
...
@NgModule({
  imports: [
    ValueFlashModule
  ],
  ...

// Use in a component template:
<lab49-value-flash
  value="20000">
</lab49-value-flash>
```

###### [⇡ Top](#table-of-contents)

## API

_To be completed_

## License

MIT @ [Lab49](https://lab49.com)

###### [⇡ Top](#table-of-contents)

## TODO

These items are very high level right now. Further discussion and proper roadmap planning will happen in GitHub issues and projects.

- [ ] Incorporate linting and unit tests into GitHub Action CI builds.
- [ ] Finalize CI process for publishing.
- [ ] Add a code of conduct.
- [ ] Add a contributing guide.
- [ ] Create a feature roadmap.
- [ ] Publish code coverage to codecov.io.
- [ ] Finanlize README.md
- [ ] Complete Chromatic setup and incorporate into CI/CD.
- [ ] Expand Storybook demos.

## Sponsored by Lab49

<a href="https://lab49.com">
  <img src="https://www.lab49.com/wp-content/uploads/2020/06/logo.svg" />
</a>
