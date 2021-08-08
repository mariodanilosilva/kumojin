import { shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('App.vue', () => {
  test('Is a instance of Vue', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.exists()).toBeTruthy()
  })
})
