# Graine UI
WIP React component library made with TailwindCSS.

## Installation

**Install Graine**
```bash
$ yarn add graine-ui
```
or
```bash
$ npm install graine-ui
```


**Wrap your app with ThemeProvider**
```jsx
import React from 'react';
import { ThemeProvider } from 'graine-ui';

const App = () => (
  <ThemeProvider>
      {/* Your app here */}
  </ThemeProvider>
);
```

**You are done!**

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


