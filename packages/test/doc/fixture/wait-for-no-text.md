---
title: "waitForNoText"
sidebar_position: 3
---

## API

```typescript
interface I {
  waitForNoText(text: string, options: { locator: string }): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev/')
  await I.waitForNoText('Puppeteer', { locator: '.navbar__inner .navbar__title' })
})
```
