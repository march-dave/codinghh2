'use strict';

var app = angular.module('nameOfApp');

app.controller('homeCtrl', function($scope, FacedetectService, $http) {

  $scope.url = 'https://avatars.slack-edge.com/2015-10-26/13273420229_f4c6c019a05e6e880054_512.jpg';
  var url = 'https://avatars.slack-edge.com/2015-10-26/13273420229_f4c6c019a05e6e880054_512.jpg';

  $scope.detectImage = ()  => {

    url = $scope.url;
    var obj = {
      url: url
    }

    var s = FacedetectService.sendImage(obj).then(function(res)
    {
        FacedetectService.getById(res.data._id)
        .then(function(res){
          $scope.faceRectangle = res.data;
          $scope.faceRectangle.top = res.data.faceRectangle.top;
          $scope.faceRectangle.left = res.data.faceRectangle.left;
          $scope.faceRectangle.width = res.data.faceRectangle.width;
          $scope.faceRectangle.height = res.data.faceRectangle.height;
        })
     } );
  }
});
