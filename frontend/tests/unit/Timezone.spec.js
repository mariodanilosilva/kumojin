import {shallowMount} from '@vue/test-utils'
import Timezone from '../../src/components/Timezone'
import axios from 'axios'

jest.mock('axios', () => ({
  get: jest.fn().mockReturnThis(),
  then: jest.fn().mockReturnValue(Promise.resolve({ time: 'any_time',timezone: 'any_timezone' }))
}))

describe('Timezone.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(Timezone, {
      global: {
        provide: {
          BACKEND: 'BACKEND'
        }
      }
    })
    wrapper.setData({ date: {} })
  })

  test('Is a instance of Vue', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Should getTimezone is called when a component is created', () => {
    const getSpy = jest.spyOn(axios, 'get')
    expect(getSpy).toBeCalledTimes(1)
  })

  test('Should call axios call with correct params', () => {
    const getSpy = jest.spyOn(axios, 'get')
    expect(getSpy).toHaveBeenCalledWith('BACKEND/timezone')
  })

  test('Should getTimezone set a value in this.date', () => {
    expect(wrapper.vm.$data.date).toEqual({ time: 'any_time',timezone: 'any_timezone' })
  })
})
