import { Router } from 'express'
import { adaptRoute } from '../adapter/express-route-adapter'
import { makeTimezoneController } from '../factories/timezone'

export default (router: Router): void => {
  router.get('/timezone', adaptRoute(makeTimezoneController()))
}
