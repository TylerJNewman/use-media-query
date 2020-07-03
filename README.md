# use-media-query

> custom react hook written in typescript used for when we want to use the window size in order to decide whether to conditionally load a component or not

[![NPM](https://img.shields.io/npm/v/use-media-query.svg)](https://www.npmjs.com/package/use-media-query) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-media-query
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-media-query'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [tylerjnewman](https://github.com/tylerjnewman)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
