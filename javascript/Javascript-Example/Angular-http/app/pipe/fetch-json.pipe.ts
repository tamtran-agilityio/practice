import {Pipe, PipeTransform} from 'angular2/core';
import {Http}                from 'angular2/http';
@Pipe({
	name: 'fetch',
	pure: false
})
export class FetchJsonPipe  implements PipeTransform{
	private fetched:any = null;
	private prevUrl = '';
	constructor(private _http: Http) { }
	transform(url:string):any {
		if (url !== this.prevUrl) {
			this.prevUrl = url;
			this.fetched = null;
			this._http.get(url)
				.map( result => result.json() )
				.subscribe( result => this.fetched = result )
		}
		return this.fetched;
	}
}
