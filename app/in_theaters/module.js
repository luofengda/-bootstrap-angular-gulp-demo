/*
* @Author: luofengda
* @Date:   2016-12-12 17:06:00
* @Last Modified by:   luofengda
* @Last Modified time: 2016-12-12 20:06:18
*/

(function(angular){

	angular.module('moviecat.in_theaters',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/in_theaters',{
			templateUrl:'./in_theaters/view.html',
			contorller:'InTheatersContorller'
		});
	}]).controller('InTheatersController', ['$scope', function($scope){
		
	}])


})(angular)