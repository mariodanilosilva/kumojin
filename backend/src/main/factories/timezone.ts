import { TimezoneController } from '../../presentation/controllers/timezone'
import { makeDbLoadTimezone } from './db-load-timezone'

export const makeTimezoneController = (): TimezoneController => {
  return new TimezoneController(makeDbLoadTimezone())
}
