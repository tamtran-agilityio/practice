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
		_.forEach(thisObj.listUsers, function(user) {
			user.viewUser();
		});
	};

	// add a new user
	UserManager.prototype.addUser = function addUser() {
		// body...
		var id = this.store.getCurrentId();
		var name = $('#userName').val();
		var address = $('#userAddress').val();
		var email = $('#userEmail').val();
		var user = new App.User(id++, name, address, email);

		this.listUsers.push(user);
		user.viewUser();
		this.store.saveUser(this.listUsers, id);
	};

	// remove a user
	UserManager.prototype.delUser = function delUser(userNode, nodeId) {
		// body...
		userNode.remove();
		_.remove(this.listUsers, function(user) {
			return parseInt(user.getId()) === parseInt(nodeId);
		});

		// save change after delete user
		this.store.saveUser(this.listUsers);
	};

	App.UserManager = UserManager;

})(Application);