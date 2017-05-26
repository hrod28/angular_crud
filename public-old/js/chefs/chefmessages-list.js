(function() {
  'use strict';

  angular.module('app')
    .component('chefmessagesList', {
      require: {
        layout: '^app'
      },
      templateUrl: '/js/chefs/chefmessages-list.html',
      controller: controller
    });

  controller.$inject = ['$http'];
  function controller($http) {
    const vm = this


    vm.$onInit = onInit;
    vm.createChefMessage = createChefMessage;

    function onInit() {
      $http.get('http://cap-backend.herokuapp.com/api/chefs')
      .then(response => vm.chefmessages = response.data);

    }

    function createChefMessage() {
      $http.post('http://cap-backend.herokuapp.com/api/chefs', vm.chefmessage)
        .then(response => {
          console.log("response", response.data);
          vm.chefmessages.push(response.data);
          delete vm.chefmessage;
        });
    }

  }

}());
