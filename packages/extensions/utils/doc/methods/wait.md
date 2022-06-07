---
title: wait
sidebar_label: wait
---

Pause test execution.

### API
```typescript
interface Utils {
    wait(seconds: number): Promise<void>
}
```

### Example
```typescript
import { test } from '@pw-codeceptjs/test'

test('Example', async ({ I }) => {
  await I.use.utils.wait(2)
})
```
