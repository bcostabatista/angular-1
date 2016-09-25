define(['js/app'], function (app) {
  app.controller('homeCtrl', function ($scope, $state, $timeout) {
    $scope.pageClass = 'page-home'
    $scope.submit = function () {
      if(typeof $scope.user === 'undefined' || $scope.user === '') {
        $scope.error = true
        $scope.msg = 'Name not given! :/'
        $timeout(function(){
          $scope.error = false
        }, 2000)
      } else {
        $state.go('user', {
          name: $scope.user.name,
          ref: 5569854 //optional
        })
      }
    }
    $scope.math = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
    $scope.sum = function () {
      var numbers = {
        num1: (isNaN(parseInt($scope.math.num1)) ? 0 : parseInt($scope.math.num1)),
        num2: (isNaN(parseInt($scope.math.num2)) ? 0 : parseInt($scope.math.num2)),
        num3: (isNaN(parseInt($scope.math.num3)) ? 0 : parseInt($scope.math.num3))
      }
      $scope.math.num4 = numbers.num1 + numbers.num2 + numbers.num3
    }
    $scope.spread = function () {
      var totalFields = 3
      var division = $scope.math.num4 / totalFields
      $scope.math = {
        num1: division,
        num2: division,
        num3: division,
        num4: $scope.math.num4
      }
    }
  })
})
