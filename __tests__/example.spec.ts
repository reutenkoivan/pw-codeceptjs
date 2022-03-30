import { test } from '@pw-codeceptjs/test'

test.describe('Fixture', () => {
  test('test #1', async ({ I }) => {
    await I.amOnPage('https://playwright.dev/')
    await I.waitForText('Playwright', { locator: '.navbar__inner .navbar__title' })
    await I.use.utils.wait(3)
  })
})
