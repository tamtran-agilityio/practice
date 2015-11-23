/*global _,faker */
var Application = Application || {};

;(function(App) {
	// body...
	'use strict';

	function UserStore() {
		this.users = JSON.parse(localStorage.getItem('users'));
	}

	// create random 50 users anf save to localStorage
	UserStore.prototype.createUsers = function createUsers() {
		// body...
		var amount = parseInt(50);

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

	/**
	 * get value id current
	 * return {value id}
	 */
	UserStore.prototype.getCurrentId = function setCurrentId() {
		// body...
		var currentId = localStorage.getItem('currentId');
		if (!_.isNull(currentId)) {
			return currentId;
		}
	};

	/**
	 * save user into localstorage
	 * @param  {[user]}
	 * @param  {[id]}
	 */
	UserStore.prototype.saveUser = function saveUser(listUser, currentId) {
		// body...
		var users = _.map(listUser, function(user) {
			return {
				id: user.id === undefined ? user.getId() : user.id,
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

/*global */
var Application = Application || {};

;(function(App) {
	'use strict';

	var viewAll = '#view-all-user';

	/**
	 * point manager user
	 * {int} userId
	 * {character} name
	 * {character} address
	 * [A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i {character} email
	 */
	function User(userId, name, address, email) {
		this.name = name ;
		this.address = address;
		this.email = email;
		var id = userId;

		this.getId = function() {
			return id;
		};

	}

	// view user in DOM html
	User.prototype.viewUser = function viewUser() {
		// body...
		var userNode = $([
			'<tr data-id="', this.getId(), '">',
			'<td class = "user-id">', this.getId(), '</td>',
			'<td class = "user-name">', this.name, '</td>',
			'<td class = "user-address">', this.address, '</td>',
			'<td class = "user-email">', this.email, '</td>',
			'<td><button class="user-edit" href="#">Edit</button></td>',
			'<td><button class ="user-delete" href ="#">Delete</button></td>',
			'</tr>'
		].join(''));

		userNode.appendTo($(viewAll));
	};

	// change the value of an element in DOM
	User.prototype.editUser = function editUser(name, address, email) {
		// body...
		this.name = name;
		this.address = address;
		this.email = email;

	};

	// delete user follow id
	User.prototype.delUser = function delUser(id) {
		// body...
		this.id = id;
	};

	App.User = User;

})(Application);

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

/*global */
var Application = Application || {};

;(function(App) {
	// body...
	'use strict';

	var viewAll = '#view-all-user';
	var addUser = '#add-user';
	var userId = '#userId';
	var userName = '#userName';
	var userAddress = '#userAddress';
	var userEmail = '#userEmail';
	var keyFind = '#keysearch';

	function AppManager() {
		this.userManager = new App.UserList();
	}

	/**
	 * load web on browser 50 user
	 * invoke handles event when execute
	 */
	AppManager.prototype.startApp = function startApp() {
		// body...
		// show 50 users form localstorage
		var userStore = new Application.UserStore();

		try {
			userStore.createUsers();
			this.userManager.viewAllUser(this.userManager);
			this.handlerEvent(this);
			this.userManager = new App.UserList();
			var count = this.userManager.countSearch();
			$('.count-user').text(count);
		} catch (err) {
			window.confirm('Error input:' + err);
		}
	};

	/**
	 * execute event click button add user, update , delete, edit
	 */
	AppManager.prototype.handlerEvent = function handlerEvent(obj) {
		// body...

		$('#edit-user').hide();

		// handler event when click button add user
		$('#add-user').click(function(event) {
			event.preventDefault();

			if (obj.checkInfo()) {
				obj.userManager.addUser();
				this.userManager = new App.UserList();
				var count = this.userManager.countSearch();
				$('.count-user').text(count);
			}

			obj.resetForm();
		});

		// handler event when click button update user
		$('#edit-user').click(function(event) {
			event.preventDefault();

			var id = $(userId).val();
			if (!_.isNaN(parseInt(id))) {
				obj.userManager.editUser(id);
			}

			obj.resetForm();
			$('#add-user').show();
			$('#edit-user').hide();
		});

		$(viewAll).on('click', function(event) {
			// handler event click button delete
			$('.user-delete').click(function(event) {
				event.preventDefault();

				var userNode = $(this).parentsUntil('tr').parent();
				var nodeId = userNode.attr('data-id');
				obj.userManager.delUser(userNode, nodeId);
				obj.resetForm();
				this.userManager = new App.UserList();
				var count = this.userManager.countSearch();
				$('.count-user').text(count);
			});

			$('.user-edit').click(function(event) {
				event.preventDefault();

				var userNode = $(this).parentsUntil('tr').parent();
				var nodeId = userNode.attr('data-id');
				var index = obj.userManager.findIdCurrent(nodeId);

				obj.userManager.viewInputEdit(obj.userManager.listUsers[index]);
				$('#add-user').hide();
				$('#edit-user').show();
			});
		});

		// handler form search
		$('#searchform').submit(function(event) {
			event.preventDefault();
			var keySearch = $(keyFind).val();
			var resultSearch = obj.userManager.searchUser(keySearch);
			obj.resultSearchShow(resultSearch);
		});
	};

	// find user in list users
	AppManager.prototype.resultSearchShow = function resultSearchShow(resultSearch) {
		// body...
		if (_.isString($(keyFind)) === false) {
			$(viewAll).empty();
			_.forEach(resultSearch, function(user) {
				user.viewUser();
			});
		}
	};

	//  reset value of input text in form
	AppManager.prototype.resetForm = function resetForm() {
		// body...
		$(userId).val('');
		$(userName).val('');
		$(userAddress).val('');
		$(userEmail).val('');
		$('h3.text-danger').remove();
	};

	// checking infor user before add
	AppManager.prototype.checkInfo = function checkInfo() {
		// body...
		var name = $(userName).val();
		var address = $(userAddress).val();
		var email = $(userEmail).val();
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

		try {
			if ((name === '') || (address === '')) {
				$('<h3 class="text-danger">Please enter infor user</h3>').insertAfter($('#add-user'));

				name.focus();
			}

			if (!testEmail.test(email)) {
				$('<h3 class="text-danger">Please enter infor email example abc@gmail.com</h3>').insertAfter($('#add-user'));

				email.focus();
			}

			window.confirm('Add an user success');
			return true;
		} catch (err) {
			window.confirm('Add an user not success');
			return false;
		}
	};

	App.AppManager = AppManager;
})(Application);

/*global*/
var Application = Application || {};

// checking support of storage of webserver
;(function(App) {

	function CheckingStorage() {
		return {
			getLocalStorage: function() {
				if (typeof Storage !== 'undefined') {
					return localStorage;
				} else {
					throw new Error('Sorry! No Web Storage Support!');
				}
			}
		};
	}

	App.CheckingStorage = CheckingStorage;
})(Application);

// execute application
$(document).ready(function() {
	'use strict';

	var appManager = new Application.AppManager();

	appManager.startApp();
});
