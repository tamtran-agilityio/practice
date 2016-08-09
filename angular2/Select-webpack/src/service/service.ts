import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions} from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../select/select';

@Injectable()
export class ItemService {

  constructor(private http: Http) { }

  getItem(_url: string) {
    return this.http.get(_url)
      .map(res => <Item[]>res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
