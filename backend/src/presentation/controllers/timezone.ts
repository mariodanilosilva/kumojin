import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'
import { ok } from '../helpers/http-helper'

export class TimezoneController implements Controller {
  handle (): HttpResponse {
    return ok('any_data')
  }
}
