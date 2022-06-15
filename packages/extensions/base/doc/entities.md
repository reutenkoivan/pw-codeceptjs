---
title: "@pw-codeceptjs/base-extension"
sidebar_label: Entities
---

## BaseExtension

Provide base contract between extension and main playwright fixture.

```typescript
import { Browser, BrowserContext, Page } from '@playwright/test'
import { Signale } from 'signales'

export type ExtensionMetaType = {
  tabID: number
}

export type ExtensionUtilsType = {
  getPage: () => Promise<Page>
}

export class BaseExtension {
  protected readonly browser: Browser
  protected readonly context: BrowserContext
  protected readonly utils: ExtensionUtilsType
  protected readonly meta: ExtensionMetaType
  protected readonly browserName: string
  protected readonly logger: typeof Signale

  /* === Hooks === === === === === === === === === === === === === === === === === === === === */

  init(options: { extensions: codeceptjsFixtureTypes.extensions }): Promise<void> {}
  _before(): Promise<void> {}
  _after(): Promise<void> {}

  /* === API === === === === === === === === === === === === === === === === === === === === */

  enableLogs(): void {}
  disableLogs(): void {}
}
```
