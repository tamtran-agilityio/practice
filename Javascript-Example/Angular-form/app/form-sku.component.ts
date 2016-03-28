import { Component} from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup } from 'angular2/common';
@Component({  
	selector: 'demo-form-sku',
	templateUrl: 'app/form-sku.component.html',
	directives: [FORM_DIRECTIVES]
})

export class DemoFormSkuBuilder {  
	myForm: ControlGroup;
 
	constructor(fb: FormBuilder) {  
		this.myForm = fb.group({  
			'sku': ['ABC123']  
		});  
	}
	onSubmit(value: string): void {  
		console.log('you submitted value: ', value);  
	}
}