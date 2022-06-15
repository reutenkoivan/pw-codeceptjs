---
title: "waitForText"
sidebar_position: 2
---

## API

```typescript
interface I {
  waitForText(text: string, options: { locator: string }): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev/')
  await I.waitForText('Playwright', { locator: '.navbar__inner .navbar__title' })
})
```
