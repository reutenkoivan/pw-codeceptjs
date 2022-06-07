---
title: "@pw-codeceptjs/base-extension"
sidebar_label: Entities
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### BaseExtension

Provide base contract between extension and main playwright fixture.

#### Import

<Tabs groupId="language">
<TabItem value="ts" label="TypeScript">

```typescript
import { BaseExtension } from '@pw-codeceptjs/base-extension'
```

</TabItem>
<TabItem value="CommonJS" label="CommonJS">

```javascript
const { BaseExtension } = require('@pw-codeceptjs/base-extension')
```

</TabItem>
</Tabs>

#### API

```typescript
import { Browser, BrowserContext, Page } from '@playwright/test'
import { Signale } from 'signales'

export type ExtensionMetaType = {
  tabID: number
}

export type ExtensionUtilsType = {
  getPage: () => Promise<Page>
}

export type ExtensionBusType = {
  browser: Browser;
  browserName: string;
  context: BrowserContext;
  meta: ExtensionMetaType
  extensionName: string;
  utils: ExtensionUtilsType;
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
