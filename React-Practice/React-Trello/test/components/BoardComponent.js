import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import AddBoard from '../../app/js/containers/AddBoard'

function setup() {
  const props = {
    addBoard: expect.createSpy()
  }
  const enzymeWrapper = shallow(<AddBoard {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('AddBoard', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('AddBoard').hasClass('modal-content')).toBe(true)

      expect(enzymeWrapper.find('label').text()).toBe('Title')

      const boardInputProps = enzymeWrapper.find('Text').props()
      expect(boardInputProps.newBoard).toBe(true)
      expect(boardInputProps.placeholder).toEqual('What are you organzing?')
    })

    it('should call addBoard if length of text is greater than 0', () => {
      const { enzymeWrapper, props } = setup()
      const input = enzymeWrapper.find('Text')
      input.props().onSave('')
      expect(props.addBoard.calls.length).toBe(0)
      input.props().onSave('Use Redux')
      expect(props.addBoard.calls.length).toBe(1)
    })
  })
})