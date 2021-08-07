import { TimezoneController } from './timezone'
import { LoadTimezone } from '../../domain/usecases/load-timezone'
import { TimezoneModel } from '../../model/timezone'
import { ok } from '../helpers/http-helper'

const makeFakeTimezone = (): TimezoneModel => ({ timezone: 'any_timezone' })

type SutTypes = {
  sut: TimezoneController
  loadTimezoneStub: LoadTimezone
}

const makeLoadTimezone = (): LoadTimezone => {
  class LoadTimezoneStub implements LoadTimezone {
    async load (): Promise<TimezoneModel> {
      return await new Promise(resolve => resolve(makeFakeTimezone()))
    }
  }
  return new LoadTimezoneStub()
}
const makeSut = (): SutTypes => {
  const loadTimezoneStub = makeLoadTimezone()
  const sut = new TimezoneController(loadTimezoneStub)
  return {
    sut,
    loadTimezoneStub
  }
}

describe('Timezone Controller', () => {
  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(ok('any_data'))
  })

  test('Should call LoadTimezone', async () => {
    const { sut, loadTimezoneStub } = makeSut()
    const loadSpy = jest.spyOn(loadTimezoneStub, 'load')
    await sut.handle()
    expect(loadSpy).toHaveBeenCalled()
  })
})
