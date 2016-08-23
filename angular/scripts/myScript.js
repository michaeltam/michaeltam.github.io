sqlServerJsonObj = 'http://localhost/github/michaeltam.github.io/angular/serverjobj.html'

/// <reference path="angular.min.js" />
var myApp = angular
			.module("myModule",[])
			.controller("myController",function($scope, $http, stringService, $location, $anchorScroll){

				$http.get(sqlServerJsonObj)
				.then(function (response) {
					$scope.sqlServerJsonObj = response.data;
				});

				var location = {
					name : "United State of America",
					capital : "Washington, D.C.",
					flag :  "./images/usa_flag.jpg"
				};
				//Custom filter see line 134


				var employees = [
					{ firstName: "Apple",  lastName: "Hasting", birth: new Date("November 23 , 1980"), gender: "Male",genderSub: 1, salary: 5500.36 },
					{ firstName: "Bennay", lastName: "Ceaser", birth: new Date("May 30 , 1975"), gender: "Male",genderSub: 1, salary: 250.256 },
					{ firstName: "Cathay", lastName: "Edmond", birth: new Date("July 5 , 1989"), gender: "Female",genderSub: 2, salary: 331324500.44 },
					{ firstName: "Denny", lastName: "Lowis", birth: new Date("Jun 14 , 1991"), gender: "Male",genderSub: 3 , salary: 453010.253 },
					{ firstName: "Edmond", lastName: "King", birth: new Date("Feb 14 , 1955"), gender: "Female",genderSub: 2, salary: 5233010.953 },
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
					if ($scope.searchEmployee2 == undefined || $scope.searchEmployee2 == '') { return true; }
					else {
						if ( 
							item.firstName.toLowerCase().indexOf($scope.searchEmployee2.toLowerCase()) != -1 ||
							item.lastName.toLowerCase().indexOf($scope.searchEmployee2.toLowerCase()) != -1
							) {
							return true;
						}
						
						/*if ( item.gender.indexOf($scope.searchEmployee2) != -1 ) return true;*/

					} 
					
					return false;
				};

				$scope.employee_table_view = './view/employee_table.html';
				$scope.employee_list_view = './view/employee_list.html';
				$scope.employeeView = $scope.employee_table_view;

				$scope.strUpdate = function(input){
					$scope.output = stringService.spaceoutCapitalizedString(input);
				};

				$scope.scrollTo = function(scrollLocation){
					// scroll to specific hash when hash is updated
					$location.hash(scrollLocation); //append info to address bar
					$anchorScroll(); //read the hash and scroll to the specified location
					// $anchorScroll.yoffset = 230;
				};

				$scope.schollToFieldset = function(scrollLocation){
					$location.hash(scrollLocation); //append info to address bar
					$anchorScroll(); //read the hash and scroll to the specified location
					// $anchorScroll.yoffset = 30;
				};

			});

