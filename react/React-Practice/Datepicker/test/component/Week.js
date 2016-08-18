import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import moment from 'moment';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import ReactAddOn, {addon} from 'react/addons';
import createComponent from '../helpers/shallowRenderHelper';
import Week from '../../app/js/week/Week';

describe('Week component', () => {
  it('should have className \'modal-picker\'', () => {
    const WeekComponent = createComponent(Week, {
      dayCurrent: new Date(),
      onSelect: () => {}
    });

    expect(WeekComponent.props.className).to.contain('modal-picker');
  });

  it('should have props for minday', () => {
    const WeekComponent = createComponent(Week, {
      dayCurrent: new Date(),
      onSelect: () => {}
    });

    expect(WeekComponent.props.minDate).to.be.defined;
  });

  it('should have props for maxday', () => {
    const WeekComponent = createComponent(Week, {
      dayCurrent: new Date(),
      onSelect: () => {}
    });

    expect(WeekComponent.props.maxDate).to.be.defined;
  });
});