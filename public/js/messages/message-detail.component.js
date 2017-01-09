(function() {
  'use strict'

  angular.module('app')
    .component('messageDetail', {
      templateUrl: '/js/messages/message-detail.template.html',
      controller: controller
    })

  controller.$inject = ['$http', '$stateParams', '$state']
  function controller($http, $stateParams, $state) {
    const vm = this

    vm.$onInit = onInit
    vm.updateMessage = updateMessage
    vm.deleteMessage = deleteMessage

    function onInit() {
      $http.get(`/messages/${$stateParams.id}`)
        .then(response => {
          vm.message = response.data
        })
    }

    function updateMessage() {
      $http.patch(`/messages/${$stateParams.id}`, vm.message)
        .then(response => {
            $state.go('home')
        })
    }

    function deleteMessage() {
      $http.delete(`/messages/${$stateParams.id}`)
        .then(response => {
            $state.go('home')
        })
    }
  }

}());
