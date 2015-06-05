var Application = Application || {};

;(function(App) {
	// body...
	'use strict';

	function AppManager() {
		this.userManager = {};
		this.userManager = new App.UserManager();
	}

	// load web on browser
	AppManager.prototype.startApp = function startApp() {
		// body...
		// checking localstorage create 50 users
		if (!localStorage.getItem('users')) {
			var userStore = new Application.UserStore();
			userStore.createUsers(50);
		}

		this.userManager = new App.UserManager();

		this.userManager.viewAllUser(this.userManager);
		this.handlerEvent(this);
	};

	// execute event click button submit
	AppManager.prototype.handlerEvent = function handlerEvent(obj) {
		// body...
		$('#view-all-user').on('click', 'a', function(event) {
			event.preventDefault();
			var clickDel = $(event.target);
			var userNode = $(this).parentsUntil('tr').parent();
			var nodeId = userNode.attr('data-id');
			if (clickDel.hasClass('user-delete')) {
				if (window.confirm('Use sure delete the user')) {
					obj.userManager.delUser(userNode, nodeId);
				}
			}
		});
		$('#add-user').click(function(event) {
			event.preventDefault();
			obj.userManager.addUser();
			obj.resetForm();
		});
	};

	//  reset value of input text in form
	AppManager.prototype.resetForm = function resetForm() {
		// body...
		$('#userId').val('');
		$('#userName').val('');
		$('#userAddress').val('');
		$('#userEmail').val('');
	};

	App.AppManager = AppManager;
})(Application);