var Dispatcher = require('../dispatcher');
var Constants = require('../constants');

module.exports = {

    clickFeature: function(featureId) {
        Dispatcher.handleViewAction({
            type: Constants.ActionTypes.CLICK_FEATURE,
            featureId: featureId
        });
    }

};