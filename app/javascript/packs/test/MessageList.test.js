import { shallow } from 'vue-test-utils'
import MessageList from '../components/MessageList'

describe('MessageList.test.js', () => {
  let component

  beforeEach(() => {
    component = shallow(MessageList, {
      propsData: {
        messages: ["Cat"]
      }
    })
  })

  it('has recieved ["Cat"] as the message property', () => {
    expect(component.vm.messages).toEqual(["Cat"])
  })

  it('has the expected html structure', () => {
    expect(component.element).toMatchSnapshot()
  })
})
