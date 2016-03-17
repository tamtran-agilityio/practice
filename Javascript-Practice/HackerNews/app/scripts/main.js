/**
 * Support to render hackernew to json api
 * Use class and module of ES6
 * @author Tam Tran support by Viet Phan
 */
import { NewWest } from './compoment/newest';
class App {
	newHacker() {
		let newWest = new NewWest();
		newWest.newListHacker();
	}
}

{
	let app = new App();
		app.newHacker();
}
