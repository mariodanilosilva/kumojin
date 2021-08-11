import { LoadTimezoneRepository } from '../data/protocols/load-timezone-repository'
import { TimezoneModel } from '../model/timezone'
import moment from 'moment-timezone'

export class TimezoneRepository implements LoadTimezoneRepository {
  async load (): Promise<TimezoneModel> {
    const timezone = 'Asia/Tokyo'
    return {
      timezone,
      time: moment().tz(timezone).format()
    }
  }
}
