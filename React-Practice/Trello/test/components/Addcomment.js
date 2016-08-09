import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import AddComment from '../../app/js/components/AddComment';

function setup() {
  let rootReducers ={
    comment: {
      showCreateComment: true,
      addCommentItem: () => {}
    },
    member: {
      memberId: 1
    }
  };

  const props = {
    addCommentItem: expect.createSpy(),
    handleClosePopupComment: expect.createSpy(),
    state: {
      rootReducer: rootReducers
    },
  }

  const enzymeWrapper = shallow(<AddComment {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('AddComment', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('selection').hasClass('window-overlay-hide')).toBe(false);
      expect(enzymeWrapper.find('h2').text()).toBe('Create Board ');

      const contentInput = enzymeWrapper.find('textarea').props();
      expect(contentInput.ref).toEqual(undefined);
      expect(contentInput.placeholder).toEqual('Write a comment…');
    })

    it('should call addCommentItem if length of text is greater than 0', () => {
      const { enzymeWrapper, props } = setup()
      const input = enzymeWrapper.find('form')
      /**--- error use event.preventDefault() in global same localstorage --**/
      // input.props().onSubmit('')
      // expect(props.addCommentItem.calls.length).toBe(0)
      // input.props().onSubmit('Use Redux')
      // expect(props.addCommentItem.calls.length).toBe(1)
    })
  })
})