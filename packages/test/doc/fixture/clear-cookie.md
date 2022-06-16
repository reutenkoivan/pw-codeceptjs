---
title: "clearCookie"
---

## API

```typescript
interface I {
  clearCookie(cookieNames?: string | string[]): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev')
  await I.clearCookie()
})
```
