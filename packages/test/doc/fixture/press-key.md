---
title: "pressKey"
---

## API

```typescript
interface I {
  pressKey(key: string): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev')
  await I.click('.DocSearch-Button')
  await I.click('.DocSearch-Input')

  await I.pressKey('A')
})
```
