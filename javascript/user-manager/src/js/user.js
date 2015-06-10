var Application = Application || {};

;(function(App) {
	'use strict';
	var viewAll = '#view-all-user';
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

}) (Application);
