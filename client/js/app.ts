//'use strict';
(function(){
	interface AparelhoTemplate {
		nome: string;
		potenciaPadrao: number;
		horasUsoPadrao: number;
	}
	
	class Aparelho {
		constructor(t: AparelhoTemplate): void {
			console.debug("Instanciando" t);
			this.nome = t.nome;
			this.potencia = t.potenciaPadrao;
			this.tempoUso = {
				dias: 0,
				horas: t.horasUsoPadrao,
				minutos: 0
			};
		};
		
		nome: string;
		potencia: number;
		quantidade: number;
		tempoUso: {
			dias: number,
			horas: number,
			minutos: number
		};

		private consumo: number;
		
		calculaConsumo(): void {
			var tempo = this.tempoUso.dias * (this.tempoUso.horas + (this.tempoUso.minutos / 60)));
			var kwh = this.potencia * this.quantidade;
			var consumo = kwh * tempo / 1000;
			
			//console.debug(kwh, tempo, consumo);
			
			this.consumo = consumo;
		}
		
		getConsumo(): number {
			if (!this.consumo)
				this.calculaConsumo();
				
			return this.consumo;
		}
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
			getAparelhos: function(): AparelhoTemplate{
				var aparelhos: AparelhoTemplate[] = [];
				aparelhos.push({
					nome: "Ar condicionado",
					potenciaPadrao: 1400,
					horasUsoPadrao: 0
				});

				return aparelhos;
			},
			getAparelho: function(template): Aparelho{
				return new Aparelho(template);
			}
		};
	});
	
	
	
})();