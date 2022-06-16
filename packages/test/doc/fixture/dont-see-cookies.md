---
title: "dontSeeCookies"
---

## API

```typescript
interface I {
  dontSeeCookies(cookies: string[]): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev')
  await I.dontSeeCookies(['session'])
})
```
