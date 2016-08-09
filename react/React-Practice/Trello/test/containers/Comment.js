import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import rootReducer from '../../app/js/reducers/Index';
import AddComment from '../../app/js/containers/AddComment';
import Comment from '../../app/js/components/Comment';

describe('AddComment', () => {
  let Component;
  let CommentComponent;

  beforeEach(() => {
    const store = rootReducer({});

    const wrapper = mount(
      <Provider store={store}>
        <AddComment />
      </Provider>
    );

    Component = wrapper.find(AddComment);
    CommentComponent = Component.find(Choice);
  });

  it('should render list comment', () => {
    expect(Component.length).toBeTruthy();
    expect(CommentComponent.length).toBeTruthy();
  });
});