import { Component } from 'angular2/core';
import { KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4 } from './keyup.component';
import { ClickMeComponent } from './clickme.component';
import { LoopBackComponent } from './loopback.component';
import { LitteTourComponent } from './littletour.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	directives: [
		KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4,
		ClickMeComponent, LoopBackComponent, LitteTourComponent
	];
})

export class AppComponent {

}
