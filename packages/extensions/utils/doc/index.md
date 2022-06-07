---
title: "@pw-codeceptjs/utils-extension"
sidebar_label: Installation
sidebar_position: 1
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

### Adding dependency.

<Tabs groupId="package-manager">
<TabItem value="npm">

```shell
npm add -D "@pw-codeceptjs/utils-extension"
```

</TabItem>
<TabItem value="yarn">

```shell
yarn add -D "@pw-codeceptjs/utils-extension"
```

</TabItem>
</Tabs>

### Registration.

```typescript title='playwright.config.ts'
import { CodeceptFixtureConfig } from '@pw-codeceptjs/test'
import { PlaywrightTestConfig } from '@playwright/test'
import { Utils } from '@pw-codeceptjs/utils-extension'

declare global {
  namespace codeceptjsFixtureTypes {
    type extensions = {
      utils: typeof Utils
    }
  }
}

const config: PlaywrightTestConfig<CodeceptFixtureConfig> = {
  use: {
    codeceptjs: {
      extensions: {
        utils: Utils,
      },
    },
  },
}

export default config
```
