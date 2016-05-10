import {
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder,
  ComponentFixture,
  describe,
  expect,
  fit,
  it,
  setBaseTestProviders,
  fakeAsync,
  inject,
  async,
  injectAsync
} from 'angular2/testing';

import {provide} from 'angular2/src/core/di/provider';
import {Item} from './select';

import {MultipleDemo} from './multiple-select';
import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import 'rxjs/add/operator/map';

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

describe('MultipleDemo', () => {
  // testing dom element
  //setup
  beforeEachProviders(() => [
    TestComponentBuilder,
    MultipleDemo
  ]);

  it('true is true', () => {
    expect(true).toEqual(true);
  });

  fit('should count render list', inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
    return _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
      const element = fixture.nativeElement;
      fixture.detectChanges();
      expect(element.querySelector('li').innerHTML).toContain('England');
    })
  }));

  it('should item to list select is clicked have value England',
    inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
      return _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
        let element = fixture.nativeElement;
        fixture.detectChanges();
        expect(element.querySelector('li').innerHTML).toContain('England');
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
      expect(element.getElementsByTagName('li').length).toBe(0);
    });
  }));

  it('Check value enter input ', inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
    return _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
    let element = fixture.nativeElement;

      expect(element.getElementsByTagName('input').length).toBe(1);
      fixture.detectChanges();
    })
  }));

  it('should render list work', inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
    return _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
      fixture.debugElement.nativeElement.querySelector('input').click();
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('li').innerHTML).toContain('');
    });
  }));

  it('Check list have tag ul', inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
    return _tcb.createAsync(MultipleDemo).then((fixture: ComponentFixture) => {
        fixture.detectChanges();
        const element = fixture.nativeElement;
        expect(element.querySelectorAll('ul').length == 0).toBe(false);
      });
  }));

  it('shows list of items by default', inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
    return _tcb
      .overrideProviders(MultipleDemo, [provide(MultipleDemo, { useValue: Item })])
      .createAsync(MultipleDemo)
      .then((fixture) => {
        let nativeElement = fixture.nativeElement;
        fixture.detectChanges();
        expect(nativeElement.querySelector('li') === null).toBe(true);
        expect(nativeElement.querySelector('ul') === null).toBe(true);
    });
  }));
});
