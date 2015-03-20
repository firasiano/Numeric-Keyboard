(function(){
'use stric';

angular.module('numericKeyboard').factory('numericKeyboardService',numericKeyboardService);

function numericKeyboardService(){
	var model = null;
	var opened = false;
	var maxLength = null;
	var getterSetter = null;
	var doneEditing = false;

	var service = {
		setModel: setModel,
		clear: clear,
		setModelValue: setModelValue,
		isDone: isDone,
		done: done,
		append: append,
		getModel: getModel,
		open: open,
		isOpened: isOpened,
		close: close,
		maxLength: setMaxLength,
		getterSetter: setGetterSetter
	};

	return service;

	function setModel(newModel){
		model = newModel;
	}

	function clear(){
		model.$viewValue = "";
		model.$render();
	}

	function setModelValue(){
		doneEditing = true;
		if(model.$viewValue===""){
			model.$rollbackViewValue();
			return;
		}
		if(getterSetter){
			model.$viewValue  = getterSetter({newValue: model.$viewValue});
			model.$commitViewValue();
			return;
			// scope.ngBind = model.$viewValue;
		}
		model.$commitViewValue();

	}
	function isDone(){
		return doneEditing;
	}
	function done(){
		
		this.setModelValue();
		this.close();
	}

	function append(key){
		if(maxLength){
			if(model.$viewValue.length >= maxLength){
				return;
			}
		}
		model.$viewValue += key;
		model.$render();
	}

	function getModel(){
		return model.$viewValue;
	}

	function open(){
		maxLength = null;
		doneEditing = false;
		model = "";
		getterSetter = null;
		opened = true;
	}

	function isOpened(){
		return opened;
	}
	function close(){
		opened = false;
	}
	function setMaxLength(max){
		maxLength = max;
	}
	function setGetterSetter(GS){
		getterSetter = GS;
	}
}
})();