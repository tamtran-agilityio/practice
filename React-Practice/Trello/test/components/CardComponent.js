import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import { expect } from 'chai';
import ReactAddOn, {addon} from 'react/addons';
import createComponent from '../helpers/shallowRenderHelper';
import Card from '../../app/js/components/Card';
import AddCard from '../../app/js/components/AddCard';

describe('Card component', () => {
  it('should have className \'list-wrapper\'', () => {
    const CardComponent = createComponent(Card, {
      text: ' test card',
      cardId: 1
    });

    expect(CardComponent.props.className).to.contain('list-wrapper');
  });

  it('should show form add card ', () => {
    let rootReducers ={
      card: {
        showFrom: true
      }
    };

    const AddCardComponent = createComponent(AddCard, {
      state: {
        rootReducer: rootReducers
      },
      onSelectAddCard: () => {},
      addCardItem: () => {},
      outSideAddCard: () => {}
    });

    expect(AddCardComponent.props.className).to.contain('add-list-card');
  });
});
