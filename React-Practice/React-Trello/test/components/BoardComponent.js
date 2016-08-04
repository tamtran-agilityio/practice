import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import { expect } from 'chai';
import ReactAddOn, {addon} from 'react/addons';
import createComponent from '../helpers/shallowRenderHelper';
import Board from '../../app/js/components/Board';
import AddBoard from '../../app/js/components/AddBoard';

describe('Board component', () => {
  it('should have className \'section-list-item\'', () => {
    const BoardComponent = createComponent(Board, {
      start: false,
      onSelectStart: () => {},
      boardId: 1,
      text: 'test redux'
    });

    expect(BoardComponent.props.className).to.contain('section-list-item');
  });

  it('should be active on container', () => {
    const BoardComponent = createComponent(Board, {
      start: true,
      onSelectStart: () => {},
      boardId: 1,
      text: 'test redux'
    });

    expect(BoardComponent.props.className).to.contain('section-list-item');;
  });

  it('should handle change value', () => {
    let start,
      selectValue;
    const callback = function(target, value) {
      start = target;
      selectValue = value;

      return;
    };

    const options = {
      start: true,
      start: false
    };
    const component = TestUtils.renderIntoDocument(
     <Board
      start = {false}
      values={ options }
      text= 'test redux'
      boardId = {1}
      onSelectStart={ callback } />
    );
    const select = TestUtils
      .findRenderedDOMComponentWithTag(component, 'board-tile-options');

    TestUtils.Simulate.change(select, {
      target: {
        value: true
      }
    });

    expect(start).to.equal(false);
    expect(selectValue).to.equal('true');
  });

  it('should add board ', () => {
    let rootReducers ={
      board: {
        showCreateBoard: true
      }
    };

    const AddBoardComponent = createComponent(AddBoard, {
      state: {
        rootReducer: rootReducers
      },
      handleClosePopup: () => {},
      addBoardItem: () => {}
    });

    expect(AddBoardComponent.props.className).to.contain('popup-add-board');
  });
});