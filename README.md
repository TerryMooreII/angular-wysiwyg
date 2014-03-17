
Angular WYSIWYG directive.
===========================

Required dependancies
-----------------------
* [AngularJS] (http://www.angularjs.com) 
* [Font Awesome] (http://http://fortawesome.github.io/Font-Awesome/)
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
<wysiwyg textarea-id="question" textarea-class="form-control"  textarea-height="80px" textarea-name="textareaQuestion" textarea-required ng-model="yourModel.model" enable-bootstrap-title="true"></wysiwyg>
```
Options
-----------
REQUIRED
`**ng-model**					The angular data model`

Optional
`**textarea-id** 				The id to assign to the editable div`
`**textarea-class**				The class(es) to assign to the the editable div`
`**textarea-height**			If the height is not specified in a text-area class then the hight of the editable div (default: 80px)`
`**textarea-name**				The name attribute of the editable div `
`**textarea-required**			True/False HTML/AngularJS required validation`
`**enable-bootstrap-title**		True/False whether or not to show the button hover title styled with bootstrap	`





