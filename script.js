var app = angular.module('toDoModule', []); 

app.controller('toDoController', function($scope) {
	$scope.apptList = [];
	$scope.taskList = [];
	
	$scope.addAppt = function(newAppt) {
		console.log(newAppt);
		$scope.apptList.push({name: newAppt.name, time: newAppt.time});
		console.log($scope.apptList);
	}
	
	$scope.addTask = function(newTask) {
		console.log(newTask);
		$scope.taskList.push({name: newTask.name});
		console.log($scope.taskList);
	}

});