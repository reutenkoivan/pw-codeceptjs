import { Browser, BrowserContext } from '@playwright/test'
import { Signale } from 'signales'
import { ExtensionBusType, ExtensionMetaType, ExtensionUtilsType } from './types'

export class BaseExtension {
  protected readonly browser: Browser
  protected readonly context: BrowserContext
  protected readonly utils: ExtensionUtilsType
  protected readonly meta: ExtensionMetaType
  protected readonly browserName: string
  protected readonly logger: typeof Signale

  constructor({ utils, browser, browserName, context, meta, extensionName }: ExtensionBusType) {
    this.browser = browser
    this.context = context
    this.utils = utils
    this.meta = meta
    this.browserName = browserName
    this.logger = new Signale({ scope: extensionName, disabled: !process.env.PWDEBUG })
  }

  /* === Hooks === === === === === === === === === === === === === === === === === === === === === === === === === */

  async init(_options: { extensions: codeceptjsFixtureTypes.extensions }): Promise<void> {}

  async _before(): Promise<void> {}

  async _after(): Promise<void> {}

  /* === API === === === === === === === === === === === === === === === === === === === === === === === === === === */

  enableLogs() {
    this.logger.enable()
  }

  disableLogs() {
    this.logger.disable()
  }
}
