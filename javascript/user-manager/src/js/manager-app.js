var Application = Application || {};

;(function(App) {
	// body...
	'use strict';

	function AppManager() {
		this.userManager = {};
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
			this.userManager = new App.UserManager();
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
				obj.userManager.listUsers[index].viewInputEdit();
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
		$('#add-user').text('Add user');
	};

	App.AppManager = AppManager;
})(Application);