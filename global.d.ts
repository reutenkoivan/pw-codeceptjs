import { Utils } from '@pw-codeceptjs/utils-extension'

declare global {
  namespace codeceptFixtureTypes {
    type extensions = {
      utils: typeof Utils
    }
  }
}
