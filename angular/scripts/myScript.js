/// <reference path="angular.min.js" />
var myApp = angular
			.module("myModule",[])
			.controller("myController",function($scope){
				var location = {
					name : "United State of America",
					capital : "Washington, D.C.",
					flag :  "./images/usa_flag.jpg"
				};


				var employees = [
					{ firstName: "Apple",  lastName: "Hasting", birth: new Date("November 23 , 1980"), gender: "Male", salary: 5500.36 },
					{ firstName: "Bennay", lastName: "Ceaser", birth: new Date("May 30 , 1975"), gender: "Male", salary: 250.256 },
					{ firstName: "Cathay", lastName: "Edmond", birth: new Date("July 5 , 1989"), gender: "Female", salary: 331324500.44 },
					{ firstName: "Denny", lastName: "Lowis", birth: new Date("Jun 14 , 1991"), gender: "Male", salary: 453010.253 },
					{ firstName: "Edmond", lastName: "King", birth: new Date("Feb 14 , 1955"), gender: "Female", salary: 5233010.953 },
				];

				var countries = [
					{
						name: "UK",
						cities: [
							{ name: "London" },
							{ name: "Manchester" },
							{ name: "Birmingham" }
						]
					},

					{
						name: "US",
						cities: [
							{ name: "Los Angeles" },
							{ name: "Chicago" },
							{ name: "Houston" }
						]
					},

					{
						name: "India",
						cities: [
							{ name: "Hyderabad" },
							{ name: "Chenai" },
							{ name: "Mambai" }
						]
					},
				];

				var technologies = [
					{ name: "C#", likes: 0 , dislikes: 0 },
					{ name: "ASP.NET", likes: 0 , dislikes: 0 },
					{ name: "SQL Server", likes: 0 , dislikes: 0 },
					{ name: "AngularJS", likes: 0 , dislikes: 0 },
					{ name: "PHP", likes: 0 , dislikes: 0 }
				];

				$scope.location = location;
				$scope.employees = employees;
				$scope.countries = countries;
				$scope.technologies = technologies;
				$scope.sortColumn = "name";
				$scope.reverseSort = false;

				$scope.incrementLikes = function(technology){
					technology.likes++;
				}

				$scope.incrementDislikes = function(technology){
					technology.dislikes++;
				}

				$scope.sortData = function(column){
					$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
					$scope.sortColumn = column;

				}

				$scope.getSortClass = function(column){
					if ($scope.sortColumn == column){
						return $scope.reverseSort ? 'arrow_down' : 'arrow_up';
					}

					return '';

				}

				$scope.rowLimit = 3;		
	
				var animal = [
					{ name: 'piggy', age: 11 },
					{ name: 'doggy', age: 23 },
					{ name: 'monkey', age: 35 },
					{ name: 'kitty', age: 46 }
				]

				$scope.animal = animal;
				$scope.animalSortColumn = 'age';
				$scope.animalreverseSort = false;

				$scope.animalSortData = function(column){
					$scope.animalreverseSort = $scope.animalSortColumn = column ? !$scope.animalreverseSort : false;
					$scope.animalSortColumn = column;
				}

				$scope.getAnimalSortClass = function(column){
					if ($scope.animalSortColumn == column) { 
						return $scope.animalreverseSort ? 'arrow_up' : 'arrow_down';
					}
					return '';
				};

				$scope.employeeSearch = function(item){
		
					if (item.firstName.toLowerCase().indexOf("denny") != -1){
						console.log(item.firstName);
						console.log(item);
					}

				// 	if ( $scope.searchEmployee2 == undefined ) {
				// 		return true;
				// 	}
				// 	else {
				// 		if ( item.name.toLowerCase().indexOf( $scope.searchEmployee2.toLowerCase() != -1 ) )
				// 		 console.log('found');	
					// }
					return true;
				
				};

			});