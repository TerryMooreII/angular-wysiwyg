var app = angular.module('app', ['colorpicker.module', 'wysiwyg.module'])

app.controller('MyCtrl', function($scope) {
  $scope.data = {
    text: "hello"
  }
})