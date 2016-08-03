import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import { expect } from 'chai';
import ReactAddOn, {addon} from 'react/addons';
import createComponent from '../helpers/shallowRenderHelper';
import Card from '../../app/js/components/Card';

describe('Card component', () => {
  it('should have className \'list-wrapper\'', () => {
    const CardComponent = createComponent(Card, {
      text: ' test card',
      cardId: 1
    });

    expect(CardComponent.props.className).to.contain('list-wrapper');
  });
});
