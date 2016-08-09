import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import rootReducer from '../../app/js/reducers/Index';
import AddCard from '../../app/js/containers/AddCard';
import Card from '../../app/js/components/Card';

describe('AddCard', () => {
  let Component;
  let CardComponent;

  beforeEach(() => {
    const store = rootReducer({});

    const wrapper = mount(
      <Provider store={store}>
        <AddCard />
      </Provider>
    );

    Component = wrapper.find(AddCard);
    CardComponent = Component.find(Choice);
  });

  it('should render list card ', () => {
    expect(Component.length).toBeTruthy();
    expect(CardComponent.length).toBeTruthy();
  });
});