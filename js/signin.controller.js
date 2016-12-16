(function() {
  'use strict';

  angular
    .module("WhereToWed")
    .controller("SignInController", SignInController)

    SignInController.$inject = ["$log", "authService", "userService", "$state"]

    function SignInController($log, authService, userService, $state) {
      var vm = this;

      vm.signUp = {};
      vm.submitSignUp = submitSignUp;
      vm.logIn = {};
      vm.submitLogIn = submitLogIn;
      vm.conflict = false;
      vm.user = vm.logIn.email;

      // FUNCTIONS
      function submitSignUp() {
        userService
          .create(vm.signUp)
          .then(function(res) {
            return authService.logIn(vm.signUp);
          })
          .then(
            // on success
            function(decodedToken) {
              $log.info('Logged in!', decodedToken);
              $state.go('home');
            },
            // on error
            function(err) {
              if (err.status === 409) vm.conflict = true;
              $log.info('Log In Error', err);
            }
          );
      }

      function submitLogIn() {
        console.log()
        authService
          .logIn(vm.logIn)
          .then(
            // on success
            function(decodedToken) {
              $log.info('Logged in!', decodedToken);
              $state.go('home');
              console.log(vm.logIn.email)
            },
            // on error
            function(err) {
              $log.info('Error:', err);
            }
          );
      }

      $log.info("SignInController loaded!");
    }
  })();
