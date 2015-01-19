var reactor = require('../reactor');
var constants = require('../constants');

module.exports = {

    clickFeature: function(featureId) {
        reactor.dispatch(constants.ActionTypes.CLICK_FEATURE, featureId);
    },

    moveFeature: function(featureId, coords) {
        reactor.dispatch(constants.ActionTypes.FEATURE_MOVED, {featureId: featureId, coords: coords})
    }

};