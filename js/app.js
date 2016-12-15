(function() {
  'use strict';
  angular
    .module('WhereToWed', ['ui.router'])
    .config(Router)

  function Router($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    //user homepage after login
    // .state('userhome', {
    //   url: '/home',
    //   templateUrl: 'user.html',
    //   controller: ''
    // })
      //build a column sortable list of all venues
    .state('index', {
      url: '/',
      templateUrl: 'index.html',
      controller: 'VenuesController',
      controllerAs: 'venuesVm'
    })
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
