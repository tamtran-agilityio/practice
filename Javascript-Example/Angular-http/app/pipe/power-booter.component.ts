import {Component} from 'angular2/core';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';

@Component({
	selector: 'power-booster',
	template: `
		<h2>Power Booster</h2>
		<p>
			Super power boost: {{2 | exponentialStrength: 3}}
		</p>
		<h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ngModel)]="power"></div>
    <div>Boost factor: <input [(ngModel)]="factor"></div>
    <p>
      Super Hero Power: {{power | exponentialStrength: factor}}
    </p>
	`,
	pipes: [ExponentialStrengthPipe]
})
export class PowerBooster {
	power = 5;
	factor = 2; 
}
