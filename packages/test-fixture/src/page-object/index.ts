import fs from 'fs'
import path from 'path'
import assert from 'assert'
import { expect, test } from '@playwright/test'

import { Driver } from './driver'
import type { CodeceptFixtureTypes } from './types'

export class CodeceptFixture extends Driver {
  /*
  meta = {
    tabID: number;
  };
  */

  /* === Public methods === === === === === === === === === === === === === === === === === === === === === === === */

  /* === Page === */

  amOnPage: CodeceptFixtureTypes.amOnPage = async (url) => {
    const page = await this.getPage()

    await test.step('amOnPage', async () => {
      await page.goto(url)
    })
  }

  waitForURL: CodeceptFixtureTypes.waitForURL = async (urlPart) => {
    const page = await this.getPage()

    await test.step('waitForURL', async () => {
      await page.waitForURL(urlPart)
    })
  }

  refreshPage: CodeceptFixtureTypes.refreshPage = async () => {
    const page = await this.getPage()

    await test.step('refreshPage', async () => {
      await page.reload()
    })
  }

  workWithTab: CodeceptFixtureTypes.workWithTab = async (id) => {
    const pages = this.context.pages()

    await test.step('workWithTab', async () => {
      assert(pages[id], `Tab #${id} is not defined!`)
      this.logger.debug(`Switch to tab #${id}. (${pages[this.meta.tabID].url()})`)

      this.meta.tabID = id
      await pages[this.meta.tabID].bringToFront()
    })
  }

  createTab: CodeceptFixtureTypes.createTab = async () => {
    await test.step('createTab', async () => {
      await this.context.newPage()
      await this.workWithTab(this.context.pages().length - 1)
    })
  }

  closeTab: CodeceptFixtureTypes.closeTab = async (closeTabID) => {
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

  click: CodeceptFixtureTypes.click = async (locator, { createsNewPage, ...restOptions } = {}) => {
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

  doubleClick = async (locator) => {
    const page = await this.getPage()

    await test.step('doubleClick', async () => {
      const target = page.locator(locator)

      await target.dblclick()
    })
  }

  dragAndDrop = async (source, target) => {
    const page = await this.getPage()

    await test.step('dragAndDrop', async () => {
      await page.dragAndDrop(source, target)
    })
  }

  waitForText: CodeceptFixtureTypes.waitForText = async (text, { locator }) => {
    const page = await this.getPage()

    await test.step('waitForText', async () => {
      const target = page.locator(locator)

      await expect(target).toContainText(text)
    })
  }

  waitForNoText = async (text, { locator }) => {
    const page = await this.getPage()

    await test.step('waitForNoText', async () => {
      const target = page.locator(locator)

      await expect(target).not.toContainText(text)
    })
  }

  seeAttribute = async (attribute, value, locator) => {
    const page = await this.getPage()

    await test.step('seeAttribute', async () => {
      const attr = page.locator(locator).getAttribute(attribute)

      await expect(attr).toEqual(value)
    })
  }

  /* === Inputs === */

  appendField: CodeceptFixtureTypes.appendField = async (text, { locator }) => {
    const page = await this.getPage()

    await test.step('appendField', async () => {
      const target = page.locator(locator)

      await target.fill(await target.inputValue() + text)
    })
  }

  clearField: CodeceptFixtureTypes.clearField = async (locator) => {
    const page = await this.getPage()

    await test.step('clearField', async () => {
      const target = page.locator(locator)

      await target.fill('')
    })
  }

  fillField: CodeceptFixtureTypes.fillField = async (text, { locator }) => {
    const page = await this.getPage()

    await test.step('fillField', async () => {
      const target = page.locator(locator)

      await target.fill(text)
    })
  }

  attachFile: CodeceptFixtureTypes.attachFile = async (locator, { filePath }) => {
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

  pressKey: CodeceptFixtureTypes.pressKey = async (key) => {
    const page = await this.getPage()

    await test.step('pressKey', async () => {
      await page.keyboard.press(key)
    })
  }

  clearCookie: CodeceptFixtureTypes.clearCookie = async (cookieNames) => {
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

  dontSeeCookies = async (cookies) => {
    const page = await this.getPage()

    await test.step('dontSeeCookie', async () => {
      const pageCookies = await this.context.cookies(page.url())

      const extraCookies = pageCookies.filter(({ name }) => {
        return cookies.includes(name)
      })

      expect(extraCookies).toEqual([])
    })
  }
}
