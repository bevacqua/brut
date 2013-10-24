(function (angular) {
    'use strict';

    var module = angular.module('brut');

    module.controller('listviewCtrl', [
        '$scope', '$log',
        function ($scope, $log) {
            $log.log($scope);
        }
    ]);
})(angular);
