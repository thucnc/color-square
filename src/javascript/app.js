angular
.module('ColorSquareApp',[])
.controller('ColorSquareCtrl', ['$scope', function ($scope) {
    $scope.colors = [
        [{id: 1, value: 0},{id: 2, value: 0},{id: 3, value: 0},{id: 4, value: 0},{id: 5, value: 0},{id: 6, value: 0}],
        [{id: 21, value: 0},{id: 22, value: 0},{id: 23, value: 0},{id: 24, value: 0},{id: 25, value: 0},{id: 26, value: 0}],
        [{id: 31, value: 0},{id: 32, value: 0},{id: 33, value: 0},{id: 34, value: 0},{id: 35, value: 0},{id: 36, value: 0}],
        [{id: 41, value: 0},{id: 42, value: 0},{id: 43, value: 0},{id: 44, value: 0},{id: 45, value: 0},{id: 46, value: 0}],
        [{id: 51, value: 0},{id: 52, value: 0},{id: 53, value: 0},{id: 54, value: 0},{id: 55, value: 0},{id: 56, value: 0}],
        [{id: 61, value: 0},{id: 62, value: 0},{id: 63, value: 0},{id: 64, value: 0},{id: 65, value: 0},{id: 66, value: 0}]
        ];
        
    $scope.increase = function (cell) {
        cell.value = (cell.value + 1) % 5;
    }
}]);