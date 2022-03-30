import { Browser, BrowserContext, Page } from '@playwright/test'

export type ExtensionMetaType = {
  tabID: number
}

export type ExtensionUtilsType = {
  getPage: () => Promise<Page>
}

export type ExtensionBusType = {
  browser: Browser;
  browserName: string;
  context: BrowserContext;
  meta: ExtensionMetaType
  extensionName: string;
  utils: ExtensionUtilsType;
}
