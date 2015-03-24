var app = angular.module('app', ['colorpicker.module', 'wysiwyg.module'])

app.controller('MyCtrl', function($scope) {
    $scope.data = {
        text: "hello"
    }
    $scope.disabled = false;
    $scope.menu = [
        ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
        ['format-block'],
        ['font'],
        ['font-size'],
        ['font-color', 'hilite-color'],
        ['remove-format'],
        ['ordered-list', 'unordered-list', 'outdent', 'indent'],
        ['left-justify', 'center-justify', 'right-justify'],
        ['code', 'quote', 'paragraph'],
        ['link', 'image']
    ];

    $scope.setDisabled = function() {
        $scope.disabled = !$scope.disabled;
    }
})