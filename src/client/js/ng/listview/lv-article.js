(function (angular) {
    'use strict';

    var module = angular.module('brut');

    console.log('foo');

    module.directive('lv-article', [
        '$log',
        function ($log) {
            $log.log('registering..');
            return {
                restrict: 'E',
                scope: true,
                templateUrl: 'listview/lv-article',
                link: function (scope, element) {
                    $log.log('lva', scope, element);
                }
            };
        }
    ]);
})(angular);
