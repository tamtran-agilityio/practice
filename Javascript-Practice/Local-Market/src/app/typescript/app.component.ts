import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/typescript/app.component.html',
  styleUrls: ['app/typescript/app.component.css']
})
export class AppComponent {
	titleNew = 'News';
	news = 'First of the season citrus has just arrived. Get succulent oranges and tangerines in our produce aisle!';
	what = "What's Cooking";
	whatSee = 'See what the community is cooking';
}

