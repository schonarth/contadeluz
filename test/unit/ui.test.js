'use strict';
// angular.module('importar módulo adicional aqui', []).constant("CONSTANTE_AQUI", null);

//beforeEach(module('importar módulo a ser testadp aqui'))
//*
describe("Conta de Luz", function() {
	var $rootScope, scope;
	
	beforeEach(inject(function(_$rootScope_) {
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();
		
		// declara o controller e injeta o novo scope 
		//$controller('NomeDoController', {$scope: scope});
	}));
	
	it("roda a app", function() {
		console.info("Rodando app angular...");
		expect($rootScope).not.toBe(null);
	});
});