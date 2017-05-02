var app = angular.module('toDoModule', []); 

app.controller('toDoController', function($scope) {
	$scope.apptList = [];
	$scope.taskList = [];
	//add new appointment
	$scope.addAppt = function(newAppt) {
		$scope.apptList.push({date: newAppt.date, name: newAppt.name, time: newAppt.time});
		console.log($scope.apptList);
	}
	//add new task
	$scope.addTask = function(newTask) {
		$scope.taskList.push({name: newTask.name});
		console.log($scope.taskList);
	}
	//removed appointment
	$scope.removeAppt=function($index) { 
  		$scope.apptList.splice($index,1);  
	}
	//remove task
	$scope.removeTask=function($index) { 
  		$scope.taskList.splice($index,1);  
	}

});
