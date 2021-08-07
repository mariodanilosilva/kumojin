import { TimezoneModel } from '../../model/timezone'

export interface LoadTimezone {
  load (): Promise<TimezoneModel>
}
