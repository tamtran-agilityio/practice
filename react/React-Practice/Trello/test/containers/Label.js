import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import rootReducer from '../../app/js/reducers/Index';
import AddLabel from '../../app/js/containers/AddLabel';
import Label from '../../app/js/components/Label';

describe('AddLabel', () => {
  let Component;
  let LabelComponent;

  beforeEach(() => {
    const store = rootReducer({});

    const wrapper = mount(
      <Provider store={store}>
        <AddLabel />
      </Provider>
    );

    Component = wrapper.find(AddLabel);
    LabelComponent = Component.find(Choice);
  });

  it('should render list label', () => {
    expect(Component.length).toBeTruthy();
    expect(LabelComponent.length).toBeTruthy();
  });
});