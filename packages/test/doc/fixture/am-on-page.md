---
title: "amOnPage"
sidebar_position: 1
---

## API

```typescript
interface I {
  amOnPage(url: string): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev/')
})
```
