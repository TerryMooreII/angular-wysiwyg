
I have not had time to update this project in a long time which has caused me to fall behind on many bugs listed in the issues page. If you still depend on this project and would like to contribute please let me know or submit pull requests. 
==================

Angular WYSIWYG directive.
===========================


![Awesome Shot] (https://raw.github.com/TerryMooreII/angular-wysiwyg/master/screenshots/screenshot.png)


Pull Requests Welcome
-------------------------


Demo
----

```
$ git clone https://github.com/TerryMooreII/angular-wysiwyg.git
$ npm install 
$ gulp server
```
Open browser to http://localhost:4000/demo


Installation
------------
`bower install angular-wysiwyg`


Required dependancies
-----------------------
* [AngularJS] (http://www.angularjs.com) 
* [Font Awesome] (http://fortawesome.github.io/Font-Awesome/)
* [Twitter Bootstrap] (http://getbootstrap.com/2.3.2/)
* [bootstrap-color-picker] (https://github.com/buberdds/angular-bootstrap-colorpicker)

Install each dependancy to your AngularJS project.

Add `'wysiwyg.module'` to your main angular.module like so
```javascript
angular.module('myapp', ['myApp.controllers', 'myApp.services', 'wysiwyg.module']);
````


Usage
------------
```html
<wysiwyg textarea-id="question" textarea-class="form-control"  textarea-height="80px" textarea-name="textareaQuestion" textarea-required ng-model="yourModel.model" enable-bootstrap-title="true" textarea-menu="yourModel.customMenu"></wysiwyg>
```
Options
-----------

Option|Description
---------------------|---------------
**ng-model**		 | 			REQUIRED - The angular data model
**textarea-id** 	 |			The id to assign to the editable div
**textarea-class**	 |			The class(es) to assign to the the editable div
**textarea-height**	 |			If the height is not specified in a text-area class then the hight of the editable div (default: 80px)
**textarea-name**	 |			The name attribute of the editable div 
**textarea-required**|			True/False HTML/AngularJS required validation
**enable-bootstrap-title**|		True/False whether or not to show the button hover title styled with bootstrap	
**textarea-menu**    |          Customize the wysiwyg buttons and button groups ***See Below** If nothing is specified then the default buttons and groups will be shows.
**textarea-custom-menu** | Create a customized menu
**textarea-custom-functions** | Allow add your custom function to your custom element
**disabled**  |          Disable the buttons and wysiwig area 

Buttons
--------------

If you don't need all of the buttons and functions of the default WYSIWYG editor you can customize it.

To do so you need to create a scope variable in your controller.  This variable be an array that contains arrays of button groups.

```javascript
	
	//This also happens to be the default menu options.
	$scope.yourModel.customMenu = [
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
```

So above each array will end up being a group of the specified buttons. 

**Note:**  The `font` and `font-size` dropdowns must be in thier own group.  

List of possible buttons |
------------|
bold |
italic | 
underline | 
strikethrough | 
subscript |
superscript |
font | 
font-size |
font-color | 
hilite-color |
remove-format |
ordered-list |
unordered-list |
outdent |
indent |
left-justify |
right-justify |
center-justify |
code |
paragraph |
quote |
link |
image |

Custom elements
--------------

You can add you own button or select element

````html
<wysiwyg textarea-id="question" textarea-class="form-control"  textarea-height="80px" textarea-name="textareaQuestion" textarea-required ng-model="yourModel.model" enable-bootstrap-title="true" textarea-menu="yourModel.menu" textarea-custom-menu="yourModel.customMenu" textarea-custom-functions="yourModel.customFunctions"></wysiwyg>
```

```javascript
var insertVariables = {
      '0': 'Choose one',
      'a': 'Insert a',
      'b': 'Insert b'
    };
    var insertOptions = [];
    for (var i in insertVariables) {
      insertOptions.push({
        tag: 'option',
        attributes: [{
          name: 'value',
          value: i
        }],
        text: insertVariables[i]
      });
    }
    $scope.yourModel = {};
    $scope.yourModel.customMenu = {
      'myInsertElement': {
        tag: 'select',
        classes: 'form-control wysiwyg-select',
        attributes: [{
          name: 'ng-model',
          value: 'myInsertElement'
        }, {
          name: 'ng-init',
          value: 'myInsertElement = "0"'
        }, {
          name: 'ng-change',
          value: 'chInsert(this)'
        }],
        data: insertOptions,
      },
    };

    $scope.yourModel.customFunctions = {
      chInsert: function(scope) {
        if (scope.myInsertElement != '0') {
          document.execCommand("insertHTML", false, scope.myInsertElement);
          scope.myInsertElement = '0';
        }
      }
    };
    $scope.yourModel.menu = [
      ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
      ['format-block'],
      ['font'],
      ['font-size'],
      ['font-color', 'hilite-color'],
      ['remove-format'],
      ['ordered-list', 'unordered-list', 'outdent', 'indent'],
      ['left-justify', 'center-justify', 'right-justify'],
      ['code', 'quote', 'paragraph'],
      ['link', 'image'],
      ['myInsertElement']
    ];
```