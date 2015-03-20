(function (){
	'use strict';

	angular.module('numericKeyboard').directive('numericKeyboardInput', numericKeyboardInput);

	function numericKeyboardInput(numericKeyboardService, $timeout, $browser){
		return{
			restrict: 'A',
			require: '^ngModel',
			scope:{
				ngBind:"=",
				getterSetter: "&",
				abondonCallback: "&"
			},
			link: function(scope, element, attrs, ctrl){
				scope.numericService = numericKeyboardService;

				element.bind('click', function(){
					var element_to_scroll_to = document.getElementById(element.attr("id"));
					element_to_scroll_to.scrollIntoView({block: "end", behavior: "smooth"});
					element.addClass("keyboard-focus");

					ctrl.$viewValue = "";
					scope.numericService.open();
					if(attrs.maxLength) scope.numericService.maxLength(attrs.maxLength);
					
					if(angular.isDefined(attrs.getterSetter)){
						scope.numericService.getterSetter(scope.getterSetter);
					}
					else{
						scope.numericService.getterSetter(null) ;
					}

					scope.numericService.setModel(ctrl);

					$timeout(function(){
						scope.$digest();
					});



					scope.$watch('numericService.isDone()', function(value){
						if(value){
							element.removeClass("keyboard-focus");
							if(ctrl.$modelValue !== ctrl.$$lastCommittedViewValue){
								scope.abondonCallback();
							}
							scope.ngBind = ctrl.$viewValue;
							$browser.defer(listener);
						}
					}, true);

					
					scope.$watch('numericService.getModel()', function(){
						$browser.defer(listener);
						// if(attrs.formatter==="time"){
						// 	timeFormatter(ctrl.$viewValue);
						// }
						scope.ngBind = ctrl.$viewValue;
						// element.val(ctrl.$viewValue);
					}, true);
				});


				var listener = function(){
					var formatted = ctrl.$viewValue;
					if(attrs.formatter==="time"){
						if(ctrl.$viewValue && ctrl.$viewValue.length>6){
							ctrl.$viewValue = ctrl.$viewValue.slice(0,6);
						}
						formatted = timeFormatter(ctrl.$viewValue);
					}
					// scope.ngBind = ctrl.$viewValue;
					element.html(formatted);
				};

				String.prototype.replaceAt=function(index, character) {
				    return this.substr(0, index) + character + this.substr(index+character.length);
				};
				
				var timeFormatter = function(value){
					var _time = "00:00:00";
					var curr_index = 7;
					for(var i = value.length-1; i >= 0; i--){
						if(curr_index<0){
							break;
						}
						_time = _time.replaceAt(curr_index, value[i]);
						curr_index--;
						if(curr_index===5 || curr_index === 2){
							curr_index--;
						}
					}
					return _time;
				};
				
			}
		};
	}
})();