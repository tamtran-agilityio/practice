import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import { expect } from 'chai';
import ReactAddOn, {addon} from 'react/addons';
import createComponent from '../helpers/shallowRenderHelper';
import WeekContent from '../../app/js/week/WeekContent';

describe('WeekContent component', () => {
  it('should have className \'week-picker\'', () => {
    const WeekContentComponent = createComponent(WeekContent, {
      day: new Date(),
      onSelect: () => {}
    });

    expect(WeekContentComponent.props.className).to.contain('week-picker');
  });

  it('should have props for minday', () => {
    const WeekContentComponent = createComponent(WeekContent, {
      day: new Date(),
      onSelect: () => {}
    });

    expect(WeekContentComponent.props.minDate).to.be.defined;
  });

  it('should have props for maxday', () => {
    const WeekContentComponent = createComponent(WeekContent, {
      day: new Date(),
      onSelect: () => {}
    });

    expect(WeekContentComponent.props.maxDate).to.be.defined;
  });
});
