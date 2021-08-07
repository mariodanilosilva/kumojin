import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'
import { LoadTimezone } from '../../domain/usecases/load-timezone'

import { ok } from '../helpers/http-helper'

export class TimezoneController implements Controller {
  constructor (private readonly loadTimezone: LoadTimezone) {
  }

  async handle (): Promise<HttpResponse> {
    await this.loadTimezone.load()
    return ok('any_data')
  }
}
