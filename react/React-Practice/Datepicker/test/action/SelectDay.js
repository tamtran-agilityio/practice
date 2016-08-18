import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Day from '../../app/js/day/Day';

function setup() {
  const props = {
    dayCurrent: 15,
    _getDayClassName: expect.createSpy(),
    _onSelect: expect.createSpy(),
    state: {
      selected: true
    }
  }

  const enzymeWrapper = shallow(<Day {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Select day', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('span').hasClass('date-picker-trigger')).toBe(true);
      expect(enzymeWrapper.find('span').text()).toBe('15');
    })
  })
})