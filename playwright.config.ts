import { PlaywrightTestConfig, devices } from '@playwright/test'
import { Utils } from '@pw-codeceptjs/utils-extension'
import { CodeceptFixtureConfig } from '@pw-codeceptjs/test'

const config: PlaywrightTestConfig<CodeceptFixtureConfig> = {
  forbidOnly: !!process.env.CI,
  testMatch: '**/__tests__/**/*.spec.ts',
  reporter: [['html']],
  use: {
    headless: !!process.env.CI,
    codeceptExtensions: {
      utils: Utils,
    },
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
