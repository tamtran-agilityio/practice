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

 	// sync value object user and input text
 	UserManager.prototype.viewInputEdit = function viewInputEdit(user) {
 		// body...
		$('#userId').val(user.getId());
		$('#userName').val(user.name);
		$('#userAddress').val(user.address);
		$('#userEmail').val(user.email);
		$('#add-user').text('Update');
 	};

	// edit a user
	UserManager.prototype.editUser = function editUser(id) {
		// body...
		var index = this.findIdCurrent(id);

		var user = this.listUsers[index];
		var name = $('#userName').val();
		var address = $('#userAddress').val();
		var email = $('#userEmail').val();
		user.editUser(name, address, email);

		var listNodeChild = $('tr[data-id=' + user.getId() + ']');
		listNodeChild.children('.user-name').text(user.name);
		listNodeChild.children('.user-address').text(user.address);
		listNodeChild.children('.user-email').text(user.email);

		this.store.saveUser(this.listUsers);
	};
	// find element need edit 
	UserManager.prototype.findIdCurrent = function findIdCurrent(nodeId) {
		// body...
		var index = _.findIndex(this.listUsers, function(user) {
			return parseInt(user.getId()) === parseInt(nodeId);
		});
		return index;
	};
	App.UserManager = UserManager;

})(Application);