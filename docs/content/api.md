---
title: Test method's
sidebar_position: 3
---

```typescript
interface I {
  amOnPage: (url: string) => Promise<void>
  waitForText: (text: string, options: { locator: string }) => Promise<void>
  waitForURL: Page['waitForURL']
  appendField: (text: string, options: { locator: string }) => Promise<void>
  clearField: (locator: string) => Promise<void>
  click: (locator: string, options?: { createsNewPage?: boolean } & Parameters<Locator['click']>[0]) => Promise<void>
  createTab: () => Promise<void>
  workWithTab: (id: number) => Promise<void>
  closeTab: (id?: number) => Promise<void>
  fillField: (text: string, options: { locator: string }) => Promise<void>
  attachFile: (locator: string, options: { filePath: string }) => Promise<void>
  refreshPage: () => Promise<void>
  pressKey: (key: string) => Promise<void>
  clearCookie: (cookies?: string | string[]) => Promise<void>
}
```
