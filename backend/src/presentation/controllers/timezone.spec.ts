import { TimezoneController } from './timezone'
import { LoadTimezone } from '../../domain/usecases/load-timezone'
import { TimezoneModel } from '../../model/timezone'
import { ok, serverError } from '../helpers/http-helper'

const makeFakeTimezone = (): TimezoneModel => ({ timezone: 'any_timezone', time: 'any_time' })

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
  test('Should call LoadTimezone', async () => {
    const { sut, loadTimezoneStub } = makeSut()
    const loadSpy = jest.spyOn(loadTimezoneStub, 'load')
    await sut.handle()
    expect(loadSpy).toHaveBeenCalled()
  })

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(ok(makeFakeTimezone()))
  })

  test('Should return 500 if LoadTimezone throws', async () => {
    const { sut, loadTimezoneStub } = makeSut()
    jest.spyOn(loadTimezoneStub, 'load').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
