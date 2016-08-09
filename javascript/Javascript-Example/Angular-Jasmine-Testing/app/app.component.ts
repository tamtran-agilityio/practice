import { Component } from 'angular2/core';
import { HeroBirthday } from './pipe/birthday.component';
import { HappyChange } from './pipe/birthday-change.component';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { PowerBooster } from './pipe/power-booter.component';
import { HeroAsyncMessageComponent } from './pipe/hero-async-message.component.ts';
import { HeroListComponents } from './pipe/hero-list.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	directives:[
		HeroBirthday,
		HappyChange,
		PowerBooster,
		HeroAsyncMessageComponent,
		HeroListComponents 
	],
	providers:[HTTP_PROVIDERS]
})

export class AppComponent {
	birthday = new Date(1989,09,23);
}