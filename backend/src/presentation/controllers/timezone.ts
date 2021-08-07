import { HttpResponse } from '../protocols/http'
import { ok } from '../helpers/http-helper'

export class TimezoneController {
  handle (): HttpResponse {
    return ok('any_data')
  }
}
