---
title: "appendField"
---

## API

```typescript
interface I {
  appendField(text: string, options: { locator: string }): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev/')
  await I.click('.DocSearch-Button')

  await I.appendField('api', { locator: '.DocSearch-Input' })
})
```
