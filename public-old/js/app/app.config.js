(function() {
  'use strict'

  angular.module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'home',
        parent: 'app',
        url: '/',
        component: 'messagesList',
      })
      .state({
       name: 'message-detail',
       parent: 'app',
       url: '/:id',
       component: 'messageDetail',
     })
      .state({
        name: 'chefmessages-list',
        parent: 'app',
        url: '/',
        component: 'chefmessagesList',
      })
      .state({
       name: 'chefmessage-detail',
       parent: 'app',
       url: '/:id',
       component: 'chefmessageDetail',
     })
      .state({
        name: 'dishes',
        parent: 'app',
        url: '/',
        component: 'dishesmessagesList',
      })
      .state({
       name: 'dishesmessage-detail',
       parent: 'app',
       url: '/:id',
       component: 'dishesmessageDetail',
     })
      .state({
        name: 'schedule',
        parent: 'app',
        url: '/',
        component: 'schedulemessagesList',
      })
      .state({
       name: 'schedulemessage-detail',
       parent: 'app',
       url: '/:id',
       component: 'schedulemessageDetail',
     })
      .state({
        name: 'auction',
        parent: 'app',
        url: '/',
        component: 'auctionmessagesList',
      })
      .state({
       name: 'auctionmessage-detail',
       parent: 'app',
       url: '/:id',
       component: 'auctionmessageDetail',
     })
      .state({
        name: 'thanks',
        parent: 'app',
        url: '/',
        component: 'thanksmessagesList',
      })
      .state({
       name: 'thanksmessage-detail',
       parent: 'app',
       url: '/:id',
       component: 'thanksmessageDetail',
     })
      .state({
        name: 'map',
        parent: 'app',
        url: '/',
        component: 'mapmessagesList',
      })
      .state({
       name: 'mapmessage-detail',
       parent: 'app',
       url: '/:id',
       component: 'mapmessageDetail',
     })
      .state({
        name: 'user',
        parent: 'app',
        url: '/',
        component: 'usermessagesList',
      })
      .state({
       name: 'usermessage-detail',
       parent: 'app',
       url: '/:id',
       component: 'usermessageDetail',
     })
  }

}());
