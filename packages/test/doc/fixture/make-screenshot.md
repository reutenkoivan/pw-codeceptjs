---
title: "makeScreenshot"
---

## API

```typescript
interface I {
  makeScreenshot(options: {
    animations?: 'disabled';
    clip?: { x: number; y: number; width: number; height: number };
    fullPage?: boolean;
    mask?: Array<Locator>;
    omitBackground?: boolean;
    path?: string;
    quality?: number;
    timeout?: number;
    type?: 'png'|'jpeg';
  }): Promise<void>
}
```

## Example

```typescript
import path from 'path'
import { test } from '@pw-codeceptjs/test'

test('Example', async ({}) => {
  await I.amOnPage('https://playwright.dev')
  await I.makeScreenshot({ path: path.join(__dirname, 'screenshot.png') })
})
```
