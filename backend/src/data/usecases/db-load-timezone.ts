import { LoadTimezone } from '../../domain/usecases/load-timezone'
import { TimezoneModel } from '../../model/timezone'
import { LoadTimezoneRepository } from '../protocols/load-timezone-repository'

export class DbLoadTimezone implements LoadTimezone {
  constructor (private readonly loadTimezoneRepository: LoadTimezoneRepository) {
  }

  async load (): Promise<TimezoneModel> {
    const timezone = await this.loadTimezoneRepository.load()
    return timezone
  }
}
