define([
        'underscore',
        'models/shared/fetchdata/EAIFetchData'
    ],
    function(
        _,
        EAIFetchData
    ) {
        return EAIFetchData.extend({
            toJSON: function(options) {
                var json = EAIFetchData.prototype.toJSON.apply(this, arguments);
                var search = [];
                var restParams = [];
                search.push("| rest services/data/indexes");
                restParams.push("isInternal=" + (json.hasOwnProperty("isInternal") ? json.isInternal : true));
                restParams.push("isVirtual=" + (json.hasOwnProperty("isVirtual") ? json.isVirtual : true));
                if (json.hasOwnProperty("searchFilterString")) {
                    restParams.push(json.searchFilterString);
                }
                search.push("search=\"" + restParams.join(" AND ") + "\"");
                search.push("| dedup title");
                search.push("| rename title as name");
                if (!_(json.search).isUndefined()) {
                    search.push(json.search);
                }
                if (json.hasOwnProperty("isWritable")) {
                    search.push("| where 'eai:acl.can_write' == 1");
                }
                if (json.hasOwnProperty("fieldsNameList")) {
                    search.push("| fields " + json.fieldsNameList);
                }
                json.search = search.join(" ");
                return json;
            }
        });
    });
