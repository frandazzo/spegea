app.controller("bodyController", function($scope, mathService){

		$scope.operations = [
			{
				operationName: "Moltiplicazione",
				operationValue: "m"

			},
						{
				operationName: "Addizione",
				operationValue: "s"

			}
		];

		$scope.selectedOperation = $scope.operations[0].operationValue;



		$scope.helloWorld = {};
		$scope.helloWorld.example = 'Sommatore';


		$scope.somma = 0;
		$scope.eseguiSomma = function(){
	//		$scope.somma = window.spegea.math.somma($scope.addendo1, $scope.addendo2);
			$scope.somma = mathService.somma($scope.addendo1, $scope.addendo2);
		};




		
});





