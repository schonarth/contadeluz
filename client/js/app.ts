'use strict';
(function(){
	interface Aparelho {
		nome: string;
		potenciaPadrao: number;
		horasUsoPadrao: number;
	}
	
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
	
	app.run(function($rootScope, $log, AparelhosFactory){
		
		$log.info("Angulando...", $rootScope);
		
		$rootScope.aparelhos = AparelhosFactory.getAparelhos();
	});
	
	app.factory('AparelhosFactory', function(){
		return {
			getAparelhos: function(){
				var aparelhos: Aparelho[] = [];
				aparelhos.push({
					nome: "Ar condicionado",
					potenciaPadrao: 1400,
					horasUsoPadrao: 0
				});

				return aparelhos;
			}
		};
	});
	
})();