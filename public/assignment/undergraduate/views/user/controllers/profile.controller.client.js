(function() {
    var app = angular.module('WebAppMaker');
    app.controller('profileController', profileController);
    function profileController($routeParams, UserService) {
        var vm = this;
        vm.userId = $routeParams["userId"];
        function init() {
            vm.user = UserService.findUserById(vm.userId);
        }
        init();
    }
})();