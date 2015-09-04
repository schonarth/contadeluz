'use strict';
(function(){
	var app = angular.module('ContaDeLuz', []); //['ngResource', 'ui.bootstrap']);
	
	app.config(function($logProvider, $locationProvider){
	
	//*	
		$logProvider.debugEnabled(true) // TODO: importar constante
		$locationProvider.hashPrefix('!');
		/*
		$routeProvider.when('/login', {
			templateUrl: '/...',
			controller: 'LoginController'
		}).otherwise({
			redirectTo: '/login'
		});
		// */
	});
	
	app.run(function($rootScope, $log){
		
		$log.info("Angulando...", $rootScope);
		
	});
	
})();