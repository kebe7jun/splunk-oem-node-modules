define(function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){var content=__webpack_require__(180);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(3)(content,{});content.locals&&(module.exports=content.locals)},2:function(module,exports){module.exports=function(){var list=[];return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},3:function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,styleElement){var head=getHeadElement(),lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling):head.appendChild(styleElement):head.insertBefore(styleElement,head.firstChild),styleElementsInsertedAtTop.push(styleElement);else{if("bottom"!==options.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");head.appendChild(styleElement)}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);idx>=0&&styleElementsInsertedAtTop.splice(idx,1)}function createStyleElement(options){var styleElement=document.createElement("style");return styleElement.type="text/css",insertStyleElement(options,styleElement),styleElement}function createLinkElement(options){var linkElement=document.createElement("link");return linkElement.rel="stylesheet",insertStyleElement(options,linkElement),linkElement}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options)),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(styleElement=createLinkElement(options),update=updateLink.bind(null,styleElement),remove=function(){removeStyleElement(styleElement),styleElement.href&&URL.revokeObjectURL(styleElement.href)}):(styleElement=createStyleElement(options),update=applyToTag.bind(null,styleElement),remove=function(){removeStyleElement(styleElement)});return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media;if(media&&styleElement.setAttribute("media",media),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}function updateLink(linkElement,obj){var css=obj.css,sourceMap=obj.sourceMap;sourceMap&&(css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */");var blob=new Blob([css],{type:"text/css"}),oldSrc=linkElement.href;linkElement.href=URL.createObjectURL(blob),oldSrc&&URL.revokeObjectURL(oldSrc)}var stylesInDom={},memoize=function(fn){var memo;return function(){return"undefined"==typeof memo&&(memo=fn.apply(this,arguments)),memo}},isOldIE=memoize(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0]}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){options=options||{},"undefined"==typeof options.singleton&&(options.singleton=isOldIE()),"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},180:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(2)(),exports.push([module.id,'.section-header{border-bottom:1px solid #ccc;padding-bottom:10px}.appsremote-sortfilter{margin:-5px 0 5px -10px}.content-area{position:relative}.content-area:after,.content-area:before{display:table;content:"";line-height:0}.content-area:after{clear:both}.content-area:before{content:"";position:absolute;top:0;bottom:0;left:0;width:300px;border-right:1px solid #ccc;background-color:#fff;display:block}.shared-appsremote-filterbar{width:260px;padding:20px;box-sizing:border-box();margin-right:-1px;position:relative;z-index:2;min-height:1040px}.shared-appsremote-filterbar .control-label{margin-top:5px;color:#999;font-size:11px;text-transform:uppercase}.shared-appsremote-filterbar .control-group+.control-group>.control-label{margin-top:25px}.text-filter-control-wrapper{margin:-20px -20px 0}.text-filter-control-wrapper .text-filter-control{padding:15px 20px 10px;box-sizing:border-box;white-space:nowrap}.text-filter-control-wrapper .text-filter-control.affix-top{left:0;top:0;background-color:#fff;z-index:406;position:fixed;right:0;box-shadow:0 4px 8px rgba(0,0,0,.2)}.text-filter-control-wrapper,.text-filter-control-wrapper .text-filter-control{min-height:72px}.text-filter-control-wrapper .search-query{width:219px}.tags{margin-bottom:20px}.tag{color:#fff;background:#1e93c6;border-radius:10px;line-height:20px;padding:0 8px 0 10px;display:inline-block}.tag:focus,.tag:hover{background:#3863a0;color:#fff;text-decoration:none}.tag:focus{border-color:rgba(82,168,236,.8);outline:0;border-collapse:separate;box-shadow:0 0 8px rgba(82,168,236,.6);background-position:0}.results-control-bar{margin-left:300px;margin-bottom:5px}.results-control-bar .pagination{margin:-5px 0}.results-control-bar-inner{padding:15px 20px 10px;box-sizing:border-box;border-left:1px solid #ccc}.results-control-bar,.results-control-bar-inner{min-height:72px}.results-control-bar-inner.affix-top{left:300px;top:0;right:0;background-color:#e3e3e3;z-index:407;position:fixed}.results{margin-left:300px;padding:0 0 0 20px}.results .app-list-placeholder{margin-top:50px}.results-pane .shared-waitspinner{left:50%;top:200px;margin-left:150px;position:absolute;text-align:center}.add-on-tile-wrapper,.result-app-wrapper{width:100%;box-sizing:border-box;display:inline-block;padding-right:20px;margin-bottom:20px;vertical-align:top}@media screen and (min-width:1400px){.result-app-wrapper{width:50%}}@media screen and (min-width:2000px){.result-app-wrapper{width:33%}}@media screen and (min-width:1024px){.add-on-tile-wrapper{width:50%}}.app{padding:20px 20px 14px;position:relative;background-color:#fff;border:1px solid #ccc;border-radius:2px}.app .divider{margin:10px -20px;border-color:#eee}.app-icon{float:left;width:36px;margin-right:10px;text-align:top}.app-icon img{width:72px}.app h3{font-size:18px;line-height:36px;margin-bottom:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:top;margin:0 20px 20px 10px}.app-description{margin-bottom:10px;min-height:80px;white-space:pre-wrap}@media screen and (min-width:1400px){.result-app-wrapper .app-description{min-height:95px}}.app-description-full{display:none;max-height:400px;overflow-y:auto;overflow-x:hidden}.app-actions{min-height:26px}.app-actions-placeholder{float:right;margin-left:20px}.app-certified{background:no-repeat 0;background-size:12px 16px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAA8klEQVRIx2NwvqQwH4j/0wgnMNDQcBB+T2sL/o9aMIgt8L+qR1sLFr6c8P/Cl+P/i+5G0M4CGKDEIpwWTH3W9B8dkGMR3kgGGQYylBKLiEpF0Tds/u98t5osi0hKpvgsAslRLR9gswiXT8iyoOtxyf8XPx9T3wJsBn/+8xGcpHFlTAZaGUyUBZQYTFJOJsdgoi0g12CiigpKDB6t0YjF90EWNNCqTQRueIEAkGEAxOepaPh6IFZgQAdAwQKozeQaDHKkAwM+ALIZ6gJSg6OAgRQA1BAAiiQiDAc1ngUYyAEgjUDcT3ZwkGARKBHsx0gdRAAARPNzHwPy5LEAAAAASUVORK5CYII=");font-size:11px;padding-left:16px;margin-bottom:10px}.app-detail{white-space:nowrap;max-width:100%;overflow:hidden;display:inline-block;font-size:11px}.username-placeholder{padding-bottom:10px}.rights{padding-top:10px}.license-agreement{display:inline-block;padding-bottom:10px}.successbtn{display:block;margin-top:10px}.alert{margin-left:20px}',""])}})});