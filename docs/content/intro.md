---
title: Get started
sidebar_position: 1
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 1) Add dependency.

<Tabs groupId="package-manager">
<TabItem value="npm">

```shell
npm i -D "@pw-codeceptjs/test"
```
</TabItem>

<TabItem value="yarn">

```shell
yarn add -WD "@pw-codeceptjs/test"
```
</TabItem>
</Tabs>

## 2) Create first test.

### 2.1 Create test file

```typescript title="./<path-to-test-dir>/example.spec.ts"
import { test } from '@pw-codeceptjs/test-fixture'

test.describe('Fixture', () => {
  test('test #1', async ({ I }) => {
    await I.amOnPage('https://playwright.dev/')
    await I.waitForText('Playwright', { locator: '.navbar__inner .navbar__title' })
  })
})
```

### 2.2 Configure playwright.config.ts

```typescript title="./playwright.config.ts"
import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  testMatch: '**/<path-to-test-dir>/**/*.spec.ts',
  reporter: [['html']],
  use: {
    headless: !!process.env.CI,
  },
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

### 2.3 Create test run command.

```json title="./package.json"
{
  "scripts": {
    "test:int": "playwright test"
  }
}
```

### 2.4 Execute firs run.

<Tabs groupId="package-manager">
<TabItem value="npm">

```shell
npm run test:int
```
</TabItem>

<TabItem value="yarn">

```shell
yarn test:run
```
</TabItem>
</Tabs>

## 3) Wright your own tests.

With [test method's](api) create your useful tests.
