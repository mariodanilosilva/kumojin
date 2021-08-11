import {shallowMount} from '@vue/test-utils'
import Time from '../../src/components/Time'
import moment from 'moment'
import momentTz from 'moment-timezone'

jest.mock('moment', () => {
  const moment = {
    tz: jest.fn().mockReturnThis()
  }
  moment.format = jest.fn().mockReturnValue('any_time')
  return moment
})
jest.mock('moment-timezone', () => {
  return {
    tz: {
      guess: jest.fn().mockReturnValue('guess_timezone')
    }
  }
})


describe('Time.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(Time, {
      propsData: {
        time: 'valid_time'
      }
    })
  })

  test('Is a instance of Vue', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Is moment a mock function', () => {
    expect(jest.isMockFunction(moment.tz)).toBeTruthy()
    expect(jest.isMockFunction(moment.format)).toBeTruthy()
  })

  test('Is momentTz a mock function', () => {
    expect(jest.isMockFunction(momentTz.tz.guess)).toBeTruthy()
  })

  test('Should props timezone is empty if not defined when created', () => {
    expect(wrapper.props().time).toBe('valid_time')
    expect(wrapper.props().timezone).toBe(undefined)
  })

  test('Should computed timeZone return a guess timezone if timezone property is empty', () => {
    const localThis = { timezone: null }
    expect(Time.computed.timeZone.call(localThis)).toEqual('guess_timezone')
  })

  test('Should computed timeZone return a property timezone if timezone property is not empty', () => {
    const localThis = { timezone: 'any_timezone' }
    expect(Time.computed.timeZone.call(localThis)).toEqual('any_timezone')
  })

  test('Should computed showTime return a valid formatted time', () => {
    const localThis = { time: 'any_time', timezone: 'any_timezone' }
    expect(Time.computed.showTime.call(localThis)).toEqual('any_time')
  })

  test('Should the text is show on tag h2', () => {
    expect(wrapper.text()).toContain('guess_timezone: any_time')
  })
})
