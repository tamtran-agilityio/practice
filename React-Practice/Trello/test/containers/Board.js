import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import rootReducer from '../../app/js/reducers/Index';
import AddBoard from '../../app/js/containers/AddBoard';
import Board from '../../app/js/components/Board';

describe('AddBoard', () => {
  let Component;
  let BoardComponent;

  afterEach(() => {
    localStorage.clear();
  // remove callback
    localStorage.itemInsertionCallback = null;
  });
  beforeEach(() => {
    const store = rootReducer({});

    const wrapper = mount(
      <Provider store={store}>
        <AddBoard />
      </Provider>
    );

    Component = wrapper.find(AddBoard);
    BoardComponent = Component.find(Choice);
  });

  it('should render list board', () => {
    expect(Component.length).toBeTruthy();
    expect(BoardComponent.length).toBeTruthy();
  });
});