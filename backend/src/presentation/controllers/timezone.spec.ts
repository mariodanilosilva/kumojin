import { TimezoneController } from './timezone'
import { ok } from '../helpers/http-helper'

describe('Timezone Controller', () => {
  test('Should return 200 on success', async () => {
    const sut = new TimezoneController()
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(ok('any_data'))
  })
})
