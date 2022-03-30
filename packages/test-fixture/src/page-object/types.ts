import { Locator, Page } from '@playwright/test'

export namespace CodeceptFixtureTypes {
  export type amOnPage = (url: string) => Promise<void>
  export type waitForText = (text: string, options: { locator: string }) => Promise<void>
  export type waitForURL = Page['waitForURL']
  export type appendField = (text: string, options: { locator: string }) => Promise<void>
  export type clearField = (locator: string) => Promise<void>
  export type click = (locator: string, options?: { createsNewPage?: boolean } & Parameters<Locator['click']>[0]) => Promise<void>
  export type createTab = () => Promise<void>
  export type workWithTab = (id: number) => Promise<void>
  export type closeTab = (id?: number) => Promise<void>
  export type fillField = (text: string, options: { locator: string }) => Promise<void>
  export type attachFile = (locator: string, options: { filePath: string }) => Promise<void>
  export type refreshPage = () => Promise<void>
  export type pressKey = (key: string) => Promise<void>
  export type clearCookie = (cookies?: string | string[]) => Promise<void>
}
