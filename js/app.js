(function() {
  'use strict';
  angular
    .module('WhereToWed', ['ui.router'])
    .config(Router)

  function Router($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    //home
    .state('home', {
      url: '/home',
      templateUrl: 'home.html'
    })
    //user homepage after login
    .state('user', {
      url: '/user',
      templateUrl: 'user.html',
      controller: 'SignInController',
      controllerAs: 'signInVm'
    })
      //build a column sortable list of all venues
    .state('venues', {
      url: '/venues',
      templateUrl: 'allVenues.html',
      controller: 'VenuesController',
      controllerAs: 'venuesVm'
    })
    .state('signin', {
      url: '/signin',
      templateUrl: 'signin.html',
      controller: 'SignInController',
      controllerAs: 'signInVm'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'signup.html',
      controller: 'SignInController',
      controllerAs: 'signInVm'
    })
  }

}());
