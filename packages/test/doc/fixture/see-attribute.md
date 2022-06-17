---
title: "seeAttribute"
---

## API

```typescript
interface I {
  seeAttribute(attribute: string, value: null|string, locator: string): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev')
  await I.seeAttribute('href', '/docs/intro', '.getStarted_Sjon')
})
```
