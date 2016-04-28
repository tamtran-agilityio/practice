import {
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder,
  ComponentFixture,
  describe,
  expect,
  it,
  inject,
  injectAsync
} from 'angular2/testing';

import {MultipleDemo} from './multiple-select';


describe('MultipleDemo', () => {
  // testing dom element
  beforeEachProviders(() => [MultipleDemo]);
  it('should render list', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(MultipleDemo).then((componentFixture: ComponentFixture) => {
      const element = componentFixture.nativeElement;
      componentFixture.detectChanges();
      expect(element.querySelectorAll('multiple-select').length).toBe(1);
    });
  }));

  it('should have a predefined list of items', inject([MultipleDemo], (dashboard: MultipleDemo) => {
    expect(dashboard.selectedItems.length).toBe(2);
    }));
});
