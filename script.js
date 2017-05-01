var app = angular.module('toDoModule', []); 

app.controller('toDoController', function($scope) {
	$scope.apptList = [];
	$scope.taskList = [];
	
	$scope.addAppt = function(newAppt) {
		$scope.apptList.push({date: newAppt.date, name: newAppt.name, time: newAppt.time});
		console.log($scope.apptList);
	}
	
	$scope.addTask = function(newTask) {
		$scope.taskList.push({date: newTask.date, name: newTask.name});
		console.log($scope.taskList);
	}

});
