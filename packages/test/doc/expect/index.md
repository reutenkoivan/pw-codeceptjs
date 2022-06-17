---
title: "Expect"
---

Re-export of [test-assertions](https://playwright.dev/docs/test-assertions) solution from playwright library.

## Using

```typescript
import { test, expect } from '@pw-codeceptjs/test'

test('Example', async ({}) => {
  expect(1).toEqual(1)
})
```
