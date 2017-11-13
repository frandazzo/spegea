(function(){

	var pippo = angular.module('middleware', []);

	// pippo.service('mathService', function(){

	// this.somma = function(addendo1, addendo2){
	// 	return parseFloat(addendo1) + parseFloat(addendo2);
	// }
//});


	pippo.factory('mathService', function(){

		var counter = 0;

		var math = {};
		math.somma = function(addendo1, addendo2){
			counter++;
			console.log('counter...' + counter);
			return parseFloat(addendo1) + parseFloat(addendo2);

			
		}

		return math;

	});






})();