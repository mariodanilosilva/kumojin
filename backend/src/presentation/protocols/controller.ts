import { HttpResponse } from './http'

export interface Controller {
  handle(): HttpResponse
}
