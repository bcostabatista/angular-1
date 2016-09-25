require.config({
  baseUrl: '/',
  urlArgs: "bust=v2",
  //I should be using bower here, but for the test, I'm manually downloading the 3rd party scripts.
  //I am doing this way because of a little issue I'm having with my bower installation. Sorry
  paths: {
      'angular': 'js/angular',
      'router': 'js/ui-router',
      'angularAMD': 'js/angular-amd',
      'angularAnimate': 'js/angular-animate.min',
      'directives': 'js/directives'
  },
  shim: {
    'angularAMD': ['angular'],
    'router': ['angular'],
    'angularAnimate': ['angular'],
    'directives': ['angular']
  },
  deps: ['js/app']
})
require([
  'js/routes'
])
