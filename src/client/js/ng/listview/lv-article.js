(function (angular) {
    'use strict';

    var module = angular.module('brut');

    module.directive('lvArticle', [
        '$log',
        function ($log) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    data: '='
                },
                templateUrl: 'listview/article.html',
                link: function (scope) {

                    scope.vote = function (up) {
                        $log.log('vote!', up);
                    };

                    scope.share = function (target) {
                        $log.log('share!', target);
                    };

                    scope.comment = function () {
                        $log.log('comment!');
                    };
                }
            };
        }
    ]);
})(angular);
