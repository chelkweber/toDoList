var app = angular.module('toDoModule', []); 

app.controller('toDoController', function($scope) {
	$scope.list = [];
	$scope.addTask = function(newTask) {
		console.log(newTask);
		$scope.list.push({name: newTask.name});
		console.log($scope.list);
	}
});