/**
 * Support to render email to json file
 * Use class and module of ES6
 * @author Tam Tran support by Viet Phan
 */
import { GetData } from './service/get-data';
import { NewWest } from './compoment/newest';
class App {
	emailView() {
		let newWest = new NewWest();
		newWest.newHacker();
	}
}

{
	let app = new App();
		app.emailView();
}
