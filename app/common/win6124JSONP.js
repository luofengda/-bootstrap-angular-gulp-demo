/*
 * @Author: Administrator
 * @Date:   2016-12-13 15:07:06
 * @Last Modified by:   luofengda
 * @Last Modified time: 2016-12-13 15:34:18
 */
(function(angular) {
    angular.module('moivecat.jsonp', [])
        .service('jsonpService', ['$window', function($window) {
            var doc = $window.document;
            this.jsonp = function(url, params, callback) {
                url += '?';
                for (var k in params) {
                    url += k + '=' + params[k] + '&';
                };
                
                var cbName = 'win6124' + (new Date() - 0);
                url += 'callback=' + cbName;

                // window[cbName] = function(data) {
                //     callback(data);
                //     doc.body.removeChild(script);
                //     delete window[cbName];
                // }
                var script = doc.createElement('script');
                script.src = url;
                doc.body.appendChild(script);

                // 调用函数
                $window[cbName] = function(data) {
                    callback(data);
                }
            };

        }])
})(angular)
