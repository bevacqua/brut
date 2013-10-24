(function (angular) {
    'use strict';

    var module = angular.module('brut');

    module.controller('lv-controller', [
        '$scope', '$log',
        function ($scope, $log) {
            $log.log($scope);
            $scope.articles = [{ heading: 'foo!' }];
        }
    ]);
})(angular);
