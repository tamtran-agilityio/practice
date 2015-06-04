var Application = Application || {};


;(function(App) {
	// body...
	'use strict';

	function  AppManager() {
		this.userManager = {};
	}

	// load web on browser
	AppManager.prototype.startApp = function startApp() {
		// body...
		// checking localstorage create 50 users
		if (!localStorage.getItem('users')) {
			var userStore = new Application.UserStorage();
			userStore.createUsers(50);
		}

		this.userManager = new App.UserManager();

		this.userManager.viewAllUser(this.userManager);
		this.handlerEvent(this);
	};

	// execute event click button submit
	AppManager.prototype.handlerEvent = function handlerEvent(obj) {
		// body...
		$('#add-user').click(function(event) {
			event.preventDefault();

			//var id = $('#userId').val();
			obj.userManager.addUser();
		});
	};

	App.AppManager = AppManager;
}) (Application);

// execute application 
$(document).ready(function() {
	'use strict';
	var appManager = new Application.AppManager();
	appManager.startApp();
});