define(['angularAMD', 'router'], function (angularAMD) {
  angular.module('app.routes', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      views: {
        '': angularAMD.route({
          templateUrl: 'app/home/index.html',
          controller: 'homeCtrl',
          //set params to controller url
          controllerUrl: 'app/home/controller.js'
        }),
        'user@home': angularAMD.route({
          templateUrl: 'app/user/index.html',
          controller: 'userCtrl',
          controllerUrl: 'app/user/controller.js'
        }),
        'history@home': angularAMD.route({
          templateUrl: 'app/history/index.html',
          controller: 'historyCtrl',
          controllerUrl: 'app/history/controller.js'
        })
      }
    })
    .state('user',
      angularAMD.route({
       url:'/user/:name?ref',
       templateUrl: 'app/user/index.html',
       controller: 'userCtrl',
       controllerUrl: 'app/user/controller.js'
      })
    )
    .state('history',
      angularAMD.route({
        url: '/history/:user_id?history',
        templateUrl: 'app/history/index.html',
        controller: 'historyCtrl',
        controllerUrl: 'app/history/controller.js'
      })
    )
    $urlRouterProvider.otherwise('/home')
  })
})
