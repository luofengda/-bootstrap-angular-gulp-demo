/*
* @Author: luofengda
* @Date:   2016-12-12 17:06:00
* @Last Modified by:   luofengda
* @Last Modified time: 2016-12-12 21:39:46
*/

(function(angular){

	angular.module('moviecat.in_theaters',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/in_theaters',{
			templateUrl:'./in_theaters/view.html',
			controller:'InTheatersContorller'
		});
	}]).controller('InTheatersContorller', ['$scope','$http', function($scope,$http){
		 
		$http({
			method:'GET',
			url:'./in_theaters/datas.json'
		}).then(function(response){
			console.log(response);
			$scope.movie=response.data;
		}, function(response){

		})
	}])


})(angular)