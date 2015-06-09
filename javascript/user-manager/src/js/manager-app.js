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

	function AppManager() {
		this.userManager = [];
	}

	// load web on browser
	AppManager.prototype.startApp = function startApp() {
		// body...
		// checking localstorage create 50 users
		try {
			if (!localStorage.getItem('users')) {
				var userStore = new Application.UserStore();
				userStore.createUsers(50);
			}

			this.userManager = new App.UserManager();
			this.userManager.viewAllUser(this.userManager);
			this.handlerEvent(this);
		}
		catch (err) {
			window.confirm("Input is " + err);
		}
	};

	// execute event click button submit
	AppManager.prototype.handlerEvent = function handlerEvent(obj) {
		// body...
		// handler view all user
		$(viewAll).on('click', 'button', function(event) {
			event.preventDefault();

			var clickNode = $(event.target);
			var userNode = $(this).parentsUntil('tr').parent();
			var nodeId = userNode.attr('data-id');
			if (clickNode.hasClass('user-delete')) {
				if (window.confirm('Use sure delete the user')) {
					obj.userManager.delUser(userNode, nodeId);
				}
			}
			if (clickNode.hasClass('user-edit')) {
				var index = obj.userManager.findIdCurrent(nodeId);
				obj.userManager.viewInputEdit(obj.userManager.listUsers[index]);
			}
		});

		// handler event edit and add
		$(addUser).click(function(event) {
			event.preventDefault();
			var id = $(userId).val();

			if (!isNaN(parseInt(id))) {
				obj.userManager.editUser(id);
			} else {
				if (obj.checkInfo() !== true ) {
					obj.userManager.addUser();
				}
			}
			obj.resetForm();
		});
		// handler form search
		$('#searchform').submit(function(event) {
			event.preventDefault();
			var keySearch = $('#keysearch').val();
			var resultSearch = obj.userManager.searchUser(keySearch);
			obj.resultSearchShow(resultSearch);
		});
	};

	AppManager.prototype.resultSearchShow = function resultSearchShow(resultSearch) {
		// body...
		if (_.isString($(viewAll)) === false) {
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
	};

	// checking infor user before add
	AppManager.prototype.checkInfo = function checkInfo() {
		// body...
		var name = $(userName).val();
		var address = $(userAddress).val();
		var email = $(userEmail).val();
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		try {
			if ((name === '') || (address === "")) {
				window.confirm('Please enter infor user');
				name.focus();
			}
			if (!testEmail.test(email)) {
				window.confirm('Please enter infor email example abc@gmail.com');
				email.focus();
			}
			window.confirm('Add an user success');
			return false;
		}
		catch (err) {
			window.confirm('Add an user not success');
			return true;
		}
	};

	App.AppManager = AppManager;
})(Application);
