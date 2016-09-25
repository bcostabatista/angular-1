define(['js/app'], function (app) {
  app.controller('historyCtrl', function ($scope) {
    $scope.pageClass = 'page-history'
    $scope.history = []
    var arrayCount = 50
    for(var i = 0; i < arrayCount; i++) {
      var arrayData = {
        num1: Math.floor((Math.random() * 133) + 1),
        num2: Math.floor((Math.random() * 233) + 1),
        num3: Math.floor((Math.random() * 433) + 1)
      }
      $scope.history.push(arrayData)
    }
    $scope.sortType = 'num1'
    $scope.sortReverse = false
  })
})
