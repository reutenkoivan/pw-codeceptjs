---
title: "waitForURL"
---

## API

```typescript
interface I {
  waitForURL(
      url: string|RegExp|((url: URL) => boolean),
      options?: { timeout?: number; waitUntil?: 'load'|'domcontentloaded'|'networkidle'|'commit' }
  ): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev')
  await I.waitForURL('playwright.dev')
})
```
