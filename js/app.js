define(['angularAMD', 'angularAnimate', 'router', 'directives'], function (angularAMD) {
  var app = angular.module('app', [
    'app.routes',
    'ngAnimate'
  ])
  app.run(function ($templateCache) {
    $templateCache.removeAll()
  })
  return angularAMD.bootstrap(app)
})
