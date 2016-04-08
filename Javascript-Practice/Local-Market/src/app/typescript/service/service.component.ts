import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions} from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Recipes } from '../recipes/recipes';

@Injectable()
export class RecipesService {

	constructor(private http: Http) { 
	}
	private _recipesUrl = 'app/data/recipes.json';
	getRecipes() {
		return this.http.get(this._recipesUrl)
			.map(res => <Recipes[]> res.json())
			.do(data => console.log(data))
			.catch(this.handleError);
	}
	private handleError (error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}

