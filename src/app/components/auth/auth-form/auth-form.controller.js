function AuthFormController() {
    var vm = this;
    vm.$onChanges = function(changes) {
        if(changes.user) {
            vm.user = angular.copy(vm.user);
        }
    }

    vm.submitForm = function() {
        vm.onSubmit({
            $event: {
                user: vm.user
            }
        });
    };
}

angular.module('components.auth')
.controller('AuthFormController', AuthFormController);