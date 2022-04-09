import { CodeceptFixture, buildFixture } from '@pw-codeceptjs/test-fixture'

export const test = buildFixture<CodeceptFixture>(CodeceptFixture)

export type { CodeceptFixtureConfig } from '@pw-codeceptjs/test-fixture'
export { expect } from '@playwright/test'
