import { Component} from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
@Component({  
	selector: 'demo-form-sku',
	templateUrl: 'app/form-sku.component.html',
	directives: [FORM_DIRECTIVES]
})

export class SkuForm {
	constructor() {

	}
	onSubmit(value: string): void {  
		console.log('you submitted value: ', value);  
	}
}