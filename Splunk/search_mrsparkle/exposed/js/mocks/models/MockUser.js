/**
 * @author jszeto
 * @date 9/4/13
 */
define([
    'mocks/models/MockSplunkD',
    'mocks/models/MockServerInfo',
    'models/services/authentication/User'
],
function(MockSplunkD, MockServerInfo, UserModel) {

    return MockSplunkD.extend({

        initialize: function(attributes) {
            this._attributes = attributes;
            MockSplunkD.prototype.initialize.call(this, attributes);
            this.serverInfo = new MockServerInfo();

            this.isLite = false;
            if (attributes && attributes.isLite) {
                this.isLite = true;
            }
        },

        canSearch: function() {
            return true;
        },

        canAccelerateDataModel: function() {
            return true;
        },

        canAccelerateReport: function() {
            return true;
        },

        canScheduleSearch: function() {
            return true;
        },

        canUseApps: function() {
            return true;
        },

        canRTSearch: function() {
            return true;
        },

        canViewACL: function() {
            return true;
        },

        canEmbed: function() {
            return true;
        },

        canEditIndexes: function() {
            return true;
        },

        canPatternDetect: function() {
            return true;
        },

        canAddData: function() {
            return true;
        },

        canManageRemoteApps: function() {
            return true;
        },

        canExploreData: function() {
            return true;
        },

        canUseSidenav: function() {
            return this.isLite;
        },

        canPivot: function() {
            return true;
        },

        canEditArchives: function() {
            return true;
        },

        canViewArchives: function() {
            return true;
        },

        canArchive: function() {
            return true;
        },

        canExportResults:  function() {
            return true;
        },

        canViewRemoteApps: function() {
            return true;
        },

        canSchedulePDF: function() {
            return this._attributes['can_schedule_pdf'] !== false;
        },

        canEditViewHtml: function() {
            return this._attributes['edit_view_html'] !== false;
        },

        canAccessAppWithName: function() {
            return true;
        },

        canAccessSplunkDatasetExtensions: function() {
            return true;
        },

        canMove: function() {
            return true;
        },

        canAdvancedEdit: function() {
            return true;
        },

        isAdminLike: function() {
            return this._attributes['admin_all_objects'] !== false;
        },

        getSearchSyntaxHighlighting: function() {
            return UserModel.EDITOR_THEMES.DEFAULT;
        },

        canUseAlerts: function() {
            return true;
        },

        getSearchAutoFormat: function() {
            return true;
        },

        getSearchLineNumbers: function() {
            return true;
        },

        getSearchAssistant: function() {
            return UserModel.SEARCH_ASSISTANT.COMPACT;
        },
        
        canUseAdvancedEditor: function() {
            return true;
        },

        canEditSearchScheduleWindow: function() {
            return true;
        },

        canEditSearchSchedulePriority: function() {
            return true;
        }
    });

});
