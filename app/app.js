(function(angular) {
    // "use strict";
    // start your ride
    angular.module('moviecat', [
    		'moviecat.home',
            'moviecat.movie_info',
            'moviecat.movie_list',
            'moivecat.jsonp'
        ])
        .controller('MainController', ['$scope', '$location', function($scope, $location) {
     	 $scope.query = '';

      // 用来进行电影搜索
      $scope.search = function() {
      	// q 需要在 公共的api中调用 在movie_list
        // $location.url() 不传入参数表示获取url地址
        //                  传入参数，表示设置url
        $location.url('/search?q=' + $scope.query);
      };
    }])
})(angular);
