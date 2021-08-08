import { Express, Router } from 'express'
import timezoneRoute from '../routes/timezone-routes'

export default (app: Express): void => {
  const router = Router()
  app.use('', router)
  timezoneRoute(router)
}
