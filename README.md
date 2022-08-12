# Graine UI

WIP React component library made with TailwindCSS.

## Getting Started

#### Install Graine UI

```bash
$ yarn add graine-ui
```
or
```bash
$ npm install graine-ui
```

#### Wrap your app with ThemeProvider

```jsx
import React from 'react';
import { ThemeProvider } from 'graine-ui';

const App = () => (
  <ThemeProvider>
      {/* Your app here */}
  </ThemeProvider>
);
```

And... you're good to go!

## Usage
```jsx
import { Button } from 'graine-ui';

const App = () => (
  <ThemeProvider>
    <Button>Hello World</Button>
  </ThemeProvider>
);
```

Documentation is currently wip, so use types as a reference for now.

## Editing source code

**Graine UI**'s source code is hosted on [Github](https://github.com/otomir23/graine-ui).
If you want to change something, you can make a PR or open an issue.

### Setting up your local environment

First, you need to **clone the repository**.

```bash
$ git clone https://github.com/otomir23/graine-ui.git
```

Then, you need to **install dependencies**.

```bash
$ yarn install
$ cd example && yarn install
```

After that, you can start developing.

### Local development

Because Graine UI uses TSDX, starting the build hot reload is as simple as running

```bash
$ yarn start
```

To preview the changes, you can run development server.

```bash
$ cd example && yarn start
```

When you are done, you can build the components for production and run tests.

```bash
$ yarn build
$ yarn test
```

### Additional resources

Learn more about TSDX [here](https://tsdx.io/)

Learn more about TailwindCSS [here](https://tailwindcss.com/).

## License

Graine UI is licensed under the MIT License.


