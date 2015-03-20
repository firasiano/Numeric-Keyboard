(function(){
'use strict';
angular.module('numericKeyboard', []);
angular.module('numericKeyboard').directive('numericKeyboard', numericKeyboard);

function numericKeyboard(numericKeyboardService){
	return{
		restrict: 'E',
		require: '',
		scope:{},
		template: template,
		link: function(scope){
			scope.numericService = numericKeyboardService;

			scope.append = function(key){
				scope.numericService.append(key);
			};

			scope.done = function(){
				scope.numericService.done();
			};
			scope.clear = function(){
				scope.numericService.clear();
			};
			scope.close = function(){
				scope.numericService.done();
				scope.isOpen = false;
			};
			scope.stopPropagation = function(event){
				event.stopPropagation();
			};


			scope.$watch('numericService.isOpened()', function(){
				scope.isOpen = scope.numericService.isOpened();
			}, true);
		}
	};
}
var template = '\
<div class="keyboard" ng-show="isOpen" ng-click="close()">\
	<div class="keyboard-content" ng-click="stopPropagation($event)">\
		<table>\
			<tr>\
				<td><button class="keyboard-cell" ng-click="append(\'1\')">1</button>\
				</td>\
				<td><button class="keyboard-cell" ng-click="append(\'2\')">2</button>\
				</td>\
				<td><button class="keyboard-cell" ng-click="append(\'3\')">3</button>\
				</td>\
			</tr>\
\
			<tr>\
				<td><button class="keyboard-cell" ng-click="append(\'4\')">4</button>\
				</td>\
				<td><button class="keyboard-cell" ng-click="append(\'5\')">5</button>\
				</td>\
				<td><button class="keyboard-cell" ng-click="append(\'6\')">6</button>\
				</td>\
			</tr>\
\
			<tr>\
				<td><button class="keyboard-cell" ng-click="append(\'7\')">7</button>\
				</td>\
				<td><button class="keyboard-cell" ng-click="append(\'8\')">8</button>\
				</td>\
				<td><button class="keyboard-cell" ng-click="append(\'9\')">9</button>\
				</td>\
			</tr>\
\
			<tr>\
				<td><button class="keyboard-cell keyboard-clear" ng-click="clear()">Clear</button>\
				</td>\
				<td><button class="keyboard-cell" ng-click="append(\'0\')">0</button>\
				</td>\
				<td><button class="keyboard-cell keyboard-done" ng-click="done()">Set</button>\
				</td>\
			</tr>\
		</table>\
	</div>\
</div>\
';
})();

