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
      console.log('get request line 20')
      $http.get(`http://cap-backend.herokuapp.com/api/brewers/${$stateParams.id}`)
        .then(response => {
          vm.message = response.data
          console.log(response.data);
        })
      
    }

    function updateMessage() {
      $http.patch(`http://cap-backend.herokuapp.com/api/brewers/${$stateParams.id}`, vm.message)
        .then(response => {
            $state.go('home')
        })
    }

    function deleteMessage() {
      $http.delete(`http://cap-backend.herokuapp.com/api/brewers/${$stateParams.id}`)
      .then(response => {
        $state.go('home')
      })
    }




  }

}());
