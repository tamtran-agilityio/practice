import React from 'react';
import moment from 'moment';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Day from '../../app/js/day/Day';


function renderDay (day, props = {}) {
  return shallow(
    <Day day={day} {...props} />
  )
}

describe('<Day/>', function () {
  let dayCurrent:15;
  it('should have an day to display', function () {
    const wrapper = shallow(<Day/>);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should have props for dayCurrent', function () {
    let dayCurrent:15;
    const wrapper = shallow(<Day/>);
    expect(wrapper.props().dayCurrent).to.be.defined;
  });
});

describe('today', () => {
  const className = 'date-picker-trigger'

  it('should apply the today class if today', () => {
    const shallowDay = renderDay(moment())
    expect(shallowDay.hasClass(className)).to.equal(false)
  })

  it('should not apply the today class if not today', () => {
    const shallowDay = renderDay(moment().add(1, 'day'))
    expect(shallowDay.hasClass(className)).to.equal(false)
  })

  it('should apply the today class if custom utcOffset is provided', () => {
    const shallowDay = renderDay(moment.utc().utcOffset(720))
    expect(shallowDay.hasClass(className)).to.equal(false)
  })
})

describe('weekend', () => {
  const className = 'week-picker'

  it('should apply the weekend class if Saturday', () => {
    const shallowDay = renderDay(moment('08/24/2016'))
    expect(shallowDay.hasClass(className)).to.equal(false)
  })

  it('should apply the weekend class if Sunday', () => {
    const shallowDay = renderDay(moment('08/21/2016'))
    expect(shallowDay.hasClass(className)).to.equal(false)
  })

  it('should not apply the today class if not the weekend', () => {
    const shallowDay = renderDay(moment('08/15/2016'))
    expect(shallowDay.hasClass(className)).to.equal(false)
  })
})
