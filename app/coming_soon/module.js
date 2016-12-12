/*
* @Author: luofengda
* @Date:   2016-12-12 17:06:00
* @Last Modified by:   luofengda
* @Last Modified time: 2016-12-12 20:12:29
*/

(function(angular){

	angular.module('moviecat.coming_soon',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/coming_soon',{
			templateUrl:'./coming_soon/view.html',
			contorller:'ComingSoonContorller'
		});
	}]).controller('ComingSoonController', ['$scope', function($scope){
		
	}])


})(angular)