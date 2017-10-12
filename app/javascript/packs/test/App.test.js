import { shallow } from 'vue-test-utils'
import App from '../App.vue'

describe('App.test.js', () => {
  let component

  beforeEach(() => {
    component = shallow(App, {
      data: {
        messages: ["Cat"]
      }
    })
  })

  it('equals messages to ["Cat"]', () => {
    expect(component.vm.messages).toEqual(["Cat"])
  })

  it('has the expected html structure', () => {
    expect(component.element).toMatchSnapshot()
  })
})
