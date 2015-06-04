var Application = Application || {};

;(function(App) {
	'use strict';

	function UserManager() {
		this.id = localStorage.getItem('currentId');
		this.store = new App.UserStore();
		this.listUsers = this.store.getAllUser();
	}

	// view all users to id #view-all-user
	UserManager.prototype.viewAllUser = function viewAllUser(thisObj) {
		_.forEach(thisObj.listUsers, function(users) {
			users.viewUser();
		});
	};

	App.UserManager = UserManager;

})(Application);