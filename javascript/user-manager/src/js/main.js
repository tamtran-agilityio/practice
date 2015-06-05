var Application = Application || {};

// execute application 
$(document).ready(function() {
	'use strict';
	var appManager = new Application.AppManager();
	appManager.startApp();
});