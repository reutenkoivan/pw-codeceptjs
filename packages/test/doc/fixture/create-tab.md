---
title: "createTab"
---

## API

```typescript
interface I {
  createTab(): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev/')  // 1-st tab
  await I.createTab()                          // creating 2-nd tab and checkout to it
})
```
