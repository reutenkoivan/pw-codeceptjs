---
title: "refreshPage"
---

## API

```typescript
interface I {
  refreshPage(): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev')
  await I.refreshPage()
})
```
