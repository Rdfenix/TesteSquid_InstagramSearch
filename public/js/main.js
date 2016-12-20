angular.module('instaSearc', ['ngRoute', 'ngResource']).config(function($routeProvider, $httpProvider){

  $httpProvider.interceptors.push('myInteceptor');

  $routeProvider.when('/', {
    templateUrl: 'partials/search.html',
    controller: 'ListController'
  });
  $routeProvider.when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'SearchController'
  });
  $routeProvider.when('/list/:id', {
    templateUrl: 'partials/tag.html',
    controller: 'ListController'
  });

  $routeProvider.when('/auth', {
    templateUrl: 'partials/auth.html'
  });

  $routeProvider.otherwise({redicteTo: '/'});

});
