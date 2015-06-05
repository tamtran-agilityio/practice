/*global _,faker */
var Application = Application || {};

;(function(App) {
	// body...
	'use strict';

	function UserStore() {
		this.users = JSON.parse(localStorage.getItem('users'));
	}

	// create random 50 users anf save to localStorage
	UserStore.prototype.createUsers = function createUsers(amount) {
		// body...
		if (!localStorage.getItem('users')) {
			var users = _.range(amount).map(function(count) {
				return {
					id: ++count,
					name: faker.name.findName(),
					address: faker.address.streetAddress(),
					email: faker.internet.email()
				};
			});
			this.saveUser(users, ++amount);
		}
	};

	// get all user from local
	UserStore.prototype.getAllUser = function getAllUser() {
		// body...
		return _.map(this.users, function(user) {
			return new App.User(user.id, user.name, user.address, user.email);
		});
	};

	// get user current from local
	UserStore.prototype.getCurrentId = function setCurrentId() {
		// body...
		var currentId = localStorage.getItem('currentId');
		if (currentId) {
			return currentId;
		}
	};

	// save user into localstorage
	UserStore.prototype.saveUser = function saveUser(listUser, currentId) {
		// body...
		var users = _.map(listUser, function(user) {
			return {
				id: user.id === undefined ? user.getId(): user.id,
				name: user.name,
				address: user.address,
				email: user.email
			};
		});
		localStorage.setItem('users', JSON.stringify(users));
		
		if (arguments[1]) {
			localStorage.setItem('currentId', currentId);
		}
	};

	App.UserStore = UserStore;
})(Application);