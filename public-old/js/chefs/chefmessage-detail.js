(function() {
  'use strict'


  angular.module('app')
    .component('chefmessageDetail', {
      templateUrl: '/js/chefs/chefmessage-detail.html',
      controller: controller
    })

  controller.$inject = ['$http', '$stateParams', '$state']
  function controller($http, $stateParams, $state) {
    const vm = this

    vm.$onInit = onInit
    vm.updateChefMessage = updateChefMessage
    vm.deleteChefMessage = deleteChefMessage

    function onInit() {
      console.log('get request line 20');
      $http.get(`http://cap-backend.herokuapp.com/api/chefs/${$stateParams.id}`)
        .then(response => {
          vm.chefmessage = response.data
          console.log(response.data);
        })
    }

    function updateChefMessage() {
      $http.patch(`http://cap-backend.herokuapp.com/api/chefs/${$stateParams.id}`, vm.chefmessage)
        .then(response => {
            $state.go('chefmessages-list')
        })
    }
    function deleteChefMessage() {
      $http.delete(`http://cap-backend.herokuapp.com/api/chefs/${$stateParams.id}`)
        .then(response => {
            $state.go('chefmessages-list')
        })
    }
  }

}());
