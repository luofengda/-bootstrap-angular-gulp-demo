/*
 * @Author: luofengda
 * @Date:   2016-12-16 16:21:25
 * @Last Modified by:   luofengda
 * @Last Modified time: 2016-12-16 21:20:50
 */
(function(angular) {
    angular.module('moviecat.movie_info', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/movieinfo/:id?', {
                templateUrl: './movie_info/view.html',
                controller: 'MovieinfoController'
            });
        }])
        .controller('MovieinfoController', ['$scope', '$routeParams', 'jsonpService',
            function($scope, $routeParams, jsonpService) {
                // 获取到当前电影信息的id值
                var id = $routeParams.id;
                jsonpService.jsonp('https://api.douban.com/v2/movie/subject/' + id, {},
                    function(data) {
                        $scope.movieDetail = data;
                        console.log(data);
                        $scope.$apply();
                    });
            }
        ]);

})(angular)
