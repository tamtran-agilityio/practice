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

import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {ItemService} from './service';
import 'rxjs/operator/map';

describe('Service: ItemService', () => {
  let itemservice: any;

  //setup
  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    ItemService
  ]);

  beforeEach(inject([ItemService], (s: any) => {
    itemservice = s;
  }));

  it('should return available items',() => {
    let items = itemservice.getItem('data.json');
    expect(items).toContain('');
  });
});
