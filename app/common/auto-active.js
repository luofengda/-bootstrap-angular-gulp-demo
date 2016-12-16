/*
* @Author: luofengda
* @Date:   2016-12-16 22:54:07
* @Last Modified by:   luofengda
* @Last Modified time: 2016-12-16 23:09:46
*/

(function(angular){

	angular.module('moviecat.autoActive',[])
	.directive('autoActive', ['$location', function($location){
		// Runs during compile
		return {
			link: function($scope, iElm) {
				// 根据url，获取url的参数，然后，与当前元素的子元素a的href属性进行匹配
					// 如果匹配成功了，就给当前元素添加类
					// 
					// 可以通过 $location.url() 获取到url的值
					// 要目：只要url的值发生了变化，样式就要重新计算
				$scope.location=$location;
				$scope.$watch('location.url()',function(newValue){
					var aLink=iElm.children().attr('href');
					if(aLink.indexOf(newValue)>-1){
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
					}
				})
			}
		};
	}]);


})(angular)