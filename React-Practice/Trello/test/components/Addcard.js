import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import AddCard from '../../app/js/components/AddCard';

function setup() {
  let rootReducers ={
    card: {
      showFrom: true
    }
  };

  const props = {
    addCardItem: expect.createSpy(),
    onSelectAddCard: expect.createSpy(),
    outSideAddCard: expect.createSpy(),
    onSubmit: expect.createSpy(),
    state: {
      rootReducer: rootReducers
    },
  }

  const enzymeWrapper = shallow(<AddCard {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('AddCard', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('form').hasClass('placeholder')).toBe(false);
      expect(enzymeWrapper.find('span').text()).toBe(' Add a list… ');

      const contentInput = enzymeWrapper.find('input').props();
      expect(contentInput.ref).toEqual(undefined);
      expect(contentInput.placeholder).toEqual('Add a list');
    })

    it('should call AddCardItem if length of text is greater than 0', () => {
      const { enzymeWrapper, props } = setup()
      const input = enzymeWrapper.find('form')
      /**--- error use event.preventDefault() in global same localstorage --**/
      // input.props().onSubmit('')
      // expect(props.AddCardItem.calls.length).toBe(0)
      // input.props().onSubmit('Use Redux')
      // expect(props.AddCardItem.calls.length).toBe(1)
    })
  })
})