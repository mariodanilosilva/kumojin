import { DbLoadTimezone } from './db-load-timezone'
import { LoadTimezoneRepository } from '../protocols/load-timezone-repository'
import { TimezoneModel } from '../../model/timezone'

const makeFakeTimezone = (): TimezoneModel => ({ timezone: 'any_timezone' })

type SutTypes = {
  sut: DbLoadTimezone
  loadTimezoneRepositoryStub: LoadTimezoneRepository
}

const makeLoadTimezoneRepository = (): LoadTimezoneRepository => {
  class LoadTimezoneRepositoryStub implements LoadTimezoneRepository {
    async load (): Promise<TimezoneModel> {
      return await new Promise(resolve => resolve(makeFakeTimezone()))
    }
  }
  return new LoadTimezoneRepositoryStub()
}
const makeSut = (): SutTypes => {
  const loadTimezoneRepositoryStub = makeLoadTimezoneRepository()
  const sut = new DbLoadTimezone(loadTimezoneRepositoryStub)
  return {
    sut,
    loadTimezoneRepositoryStub
  }
}

describe('DbLoadTimezone', () => {
  test('Should call LoadTimezoneRepository', async () => {
    const { sut, loadTimezoneRepositoryStub } = makeSut()
    const loadSpy = jest.spyOn(loadTimezoneRepositoryStub, 'load')
    await sut.load()
    expect(loadSpy).toHaveBeenCalled()
  })
})
