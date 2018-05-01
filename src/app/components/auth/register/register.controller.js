function RegisterController(AuthService) {
    var vm = this;

    vm.$onInit = function() {
        vm.error = null;
        vm.user = {
            email: '',
            password: ''
        }
    }

    vm.createUser = function(event) {
        return AuthService
        .register(event.user)
        .then(function(user){
            console.log('Success register!!!');
        },function(reason){
            vm.error = reason.message;
         });
    }
}

angular.module('components.auth')
.controller('RegisterController', RegisterController);