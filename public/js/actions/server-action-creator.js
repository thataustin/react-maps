var Dispatcher = require('../dispatcher');
var Constants = require('../constants');

module.exports = {

    receiveAll: function(rawFeatures) {
        Dispatcher.handleServerAction({
            type: Constants.ActionTypes.RECEIVE_RAW_FEATURES,
            rawFeatures: rawFeatures
        });
    },

    receiveCreatedFeature: function(createdFeature) {
        Dispatcher.handleServerAction({
            type: Constants.ActionTypes.RECEIVE_RAW_CREATED_FEATURE,
            rawFeatures: createdFeature
        });
    }

};