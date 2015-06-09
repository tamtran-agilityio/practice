var Application = Application || {};

// checking support of storage of webserver
;(function(App) {
	function CheckingStorage() {
		return {
	    getLocalStorage: function() {
	      if(typeof Storage !== 'undefined') {
	        return localStorage;
	      } else {
	        throw new Error('Sorry! No Web Storage Support!');
	      }
	    }
	  }
	}
	  App.CheckingStorage = CheckingStorage;
})(Application); 

// execute application 
$(document).ready(function() {
	'use strict';
	var appManager = new Application.AppManager();
	appManager.startApp();
});
