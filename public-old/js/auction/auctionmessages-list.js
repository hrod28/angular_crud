(function() {
  'use strict';

  angular.module('app')
    .component('messagesList', {
      require: {
        layout: '^app'
      },
      templateUrl: '/js/messages/messages-list.template.html',
      controller: controller
    });

  controller.$inject = ['$http'];
  function controller($http) {
    const vm = this


    vm.$onInit = onInit;
    vm.createMessage = createMessage;
    vm.createChefMessage = createChefMessage;

    function onInit() {
      $http.get('http://cap-backend.herokuapp.com/api/chefs')
      .then(response => vm.chefmessages = response.data);
      $http.get('http://cap-backend.herokuapp.com/api/brewers')
        .then(response => vm.messages = response.data);
    }

    function createMessage() {
      $http.post('http://cap-backend.herokuapp.com/api/brewers', vm.message)
        .then(response => {
          console.log("response", response.data);
          vm.messages.push(response.data);
          delete vm.message;
        });
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
