(function() {
  'use strict';

  angular.module('WhereToWed')
    .controller('VenuesController', VenuesController);

  VenuesController.$inject = ['$http']

  function VenuesController($http) {
    var vm = this
    vm.all = []

    function getVenues(){
      $http
        .get('http://localhost:3000/api/venues')
        .then(function(response){
          vm.all=response.data
          console.log(response)
          console.log(vm.all)
        })
    }

    getVenues()

  }

}());
