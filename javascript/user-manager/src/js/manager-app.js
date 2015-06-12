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
		} catch (err) {
			window.confirm('Error input:' + err);
		}
	};

	/**
	 * execute event click button add user, update , delete, edit
	 */
	AppManager.prototype.handlerEvent = function handlerEvent(obj) {
		// body...

		var clickNode = $(event.target);
		var userNode = $(this).parentsUntil('tr').parent();
		var nodeId = userNode.attr('data-id');
		
		// handler event when click button add user
		$('#add-user').click(function(event) {
			event.preventDefault();

			if (obj.checkInfo()) {
				obj.userManager.addUser();
			}

			obj.resetForm();

		});

		// handler event when click button edit user
		$('#edit-user').click(function(event) {
			event.preventDefault();

			var id = $(userId).val();

			if (!_.isNaN(parseInt(id))) {
				obj.userManager.editUser(id);
			}

			obj.resetForm();

		});
		$(viewAll).on('click', 'button', function(event) {
			event.preventDefault();
			var clickNode = $(event.target);
			var userNode = $(this).parentsUntil('tr').parent();
			var nodeId = userNode.attr('data-id');

			// handler event click button delete
			if (clickNode.hasClass('user-delete')) {
				if (window.confirm('Use sure delete the user')) {
					obj.userManager.delUser(userNode, nodeId);
					this.userManager = new App.UserList();
					$('<h3 class="text-danger">The number user ' + this.userManager.countSearch() + '</h3>').insertAfter($('#searchform'));
				}
			}

			// handler event click button edit
			if (clickNode.hasClass('user-edit')) {
				var index = obj.userManager.findIdCurrent(nodeId);
				obj.userManager.viewInputEdit(obj.userManager.listUsers[index]);
			}
		});

	// handler form search
		$('#searchform').submit(function(event) {
			event.preventDefault();
			var keySearch = $(keyFind).val();
			var resultSearch = obj.userManager.searchUser(keySearch);
			obj.resultSearchShow(resultSearch);
			this.userManager = new App.UserList();
					$('<h3 class="text-danger">The number user ' + this.userManager.countSearch() + '</h3>').insertAfter($('#searchform'));
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
		$(addUser).text('Add user');
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
