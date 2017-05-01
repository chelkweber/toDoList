var app = angular.module('ourModule', []); //needs to be first line of script file, ourModule is the name of the module not the actaul app

//app.controller('ourController', function($scope){
//	console.log('ourController has loaded');//important for when we have multiple controllers and we need to check which ones are loading correctly
//	$scope.name = 'Beyonce';
//	
//	$scope.dogs = [
//		{name: 'Munch', breed: 'demon', age: 2}, 
//		{name: 'Lilly', breed: 'cavalier', age: 13}, 
//		{name: 'Fred', breed: 'yorkie-mutt', age: 4}, {name: 'Chip', breed: 'wiener-mutt', age: 1}
//	];
//	
//	$scope.addDog = function(newDog) {
//		$scope.dogs.push(newDog);
//	};
//});

app.controller('ourController', function($scope) {
	$scope.list = [];
	$scope.addItem = function(newItem) {
		console.log(newItem);
		$scope.list.push({name: newItem.name, cost: newItem.cost});
		console.log($scope.list);
	}
});