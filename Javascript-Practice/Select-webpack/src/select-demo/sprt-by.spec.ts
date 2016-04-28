import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {MovieFilterPipe} from "./sort-by";

describe('MyPipe Tests', () => {
  let pipe: MovieFilterPipe;

  beforeEach(() => {
    pipe = new MovieFilterPipe();
  });

  it('Should be array string ', () => {
   let result = pipe.transform('', null);

    expect(result).toEqual('');
  });
});
