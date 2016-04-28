import {AppComponent} from './main';
// import {beforeEach, describe, expect, it, inject, injectAsync} from 'angular2/testing';

describe('AppComponent', () => {

  // test string
  beforeEach(function() {
    this.app = new AppComponent();
  });

  it('should have hello property', function() {
    expect(this.app.name).toBe('hello');
  });

});
