/// <reference path="angular.min.js" />
var myApp = angular
			.module("myModule",[])
			.controller("myController",function($scope){
				var country = {
					name : "United State of America",
					capital : "Washington, D.C.",
					flag :  "./images/usa_flag.jpg"
				};

				$scope.country = country
			});