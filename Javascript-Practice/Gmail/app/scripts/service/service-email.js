/*
 *  Load data to json page to DOM
 */
import { CallJson } from './call-api';
import { EmailModel } from '../model/email';

export class ServiceEmail extends EmailModel {

	constructor(...args) {
		super(...args);
	}

	/*
	 * Get email box
	 */
	emailInbox() {

		let json = new CallJson('/data/data.json');

		json.getJson().then(data => {
			data.forEach(function(element, index) {

				if (element.type === 'box') {

					let emailModel = new EmailModel(element.id ,element.type, element.title, element.content, element.important, element.starred);
					emailModel.getEmail(element.type);

				}
			})
		});
	}

	/*
	 * Get email box type starred
	 */
	emailStar() {

		let json = new CallJson('/data/data.json');

		json.getJson().then(data => {
			data.forEach(function(element, index) {

				if (element.type === 'box' && element.starred === 'true') {

					let emailModel = new EmailModel(element.id ,element.type, element.title, element.content, element.important, element.starred);
					emailModel.getEmail(element.type);

				}
			})
		});
	}

	/*
	 * Get email send
	 */
	emailSend() {

		let json = new CallJson('/data/data.json');

		json.getJson().then(data => {
			data.forEach(function(element, index) {

				if (element.type === 'send') {

					let emailModel = new EmailModel(element.id ,element.type, element.title, element.content, element.important, element.starred);
					emailModel.getEmail(element.type);

				}
			})
		});
	}

	titleEmail(idTitle) {

		let json = new CallJson('/data/data.json');

		json.getJson().then(data => {
			data.forEach(function(element, index) {

				if (element.id === idTitle) {

					let emailModel = new EmailModel(element.id ,element.type, element.title, element.content, element.important, element.starred);
					emailModel.getTitles();

				}
			})
		});
	}
}
