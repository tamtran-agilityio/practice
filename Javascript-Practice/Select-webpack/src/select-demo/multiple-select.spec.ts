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
      expect(element.querySelectorAll('span').length).toBe(1);
    });
  }));

  it('should have a predefined list of items', inject([MultipleDemo], (multipleselect: MultipleDemo) => {
    expect(multipleselect.items.length).toBe(4);
  }));

  it('shoult have length item select', inject([MultipleDemo], (multipleselect: MultipleDemo) => {
    expect(multipleselect.onSelect.length).toBe(1);
  }));
});
