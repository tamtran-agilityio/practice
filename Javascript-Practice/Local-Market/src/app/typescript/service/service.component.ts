import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions} from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../components/recipes/recipes';

@Injectable()
export class RecipesService {

	private _recipesUrl = 'app/data/recipes.json';

  constructor(private http: Http) { }

	getRecipes() {
		return this.http.get(this._recipesUrl)
			.map(res => <Recipe[]> res.json())
			.do(data => console.log(data))
			.catch(this.handleError);
	}

	getRecipeItem(id ) {
    console.debug("SSSSSSSSSSSSSSSSSS", id);
		return this.http.get(this._recipesUrl)
			.map(res => <Recipe[]> res.json())
			.map(data => {
				let rs = null;
				for (let key in data) {
					if( key === id ) {
						rs = {
							key: key,
							object: data[key]
						}
					}
				}
				return rs;
			})
			.catch(this.handleError);
	}

	private handleError (error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
