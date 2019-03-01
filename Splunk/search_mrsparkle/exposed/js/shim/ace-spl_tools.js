define([
    'ace/ace', 
    'script!contrib/ace-editor/ext-language_tools', 
    'script!contrib/ace-editor/ext-spl_tools'],
    function(Ace) {
        return Ace.require('ace/ext/spl_tools');
});
