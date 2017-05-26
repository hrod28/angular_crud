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
    vm.createUserMessage = createUserMessage;


    function onInit() {
      $http.get('http://cap-backend.herokuapp.com/api/users')
      .then(response => vm.usermessages = response.data);

    }

    function createUserMessage() {
      $http.post('http://cap-backend.herokuapp.com/api/users', vm.usermessage)
        .then(response => {
          console.log("response", response.data);
          vm.messages.push(response.data);
          delete vm.message;
        });
    }



  }

}());
