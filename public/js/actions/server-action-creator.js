var reactor = require('../reactor');
var constants = require('../constants');

module.exports = {

    receiveAll: function(rawFeatures) {
        reactor.dispatch(constants.RECEIVE_RAW_FEATURES, rawFeatures);
    },

    receiveCreatedFeature: function(createdFeature) {
        reactor.dispatch(constants.RECEIVE_RAW_CREATED_FEATURE, createdFeature);
    }

};