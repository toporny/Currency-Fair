(function() {

    'use strict';

    angular
        .module('authApp')
        .controller('myDashboardController', myDashboardController); 
 
    myDashboardController.$inject = []; 


    function myDashboardController() {  

        var vm = this;
        vm.showModal = showModal;
        vm.closeModal = closeModal;

        vm.first_value = '0';
        vm.second_value = '0';

        vm.action = action;
        vm.focus = focus;
        vm.blur = blur;

        vm.modalVisibility = false; 

        function showModal() {
          vm.modalVisibility = true; 
        }
        
        function closeModal() {
          vm.modalVisibility = false; 
        }
        
        function action() {
            alert('action'); 
        }
        
        function focus(i) {
            console.log('add currency sign in '+i+' field ..')
        }

        function blur(i) {
            console.log('remove currency sign in '+i+' field ..')
        }
        

             


    }
    
})();