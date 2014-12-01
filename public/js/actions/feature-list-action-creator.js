var Dispatcher = require('../dispatcher');
var Constants = require('../constants');

module.exports = {

    clickFeature: function(featureId) {
        Dispatcher.handleViewAction({
            type: Constants.ActionTypes.CLICK_FEATURE,
            featureId: featureId
        });
    },

    moveFeature: function(featureId, coords) {
        Dispatcher.handleViewAction({
            type: Constants.ActionTypes.FEATURE_MOVED,
            featureId: featureId,
            coords: coords
        })
    }

};