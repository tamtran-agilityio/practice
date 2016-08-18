import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import { expect } from 'chai';
import ReactAddOn, {addon} from 'react/addons';
import createComponent from '../helpers/shallowRenderHelper';
import Datepicker from '../../app/js/Datepicker';

describe('Datepicker component', () => {
  it('should have className \'datepicker__input-container\'', () => {
    const DatepickerComponent = createComponent(Datepicker, {
      dayCurrent: new Date(),
      minDate: '16/08/2016',
      maxDate: '25/08/2016',
      onSelect: () => {},
      preMonth: () => {},
      nextMonth: () => {}
    });

    expect(DatepickerComponent.props.className).to.contain('datepicker__input-container');
    expect(DatepickerComponent.props.minDate).to.be.equal(undefined);
    expect(DatepickerComponent.props.maxDate).to.be.equal(undefined);
  });
});
