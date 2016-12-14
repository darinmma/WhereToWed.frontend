(function() {
  'use strict';

  VenueController.$inject = ['$http']

  angular.module('WhereToWed')
    .controller('VenueController', VenueController);

  function VenueController($http) {
    var vm = this
    vm.all = []

    function getVenues(){
      $http
        .get('http://localhost:3000/api/venues')
        .then(function(response){
          self.all=response.data.venue
        })
    }

    getVenues()
  }

}());
