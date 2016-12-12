/*
* @Author: luofengda
* @Date:   2016-12-12 17:06:00
* @Last Modified by:   luofengda
* @Last Modified time: 2016-12-12 21:48:19
*/

(function(angular){

	angular.module('moviecat.top250',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/top250',{
			templateUrl:'./top250/view.html',
			contorller:'Top250Contorller'
		});
	}]).controller('Top250Contorller', ['$scope', function($scope){
		
	}])


})(angular)