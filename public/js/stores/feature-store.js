var _ = require('underscore');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants').ActionTypes;

var CHANGE_EVENT = 'change';

// Private data structure representing all of the features
var _features = {};

var FeatureStore = assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    get: function(id) {
        return _features[id];
    },

    getAll: function() {
        return _features;
    }

});

/**
 * @param <array || object> - feature or array of features to add to store
 * @note - The reason this method isn't exposed is to force the use of the dispatcher
 *  to create new features
 */
function _addFeatures(rawFeatures) {
    var rawFeatures = _.flatten([rawFeatures]);

    rawFeatures.forEach(function(feature) {
        if (!_features[feature.id]) {
            _features[feature.id] = feature;
        }
    });
}

/**
 * Register a callback with the dispatcher to listen for relevant actions and update
 * this store appropriately.  The dispatcher returns a token that we store
 * on this store object so that other stores can reference the token in calls to `waitFor`
 */
FeatureStore.dispatchToken = Dispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {

        case ActionTypes.RECEIVE_RAW_CREATED_FEATURE:
        case ActionTypes.RECEIVE_RAW_FEATURES:
            _addFeatures(action.rawFeatures);
            FeatureStore.emitChange();
            break;

        case ActionTypes.CLICK_FEATURE:
            _features[action.featureId].selected = ! _features[action.featureId].selected;
            FeatureStore.emitChange();
        default:
        // do nothing
    }

});

module.exports = FeatureStore;