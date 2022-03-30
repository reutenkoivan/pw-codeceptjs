import { test } from '@playwright/test'
import { BaseExtension } from '@pw-codeceptjs/base-extension'
import { UtilsExtensionTypes } from './types'

export class Utils extends BaseExtension {
  wait: UtilsExtensionTypes.wait = async (sec) => {
    await test.step('wait', async () => {
      this.logger.debug(`waiting for ${sec * 1000} seconds.`)
      await new Promise(resolve => setTimeout(resolve, sec * 1000))
    })
  }
}
