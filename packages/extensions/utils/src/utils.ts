import { test } from '@playwright/test'
import { BaseExtension } from '@pw-codeceptjs/base-extension'

export class Utils extends BaseExtension {
  async wait (sec: number): Promise<void> {
    await test.step('wait', async () => {
      this.logger.debug(`waiting for ${sec} seconds.`)
      await new Promise(resolve => setTimeout(resolve, sec * 1000))
    })
  }
}
