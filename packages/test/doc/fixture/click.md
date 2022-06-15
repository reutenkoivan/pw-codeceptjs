---
title: "click"
---

## API

```typescript
interface I {
  click(
    locator: string,
    options?: {
      createsNewPage?: boolean;
      button?: 'left'|'right'|'middle';
      clickCount?: number;
      delay?: number;
      force?: boolean;
      modifiers?: Array<'Alt'|'Control'|'Meta'|'Shift'>;
      noWaitAfter?: boolean;
      position?: { x: number; y: number };
      timeout?: number;
      trial?: boolean;
    }
  ): Promise<void>
}
```

## Example

```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev/')
  await I.click('text=GitHub', { createsNewPage: true }) // click and switch to page which was opened
})
```
