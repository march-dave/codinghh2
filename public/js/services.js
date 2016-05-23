'use strict';

var app = angular.module('nameOfApp');

// localhost:3000/items
app.service('FacedetectService', function($http, $q) {
  this.sendImage = obj => {
    return $http.post('/api/facedetects', obj);
  };

  this.getById = function(id) {
     return $http.get(`/api/facedetects/${id}`);
   };
});
