function LoginController(AuthService) {
    var vm = this;

    vm.$onInit = function() {
      vm.error = null;
      vm.user = {
          email: '',
          password: ''
      }
  }

  vm.loginUser = function(event) {
      return AuthService
      .login(event.user)
      .then(function(user){
          console.log('Success login!!!');
      },function(reason){
          vm.error = reason.message;
       });
  }

  }
  
  angular
    .module('components.auth')
    .controller('LoginController', LoginController);