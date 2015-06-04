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
	};

	App.AppManager = AppManager;
}) (Application);


// execute application 
$(document).ready(function() {
	'use strict';
	var appManager = new Application.AppManager();
	appManager.startApp();
});