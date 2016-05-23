'use strict';

var app = angular.module('nameOfApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html', controller: 'homeCtrl',
    resolve: {
        FacedetectResult: function(FacedetectService) {
          return FacedetectService.sendImage();
        }
    }
  })

  $urlRouterProvider.otherwise('/')
});
