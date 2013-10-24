(function (angular) {
    'use strict';

    var module = angular.module('brut');

    module.controller('lv-controller', [
        '$scope',
        function ($scope) {
            $scope.articles = [{
                heading: 'No puede, no puede haber dicho eso.\nQuiero una lista de cosas que se puede haber puesto acá abajo, sin repetir y sin soplar',
                figure: 'https://fbexternal-a.akamaihd.net/safe_image.php?d=AQB_8EC-uLbgBjn2&w=398&h=208&url=http%3A%2F%2Fmedia01.ts.infobae.com%2Fadjuntos%2F164%2Fvideos%2F010%2F287%2F0010287064.jpg&cfs=1',
                caption: 'Silvina Luna: Estoy sana y si me puse algo en la cola, es problema mío | Pasó en la TV, Silvina Luna',
                tally: {
                    comments: 0,
                    votes: 1
                }
            }];
        }
    ]);
})(angular);
