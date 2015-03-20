angular.module('keyboardTest', ['numericKeyboard']);

angular.module('keyboardTest').controller('mainController', function($scope){
	$scope.simple = "Click to enter whatever numers you want";
	$scope.max = "Click to enter numers, maximum length is 3, values allowed 100 to 500, on abondon alert me";
	$scope.time = "Click here to enter Time";
	$scope.alertMe = function(){
		alert('you abondoned me and while I\'m empty :\'(, I\'ll go back to how I was');
	};

	var _selected;

	$scope.getterSetter = function(newSelected){
 		if(angular.isUndefined(newSelected)){
 			return _selected;
 		}
 		
 		if( newSelected < 100){
 			return (_selected = "100");
 		}
 		if( newSelected > 500){
 			return (_selected= "500");
 		}
	 	return (_selected=newSelected);
 	}
});