import fs from 'fs'
import path from 'path'
import assert from 'assert'
import { expect, Locator, Page, test } from '@playwright/test'
import { PageScreenshotOptions } from 'playwright-core'

import { Driver } from './driver'

export class CodeceptFixture extends Driver {
  /*
  meta = {
    tabID: number;
  };
  */

  /* === Public methods === === === === === === === === === === === === === === === === === === === === === === === */

  /* === Page === */

  async amOnPage (url: string): Promise<void> {
    const page = await this.getPage()

    await test.step('amOnPage', async () => {
      await page.goto(url)
    })
  }

  async waitForURL (urlPart: Parameters<Page['waitForURL']>[0], options?: Parameters<Page['waitForURL']>[1]): Promise<void> {
    const page = await this.getPage()

    await test.step('waitForURL', async () => {
      await page.waitForURL(urlPart, options)
    })
  }

  async refreshPage (): Promise<void> {
    const page = await this.getPage()

    await test.step('refreshPage', async () => {
      await page.reload()
    })
  }

  async workWithTab (id: number): Promise<void> {
    const pages = this.context.pages()

    await test.step('workWithTab', async () => {
      assert(pages[id], `Tab #${id} is not defined!`)
      this.logger.debug(`Switch to tab #${id}. (${pages[this.meta.tabID].url()})`)

      this.meta.tabID = id
      await pages[this.meta.tabID].bringToFront()
    })
  }

  async createTab (): Promise<void> {
    await test.step('createTab', async () => {
      await this.context.newPage()
      await this.workWithTab(this.context.pages().length - 1)
    })
  }

  async closeTab (closeTabID?: number): Promise<void> {
    const pages = this.context.pages()

    await test.step('closeTab', async () => {
      assert(pages.length > 0, 'There are no open tabs!')
      const targetTabID = closeTabID || this.meta.tabID

      await pages[targetTabID].close()

      if (pages.length > 1) {
        await this.workWithTab(0)
      }
    })
  }

  async click (
    locator: string,
    { createsNewPage, ...restOptions }: { createsNewPage?: boolean } & Parameters<Locator['click']>[0] = {}
  ): Promise<void> {
    const page = await this.getPage()

    await test.step('click', async () => {
      const target = page.locator(locator)

      if (createsNewPage) {
        const [newPage] = await Promise.all([
          this.context.waitForEvent('page'),
          target.click(restOptions),
        ])

        await newPage.waitForLoadState()
        await this.workWithTab(this.context.pages().findIndex(p => p === newPage))
      } else {
        await target.click(restOptions)
      }
    })
  }

  async doubleClick (locator: string): Promise<void> {
    const page = await this.getPage()

    await test.step('doubleClick', async () => {
      const target = page.locator(locator)

      await target.dblclick()
    })
  }

  async dragAndDrop (source: string, target: string): Promise<void> {
    const page = await this.getPage()

    await test.step('dragAndDrop', async () => {
      await page.dragAndDrop(source, target)
    })
  }

  async waitForText (text: string, { locator }: { locator: string }): Promise<void> {
    const page = await this.getPage()

    await test.step('waitForText', async () => {
      const target = page.locator(locator)

      await expect(target).toContainText(text)
    })
  }

  async waitForNoText (text: string, { locator }: { locator: string }): Promise<void> {
    const page = await this.getPage()

    await test.step('waitForNoText', async () => {
      const target = page.locator(locator)

      await expect(target).not.toContainText(text)
    })
  }

  async seeAttribute (attribute: string, value: null | string, locator: string): Promise<void> {
    const page = await this.getPage()

    await test.step('seeAttribute', async () => {
      const attr = page.locator(locator).getAttribute(attribute)

      await expect(attr).toEqual(value)
    })
  }

  /* === Inputs === */

  async appendField (text: string, { locator }: { locator: string }): Promise<void> {
    const page = await this.getPage()

    await test.step('appendField', async () => {
      const target = page.locator(locator)

      await target.fill(await target.inputValue() + text)
    })
  }

  async clearField (locator: string): Promise<void> {
    const page = await this.getPage()

    await test.step('clearField', async () => {
      const target = page.locator(locator)

      await target.fill('')
    })
  }

  async fillField (text: string, { locator }: { locator: string }): Promise<void> {
    const page = await this.getPage()

    await test.step('fillField', async () => {
      const target = page.locator(locator)

      await target.fill(text)
    })
  }

  async attachFile (locator: string, { filePath }: { filePath: string }): Promise<void> {
    const page = await this.getPage()
    const absFilePath = path.resolve(filePath)

    await test.step('attachFile', async () => {
      assert(fs.existsSync(absFilePath))

      const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator(locator).click(),
      ])

      await fileChooser.setFiles(absFilePath)
    })
  }

  /* === System === */

  async pressKey (key: string): Promise<void> {
    const page = await this.getPage()

    await test.step('pressKey', async () => {
      await page.keyboard.press(key)
    })
  }

  async clearCookie (cookieNames?: string | string[]): Promise<void> {
    const page = await this.getPage()

    await test.step('clearCookie', async () => {
      const targetCookies = Array.isArray(cookieNames) ? cookieNames : [cookieNames]

      await page.evaluate((cookiesList) => {
        const cookies = document.cookie.split(';').reduce((acc, cookie) => {
          const [name, value] = cookie.trim().split('=')

          if (!cookiesList.length || cookiesList.includes(name)) {
            acc[name] = value
          }

          return acc
        }, {})

        for (const [name, value] of Object.entries(cookies)) {
          document.cookie = `${name}=${value}; expires=${new Date(0).toUTCString()};`
        }
      }, cookieNames ? targetCookies : [])
    })
  }

  async dontSeeCookies (cookies: string[]): Promise<void> {
    const page = await this.getPage()

    await test.step('dontSeeCookie', async () => {
      const pageCookies = await this.context.cookies(page.url())

      const extraCookies = pageCookies.filter(({ name }) => {
        return cookies.includes(name)
      })

      expect(extraCookies).toEqual([])
    })
  }

  async makeScreenshot(options: PageScreenshotOptions = {}): Promise<void> {
    const page = await this.getPage()

    await test.step('makeScreenshot', async () => {
      await page.screenshot(options)
    })
  }
}
