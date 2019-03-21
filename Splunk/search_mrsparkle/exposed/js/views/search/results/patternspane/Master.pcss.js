define(function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){var content=__webpack_require__(144);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(3)(content,{});content.locals&&(module.exports=content.locals)},2:function(module,exports){module.exports=function(){var list=[];return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},3:function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,styleElement){var head=getHeadElement(),lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling):head.appendChild(styleElement):head.insertBefore(styleElement,head.firstChild),styleElementsInsertedAtTop.push(styleElement);else{if("bottom"!==options.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");head.appendChild(styleElement)}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);idx>=0&&styleElementsInsertedAtTop.splice(idx,1)}function createStyleElement(options){var styleElement=document.createElement("style");return styleElement.type="text/css",insertStyleElement(options,styleElement),styleElement}function createLinkElement(options){var linkElement=document.createElement("link");return linkElement.rel="stylesheet",insertStyleElement(options,linkElement),linkElement}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options)),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(styleElement=createLinkElement(options),update=updateLink.bind(null,styleElement),remove=function(){removeStyleElement(styleElement),styleElement.href&&URL.revokeObjectURL(styleElement.href)}):(styleElement=createStyleElement(options),update=applyToTag.bind(null,styleElement),remove=function(){removeStyleElement(styleElement)});return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media;if(media&&styleElement.setAttribute("media",media),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}function updateLink(linkElement,obj){var css=obj.css,sourceMap=obj.sourceMap;sourceMap&&(css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */");var blob=new Blob([css],{type:"text/css"}),oldSrc=linkElement.href;linkElement.href=URL.createObjectURL(blob),oldSrc&&URL.revokeObjectURL(oldSrc)}var stylesInDom={},memoize=function(fn){var memo;return function(){return"undefined"==typeof memo&&(memo=fn.apply(this,arguments)),memo}},isOldIE=memoize(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0]}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){options=options||{},"undefined"==typeof options.singleton&&(options.singleton=isOldIE()),"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},144:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(2)(),exports.push([module.id,'.tab-pane-patterns,.tab-pane-patterns .patterns-container{position:relative;min-height:inherit}.tab-pane-patterns .patterns-container .pattern-controls-and-table{margin-right:401px}.tab-pane-patterns .patterns-container .progress-bar{bottom:0}.tab-pane-patterns .patterns-container .slider-control{float:right;margin-top:-18px}.tab-pane-patterns .patterns-container .alert.waiting .shared-waitspinner{position:absolute;left:0;top:8px}.tab-pane-patterns .patterns-container .control-group,.tab-pane-patterns .patterns-container .control-group .control-label{margin-bottom:0}.tab-pane-patterns .patterns-container .pattern-controls{min-height:15px;border-bottom:1px solid #d3d3d3;padding:0 20px 20px;position:relative}.tab-pane-patterns .patterns-container .pattern-controls .alerts{clear:right}.tab-pane-patterns .patterns-container .pattern-controls .alert{margin-top:0;margin-bottom:0}.tab-pane-patterns .patterns-container .pattern-controls .regenerate .alert{margin-top:16px}.tab-pane-patterns .patterns-container .pattern-table.search-disabled{opacity:.6}.tab-pane-patterns .patterns-container .pattern-table{width:100%;cursor:default}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr{transition:background-color .2s,color .2s}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr td{padding-top:10px;padding-bottom:10px}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .percent{padding-right:8px;padding-left:20px;width:45px;box-sizing:border-box;text-align:right;vertical-align:top}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .description{word-wrap:break-word;word-break:break-all;padding-right:20px;padding-left:8px}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .description span.includeterm{color:#65a637}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .description span.timestamp{color:#999;transition:color .2s}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .description span.timestamp:before{content:"<"}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .description span.timestamp:after{content:">"}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .sample-event{max-height:58px;position:relative;overflow:hidden}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .sample-event:after{content:"";display:block;position:absolute;left:0;right:0;top:42px;height:16px;transition:background .2s linear;background-color:hsla(0,0%,100%,0);background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#fff);background-repeat:repeat-x;background-color:transparent}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr.expanded div.sample-event{max-height:200px;color:#b3b3b3}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr.selected{background-color:#3863a0;color:#fff}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr.selected span.includeterm{color:#a2cc3e}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr.selected .sample-event:after{display:none}.tab-pane-patterns .patterns-container .pattern-table:not(.search-disabled) tbody.patterns tr:hover:not(.selected) td{background-color:#e1e9f4}.tab-pane-patterns .patterns-container .pattern-table:not(.search-disabled) tbody.patterns tr:hover:not(.selected) td .sample-event:after{background-color:rgba(225,233,244,0);background-image:linear-gradient(180deg,rgba(225,233,244,0),#e1e9f4);background-repeat:repeat-x}.tab-pane-patterns .patterns-container .pattern-details{width:401px;position:absolute;right:0;top:-20px;bottom:0;background-color:#eee;box-sizing:border-box;border-left:1px solid #ccc}.tab-pane-patterns .patterns-container .pattern-details .documentation{float:right;margin:20px 20px 0 0}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-none{overflow:hidden;text-align:center;padding-top:80px}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-none .instruction{margin-bottom:30px}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-none .instruction svg{height:40px;display:inline-block;width:40px;margin:10px;vertical-align:middle;fill:none;stroke:#999;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-none .instruction svg polygon{stroke-miterlimit:10}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-single{background-color:#eee;position:relative;padding:20px}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-single .info-group{margin-bottom:20px}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-single .subtitle{font-size:11px;color:#aaa;text-transform:uppercase}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-single .terms-group{font-family:Droid Sans Mono,Consolas,Monaco,Courier New,Courier,monospace}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-single .terms-group div{word-wrap:break-word;margin-left:10px;text-indent:-10px}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-single .big-number{font-size:80px;font-weight:200;line-height:80px}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-single .event-type{font-family:Droid Sans Mono,Consolas,Monaco,Courier New,Courier,monospace;overflow-y:auto;margin-bottom:5px;word-wrap:break-word}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-single .save-event-type{margin-right:20px}.tab-pane-patterns .patterns-container .pattern-details div.arrow{width:0;height:0;border-bottom:8px solid transparent;border-top:8px solid transparent;border-right:8px solid #eee;position:absolute;top:0;left:-9px}.tab-pane-patterns .patterns-container .pattern-details.dark{background-color:#e0e0e0}@media print{.tab-pane-patterns .patterns-container .pattern-controls-and-table{margin-right:421px}.tab-pane-patterns .patterns-container .alert.waiting .shared-waitspinner,.tab-pane-patterns .patterns-container .icon-close,.tab-pane-patterns .patterns-container .progress-animation,.tab-pane-patterns .patterns-container .progress-bar,.tab-pane-patterns .patterns-container .progress-cursor,.tab-pane-patterns .patterns-container .progress-label,.tab-pane-patterns .patterns-container .slider-control{display:none!important}.tab-pane-patterns .patterns-container .pattern-controls{border-bottom:0!important}.tab-pane-patterns .patterns-container .rule{display:none!important}.tab-pane-patterns .patterns-container .pattern-table{min-width:0!important}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .percent{width:70px!important}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .description span.includeterm{text-decoration:underline}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr.selected{background-color:#fff!important}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr.selected td{border-top:2px solid #ccc!important;border-bottom:2px solid #ccc!important;background-color:#fff!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr.selected td:first-child{border-left:2px solid #ccc!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr.selected td:last-child{border-right:2px solid #ccc!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .sample-event{max-height:none}.tab-pane-patterns .patterns-container .pattern-table tbody.patterns tr .sample-event:after{display:none}.tab-pane-patterns .patterns-container .pattern-details{border-left:0!important}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-none{display:none!important}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-single{top:0!important;border:2px solid #ccc!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}.tab-pane-patterns .patterns-container .pattern-details .pattern-details-single a,.tab-pane-patterns .patterns-container .pattern-details div.arrow{display:none!important}}',""])}})});