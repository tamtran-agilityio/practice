import {it, describe, expect, beforeEach, inject, beforeEachProviders} from 'angular2/testing';
import {MovieFilterPipe} from "./sort-by";

describe('Pipe: MovieFilterPipe', () => {
  let pipe: any;

  //setup
  beforeEachProviders(() => [
    MovieFilterPipe
  ]);

  beforeEach(inject([MovieFilterPipe], (p: any) => {
    pipe = p;
  }));

  //specs
  it('should throw if not used with a string', () => {
    //must use arrow function for expect to capture exception
    expect(() => pipe.transform([], '')).toBeDefined();
    expect(() => pipe.transform(undefined)).toThrow();
    expect(() => pipe.transform()).toThrow();
  });
})
