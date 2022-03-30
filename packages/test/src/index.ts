import { test as base } from '@playwright/test'
import { CodeceptFixture } from '@pw-codeceptjs/test-fixture'
import { CodeceptFixtureConfig } from './types'

interface CodeceptFixtureInterface {
  I: CodeceptFixture
}

export const test = base.extend<CodeceptFixtureConfig & CodeceptFixtureInterface>({
  codeceptExtensions: [
    {} as any,
    { option: true },
  ],
  I: async ({ browser, browserName, codeceptExtensions }, use) => {
    const codeceptFixture = new CodeceptFixture({ browser, browserName })

    await codeceptFixture.init({ codeceptExtensions })

    await codeceptFixture._before()
    await use(codeceptFixture)
    await codeceptFixture._after()
  },
})

export { expect } from '@playwright/test'
export { CodeceptFixtureConfig } from './types'
