import { Signale } from 'signales'
import { BrowserContext, Browser } from '@playwright/test'
import { objectKeys } from '../utils'

export class Driver {
  protected context: BrowserContext = {} as BrowserContext
  protected browser: Browser
  protected browserName: string
  protected readonly extensions: any[] = []
  protected readonly logger: typeof Signale
  protected meta = {
    tabID: 0,
  }

  use: {
    [T in keyof codeceptjsFixtureTypes.extensions]: InstanceType<codeceptjsFixtureTypes.extensions[T]>
  } = {} as any

  constructor({ browser, browserName }: { browser: Browser; browserName: string }) {
    this.browser = browser
    this.browserName = browserName
    this.logger = new Signale({ scope: 'codecept', disabled: !process.env.PWDEBUG })
  }

  /* === Hooks === === === === === === === === === === === === === === === === === === === === === === === === === */

  async init({ extensions }: { extensions: codeceptjsFixtureTypes.extensions }) {
    const contexts = this.browser.contexts()

    this.context = contexts.length
      ? contexts[0]
      : await this.browser.newContext()

    for (const key of objectKeys(extensions)) {
      const Extension = extensions[key]

      this.use[key] = new Extension({
        browser: this.browser,
        browserName: this.browserName,
        context: this.context,
        meta: this.meta,
        extensionName: `codecept-${key}`,
        utils: {
          getPage: this.getPage,
        },
      })

      await this.use[key].init({ extensions })
      this.extensions.push(this.use[key])
    }
  }

  async _before() {
    for (const extension of this.extensions) {
      await extension._before()
    }
  }

  async _after() {
    for (const extension of this.extensions) {
      await extension._after()
    }
  }

  /* === Utils === === === === === === === === === === === === === === === === === === === === === === === === === */

  protected async getPage() {
    const pages = this.context.pages()

    if (!pages.length) {
      return await this.context.newPage()
    }

    return pages[this.meta.tabID]
  }

  /* === API === === === === === === === === === === === === === === === === === === === === === === === === === === */

  enableLogs() {
    this.logger.enable()
  }

  disableLogs() {
    this.logger.disable()
  }
}
