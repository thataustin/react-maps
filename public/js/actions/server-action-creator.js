var Dispatcher = require('../dispatcher');
var Constants = require('../constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {

    receiveAll: function(rawFeatures) {
        Dispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_RAW_FEATURES,
            rawFeatures: rawFeatures
        });
    },

    receiveCreatedFeature: function(createdFeature) {
        Dispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_RAW_CREATED_FEATURE,
            rawFeatures: createdFeature
        });
    }

};