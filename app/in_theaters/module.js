/*
* @Author: luofengda
* @Date:   2016-12-12 17:06:00
* @Last Modified by:   luofengda
* @Last Modified time: 2016-12-13 15:32:36
*/

(function(angular){

	angular.module('moviecat.in_theaters',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/in_theaters',{
			templateUrl:'./in_theaters/view.html',
			controller:'InTheatersContorller'
		});
	}]).controller('InTheatersContorller', 
	['$scope','$http','jsonpService', function($scope,$http,jsonpService){
		// jsonpService.jsonp('http://api.douban.com/v2/movie/in_theaters',{
		// 	start:0,
		// 	count:5
		// },function(data){
		// 	$scope.movie=data;
		// 	// 要给他触发脏检查的机制
		// 	$scope.$apply();

		// }) 
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