define(function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){var content=__webpack_require__(51);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(3)(content,{});content.locals&&(module.exports=content.locals)},2:function(module,exports){module.exports=function(){var list=[];return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},3:function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,styleElement){var head=getHeadElement(),lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling):head.appendChild(styleElement):head.insertBefore(styleElement,head.firstChild),styleElementsInsertedAtTop.push(styleElement);else{if("bottom"!==options.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");head.appendChild(styleElement)}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);idx>=0&&styleElementsInsertedAtTop.splice(idx,1)}function createStyleElement(options){var styleElement=document.createElement("style");return styleElement.type="text/css",insertStyleElement(options,styleElement),styleElement}function createLinkElement(options){var linkElement=document.createElement("link");return linkElement.rel="stylesheet",insertStyleElement(options,linkElement),linkElement}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options)),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(styleElement=createLinkElement(options),update=updateLink.bind(null,styleElement),remove=function(){removeStyleElement(styleElement),styleElement.href&&URL.revokeObjectURL(styleElement.href)}):(styleElement=createStyleElement(options),update=applyToTag.bind(null,styleElement),remove=function(){removeStyleElement(styleElement)});return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media;if(media&&styleElement.setAttribute("media",media),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}function updateLink(linkElement,obj){var css=obj.css,sourceMap=obj.sourceMap;sourceMap&&(css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */");var blob=new Blob([css],{type:"text/css"}),oldSrc=linkElement.href;linkElement.href=URL.createObjectURL(blob),oldSrc&&URL.revokeObjectURL(oldSrc)}var stylesInDom={},memoize=function(fn){var memo;return function(){return"undefined"==typeof memo&&(memo=fn.apply(this,arguments)),memo}},isOldIE=memoize(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0]}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){options=options||{},"undefined"==typeof options.singleton&&(options.singleton=isOldIE()),"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},51:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(2)(),exports.push([module.id,'//:#096dec;.leaflet-container{z-index:1}.dashboard-wrapper{padding-top:20px}.dashboard-body{padding:0 20px 15px;color:#333;background-color:#eee;min-height:500px}.preload .dashboard-row,.preload .fieldset,.preload .preload-hidden{display:none}.preload .dashboard-header:after{content:"Loading...";margin:auto;padding:50px 0}.progress-bar{top:0;bottom:auto}.dashboard-header{margin-bottom:10px;padding-top:10px;min-height:28px}.dashboard-header h2{font-size:24px;margin:0;padding:0;font-weight:200;padding-left:0}.dashboard-header .untitled{font-style:italic}.dashboard-header .edit-dashboard-menu{padding:2px 0 0 20px}.dashboard-header .edit-dashboard-menu .dashboard-source-type{color:#999;float:right}.dashboard-header .edit-dashboard-menu .tooltip-inner{white-space:normal}.dashboard-header p.description{margin:0 200px 0 0}.dashboard-header .edit-done{margin-left:10px}.dashboard-header .dashboard-menu .edit-btn,.dashboard-header .dashboard-menu .edit-export{margin-right:5px}.dashboard-header .dashboard-menu .edit-other{font-size:18px}.alert-box{padding:14px;padding-left:45px;position:relative;line-height:1.2;margin-bottom:5px;z-index:10}.alert-box i{left:20px}.dashboard-error .alert{padding:14px;padding-left:45px;position:relative;line-height:1.2;margin-bottom:5px;z-index:10;margin:100px 50px}.dashboard-error .alert i{left:20px}.empty-dashboard{padding:100px 50px}.empty-dashboard .alert{padding:14px;padding-left:45px;position:relative;line-height:1.2;margin-bottom:5px;z-index:10}.empty-dashboard .alert i{left:20px}#dashboard-editor{width:100%;min-height:500px;height:100%}.add-content-master{width:300px}.add-content-master .header input{border-radius:15px}.add-content-master .header .clear-filter{position:relative;left:-20px;background-color:#ccc;border-radius:5px;height:10px;width:10px;display:inline-block;color:inherit}.add-content-master .header .clear-filter i{font-size:8px;position:relative;top:-4px;left:2px}.add-content-master .panel-contents{width:100%;display:inline-block;overflow-y:auto;position:absolute;top:65px;bottom:0;padding:0;box-sizing:border-box}.add-content-master .panel-contents .accordion-group{border-left:none;border-right:none;border-top:none;border-radius:0;margin:0}.add-content-master .panel-contents .accordion-group .collapse:not(.in){visibility:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.add-content-master .panel-contents .accordion-group .collapse.in{visibility:visible}.add-content-master .panel-contents .accordion-group .accordion-toggle:before{content:"\\2C5";font-family:Splunk Icons;font-style:normal;font-weight:400;text-decoration:inherit;display:inline-block;width:13px}.add-content-master .panel-contents .accordion-group .accordion-toggle.collapsed:before{content:"\\203A"}.add-content-master .panel-contents .accordion-group .accordion-inner{border-top:none;padding:0}.add-content-master .panel-contents a:hover{text-decoration:none;color:#3863a0;background:rgba(0,0,0,.05)}.add-content-master .panel-contents a:focus{outline:0;text-decoration:none;background:rgba(61,171,255,.12);box-shadow:none}.add-content-master .panel-contents ul{margin:0;list-style:none}.add-content-master .panel-contents ul li.panel-content{position:relative}.add-content-master .panel-contents ul li.panel-content a{position:relative;padding:7px 10px 7px 31px;overflow:hidden;text-overflow:ellipsis;line-height:16px;display:block;white-space:nowrap}.add-content-master .panel-contents ul li.panel-content a .icons{position:relative;top:2px;font-size:14px;width:40px;text-align:center;margin-left:-15px;display:inline-block}.add-content-master .panel-contents ul li.panel-content a .icons i{margin-right:3px}.add-content-master .panel-contents ul li.panel-content a .icons i.icon-plus{font-size:12px}.add-content-master .panel-contents ul li.panel-content .accordion-group ul a{padding-left:48px}.add-content-master .panel-contents ul li.clone-error a,.add-content-master .panel-contents ul li.parser-error a{color:#999;cursor:default}.add-content-master .panel-contents ul li.selected a{color:#fff;background:#3863a0}.add-content-name.tooltip{word-break:break-all}.sidebar .header{padding:10px;height:45px;background-color:#eee}.sidebar .header h3{margin-top:0;margin-bottom:3px}.sidebar .footer{position:absolute;bottom:0}.sidebar .content-title-control{margin-top:10px}.sidebar .shared-timerangepicker .btn .time-label{display:inline;vertical-align:baseline}.sidebar .time-range-scope{margin-bottom:0}.sidebar .time-range-scope .controls{float:left;margin-right:10px}.sidebar .preview-body .dashboard-cell{width:100%}.sidebar .preview-body .dashboard-cell .dashboard-panel{margin-right:0}.sidebar .preview-body .shared-controls-textareacontrol textarea{height:80px}.sidebar .preview-body .view-results{visibility:hidden}.time-range-scope .controls{margin-bottom:10px}.input.hidden{display:none}.edit-mode .input.hidden{display:inline-block}.form-settings{float:right}.edit-mode .dashboard-header .title-editor{display:block;width:100%;background-color:transparent;line-height:normal}.edit-mode .dashboard-header .title-editor:focus,.edit-mode .dashboard-header .title-editor:hover{background-color:#fff}.edit-mode .dashboard-header .label-editor{font-size:24px;font-weight:200;margin-bottom:0}.edit-mode .dashboard-header .description-editor{height:26px;word-break:break-all}.edit-mode .title-editor{box-shadow:none;box-sizing:border-box;height:auto;border-color:transparent;font-size:inherit;font-weight:inherit}.edit-mode .title-editor:hover:not(:focus){border-color:#ccc;box-shadow:0 1px 1px rgba(0,0,0,.075)}.edit-mode .title-editor:focus{border-color:rgba(82,168,236,.8);outline:0;border-collapse:separate;box-shadow:0 0 8px rgba(82,168,236,.6)}.edit-mode .dashboard-row .dashboard-panel h2.panel-title{padding:3px 55px 3px 5px;padding-right:50px;height:27px;border-bottom:1px solid #eee}.edit-mode .dashboard-row .dashboard-panel h2.panel-title>.title-editor{font-size:inherit;color:inherit;text-transform:inherit;margin-bottom:5px;padding:4px 6px;width:100%;margin-right:60px;border-color:transparent}.edit-mode .dashboard-row .dashboard-panel h2.panel-title>.title-editor:hover:not(:focus){border-color:#ccc}.edit-mode .dashboard-row .dashboard-panel h2.panel-title>.title-editor:focus{border-color:rgba(82,168,236,.8);outline:0;border-collapse:separate;box-shadow:0 0 8px rgba(82,168,236,.6)}.edit-mode .dashboard-row .dashboard-panel .dashboard-element-editor{position:relative}.edit-mode .dashboard-row .dashboard-panel .panel-element-row{border-top:1px solid #eee!important}.edit-mode .dashboard-row .dashboard-panel .dashboard-panel-editor{position:absolute;right:0;top:16px}.edit-mode .dashboard-row .dashboard-panel .dashboard-panel-editor .dropdown-toggle{border-radius:0;display:inline-block;padding:0 10px;line-height:27px;box-shadow:none!important}.edit-mode .dashboard-row .dashboard-panel .dashboard-panel-editor .dropdown-toggle>[class^=icon-]{font-size:1.5em}.edit-mode .dashboard-row .dashboard-panel .dashboard-panel-editor .dropdown-toggle .caret{padding-left:.15em;vertical-align:middle}.edit-mode .dashboard-row .dashboard-panel .dashboard-panel-editor .panel-type-label{padding:3px 10px;color:#999;text-transform:uppercase}.view-mode .dashboard-panel h2.panel-title.empty{display:none}.view-mode .dashboard-element.table{margin-top:-1px}.edit-mode .dashboard-row{margin-right:-10px}.dashboard-row:after,.dashboard-row:before{display:table;content:"";line-height:0}.dashboard-row:after{clear:both}.dashboard-row .dashboard-cell{float:left}.dashboard-row .dashboard-panel{background:#fff;margin:0 5px 5px 0;position:relative}.dashboard-row .dashboard-panel:after,.dashboard-row .dashboard-panel:before{display:table;content:"";line-height:0}.dashboard-row .dashboard-panel:after{clear:both}.dashboard-row .dashboard-panel h2.panel-title{font-size:16px;line-height:1;font-weight:400;margin:0;padding:12px 55px 7px 12px;word-wrap:break-word;text-rendering:auto}.dashboard-row .dashboard-panel:hover .ui-resizable-handle{visibility:visible}.dashboard-row .dashboard-panel .ui-resizable-handle{margin-bottom:-1px;position:absolute}.dashboard-row .dashboard-panel .panel-element-row{clear:both}.dashboard-row .dashboard-panel .panel-element-row div.single{float:left;min-width:200px}.dashboard-row .dashboard-panel .panel-element-row .table{margin-bottom:0}.dashboard-row .dashboard-panel .panel-element-row .ui-resizable-handle{display:none}.dashboard-row .dashboard-panel .panel-element-row:hover .ui-resizable-handle{display:block}.dashboard-row .dashboard-panel .panel-title.empty+.fieldset.empty+.panel-element-row{border-top:none}.dashboard-row .dashboard-panel .dashboard-element{position:relative}.dashboard-row .dashboard-panel .dashboard-element .panel-footer{clear:both}.dashboard-row .dashboard-panel .panel-head h3{line-height:1;margin:0;padding:12px 55px 10px 12px;color:#333;text-rendering:auto;word-wrap:break-word;font-weight:700;font-size:14px}.dashboard-row .dashboard-panel .panel-head h3 .untitled{color:#999}.dashboard-row .dashboard-panel .panel-footer{clear:both;height:0;overflow:hidden}.dashboard-row .dashboard-panel .panel-footer:after,.dashboard-row .dashboard-panel .panel-footer:before{display:table;content:"";line-height:0}.dashboard-row .dashboard-panel .panel-footer:after{clear:both}.dashboard-row .dashboard-panel .dashboard-element:hover .panel-footer,.dashboard-row .dashboard-panel .panel-footer.show{box-sizing:border-box;height:30px;padding:5px 15px 5px 12px;border:1px solid #fff;border-top:none;margin:0 0 -30px;background-color:hsla(0,0%,88%,.9);position:relative;z-index:3}.dashboard-row .dashboard-panel .view-results .inspector-link{display:inline-block;margin-right:20px}.dashboard-row .dashboard-panel .view-results .btn-pill{padding:0;height:20px;line-height:20px;width:22px;font-size:15px;text-align:center}.dashboard-row .dashboard-panel .view-results .btn-pill+.btn-pill{margin-left:0}.dashboard-row .dashboard-panel .panel-body{overflow:hidden;clear:both}.dashboard-row .dashboard-panel .panel-body.html,.dashboard-row .dashboard-panel .panel-body.splunk-html{padding:10px}.dashboard-row .dashboard-panel .panel-body.html .splunk-checkbox,.dashboard-row .dashboard-panel .panel-body.html .splunk-checkboxgroup,.dashboard-row .dashboard-panel .panel-body.html .splunk-dropdown,.dashboard-row .dashboard-panel .panel-body.html .splunk-multidropdown,.dashboard-row .dashboard-panel .panel-body.html .splunk-radiogroup,.dashboard-row .dashboard-panel .panel-body.html .splunk-textinput,.dashboard-row .dashboard-panel .panel-body.html .splunk-timerange,.dashboard-row .dashboard-panel .panel-body.html p,.dashboard-row .dashboard-panel .panel-body.splunk-html .splunk-checkbox,.dashboard-row .dashboard-panel .panel-body.splunk-html .splunk-checkboxgroup,.dashboard-row .dashboard-panel .panel-body.splunk-html .splunk-dropdown,.dashboard-row .dashboard-panel .panel-body.splunk-html .splunk-multidropdown,.dashboard-row .dashboard-panel .panel-body.splunk-html .splunk-radiogroup,.dashboard-row .dashboard-panel .panel-body.splunk-html .splunk-textinput,.dashboard-row .dashboard-panel .panel-body.splunk-html .splunk-timerange,.dashboard-row .dashboard-panel .panel-body.splunk-html p{padding:0}.dashboard-row .dashboard-panel .panel-body .splunk-paginator{float:right;padding-right:15px;padding-top:3px}.dashboard-row .dashboard-panel .panel-body .splunk-paginator:empty{height:0;padding:0;margin:0}.dashboard-row .dashboard-panel .panel-body .results-table table tr>td:first-child,.dashboard-row .dashboard-panel .panel-body .results-table table tr>th:first-child,.dashboard-row .dashboard-panel .panel-body .table-row-expanding>tbody>tr>td.expands a,.dashboard-row .dashboard-panel .panel-body .table-row-expanding th.col-info{padding-left:12px}.dashboard-row .dashboard-panel .panel-body .results-table table tr>td:last-child,.dashboard-row .dashboard-panel .panel-body .results-table table tr>th:last-child,.dashboard-row .dashboard-panel .panel-body .table td:last-child,.dashboard-row .dashboard-panel .panel-body .table th:last-child{padding-right:12px}.dashboard-row .dashboard-panel .panel-body .results-table table tr>th:last-child .btn-col-format{margin-right:-12px}.dashboard-row .dashboard-panel .panel-body .lazy-view-container.loading .alert,.dashboard-row .dashboard-panel .panel-body .splunk-message-container .alert,.dashboard-row .dashboard-panel .panel-body .visualization-message .alert{text-align:center;color:#999;border-style:none;font-size:13px}.dashboard-row .dashboard-panel .panel-body .lazy-view-container.loading .alert.alert-info i,.dashboard-row .dashboard-panel .panel-body .splunk-message-container .alert.alert-info i,.dashboard-row .dashboard-panel .panel-body .visualization-message .alert.alert-info i{display:none}.dashboard-row .dashboard-panel .panel-body .lazy-view-container.loading .alert .icon-alert,.dashboard-row .dashboard-panel .panel-body .splunk-message-container .alert .icon-alert,.dashboard-row .dashboard-panel .panel-body .visualization-message .alert .icon-alert{float:none;color:#b3b3b3;position:static;margin-right:.25em;vertical-align:middle}.dashboard-row .dashboard-panel .panel-body .lazy-view-container.loading.compact .alert,.dashboard-row .dashboard-panel .panel-body .splunk-message-container.compact .alert,.dashboard-row .dashboard-panel .panel-body .visualization-message.compact .alert{padding-top:4px;padding-bottom:4px;margin-bottom:0;text-align:left;display:inline}.dashboard-row .dashboard-panel .panel-body .lazy-view-container.loading.compact .alert .icon-alert,.dashboard-row .dashboard-panel .panel-body .splunk-message-container.compact .alert .icon-alert,.dashboard-row .dashboard-panel .panel-body .visualization-message.compact .alert .icon-alert{font-size:150%;top:4px}.dashboard-row .dashboard-panel .panel-body .lazy-view-container.loading,.dashboard-row .dashboard-panel .panel-body .visualization-message{padding-top:54px}.dashboard-row .dashboard-panel .panel-body .splunk-single{min-height:40px;text-align:center}.dashboard-row .dashboard-panel .panel-body .msg .single-result{color:#999}.dashboard-row .dashboard-panel .panel-body .splunk-table{margin-top:12px}.dashboard-row .dashboard-panel .panel-body .splunk-table:after,.dashboard-row .dashboard-panel .panel-body .splunk-table:before{display:table;content:"";line-height:0}.dashboard-row .dashboard-panel .panel-body .splunk-table:after{clear:both}.dashboard-row .dashboard-panel .panel-body .splunk-table .splunk-paginator{float:right;padding-right:15px}.dashboard-row .dashboard-panel .panel-body p{padding:0 10px}.dashboard-row .dashboard-panel .panel-body .splunk-checkbox,.dashboard-row .dashboard-panel .panel-body .splunk-checkboxgroup,.dashboard-row .dashboard-panel .panel-body .splunk-dropdown,.dashboard-row .dashboard-panel .panel-body .splunk-multidropdown,.dashboard-row .dashboard-panel .panel-body .splunk-radiogroup,.dashboard-row .dashboard-panel .panel-body .splunk-searchbar,.dashboard-row .dashboard-panel .panel-body .splunk-textinput,.dashboard-row .dashboard-panel .panel-body>.splunk-timerange,.dashboard-row .dashboard-panel .panel-body>button{margin:5px 10px}.dashboard-row .dashboard-panel .shared-eventsviewer{border-left:none}.dashboard-row .dashboard-panel ul.shared-eventsviewer{margin-bottom:5px;border-top-style:none}.dashboard-row .dashboard-panel .error-details{display:block;float:right;padding:9px 12px 5px 5px}.dashboard-row .dashboard-panel .error-details i{color:#f2b827}.dashboard-row .dashboard-panel .error-details.severe i{color:#d6563c}.dashboard-row .dashboard-panel .error-details.severe .error-indicator:hover i{color:#d99f0d;color:#b94027}.dashboard-row .dashboard-panel .error-details .error-indicator{padding:0;height:20px;line-height:20px;width:22px;font-size:15px;text-align:center;border-radius:3px;margin-left:3px;display:block}.dashboard-row .dashboard-panel .error-details .error-indicator:hover{background-color:#f8f8f8}.dashboard-row .dashboard-panel .error-details .error-indicator i{font-size:18px}.dashboard-row .dashboard-panel .error-details li{padding:5px 10px 5px 25px;position:relative}.dashboard-row .dashboard-panel .error-details li:first-child{border-top:none}.dashboard-row .dashboard-panel .error-details li>i{font-size:18px;position:absolute;left:3px;top:5px}.dashboard-row .dashboard-panel .error-details li.warning>i{color:#f2b827}.dashboard-row .dashboard-panel .error-details li.error>i{color:#d6563c}.dashboard-row .dashboard-panel .progress-bar .progress-msg{font-size:11px;color:#999;display:inline-block}.view-mode .refresh-time-indicator{padding:0 10px;z-index:10;height:14px}.view-mode .refresh-time-indicator .time-freshness{font-size:11px;color:#999;cursor:default;padding:0;margin:0}.view-mode .with-title .fieldset.empty+.panel-element-row:not(.grouped) .error-details{position:absolute;top:-31px;right:0}.view-mode .element-footer{border-bottom:1px solid transparent}.view-mode .element-footer .menus{display:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;right:10px;background:#fff;border:1px solid #ccc;border-top:1px solid #fff;margin-top:-1px;padding-left:5px;padding-bottom:2px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-top-right-radius:2px;border-top-left-radius:2px;z-index:999}.view-mode .element-footer .menus .btn-pill{width:15px;height:22px;border-radius:0;padding:0 4px;position:relative;line-height:22px;font-size:15px}.view-mode .element-footer .menus .btn-pill i{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.view-mode .element-footer .menus .refresh-time-indicator{display:inline}.view-mode .dashboard-element:hover .element-footer{border-bottom:1px solid #ccc}.view-mode .dashboard-element:hover .element-footer .menus{display:-ms-flexbox;display:flex}.view-mode .element-footer:hover{border-bottom:1px solid #ccc}.view-mode .element-footer:hover .menus{display:-ms-flexbox;display:flex}.dashboard-cell.hidden,.dashboard-row.hidden,.edit-mode .element-footer,.edit-mode .refresh-time-indicator,.preview-body .element-footer{display:none}.edit-mode .dashboard-cell.hidden,.edit-mode .dashboard-row.hidden{display:block}.edit-mode .dashboard-cell.hidden .dashboard-panel,.edit-mode .dashboard-row.hidden .dashboard-panel{border-style:dashed}.dashboard-element.hidden{display:none}.edit-mode .dashboard-element.hidden{display:block}.edit-mode .dashboard-element.hidden .panel-body,.edit-mode .dashboard-element.hidden .panel-footer{opacity:.5}.edit-mode .dashboard-element.hidden .panel-head h3{color:#bbb}.edit-mode .dashboard-element.hidden .panel-editor{z-index:99}.dashboard-panel>.drag-handle{height:8px;margin:5px 5px 0;cursor:move;z-index:3}.dashboard-panel>.drag-handle .handle-inner{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQIW2M0Njb+f/bsWUYYzciABuAyOFUAAKKMEAXhn6ySAAAAAElFTkSuQmCC) repeat;opacity:.5;cursor:move;height:8px;margin-right:14px}.dashboard-panel>.drag-handle>.delete-panel{display:inline-block;float:right;font-size:17px;padding:0 3px;color:#97999b;margin-right:-3px;margin-top:-4px;background:#fff}.dashboard-panel>.drag-handle>.delete-panel:focus,.dashboard-panel>.drag-handle>.delete-panel:hover{text-decoration:none;color:#3863a0}.dashboard-panel>.drag-handle>.delete-panel:hover{background:rgba(0,0,0,.05)}.dashboard-panel>.drag-handle>.delete-panel:focus{outline:0;text-decoration:none;background:rgba(61,171,255,.12);box-shadow:none}.initial-placeholder{height:234px}.initial-placeholder.placeholder-visualizations-singlevalue{height:80px}.dragndrop-enabled .dashboard-row.empty{min-height:20px}.dragndrop-enabled .dashboard-row .dashboard-panel.drag-hover{border-color:#bbb}.dragndrop-enabled .dashboard-row .panel-head h3{padding:11px 15px 8px}.dragndrop-enabled .dashboard-row .panel-element-row+.panel-element-row .panel-head{border-top:1px solid #ccc}.dragndrop-enabled .dashboard-row .dashboard-panel .panel-body .splunk-message-container .alert .icon-alert{color:#d6563c}.dragndrop-enabled .sortable-placeholder{min-width:10px;float:left}.dragndrop-enabled .sortable-placeholder .dashboard-panel{min-height:200px;background:transparent;border:1px dashed #b3b3b3;box-shadow:none}.dragndrop-enabled .dashboard-cell{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dragndrop-enabled .dashboard-cell.ui-sortable-helper .dashboard-panel{box-shadow:2px 2px 5px rgba(0,0,0,.2)}.dragndrop-enabled .dashboard-row{min-height:100px}.dragndrop-enabled .shared-eventsviewer .table-chrome{border-top:none}.html h1{font-size:20px;font-weight:700}.html h2{font-size:16px;margin:10px 0;font-weight:400}.html h3{font-size:14px;font-weight:700}.html h4{font-size:12px;font-weight:700;margin:0}.html h5{font-size:10.2px}.html .panel-head>h3{font-size:16px;font-weight:400}.page-licensing .tab-content{background-color:#fcfcfc;background-image:linear-gradient(180deg,#fff 0,#eee 25px)}.view-mode .dashboard-row .dashboard-cell.last-visible .dashboard-panel,.view-mode .dashboard-row .dashboard-cell:last-child .dashboard-panel{margin-right:0}.dashboards-table-controls-convertdashboard .shared-controls-controlgroup .controls-halfblock .help-block{width:50%;text-align:center}.more-info{width:400px}.more-info .popdown-dialog-body{padding:20px 20px 10px}.splunk-radiogroup .choice{margin-bottom:4px}.splunk-radiogroup input{margin:0 10px 0 2px}.splunk-radiogroup label{display:inline-block;margin-left:1em;margin-bottom:0;vertical-align:middle}.dropdown-menu .dashboard-source-type{float:right;color:#999}.add-panel-wrapper .controls textarea,.edit-search-string .controls textarea{height:15em;max-height:none}.input-editor-body{border-bottom:1px solid #ccc}.input-editor-body .input-editor-type{display:inline-block;vertical-align:top;list-style:none;margin:0}.input-editor-body .input-editor-type li{margin:0}.input-editor-body .input-editor-type li>a:hover{position:relative;color:#3863a0;background:rgba(0,0,0,.05)}.input-editor-body .input-editor-type li>a:focus{position:relative;outline:0;text-decoration:none;background:rgba(61,171,255,.12);box-shadow:none}.input-editor-body .input-editor-type li>a.selected{position:relative;color:#fff;background:#3863a0;border:none}.input-editor-body .input-editor-type li>a{border-top:1px dotted #ccc;color:#1e93c6;padding:5px 16px;margin-right:-4px;white-space:normal;display:block;text-decoration:none}.input-editor-body .input-editor-type li:first-child>a{border-top-left-radius:3px;border-top-right-radius:3px;border-top:none}.input-editor-body .input-editor-type li:last-child>a{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.input-editor-body .input-editor-type [class*=" icon-"],.input-editor-body .input-editor-type [class^=icon-]{width:1.25em;text-align:center}.input-editor-body .input-editor-format{display:inline-block;position:relative;width:385px;border-left:1px solid #ccc;vertical-align:top}.input-editor-body .input-editor-format .concertina .concertina-body{position:static;max-height:500px;min-height:100px}.input-editor-body .input-editor-format .splunk-choice-input-message{height:auto}.input-editor-body .input-editor-format .shared-controls-textareacontrol textarea,.input-editor-body .input-editor-format .shared-controls-textcontrol input,.input-editor-body .input-editor-format .splunk-dropdown,.input-editor-body .input-editor-format .splunk-multidropdown{width:186px}.input-editor-body .input-editor-format .shared-controls-syntheticselectcontrol .link-label{float:left;width:162px;overflow:hidden;text-align:left}.input-editor-body .input-editor-format .token-input-settings-body .splunk-choice-input-message{clear:both}.input-editor-body .input-editor-format .token-input-settings-body .shared-timerangepicker{margin-left:0}.input-editor-body .input-editor-format .token-input-settings-body .splunkjs-mvc-simpleform-edit-tokenpreviewcontrol .shared-controls-labelcontrol{width:200px}.input-editor-body .input-editor-format .token-input-settings-body .splunkjs-mvc-simpleform-edit-tokenpreviewcontrol .shared-controls-labelcontrol span{word-break:break-all;white-space:pre-wrap}.input-editor-body .input-editor-format .static-input-settings-body .static-options-heading{margin-bottom:8px}.input-editor-body .input-editor-format .static-input-settings-body .static-options-heading .static-options-heading-name{width:114px;margin-left:40px;float:left}.input-editor-body .input-editor-format .static-input-settings-body .static-options-heading .static-options-heading-value{margin-left:180px}.input-editor-body .input-editor-format .static-input-settings-body .static-options-body{margin-bottom:8px}.input-editor-body .input-editor-format .static-input-settings-body .static-options-body .static-option-pair .drag-handle{display:inline-block;margin-left:20px;width:10px;height:18px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQIW2M0Njb+f/bsWUYYzciABuAyOFUAAKKMEAXhn6ySAAAAAElFTkSuQmCC) repeat;opacity:.5;cursor:move}.input-editor-body .input-editor-format .static-input-settings-body .static-options-body .static-option-pair .static-option-label,.input-editor-body .input-editor-format .static-input-settings-body .static-options-body .static-option-pair .static-option-value{display:inline-block;margin-left:5px}.input-editor-body .input-editor-format .static-input-settings-body .static-options-body .static-option-pair .static-option-label input,.input-editor-body .input-editor-format .static-input-settings-body .static-options-body .static-option-pair .static-option-value input{width:100px}.input-editor-body .input-editor-format .static-input-settings-body .static-options-body .static-option-pair .static-option-remove{margin-left:5px}.input-editor-body .input-editor-format .dynamic-input-settings-body .splunk-timerange{margin-bottom:10px}.input-editor-body .input-editor-format .dynamic-input-settings-body .search-field-wrapper{width:220px}.input-editor-body .control-label{width:125px;float:left;padding-top:5px;text-align:right}.input-editor-body .controls{margin-left:135px}.input-editor-body .alert.alert-error{margin-left:20px;margin-bottom:0}.input-editor-body .alerts.shared-flashmessages{border-top:1px solid #ccc}.input-editor-apply,.input-editor-cancel{margin:10px}.input-time .shared-timerangepicker,.input-timerangepicker .shared-timerangepicker{width:95%}.input-time .shared-timerangepicker .btn,.input-timerangepicker .shared-timerangepicker .btn{width:95%;text-align:left}.input-time .shared-timerangepicker .btn .time-label,.input-timerangepicker .shared-timerangepicker .btn .time-label{max-width:90%;display:inline-block}.input-time .shared-timerangepicker .caret,.input-timerangepicker .shared-timerangepicker .caret{float:right}@media print{#header,.edit-dashboard-menu,.form-submit,.panel-footer,.select2-choice>div,.ui-resizable-handle{display:none!important}.fieldset .input>label:first-child{font-weight:700}.fieldset .input .select2-choices,.fieldset .input .select2-container,.fieldset .input input{border:none;box-shadow:none!important;transition:none!important}.select2-container{min-width:0!important}.select2-container .select2-choices,.select2-container .select2-search-choice,.select2-container a.select2-choice{border-style:none!important}.select2-search-choice{padding-left:2px!important}.shared-timerangepicker .btn,.shared-timerangepicker .btn .time-label{max-width:200px!important;width:200px!important;text-align:left}.dashboard-element:not(.table):not(.event){page-break-inside:avoid}.splunk-paginator a.selected{font-weight:700}}.content-preview{box-sizing:border-box;width:450px;height:100%}.content-preview .preview-body{overflow-y:auto;position:absolute;width:100%;padding:10px;box-sizing:border-box;top:65px;bottom:0}.content-preview .preview-body .control-group{clear:both}.dashboard-list-item .accordion-group{border:none}.dashboard-panel{transition:border-color 2s ease-out,box-shadow 2s ease-out,border-width 2s ease-out}.panel-highlight .dashboard-panel{border-color:#3863a0;box-shadow:0 0 10px 2px rgba(56,99,160,.4)}.splunk-header{min-height:20px}.splunk-table.dce-oem-table table{border:1px solid #ccd1d9;border-collapse:collapse;overflow:auto;font-family:-apple-system,BlinkMacSystemFont,Neue Haas Grotesk Text Pro,Arial Nova,Segoe UI,Helvetica Neue,\\.PingFang SC,PingFang SC,Microsoft YaHei,Microsoft JhengHei,Source Han Sans SC,Noto Sans CJK SC,Source Han Sans CN,Noto Sans SC,Source Han Sans TC,Noto Sans CJK TC,Hiragino Sans GB,sans-serif;-webkit-font-smoothing:antialiased}.splunk-table.dce-oem-table table thead{box-sizing:border-box;height:31px;border-bottom:1px solid #e4e7ed}.splunk-table.dce-oem-table table thead th{cursor:pointer}.splunk-table.dce-oem-table table thead th .icon-sorts{position:absolute;right:10px}.splunk-table.dce-oem-table table thead th:last-child{border-right:none}.splunk-table.dce-oem-table table thead th:active{background:#e4e7ed}.splunk-table.dce-oem-table table thead>tr>th,.splunk-table.dce-oem-table table thead>tr>th:hover{border:none;border-right:1px solid #e4e7ed;background:#f5f7fa;box-shadow:none}.splunk-table.dce-oem-table table .results-table tbody tr.highlighted>td,.splunk-table.dce-oem-table table tbody td.highlighted{color:#fff;background:#096dec!important}.splunk-table.dce-oem-table table>tbody>tr{height:30px;color:#3d444f}.splunk-table.dce-oem-table table>tbody>tr.even>td,.splunk-table.dce-oem-table table>tbody>tr:nth-child(2n)>td{background:#f1f7fe}.splunk-table.dce-oem-table table>tbody>tr:hover>td{color:#fff;background:#096dec!important}.splunk-table.dce-oem-table table td,.splunk-table.dce-oem-table table th{border:none;padding:0 10px;color:#3d444f;font-size:14px;font-weight:400;line-height:30px;white-space:nowrap;text-align:left;text-overflow:ellipsis;overflow:hidden}',""]);
}})});