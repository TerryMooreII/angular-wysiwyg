var app = angular.module('app', ['colorpicker.module', 'wysiwyg.module'])

app.controller('MyCtrl', function($scope) {
  $scope.data = {
    text: "hello"
  }
  $scope.disabled = false;
  $scope.menu = [['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'], ['font']]
  $scope.setDisabled = function(){
  	$scope.disabled = !$scope.disabled;
  }
})