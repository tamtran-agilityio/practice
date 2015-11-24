/*global */
var Application = Application || {};

;(function(App) {
	'use strict';

	var addUser = '#add-user';
	var userId = '#userId';
	var userName = '#userName';
	var userAddress = '#userAddress';
	var userEmail = '#userEmail';
	var className = '.user-name';
	var classAddress = '.user-address';
	var classEmail = '.user-email';

	function UserList() {
		this.users = JSON.parse(localStorage.getItem('users'));
		this.store = new App.UserStore();
		this.listUsers = this.getAllUser();
	}

	/**
	 * get all user from local
	 * @return {[type]} [description]
	 */
	UserList.prototype.getAllUser = function getAllUser() {
		// body...
		return _.map(this.users, function(user) {
			return new App.User(user.id, user.name, user.address, user.email);
		});
	};

	// view all users to id #view-all-user
	UserList.prototype.viewAllUser = function viewAllUser(thisObj) {

		_.forEach(thisObj.listUsers, function(user) {
			user.viewUser();
		});
	};

	// add a new user
	UserList.prototype.addUser = function addUser() {
		// body...
		var id = this.store.getCurrentId();
		var name = $(userName).val();
		var address = $(userAddress).val();
		var email = $(userEmail).val();
		var user = new App.User(id++, _.capitalize(_.trim(name)), _.trim(address), _.trim(email));

		this.listUsers.push(user);
		user.viewUser();
		this.store.saveUser(this.listUsers, id);
	};

	// remove a user follow id user
	UserList.prototype.delUser = function delUser(userNode, nodeId) {
		// body...
		userNode.remove();
		_.remove(this.listUsers, function(user) {
			return parseInt(user.getId()) === parseInt(nodeId);
		});

		// save change after delete user
		this.store.saveUser(this.listUsers);
	};

	// sync value object user and input text when click button edit
	UserList.prototype.viewInputEdit = function viewInputEdit(user) {
		// body...
		$(userId).val(user.getId());
		$(userName).val(user.name);
		$(userAddress).val(user.address);
		$(userEmail).val(user.email);
	};

	// edit a user
	UserList.prototype.editUser = function editUser(id) {
		// body...
		var index = this.findIdCurrent(id);
		var user = this.listUsers[index];
		var name = $(userName).val();
		var address = $(userAddress).val();
		var email = $(userEmail).val();
		user.editUser(_.trim(name), _.trim(address), _.trim(email));

		var listNodeChild = $('tr[data-id=' + user.getId() + ']');
		listNodeChild.children(className).text(user.name);
		listNodeChild.children(classAddress).text(user.address);
		listNodeChild.children(classEmail).text(user.email);

		this.store.saveUser(this.listUsers);
	};

	// find id element need edit
	UserList.prototype.findIdCurrent = function findIdCurrent(nodeId) {
		// body..
		if (localStorage.getItem('users')) {
			var index = _.findLastIndex(this.listUsers, function(user) {
				return parseInt(user.getId()) === parseInt(nodeId);
			});

			return index;
		}
	};

	// search user follow key name
	UserList.prototype.searchUser = function searchUser(keySearch) {
		// body...
		if (localStorage.getItem('users')) {
			return _.filter(this.listUsers, function(user) {
				return _.includes(user.name.toLowerCase(), keySearch.toLowerCase());
			});
		}
	};

	// count number user have search
	UserList.prototype.countSearch = function countSearch() {
		// body...
		var sum = 0;
		_.map(this.users, function(user) {
			return sum++;
		});

		return sum;
	};

	App.UserList = UserList;

})(Application);
