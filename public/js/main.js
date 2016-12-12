angular.module('instaSearc', ['ngRoute']).config(function($routeProvider){

  $routeProvider.when('/', {
    templateUrl: 'partials/search.html',
    controller: 'SearchController'
  });
  $routeProvider.when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  });

  $routeProvider.otherwise({redicteTo: '/'});
  
});
