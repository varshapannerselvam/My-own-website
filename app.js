var app = angular.module('personalWebsiteApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutController'
    })
    .when('/portfolio', {
      templateUrl: 'portfolio.html',
      controller: 'PortfolioController'
    })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactController'
    })
    .when('/collection', {
      templateUrl: 'collection.html',
      controller: 'collectionController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('MainController', function($scope) {
  $scope.pageTitle = 'My Personal Website';
});

app.controller('HomeController', function($scope) {
  // Home page controller logic
});

app.controller('AboutController', function($scope) {
  // About page controller logic
});

app.controller('PortfolioController', function($scope) {
  // Portfolio page controller logic
});
app.controller('collectionController', function($scope) {
  // Portfolio page controller logic
});

app.controller('ContactController', function($scope) {
  // Contact page controller logic
});
