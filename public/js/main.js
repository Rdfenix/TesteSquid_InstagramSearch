angular.module('instaSearc', ['ngRoute', 'ngResource']).config(function($routeProvider){

  $routeProvider.when('/', {
    templateUrl: 'partials/search.html',
    controller: 'SearchController'
  });
  $routeProvider.when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  });
  $routeProvider.when('/list/:id', {
    templateUrl: 'partials/tag.html',
    controller: 'ListController'
  });

  $routeProvider.otherwise({redicteTo: '/'});

});
