import {
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder,
  ComponentFixture,
  describe,
  expect,
  it,
  setBaseTestProviders,
  fakeAsync,
  inject,
  async,
  injectAsync
} from 'angular2/testing';

import {Item} from './select';

import {MultipleDemo} from './multiple-select';
import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

describe('Component: MultipleDemo', () => {
  // testing dom element
  let tcbs: any;

  //setup
  beforeEachProviders(() => [
    TestComponentBuilder,
    MultipleDemo
  ]);

  beforeEach(inject([TestComponentBuilder], (_tcb: any) => {
    tcbs = _tcb;
  }));

  it('true is true', () => {
    expect(true).toEqual(true);
  });

  it('should count render list', inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
    return _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
      const element = fixture.nativeElement;
      fixture.componentInstance.Object = ['England'];
      fixture.detectChanges();
      expect(element.querySelectorAll('England').length).toBe(0);
    })
  }));

  it('should item to list select is clicked have value Birmingham',
    inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
      return _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
        let element = fixture.nativeElement;
        fixture.detectChanges();

        // trigger the 'new' click Item Birmingham
        expect(element.querySelector('li').click().toBe('Birmingham'));
        // process the click event
        fixture.detectChanges();
      })
    }));

  it('should item to list select is clicked...',
    inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
      return _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
        let nativeElement = fixture.nativeElement;
        fixture.detectChanges();

        // trigger the 'new' click Item
        fixture.nativeElement
          .querySelector('li').click();

        // process the click event
        fixture.detectChanges();
      })
    }));

  it('check list have count tag li', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
      const element = fixture.nativeElement;
      fixture.detectChanges();
      expect(element.getElementsByTagName('li').length).toBe(26);
    });
  }));

  it('Check value enter input ', inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
    return _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
    let element = fixture.nativeElement;

      expect(element.getElementsByTagName('input')).toHaveText('');
      fixture.debugElement.componentInstance.greeting = "England";
      fixture.detectChanges();
    })
  }));

  it('should render list work', inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
    return _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
      fixture.debugElement.nativeElement.querySelector('input')
        .click();
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('li')).toHaveText('');
    });
  }));

  it('Check list have tag ul', inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
    _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
        fixture.detectChanges();
        const element = fixture.nativeElement;
        expect(element.querySelectorAll('ul' === null)).toBe(true);
        expect(element.querySelectorAll('ul' === null)).toBe(false);
      });
  }));
});
