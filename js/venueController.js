// When only the name of the module is passed in,
// the 'module' method returns the specified module.
(function() {
  'use strict';


  angular.module('WhereToWed')
    .controller('VenueController', VenueController);

  function VenueController() {
    var vm = this
    vm.venues = //ajax call to api/venues?
  }

}());
