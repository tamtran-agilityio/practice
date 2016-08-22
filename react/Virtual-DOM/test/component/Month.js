import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import { expect } from 'chai';
import ReactAddOn, {addon} from 'react/addons';
import createComponent from '../helpers/shallowRenderHelper';
import Month from '../../app/js/month/Month';

describe('Month component', () => {
  it('should have className \'week-picker\'', () => {
    const MonthComponent = createComponent(Month, {
      dayCurrent: new Date(),
      onSelect: () => {}
    });

    expect(MonthComponent.props.className).to.contain('month-picker');
  });

  it('should have props for minday', () => {
    const MonthComponent = createComponent(Month, {
      dayCurrent: new Date(),
      onSelect: () => {}
    });

    expect(MonthComponent.props.minDate).to.be.defined;
  });

  it('should have props for maxday', () => {
    const MonthComponent = createComponent(Month, {
      dayCurrent: new Date(),
      onSelect: () => {}
    });

    expect(MonthComponent.props.maxDate).to.be.defined;
  });
});
