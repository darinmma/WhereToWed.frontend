(function() {
  'use strict';

  angular
    .module("WhereToWed")
    .controller("SignInController", SignInController)

    SignInController.$inject = ["$log", "authService", "userService", "$state"]

    function SignInController($log, authService, userService, $state) {
      var vm = this;

      vm.signUp = {
        email: "email",
        name: "name",
        password: "password",
        passwordConfirmation: "password"
      };
      vm.submitSignUp = submitSignUp;
      vm.logIn = {
        email:    "email",
        password: "password"
      };
      vm.submitLogIn = submitLogIn;
      vm.conflict = false;

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
              $state.go('index');
            },
            // on error
            function(err) {
              if (err.status === 409) vm.conflict = true;
              $log.info('Log In Error', err);
            }
          );
      }

      function submitLogIn() {
        console.log('click')
        authService
          .logIn(vm.logIn)
          .then(
            // on success
            function(decodedToken) {
              $log.info('Logged in!', decodedToken);
              $state.go('index');
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
