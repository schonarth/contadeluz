'use strict';
// angular.module('importar módulo adicional aqui', []).constant("CONSTANTE_AQUI", null);

beforeEach(module('ContaDeLuz'))

describe("Conta de Luz", function() {
	var $rootScope, scope;
	
	beforeEach(inject(function(_$rootScope_, AparelhosFactory) {
		$rootScope = _$rootScope_;
		$rootScope.aparelhos = AparelhosFactory.getAparelhos();
		
		//scope = $rootScope.$new();
		
		// declara o controller e injeta o novo scope 
		//$controller('NomeDoController', {$scope: scope});
	}));
	
	it("roda a app", function() {
		console.info("Rodando app angular...");
		expect($rootScope).not.toBe(undefined);
		expect($rootScope).not.toBe(null);
	});
	
	it("tem a lista de aparelhos", function() {
		var aparelhos = $rootScope.aparelhos;
		console.debug("Aparelhos", aparelhos);
		expect(aparelhos).not.toBe(undefined);
		expect(aparelhos.length).toBeGreaterThan(0);
	});
		
	it("um aparelho tem suas propriedades básicas", function() {
		var aparelho = $rootScope.aparelhos[0];
		expect(aparelho).not.toBe(undefined);
		expect(aparelho.nome).not.toBe(undefined);
		expect(aparelho.potenciaPadrao).not.toBe(undefined);
		expect(aparelho.horasUsoPadrao).not.toBe(undefined);
	});
});