(function() {
  'use strict';

  angular.module('WhereToWed')
    .controller('VenuesController', VenuesController);

  VenuesController.$inject = ['$http']

  function VenuesController($http) {
    var vm = this
    vm.all = []
    vm.reverse = true

    function getVenues(){
      $http
        .get('https://wheretowed.herokuapp.com/api/venues')
        .then(function(response){
          vm.all=response.data
          console.log(response)
          console.log(vm.all)
        })
    }

    getVenues()

  }

}());
