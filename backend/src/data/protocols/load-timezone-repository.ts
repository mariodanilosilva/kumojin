import { TimezoneModel } from '../../model/timezone'

export interface LoadTimezoneRepository {
  load (): Promise<TimezoneModel>
}
