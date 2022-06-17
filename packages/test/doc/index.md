---
title: "@pw-codeceptjs/test"
sidebar_label: Installation
sidebar_position: 1
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Adding dependency.

<Tabs groupId="package-manager">
<TabItem value="npm">

```shell
npm add -D "@pw-codeceptjs/test"
```

</TabItem>
<TabItem value="yarn">

```shell
yarn add -D "@pw-codeceptjs/test"
```

</TabItem>
</Tabs>

## Configuration

<Tabs groupId="language">
<TabItem value="ts" label="TypeScript">

```typescript title="playwright.config.ts"
import { PlaywrightTestConfig, devices } from '@playwright/test'
import { CodeceptFixtureConfig } from '@pw-codeceptjs/test'

const config: PlaywrightTestConfig<CodeceptFixtureConfig> = {
  testMatch: './**/*.spec.ts',
  reporter: [['html']],
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
}

export default config
```

</TabItem>
<TabItem value="CommonJS" label="CommonJS">

```javascript title="playwright.config.js"
const { devices } = require('@playwright/test')

const config = {
  testMatch: './**/*.spec.js',
  reporter: [['html']],
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

module.exports = config;
```

</TabItem>
</Tabs>

## Using

<Tabs groupId="language">
<TabItem value="ts" label="TypeScript">

```typescript title="*.spec.ts"
import { test } from '@pw-codeceptjs/test'

test('Test name', async ({ I }) => {
  await I.amOnPage('https://playwright.dev')
})
```

</TabItem>
<TabItem value="CommonJS" label="CommonJS">

```javascript title="*.spec.js"
const { test } = require('@pw-codeceptjs/test')

test('Test name', async ({ I }) => {
  await I.amOnPage('https://playwright.dev')
})
```

</TabItem>
</Tabs>
