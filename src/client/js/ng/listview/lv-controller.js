(function (angular) {
    'use strict';

    var module = angular.module('brut');

    module.controller('lv-controller', [
        '$scope',
        function ($scope) {
            $scope.articles = [{ heading: 'foo!' }];
        }
    ]);
})(angular);
