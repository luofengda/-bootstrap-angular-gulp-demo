/*
* @Author: luofengda
* @Date:   2016-12-12 17:06:00
* @Last Modified by:   luofengda
* @Last Modified time: 2016-12-13 20:22:45
*/

(function(angular){

	angular.module('moviecat.coming_soon',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		// :page? 使用路由来获取页码数  前面加：表示一个参数
		$routeProvider.when('/coming_soon/:page?',{
			templateUrl:'./coming_soon/view.html',
			controller:'Coming_soonContorller'


		});
	}]).controller('Coming_soonContorller', 
	['$scope','$http','$routeParams','$route','jsonpService', 
	function($scope,$http,$routeParams,$route,jsonpService){
		// 当前处于第几页、 因为要使用路由进行数据的获取
		// $scope.curPage=1;
		$scope.curPage=$routeParams.page||1;
		// 每页显示多少条数据
		$scope.pageSize=5;
		// 计算每一个的起始页
		var moiveStart=($scope.curPage-1)*$scope.pageSize;
		jsonpService.jsonp('http://api.douban.com/v2/movie/coming_soon',{
			start:moiveStart,
			count:$scope.pageSize
		},function(data){
			console.log(data);
			$scope.movie=data;
			// 计算总的页码数
			$scope.totalPages=Math.ceil(data.total/$scope.pageSize);
			// console.log($scope.totalPages);
			// console.log($scope.curPage);

			// 要给他触发脏检查的机制
			$scope.$apply();

		}) ;
		$scope.goPage=function(curPage){
			if (curPage<=0||curPage>$scope.totalPages) {
				return;
			};
			// curPage 表示传递过来的当前页
			$scope.curPage=curPage;
			// 作用：
			// 		通过调用这个方法，调用路由自带的方法来更新路由中的参数
			$route.updateParams({page:curPage});
		}
		// $http({
		// 	method:'GET',
		// 	url:'./coming_soon/datas.json'
		// }).then(function(response){
		// 	console.log(response);
		// 	$scope.movie=response.data;
		// }, function(response){

		// })
	}])


})(angular)