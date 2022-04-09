import { test as base } from '@playwright/test'
import { Driver } from './page-object/driver'
import type { CodeceptFixtureConfig } from './types'

export const buildFixture = <T extends Driver> (Fixture: { new(..._props): T }) => {
  return base.extend<CodeceptFixtureConfig & { I: T }>({
    codeceptjs: [
      {} as any,
      { option: true },
    ],
    I: async ({ browser, browserName, codeceptjs }, use) => {
      const { extensions = {} as codeceptjsFixtureTypes.extensions } = codeceptjs

      const fixtureInstance = new Fixture({ browser, browserName })

      await fixtureInstance.init({ extensions })

      await fixtureInstance._before()
      await use(fixtureInstance)
      await fixtureInstance._after()
    },
  })
}
