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

		// add a new user
	UserManager.prototype.addUser = function addUser(listUsers, currentId) {
	 	// body...
	 	var id = this.store.getCurrentId();
	 	var name = $('#userName').val();
	 	var address = $('#userAddress').val();
	 	var email = $('#userEmail').val();

	 	var user = new App.UserStore(id++, name, address, email);

	 	this.listUsers.push(user);
	 	users.viewUser();
	 	this.store.saveUser(this.listUsers, id);
	 };

	App.UserManager = UserManager;

})(Application);