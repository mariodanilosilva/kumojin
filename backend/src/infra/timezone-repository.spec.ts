import { TimezoneRepository } from './load-timezone-repository'

const makeSut = (): TimezoneRepository => {
  return new TimezoneRepository()
}

describe('LoadTimezoneRepository', () => {
  test('Should load timezone on success', async () => {
    const sut = makeSut()
    const timezone = await sut.load()
    expect(timezone.timezone).toBeDefined()
  })
})
