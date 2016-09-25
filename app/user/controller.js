define(['js/app'], function (app) {
  app.controller('userCtrl', function ($scope, $stateParams) {
    $scope.pageClass = 'page-user'
    $scope.user = $stateParams
  })
})
