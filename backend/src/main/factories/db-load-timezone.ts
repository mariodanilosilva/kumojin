import { DbLoadTimezone } from '../../data/usecases/db-load-timezone'
import { TimezoneRepository } from '../../infra/load-timezone-repository'

export const makeDbLoadTimezone = (): DbLoadTimezone => {
  const timezoneRepository = new TimezoneRepository()
  return new DbLoadTimezone(timezoneRepository)
}
