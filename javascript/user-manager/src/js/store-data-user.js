var Application = Application || {};

;(function(App) {
	// body...
	'use strict';

	function UserStore() {
		this.userdata = JSON.parse(localStorage.getItem('userdata'));
	}

	// create random 50 users anf save to localStorage
	UserStore.prototype.CreateUserData = function(amount) {
		// body...
		if (!localStorage.getItem('userdata')) {
			var userdata = _range(amount).map(function(count)) {
				return {
					id: ++count,
					name: faker.name.findName(),
					address: faker.name.streetAddress(),
					email: faker.internet.email()
				};
			};
		}
	};

	// get all user from local
	UserStore.prototype.getAllUser = function getAllUser() {
		// body...
		return _.map(this.userdata), function(userdata) {
			// return list data
			return new App.User(userdata.id, userdata.name, userdata.address, userdata.email);
		};
	};

	// get user current from local
	UserStore.prototype.currentId = function currentId() {
	// body...
		var currentId = localStorage(.getItem('currentId'));
		if (!currentId) {
			return currentId;
		};
	};
})(Application);