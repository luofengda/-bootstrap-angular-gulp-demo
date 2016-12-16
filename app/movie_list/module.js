/*
* @Author: luofengda
* @Date:   2016-12-12 17:06:00
* @Last Modified by:   luofengda
* @Last Modified time: 2016-12-16 22:53:38
*/

(function(angular){

	angular.module('moviecat.movie_list',['ngRoute'])
	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
			// 1.6 版本以后
				$locationProvider.hashPrefix('');
		// :page? 使用路由来获取页码数  前面加：表示一个参数
		$routeProvider.when('/:movieList/:page?',{
			templateUrl:'./movie_list/view.html',
			controller:'MovieListContorller'


		});
	}]).controller('MovieListContorller', 
	['$scope','$http','$routeParams','$route','jsonpService', 
	function($scope,$http,$routeParams,$route,jsonpService){
		$scope.mask=true;
		// 当前处于第几页、 因为要使用路由进行数据的获取
		// $scope.curPage=1;
		// console.log($routeParams.page);
		$scope.curPage=$routeParams.page||1;
		// 每页显示多少条数据
		$scope.pageSize=5;
		// 计算每一个的起始页
		var moiveStart=($scope.curPage-1)*$scope.pageSize;
		jsonpService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieList,{
			start:moiveStart,
			count:$scope.pageSize,
			// webapi 的服务端只会获取它想要的参数，对于其他额外的参数，是不影响到现有功能的！
			q: $routeParams.q || ''	// 获取路由的参数，用于搜索功能
		},function(data){
			$scope.movie=data;
			// 计算总的页码数
			$scope.totalPages=Math.ceil(data.total/$scope.pageSize);
			// console.log($scope.totalPages);
			// console.log($scope.curPage);
			

			$scope.mask=false;

			// 要给他触发脏检查的机制
			$scope.$apply();
			

		}) ;
		$scope.goPage=function(curPage){
			if (curPage<=0||curPage>$scope.totalPages) {
				return;
			};
			// 因为传递过来数数据已经经过处理，值已经改变，所以不用接收
			// curPage 表示传递过来的当前页 
			// $scope.curPage=curPage;
			// 作用：
			// 		通过调用这个方法，调用路由自带的方法来更新路由中的参数
			$route.updateParams({page:curPage});
		}
	}])


})(angular)