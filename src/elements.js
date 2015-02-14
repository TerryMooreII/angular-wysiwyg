

function create(obj){
  var el; 
  if (obj.tag){
    el = document.createElement(obj.tag);
  }
  else if(obj.text){
    el = document.createElement('span');
  }
  else{
    console.log('cannot create this element.');
    el = document.createElement('span');
    return el; 
  } 
  
  if (obj.text){
    el.innerText = obj.text;
  }
  
  
  if (obj.classes){ 
    el.className = obj.classes;
  }
  
  if (obj.html){
    el.innerHTML = obj.html;
  }
  
  if(obj.attributes && obj.attributes.length){ 
    for(var i in obj.attributes){ 
      var attr = obj.attributes[i];
      if(attr.name && attr.value){
        el.setAttribute(attr.name, attr.value);  
      } 
    }
  }
  
  if (obj.data && obj.data.length){
    for (var item in obj.data){
      el.appendChild(create(obj.data[item]));
    }
  }
  
  return el;
}


var e = create(obj);


var x = $('div').html(e);
{
  'bold': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Bold'
      }, {
          name: 'ng-click',
          value: 'format(\'bold\')'
      }, {
          name: 'ng-class',
          value: '{ active: isBold }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-bold'
      }]
  }, 
  'italic': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Italic'
      }, {
          name: 'ng-click',
          value: 'format(\'italic\')'
      }, {
          name: 'ng-class',
          value: '{ active: isItalic }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-italic'
      }]
  }, 
  'underline': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Underline'
      }, {
          name: 'ng-click',
          value: 'format(\'underline\')'
      }, {
          name: 'ng-class',
          value: '{ active: isUnderline }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-underline'
      }]
  }, 
  'strikethrough': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Strikethrough'
      }, {
          name: 'ng-click',
          value: 'format(\'strikethrough\')'
      }, {
          name: 'ng-class',
          value: '{ active: isStrikethrough }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-strikethrough'
      }]
  }, 
  'subscript': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Subscript'
      }, {
          name: 'ng-click',
          value: 'format(\'subscript\')'
      }, {
          name: 'ng-class',
          value: '{ active: isSubscript }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-subscript'
      }]
  }, 
  'superscript': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Superscript'
      }, {
          name: 'ng-click',
          value: 'format(\'superscript\')'
      }, {
          name: 'ng-class',
          value: '{ active: isSuperscript }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-superscript'
      }]
  }, 
  'remove-format': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Remove Formatting'
      }, {
          name: 'ng-click',
          value: 'format(\'removeFormat\')'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-eraser'
      }]
  }, 
  'ordered-list': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Ordered List'
      }, {
          name: 'ng-click',
          value: 'format(\'insertorderedlist\')'
      }, {
          name: 'ng-class',
          value: '{ active: isOrderedList }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-list-ol'
      }]
  }, 
  'unordered-list': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Unordered List'
      }, {
          name: 'ng-click',
          value: 'format(\'insertunorderedlist\')'
      }, {
          name: 'ng-class',
          value: '{ active: isUnorderedList }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-list-ul'
      }]
  }, 
  'outdent': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Outdent'
      }, {
          name: 'ng-click',
          value: 'format(\'outdent\')'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-outdent'
      }]
  }, 
  'indent': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Indent'
      }, {
          name: 'ng-click',
          value: 'format(\'indent\')'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-indent'
      }]
  }, 
  'left-justify': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Left Justify'
      }, {
          name: 'ng-click',
          value: 'format(\'justifyleft\')'
      }, {
          name: 'ng-class',
          value: '{ active: isLeftJustified }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-align-left'
      }]
  }, 
  'center-justify': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Center Justify'
      }, {
          name: 'ng-click',
          value: 'format(\'justifycenter\')'
      }, {
          name: 'ng-class',
          value: '{ active: isCenterJustified }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-align-center'
      }]
  }, 
  'right-justify': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Right Justify'
      }, {
          name: 'ng-click',
          value: 'format(\'justifyright\')'
      }, {
          name: 'ng-class',
          value: '{ active: isRightJustified }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-align-right'
      }]
  }, 
  'code': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Code'
      }, {
          name: 'ng-click',
          value: 'format(\'formatblock\', \'pre\')'
      }, {
          name: 'ng-class',
          value: '{ active: isPre }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-code'
      }]
  }, 
  'quote': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Quote'
      }, {
          name: 'ng-click',
          value: 'format(\'formatblock\', \'blockquote\')'
      }, {
          name: 'ng-class',
          value: '{ active: isBlockquote }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-quote-right'
      }]
  }, 
  'paragraph': {
      tag: 'button',
      classes: 'btn btn-default',
      text: 'P',
      attributes: [{
          name: "title",
          value: 'Paragragh'
      }, {
          name: 'ng-click',
          value: 'format(\'insertParagraph\')'
      }, {
          name: 'ng-class',
          value: '{ active: isParagraph }'
      }]
  }, 
  'image': {
      tag: 'button',
      classes: 'btn btn-default',
      attributes: [{
          name: "title",
          value: 'Image'
      }, {
          name: 'ng-click',
          value: 'insertImage()'
      }, {
          name: 'ng-class',
          value: '{ active: isParagraph }'
      }],
      data: [{
          tag: 'i',
          classes: 'fa fa-picture-0'
      }]
  }, 
  'font-color': {
      tag: 'button',
      classes: 'btn btn-default wysiwyg-colorpicker wysiwyg-fontcolor',
      text: 'A',
      attributes: [{
          name: "title",
          value: 'Font Color'
      }, {
          name: 'colorpicker',
          value: 'rgba'
      }, {
          name: 'colorpicker-position',
          value: 'top'
      }, {
          name: 'ng-model',
          value: 'fontColor'
      }, {
          name: 'ng-change',
          value: 'setFontColor()'
      }]
  }, 
  'hilite-color': {
      tag: 'button',
      classes: 'btn btn-default wysiwyg-colorpicker wysiwyg-fontcolor',
      text: 'H',
      attributes: [{
          name: "title",
          value: 'Hilite Color'
      }, {
          name: 'colorpicker',
          value: 'rgba'
      }, {
          name: 'colorpicker-position',
          value: 'top'
      }, {
          name: 'ng-model',
          value: 'hiliteColor'
      }, {
          name: 'ng-change',
          value: 'setHiliteColor()'
      }]
  }, 
  'font': {
      tag: 'select',
      classes: 'form-control wysiwyg-select',
      attributes: [{
          name: "title",
          value: 'Image'
      }, {
          name: 'ng-model',
          value: 'font'
      }, {
          name: 'ng-options',
          value: 'f for f in fonts'
      }, {
          name: 'ng-change',
          value: 'setFont()'
      }]
  }, 
  'font-size': {
      tag: 'select',
      classes: 'form-control wysiwyg-select',
      attributes: [{
          name: "title",
          value: 'Image'
      }, {
          name: 'ng-model',
          value: 'fontSize'
      }, {
          name: 'ng-options',
          value: 'f.size for f in fontSizes'
      }, {
          name: 'ng-change',
          value: 'setFontSize()'
      }]
  }, 
  'link': {
      tag: 'span',
      data: [
          {
              tag: 'button',
              classes: 'btn btn-default',
              attributes: [{
                  name: "title",
                  value: 'Link'
              }, {
                  name: 'ng-click',
                  value: 'createLink()'
              }, {
                  name: 'ng-show',
                  value: '!isLink'
              }],
              data: [{
                  tag: 'i',
                  classes: 'fa fa-link'
              }]
          }, {
              tag: 'button',
              classes: 'btn btn-default',
              attributes: [{
                  name: "title",
                  value: 'Unlink'
              }, {
                  name: 'ng-click',
                  value: 'format(\'unlink\')'
              }, {
                  name: 'ng-show',
                  value: 'isLink'
              }],
              data: [{
                  tag: 'i',
                  classes: 'fa fa-unlink'
              }]
          }
      ]
  }
};