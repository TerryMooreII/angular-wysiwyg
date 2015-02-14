var app = angular.module('app', ['colorpicker.module', 'wysiwyg.module'])

app.controller('MyCtrl', function($scope) {
  $scope.data = {
    text: "hello"
  }
  $scope.disabled = false;
  $scope.menu = [['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'custom'], ['font']];

  $scope.custom = {
  			'custom': {
                tag: 'button',
                classes: 'btn btn-default',
                text:'Custom',
                attributes: [{
                    name: "title",
                    value: 'Custom'
                }, {
                    name: 'ng-click',
                    value: 'alert(\'me\') '
                }, {
                    name: 'ng-class',
                    value: '{ active: isBold }'
                }],
                data: [{
                    tag: 'i',
                    classes: 'fa fa-bold'
                }]
            }
        };

        
  $scope.setDisabled = function(){
  	$scope.disabled = !$scope.disabled;
  }
})