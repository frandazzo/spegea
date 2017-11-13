app.controller("bodyController", function($scope, mathService){

		$scope.helloWorld = {};
		$scope.helloWorld.example = 'Sommatore';


		$scope.somma = 0;
		$scope.eseguiSomma = function(){
	//		$scope.somma = window.spegea.math.somma($scope.addendo1, $scope.addendo2);
			$scope.somma = mathService.somma($scope.addendo1, $scope.addendo2);
		};




		
});





