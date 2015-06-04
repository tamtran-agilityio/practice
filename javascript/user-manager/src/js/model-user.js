var Application = Application || {};

;(function(App) {
	'use strict';

	function User(userId, name, address, email) {
		this.name = name || [];
		this.address = address || [];
		this.email = email || [];
		var id = userId;

		this.getId = function() {
			return id;
		};

	}

	// view user in DOM html
	User.prototype.viewUser = function viewUser() {
		// body...
		var userNode = $([
			'<tr data-id="', this.getId(),'">',
			'<td class = "user-id">', this.getId(), '</td>',
			'<td class = "user-name">', this.name, '</td>',
			'<td class = "user-address">', this.address, '</td>',
			'<td class = "user-name">', this.email, '</td>',
			'<td><a class="user-edit" href="#">Edit</a></td>',
			'<td><a class ="user-delete" href ="#">X</a></td>',
			'</tr>'
		].join(''));

		userNode.appendTo($("#view-all-user"));
	};

	App.User = User;

}) (Application);
